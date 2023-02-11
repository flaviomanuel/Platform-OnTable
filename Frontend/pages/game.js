const createGame = () => {
  const game = {
    tokens: [],
    height: 300,
    width: 800,
    screen: {
      cols: 8,
      rows: 8,
      tileSize: 64
    }
  };
  return game;
}

const addToken = (game, token) => {
  game.tokens.push(token);
}


export { createGame, addToken }