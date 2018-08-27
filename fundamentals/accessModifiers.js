var Point = /** @class */ (function () {
    // constructor
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    // methods
    Point.prototype.draw = function () {
        console.log('drawing at X: ' + this.x + ', Y: ' + this.y);
    };
    return Point;
}());
var p1 = new Point(3, 3);
p1.draw();
