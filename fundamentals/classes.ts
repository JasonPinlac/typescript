class Point {
    // fields
    x: number;
    y: number;

    // constructor
    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    // methods
    draw() {
        console.log('drawing at X: ' + this.x + ', Y: ' + this.y);
    }

    getDistance(another: Point) {
        console.log('getting distance from ' + this);
    }
}

let p1 =  new Point(3,3);
console.log(p1);
p1.draw();