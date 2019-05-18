import {clip, clipPosition, hslToRgb, move, round} from './MathHelper';

export default class Specimen {
    constructor(genome, posX, posY) {
        this.position = {
            x: posX,
            y: posY
        };

        this.genome = genome;

        this.energy = 50;
        this.heading = 360 * Math.random();
    }

    draw(sketch) {
        sketch.fill(...this.color);
        sketch.ellipse(this.position.x, this.position.y, 10, 10);

        sketch.colorMode(sketch.RGB);
    }

    update() {
        this.energy = clip(this.energy - 1, 0, 100);
        this.position = clipPosition(move(this.position, this.heading, this.speed), 0, 800);
        this.heading = round(this.heading + 2 * Math.random() - 1, 0, 360);
    }

    get speed() {
        return this.genome.getFeature('speed');
    }

    get fertility() {
        return this.genome.getFeature('fertility');
    }

    get color() {
        return hslToRgb(this.energy / 100, 1, 0.5);
    }
}
