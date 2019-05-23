import Genome from "../logic/Genome";
import Specimen from "./Specimen";

export default class Population {

    static get initialPopNum() {
        return 30;
    }

    constructor(world) {
        this.world = world;

        this.specimens = [];
        this.seedSpecimen(this.constructor.initialPopNum);
    }

    seedSpecimen(count) {
        for (let i = 0; i < count; i++) {
            this.specimens.push(new Specimen(
                Genome.random(),
                this.world.randomX(),
                this.world.randomY()
            ));
        }

        return this;
    }

    draw(sketch) {
        for (let specimen of this.specimens) {
            specimen.draw(sketch);
        }

        return this;
    }

    update() {
        this.specimens = this.specimens.filter(function (specimen) {
            return specimen.isAlive;
        });


        for (let specimen of this.specimens) {
            specimen
                .update()
                .sense(this.world.foods);
        }

        return this;
    }

}
