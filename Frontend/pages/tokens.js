const PlayerToken = (x, y, radius, image = null, color) => {
  const token = {
    x, y, radius, image, color,

    render: (context, tileSize) => {
      if (image == null) {
        context.beginPath();
        context.arc((x + 1 / 2) * tileSize, (y + 1 / 2) * tileSize, (radius / 2) * tileSize, 0, 2 * Math.PI);
        context.fillStyle = color;
        context.fill();
        context.stroke();
        return;
      }

      ctx.drawImage(
        this.image,
        this.x * tileSize,
        this.y * tileSize,
        tileSize, tileSize
      );

    }
  };
  return token;
}

const RectToken = (x, y, width, height, image = null, color) => {
  const token = {
    x, y, width, height, image, color,

    render: (context, tileSize) => {
      if (image == null) {
        context.fillStyle = color;
        context.fillRect(x * tileSize, y * tileSize, width * tileSize, height * tileSize);
        return;
      }
    }

  };
  return token;
}

const LineToken = (x, y, width, height, image = null, color) => {
  const token = {
    x, y, width, height, image, color,

    render: (context, tileSize) => {
      if (image == null) {
        context.fillStyle = color;
        context.fillRect(x * tileSize, y * tileSize, width * tileSize, height * tileSize);
        return;
      }
    },
    onDrag: () => {

    }

  };
  return token;
}

/*

  - Context Menu
  - Camera View
    -- Zoom
*/
export { PlayerToken, RectToken };