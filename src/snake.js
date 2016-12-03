import Coord from './coord';

export default class Snake {
  constructor() {
    this.dir = "N";
    this.segments = [new Coord(10, 10), new Coord(11, 10), new Coord(12, 10)];
  }

  move() {
    for (let i = 0; i < this.segments.length; i += 1) {
      let x = this.segments[i].x;
      let y = this.segments[i].y;
      let dirToMove = this.dirToCoord(this.dir);

      this.segments[i] = this.segments[i].plus(dirToMove);
    }
    return this.segments.some(this.outOfBounds);
  }

  outOfBounds() {
    let head = this.segments[0];

    if (head.x < 0 || head.x > 19) {
      return true;
    }
    else if (head.y < 0 || head.y > 19) {
      return true;
    }
    else {
      return false;
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
    default:
      return;
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
