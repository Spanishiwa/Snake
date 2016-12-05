import Snake from './snake';
import Apple from './apple';
import Coord from './coord';

export default class Board {
  constructor() {
    this.snake = new Snake();
    this.apples = [];
    this.dimensions = [20, 20];
    this.score = 0;

    this.render();
  }

  render() {
    let board = document.getElementById("board");
    board.innerHTML = "";

    for (let i = 0; i < this.dimensions[0]; i += 1) {
      let row = document.createElement("LI");
      row.id = `row${i}`;
      row.className ='row';
      board.appendChild(row);
      for (let j = 0; j < this.dimensions[1]; j += 1) {
        let cell = document.createElement("div");
        cell.id = `row${i}col${j}`;
        cell.className = 'cell empty';
        row.appendChild(cell);
      }
    }

    this.populateApples();
    this.convertApples();
    this.insertSnake();
  }

  insertSnake() {
    let snakeCoords = this.snake.segments;

    for (let i = 0; i < snakeCoords.length; i +=1 ) {
      let x = snakeCoords[i].x;
      let y = snakeCoords[i].y;

      let snakeCell = document.getElementById(`row${x}col${y}`);
      snakeCell.className = 'cell snake';
    }
  }

  uniqueApple() {
    let snakeSegs = this.snake.segments;
    let apple = new Apple();
    let invalid = snakeSegs.some( snakeSeg => apple.coord.equals(snakeSeg));

    while (invalid) {
      apple = new Apple();
    }

    return apple;
  }
  populateApples() {
    if (this.apples.length === 0) {
      this.apples.push(this.uniqueApple());
    }

    for (let i = 0; i < this.apples.length; i += 1) {
      let x = this.apples[i].coord.x;
      let y = this.apples[i].coord.y;

      let appleCell = document.getElementById(`row${x}col${y}`);
      appleCell.className = 'cell apple';
    }
  }

  convertApples() {
    let bittenApples = this.apples.filter(apple => {
      return this.snake.segments.some(segment => {
        return apple.coord.equals(segment);
      });
    });

    for (let i = 0; i < bittenApples.length; i += 1) {
      let x = bittenApples[i].coord.x;
      let y = bittenApples[i].coord.y;

      let bittenAppleCell = document.getElementById(`row${x}col${y}`);
      bittenAppleCell.className = 'cell snake';

      this.removeApple(bittenApples[i]);
      this.snake.grow();
      this.incrementScore();
    }
  }

  removeApple(bittenApple) {
    for (let i = 0; i < this.apples.length; i += 1) {
      if (this.apples[i].coord.equals(bittenApple.coord)) {
        this.apples.splice(i, 1);
      }
    }
  }

  incrementScore() {
    this.score += 10;
  }

}
