import SpeedGene from './genes/SpeedGene';
import FertilityGene from "./genes/FertilityGene";

export default class Genome {

    static fromBin(code, shouldValidate = true) {
        try {
            let genome = new this();
            genome.loadGenes(code);

            if (shouldValidate) {
                genome.validate();
            }

            return genome;
        } catch (e) {
            return null;
        }
    }

    constructor() {
        this.declarations = [
            FertilityGene,
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
        if (code.length !== this.length) {
            throw "invalid code length";
        }

        this.genes = [];

        for (let type of this.declarations) {
            let current = code.substr(0, type.length);
            code = code.substr(type.length);

            this.genes.push(type.fromBin(current));
        }

        return this;
    }

    validate() {
        for (let gene of this.genes) {
            gene.validate();
        }

        return this;
    }

    toBin() {
        return this.genes
            .map(gene => gene.toBin())
            .join('');
    }

    getFeature(name) {
        let value = this.genes.filter(gene => {
            return gene.name == name
        })[0].value;

        if (isNaN(value) || value == 'undefined') {
            return null;
        }

        return value;
    }

    /**
     * Convienience accessors. This really should be some kind of dynamic getter.
     */

    get speed() {
        return this.getFeature('speed');
    }

    get fertility() {
        return this.getFeature('fertility');
    }
}
