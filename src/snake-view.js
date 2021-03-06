import Board from './board';
const gameMusic = new Audio('src/Tetris.mp3');
const gameOverSound = new Audio('src/gameOverSound.wav');

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
        gameMusic.play();
        this.gamePlaying = window.setInterval(this.step.bind(this), 80);
      }
      break;
    case (13):
      location.reload();
      break;
    case (49):
      gameMusic.pause();
      break;
    case (50):
      gameMusic.play();
      break;
    default:
      break;
    }
  }

  step() {
    if (this.board.snake.move()) {
      window.clearInterval(this.gamePlaying);
      let score = this.board.score;

      gameMusic.pause();
      gameOverSound.play();

      setTimeout(function() {
        alert(`You Loser!! Your score is ${score}, 10 points per apple!`);
      }, 5000);
      
    } else {
      this.board.render();
    }
  }
}
