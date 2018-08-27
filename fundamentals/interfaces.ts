let drawPoint = (x,y) => {
    //..
}


//should be...

interface Point {
    x: number,
    y: number,
    drawPointEvenBetter: () => void
}

let drawPointBetter = (point: Point) => {
    //..
}

let getDistance = (pointA: Point, pointB: Point) => {
    //..
}

