class Point {
    // if you provide an access modifier next to a construtor parameter its essentially doing two things under the hood.
    // 1) its declaring the class fields/attributes and their respective access modifier
    // 2) its assigning the this.attribute = attribute. 
    
        // constructor
        constructor(private x?: number, private y?: number) {
        }

        // properties
        getX = () => {return this.x};
        setX = x => {this.x = x}
    }
    
    let p1 = new Point(3,3);
    
    p1.draw();