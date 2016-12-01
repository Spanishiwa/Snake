import {Coord} from './coord.js';

export default class Snake {
  constructor() {
    this.dir = "N";
    this.segments = [];
  }

  move() {
    for (let i = 0; i < this.segments.length; i += 1) {
      let x = this.segments[i].x;
      let y = this.segments[i].y;
      let movedCoord = new Coord(x, y);

      this.segments[i] = movedCoord;
    }
  }

  turn(dir) {

    this.dir = dir;
  }
}
