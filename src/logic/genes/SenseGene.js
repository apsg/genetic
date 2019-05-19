import Gene from "../Gene";

export default class SenseGene extends Gene{
    static get name(){
        return 'sense';
    }

    static get length() {
        return 6;
    }

    static get min() {
        return 10;
    }

    static get max() {
        return 50;
    }

    static get divider(){
        return 1;
    }
}
