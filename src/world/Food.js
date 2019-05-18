import {Position} from "../logic/MathHelper";

export default class Food {
    /**
     * @param {Number} x
     * @param {Number} y
     */
    constructor(x, y) {
        this.position = new Position(x, y);
    }

    draw(sketch) {
        sketch.fill(0, 150, 0);
        sketch.noStroke();
        sketch.ellipse(this.position.x, this.position.y, 4, 4);
    }
}
