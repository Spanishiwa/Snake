import {Snake} from './snake.js';

export default class Board {
  constructor() {
    this.snake = new Snake();
    this.apples = [];
  }
}
