import Snake from './snake';

export default class Board {
  constructor() {
    this.snake = new Snake();
    this.apples = [];
    this.dimensions = [20, 20];

    this.render();
  }

  render() {
    let board = document.getElementById("board");
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

}
