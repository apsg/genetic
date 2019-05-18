export default class Food {
    constructor(x, y) {
        this.position = {
            x: x,
            y: y,
        }
    }

    draw(sketch) {
        sketch.fill(0,150,0);
        sketch.noStroke();
        sketch.ellipse(this.position.x,this.position.y, 4,4);
    }
}
