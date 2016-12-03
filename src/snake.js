import Coord from './coord';

export default class Snake {
  constructor() {
    this.dir = "N";
    this.segments = [new Coord(10, 10), new Coord(11, 10), new Coord(12, 10), new Coord(13, 10), new Coord(14, 10)];
  }

  move() {
    let dirToMove = this.dirToCoord(this.dir).plus(this.segments[0]);
    let snakeBite = this.segments.some(segment => segment.equals(dirToMove));

    this.segments.unshift(dirToMove);
    this.segments.splice(-1, 1);

    return (snakeBite || this.segments.some(this.outOfBounds.bind(this)));
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
