import Gene from './Gene'

export default class SpeedGene extends Gene {
    static get length() {
        return 2;
    }

    static get min() {
        return 0;
    }

    static get max() {
        return 3;
    }
}
