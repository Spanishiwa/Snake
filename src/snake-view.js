import Board from './board';

export default class View {
  constructor() {
    this.board = new Board();

    document.addEventListener("keydown", this.handleKeyEvent.bind(this));

    this.gamePlaying = false;
  }

  handleKeyEvent(event) {

    let inputDir = event.keyCode;

    switch (inputDir) {
    case (37):
      this.board.snake.turn("W");
      break;
    case (38):
      this.board.snake.turn("N");
      break;
    case (39):
      this.board.snake.turn("E");
      break;
    case (40):
      this.board.snake.turn("S");
      break;
    case (32):
      if (!this.gamePlaying) {
        this.gamePlaying = window.setInterval(this.step.bind(this), 80);
      }
      break;
    case (13):
      location.reload();
    default:
      break;
    }
  }

  step() {
    if (this.board.snake.move()) {
      window.clearInterval(this.gamePlaying);
      let score = this.board.score;
      alert(`You Loser!! Your score is ${score}, 10 points per apple!`);
    } else {
      this.board.render();
    }
  }
}
