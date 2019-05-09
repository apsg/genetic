export default class Gene {

    static get length() {
        return 8;
    }

    constructor(value = 0) {
        this._value = value;

        this.min = 0;
        this.max = Math.pow(2, this.constructor.length)
    }

    setRange() {

    }

    toBin() {
        return (this._value >>> 0).toString(2).padStart(this.constructor.length, '0');
    }

    fromBin(binString) {
        this._value = parseInt(binString, 2);

        return this;
    }

    validate() {
        if (this._value < this.min || this._value > this.max) {
            throw "Invalid value";
        }

        return this;
    }

    get value() {
        return this._value;
    }

    set value(v) {
        return this._value = v;
    }
}
