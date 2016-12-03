import Coord from './coord';

export default class Apple {
  constructor() {
    this.coord = this.randomCoords();
  }

  randomCoords() {
    let x = Math.floor(Math.random() * 20);
    let y = Math.floor(Math.random() * 20);

    return new Coord(x, y);
  }
}
