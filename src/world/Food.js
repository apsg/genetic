import {Position} from "../logic/MathHelper";

export default class Food {

    /**
     * @param {Number} x
     * @param {Number} y
     */
    constructor(x, y) {
        this.position = new Position(x, y);
        this.energy = 5;
        this.isEaten = false;
    }

    draw(sketch) {
        if(this.isEaten){
            sketch.fill(150,0,0);
        }else {
            sketch.fill(0, 150, 0);
        }
        sketch.noStroke();
        sketch.ellipse(this.position.x, this.position.y, 4, 4);
    }
}
