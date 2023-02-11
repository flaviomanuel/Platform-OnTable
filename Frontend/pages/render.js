const render = (game, context) => {
  context.clearRect(0, 0, game.width, game.height)
  renderBoard(game.screen, context)
  renderTokens(game, context)
}

const renderBoard = (screen, context) => {
  for (let c = 0; c < screen.cols; c++) {
    for (let r = 0; r < screen.rows; r++) {
      context.strokeRect(c * screen.tileSize, r * screen.tileSize, screen.tileSize, screen.tileSize);
    }
  }
};

const renderTokens = (game, context) => {
  console.log("Rendering Tokens");

  for (const token of game.tokens) {
    token.render(context, game.screen.tileSize)
  }
}

export default render;