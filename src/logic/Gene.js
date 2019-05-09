/* eslint-disable */

export default class Gene {

    static get length() {
        return 8;
    }

    static get min() {
        return 0;
    }

    static get max() {
        return 256;
    }

    static fromBin(binString) {
        const value = parseInt(binString, 2);

        return new this(value);
    }

    constructor(value = 0) {
        this._value = value;

        this.min = this.constructor.min;
        this.max = this.constructor.max;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    toBin() {
        return (this._value >>> 0)
            .toString(2)
            .padStart(this.constructor.length, '0');
    }

    validate() {
        if (isNaN(this._value)
            || this._value < this.min
            || this._value > this.max
        ) {
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
