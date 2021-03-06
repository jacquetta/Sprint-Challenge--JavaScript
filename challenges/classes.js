// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker1 {
    constructor(length, width, height){
        this.length = length;
        this.width = width;
        this.height = height;
}
    volume () {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
    }  
}

class CubeMaker extends CuboidMaker1 {
    constructor(formula){
        super(formula);
    }
    cubeVolume(){
        return this.length * this.length * this.length;
    }
    cubeSurfaceArea(){
        return (this.length * this.length) * 6;
}
}
// // 
// const cuboid = new CuboidMaker(4, 5, 5);

let cuboid1 = new CuboidMaker1 (4, 5, 5);
let cube = new CubeMaker(4);
// // Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid1.volume()); // 100
console.log(cuboid1.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
console.log(cube.cubeVolume());
console.log(cube.cubeSurfaceArea());