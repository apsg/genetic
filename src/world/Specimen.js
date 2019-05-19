import {angle, clip, clipPosition, distance, hslToRgb, move, Position, round} from '../logic/MathHelper';

export default class Specimen {
    /**
     * @param {Genome} genome
     * @param {Number} posX
     * @param {Number} posY
     */
    constructor(genome, posX, posY) {
        this.position = new Position(posX, posY);
        this.genome = genome;

        this.energy = 50;
        this.heading = 360 * Math.random();
    }

    draw(sketch) {
        sketch.fill(...this.color);
        sketch.ellipse(this.position.x, this.position.y, 10, 10);

        sketch.colorMode(sketch.RGB);

        return this;
    }

    update() {
        if (!this.isAlive) {
            return this;
        }

        this.energy = clip(this.energy - 0.2, 0, 100);
        this.position = clipPosition(move(this.position, this.heading, this.speed), 0, 800);
        this.heading = round(this.heading + 2 * Math.random() - 1, 0, 360);

        return this;
    }

    /**
     * @param {Food} food
     * @return {Specimen}
     */
    eat(food) {
        if (!food.isEaten) {
            this.energy += food.energy;
            food.isEaten = true;
        }

        return this;
    }

    sense(foods) {
        if (!this.isAlive) {
            return this;
        }

        let closest = null;
        let closestDist = 9999;

        for (let food of foods) {

            if (food.isEaten) {
                continue;
            }

            const dist = distance(this.position, food.position);

            if (dist < 10) {
                this.eat(food);
                continue;
            }

            if (dist < this.senseRange) {
                if (dist < closestDist) {
                    closest = food;
                    closestDist = dist;
                }
            }
        }

        if (closest !== null) {
            this.heading = angle(this.position, closest.position);
        }

        return this;
    }

    get speed() {
        return this.genome.getFeature('speed');
    }

    get fertility() {
        return this.genome.getFeature('fertility');
    }

    get senseRange() {
        return this.genome.getFeature('sense');
    }

    get color() {
        return hslToRgb(this.energy / 100, 1, 0.5);
    }

    get isAlive() {
        return this.energy > 0;
    }
}
