/* eslint-disable */

export default class Gene {

    /** These three values should be overwritten in specific genes' declarations */

    static get name() {
        return '';
    }

    static get length() {
        return 8;
    }

    static get min() {
        return 0;
    }

    static get max() {
        return 25.6;
    }

    static get divider() {
        return 10;
    }

    /** Rest of the class */

    static fromBin(binString) {
        const value = parseInt(binString, 2);

        return new this(value);
    }

    constructor(value = 0) {
        this._value = Math.trunc(this.constructor.divider * value) / this.constructor.divider;

        this.min = this.constructor.min;
        this.max = this.constructor.max;

        this.name = this.constructor.name;
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
        if (this.max > (Math.pow(2, this.constructor.length) / this.constructor.divider)) {
            throw new Error("Invalid gene constraints");
        }

        console.log(this.value);

        if (isNaN(this._value)
            || this.value < this.min
            || this.value > this.max
        ) {
            throw new Error("Invalid value");
        }

        return this;
    }

    get value() {
        return this._value / this.constructor.divider;
    }

    set value(value) {
        this._value = Math.trunc(this.constructor.divider * value);
    }

    get length() {
        return this.constructor.length
    }

    get divider() {
        return this.constructor.divider
    }
}
