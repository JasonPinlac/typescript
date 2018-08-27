var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('drawing at X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        console.log('getting distance from ' + this);
    };
    return Point;
}());
var p1 = new Point(3, 3);
console.log(p1);
p1.draw();
