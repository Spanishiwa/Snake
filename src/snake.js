import Coord from './coord';

export default class Snake {
  constructor() {
    this.dir = "N";
    this.segments = [];

    this.populateSegments();
  }

  populateSegments() {
    let snakeSegs = [new Coord(10, 10), new Coord(11, 10),
      new Coord(12, 10), new Coord(13, 10), new Coord(14, 10)];

    if (this.segments.length === 0) {
      this.segments.push.apply(this.segments, snakeSegs);
    }
  }

  move() {
    let dirToMove = this.dirToCoord(this.dir).plus(this.segments[0]);

    this.segments.unshift(dirToMove);
    this.segments.splice(-1, 1);

    let snakeBite = this.segments.some( (segment, i) => {
      return (i !== 0 && segment.equals(this.segments[0]));
    });

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
    else if (this.dirToCoord(newDir).isOpposite(this.movingDir())) {
      return;
    }
    else {
      this.dir = newDir;
    }
  }

  movingDir() {
    const head = this.segments[0];
    const body = this.segments[1];
    const x = (head.x - body.x);
    const y = (head.y - body.y);

    return new Coord(x, y);
  }

  grow() {
    let lenToGrow = Math.floor(1);
    let segsToGrow = this.segments.slice(this.segments.length - lenToGrow);

    segsToGrow.forEach(seg => {
      let newSeg = new Coord(seg.x, seg.y);
      this.segments.push(newSeg);
    });
  }
}
