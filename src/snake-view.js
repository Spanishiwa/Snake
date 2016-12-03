import Board from './board';

export default class View {
  constructor(display) {
    this.display = display;
    this.board = new Board();

    document.addEventListener("keypress", this.handleKeyEvent);

    window.setInterval(this.step, 500);
  }

  handleKeyEvent(event) {
    let inputDir = event.keyCode;

    switch (inputDir) {
    case (37):
      return this.board.snake.turn("W");
    case (38):
      return this.board.snake.turn("N");
    case (39):
      return this.board.snake.turn("E");
    case (40):
      return this.board.snake.turn("S");
    default:
      return;
    }
  }

  step() {
    this.board.snake.move();
  }
}
