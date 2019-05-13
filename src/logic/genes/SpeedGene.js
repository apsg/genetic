import Gene from '../Gene'

export default class SpeedGene extends Gene {

    static get name(){
        return 'speed';
    }

    static get length() {
        return 5;
    }

    static get min() {
        return 0;
    }

    static get max() {
        return 1;
    }

    static get divider(){
        return 10;
    }
}
