import Genome from "../logic/Genome";
import Specimen from "./Specimen";
import {distance} from "../logic/MathHelper";
import Reproduction from "../logic/Reproduction";

export default class Population {

    static get initialPopNum() {
        return 50;
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

    reproduce() {
        let children = [];

        for (let i = 1; i < this.specimens.length; i++) {
            for (let j = i + 1; j < this.specimens.length; j++) {
                let dist = distance(this.specimens[i].position, this.specimens[j].position);

                if (dist < 10) {
                    const fertilityChance = this.specimens[i].fertility * this.specimens[j].fertility;
                    let chance = fertilityChance;

                    while (Math.random() < chance) {

                        if (!this.specimens[i].canReproduce || !this.specimens[j].canReproduce) {
                            break;
                        }

                        let code = Reproduction.cross(this.specimens[i].genome, this.specimens[j].genome);

                        code = Reproduction.mutate(code);

                        if (code.length === this.specimens[i].genome.length) {
                            children.push(new Specimen(
                                Genome.fromBin(code),
                                this.world.randomX(),
                                this.world.randomY()
                            ));

                            this.specimens[i].reproduced();
                            this.specimens[j].reproduced();
                        }
                        chance *= fertilityChance;
                    }
                }
            }
        }

        for (let specimen of children) {
            this.specimens.push(specimen);
        }

        return this;
    }

    get count() {
        return this.specimens.length;
    }
}
