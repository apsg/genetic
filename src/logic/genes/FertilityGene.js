import Gene from "../Gene";

/**
 * The chance to reproduce
 */
export default class FertilityGene extends Gene {

    static get name() {
        return 'fertility';
    }

    static get length() {
        return 7;
    }

    static get min() {
        return 0;
    }

    static get max() {
        return 1;
    }

    static get divider() {
        return 100;
    }
}
