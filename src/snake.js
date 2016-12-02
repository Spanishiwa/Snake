import Coord from './coord.js';

export default class Snake {
  constructor() {
    this.dir = "N";
    this.segments = [];
  }

  move() {
    for (let i = 0; i < this.segments.length; i += 1) {
      let x = this.segments[i].x;
      let y = this.segments[i].y;
      let dirToMove = this.dirToCoord(this.dir);

      this.segments[i] = this.segments[i].plus(dirToMove);
    }
  }

  dirToCoord(dir) {
    switch (dir) {
    case "N":
      return new Coord(-1, 0);
    case "S":
      return new Coord(1, 0);
    case "E":
      return new Coord(0, 1);
    case "W":
      return new Coord(0, -1);
    }
  }

  turn(newDir) {
    if (this.dirToCoord(newDir).isOpposite(this.dirToCoord(this.dir))) {
      return;
    }
    else {
      this.dir = newDir;
    }

  }
}
