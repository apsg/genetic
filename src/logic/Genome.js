import Gene from './Gene';
import SpeedGene from './SpeedGene';

export default class Genome {

    constructor() {
        this.declarations = [
            Gene,
            SpeedGene
        ];

        this.genes = [];

        for (let type of this.declarations) {
            this.genes.push(new type(0));
        }

        this.length = this.genes.reduce(function (partial_sum, gene) {
            return partial_sum + gene.length
        }, 0);
    }

    loadGenes(code) {
        if (code.length != this.length) {
            throw "invalid code length";
        }
    }

    
}
