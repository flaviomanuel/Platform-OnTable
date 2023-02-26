const createGame = () => {
  const game = {
    tokens: [],
    height: 100,
    width: 100,
    screen: {
      cols: 10,
      rows: 10,
      tileSize: 64
    }
  };
  return game;
}

const addToken = (game, token) => {
  game.tokens.push(token);
}


export { createGame, addToken }