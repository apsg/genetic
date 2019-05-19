import Food from "./Food";

export default class World {

    static get desiredFoodCount() {
        return 100;
    }

    size = {
        x: 800,
        y: 800,
    };

    foods = [];

    constructor() {
        this.seedFood(this.constructor.desiredFoodCount);
    }

    seedFood(count) {
        for (let i = 0; i < count; i++) {
            this.foods.push(new Food(this.randomX(), this.randomY()));
        }

        return this;
    }

    grow(count) {
        this.foods = this.foods.filter(food => !food.isEaten);

        for (let i = 0; i < count; i++) {

            if (Math.random() < this.probability()) {
                this.seedFood(1);
            }
        }

        return this;
    }

    draw(sketch) {
        for (let food of this.foods) {
            food.draw(sketch);
        }

        return this;
    }

    randomX() {
        return Math.random() * this.size.x;
    }

    randomY() {
        return Math.random() * this.size.y;
    }

    probability() {
        return -0.000526147 + 108.1887 * Math.exp(-0.07769103 * this.foods.length);
    }
}
