class Tetromino {
  constructor(shape, context, isPlayContext, scale) {
    this.context = context;
    this.isPlayContext = isPlayContext;
    this.scale = scale;
    this.tetromino = JSON.parse(JSON.stringify(shape));
    this.shape = this.tetromino.matrix;
    this.color = this.tetromino.color;
    this.position = this.tetromino.position;
  }

  draw = () => {
    this.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value) {
          this.context.fillStyle = this.color;
          if (this.isPlayContext) {
            this.context.fillRect(
              (x + this.position.x) * this.scale,
              (y + this.position.y) * this.scale,
              this.scale,
              this.scale
            );
          } else {
            this.context.fillRect(x * this.scale, y * this.scale, this.scale, this.scale);
          }
        }
      });
    });
  };

  getPosition = () => this.position;

  setPosition = x => {
    this.position.x += x;
  };

  moveDown = () => {
    this.position.y += 1;
  };

  moveLeft = () => {
    this.position.x -= 1;
  };

  moveRight = () => {
    this.position.x += 1;
  };

  moveUp = () => {
    this.position.y -= 1;
  };

  rotateLeft = () => {
    for (let y = 0; y < this.shape.length; ++y) {
      for (let x = 0; x < y; ++x) {
        [this.shape[x][y], this.shape[y][x]] = [this.shape[y][x], this.shape[x][y]];
      }
    }
    this.shape.reverse();
  };

  rotateRight = () => {
    for (let y = 0; y < this.shape.length; ++y) {
      for (let x = 0; x < y; ++x) {
        [this.shape[x][y], this.shape[y][x]] = [this.shape[y][x], this.shape[x][y]];
      }
    }
    this.shape.forEach(row => row.reverse());
  };
}

export default Tetromino;
