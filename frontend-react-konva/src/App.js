import	{useEffect, useState} from 'react';
import { Layer, Stage, Rect, Group } from "react-konva";
import './App.css'


function App() {
  
  const [game] = useState({
    tokens: [],
    height:  200 ,
    width:  200,
    screen: {
      cols: 200,
      rows: 200,
      tileSize: 32
    }
  });

  

  const [tileMap, setTileMap] = useState([]);
  const [tokens, setTokens] = useState([]);


  const handleAddToken = (event) => {

      const tempTokenArray = []

      const lastValue = tokens[tokens.length - 1]
      const firstValue = tokens[0];
    console.log("lastValue: ", lastValue)


    const xy = lastValue  ?
     { 
       x: (lastValue[0].props.x === ( (game.screen.rows - 1) * game.screen.tileSize)) ? firstValue[0].props.x : lastValue[0].props.x + game.screen.tileSize  ,
       y: (lastValue[0].props.x === ((game.screen.rows - 1) * game.screen.tileSize)) ? lastValue[0].props.y + game.screen.tileSize : lastValue[0].props.y
    } 
     : {
       x: 0,
       y: 0
      }

      tempTokenArray.push(
      <Rect 
        x={xy.x}
        y={xy.y} 
        width={game.screen.tileSize}
        height={game.screen.tileSize}
        stroke="black"
        fill="red"
        draggable={true}
        onDragMove={() => document.body.style.cursor = 'pointer'}
        onMouseOver={() => document.body.style.cursor = 'pointer'}
        onMouseOut={() => document.body.style.cursor = 'default'}
        onDragStart={(event) => event.currentTarget.moveToTop()}
        onDblClick={(event) => event.currentTarget.destroy()}
        />)

    setTokens(oldTokens => [...oldTokens, tempTokenArray]);
    

  }


  useEffect(() => {
    const array = [];

    for (let c = 0; c < game.screen.cols; c++) {
      for (let r = 0; r < game.screen.rows; r++) {

        // array.push(<Rect 
        //             x={game.screen.tileSize * c}
        //             y={game.screen.tileSize * r}
        //             width={game.screen.tileSize}
        //             height={game.screen.tileSize}
        //             stroke="black"
        //   /> )

        array.push({ x: game.screen.tileSize * c, y: game.screen.tileSize * r})
      }
    }

  

    setTileMap(array);

    console.log("Fim!")
  }, []) 
 
// console.log(tileMap)
  return (

    <>
    <button onClick={event => handleAddToken(event)}>
      Adicionar token
    </button>
        <Stage draggable={true} width={game.width} height={game.height}>

        
            {/* {tileMap.tiles.map((tile) => {
              <div key={tile.id}>
              { tile.reactElement}
              </div>
            })} */}
    <Layer>
           {tileMap.map((tile) => <Rect 
                    x={tile.x}
                    y={tile.y}
                    width={game.screen.tileSize}
                    height={game.screen.tileSize}
                    stroke="black"
          />)}
           {tokens}
    </Layer>


      </Stage>
        </>
  );
}

export default App;
