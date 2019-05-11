import Gene from '../Gene'

export default class SpeedGene extends Gene {

    static get name(){
        return 'speed';
    }

    static get length() {
        return 2;
    }

    static get min() {
        return 0;
    }

    static get max() {
        return 0.3;
    }

    static get divider(){
        return 10;
    }
}
