/**
 * @param {Position} position
 * @param {Number} heading
 * @param {Number} speed
 * @returns {Position}
 */
export function move(position, heading, speed) {
    let x = position.x + Math.cos(heading) * speed;
    let y = position.y + Math.sin(heading) * speed;

    return new Position(x, y);
}

export function round(value, min, max) {
    if (value < min) {
        return round(max - (min - value), min, max);
    }

    if (value > max) {
        return round(min + (value - max), min, max);
    }

    return value;
}

export function clip(value, min, max) {
    if (value < min)
        return min;

    if (value > max)
        return max;

    return value;
}

/**
 *
 * @param {Position} position
 * @param min
 * @param max
 * @returns {Position}
 */
export function clipPosition(position, min, max) {
    return new Position(
        clip(position.x, min, max),
        clip(position.y, min, max)
    );
}

function hue2rgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}

export function hslToRgb(h, s, l) {
    var r, g, b;

    if (s === 0) {
        r = g = b = l; // achromatic
    } else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return [r * 255, g * 255, b * 255];
}

export class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

/**
 * @param {Position} pos1
 * @param {Position} pos2
 * @return {number}
 */
export function distance(pos1, pos2) {
    return Math.sqrt(Math.pow(pos2.x - pos1.x, 2) + Math.pow(pos2.y - pos1.y, 2));
}

/**
 * @param {Position} fromPoint
 * @param {Position} toPoint
 * @return {number}
 */
export function angle(fromPoint, toPoint) {
    let radians = Math.atan2(toPoint.y - fromPoint.y, toPoint.x - fromPoint.x);

    return radians * Math.PI / 180;
}
