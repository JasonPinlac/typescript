class Point {
    // fields
    private x: number;
    private y: number;

    // constructor
    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    // methods
    draw() {
        console.log('drawing at X: ' + this.x + ', Y: ' + this.y);
    }
}

let p1 = new Point(3,3);

p1.draw();