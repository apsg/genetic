import Gene from "../Gene";

export default class SenseGene extends Gene{
    static get name(){
        return 'sense';
    }

    static get length() {
        return 5;
    }

    static get min() {
        return 0;
    }

    static get max() {
        return 20;
    }

    static get divider(){
        return 1;
    }
}
