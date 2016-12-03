import Board from './board';

export default class View {
  constructor() {
    this.board = new Board();

    document.addEventListener("keydown", this.handleKeyEvent.bind(this));

    this.gamePlaying = window.setInterval(this.step.bind(this), 250);
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
    if (this.board.snake.move()) {
      window.clearInterval(this.gamePlaying);
      alert("You Loser!!");
    } else {
    this.board.render();
    }
  }
}
