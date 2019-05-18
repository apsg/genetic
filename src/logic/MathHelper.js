export function move(position, heading, speed) {
    let newPosition = {
        x: 0,
        y: 0,
    };

    newPosition.x = position.x + Math.cos(heading) * speed;
    newPosition.y = position.y + Math.sin(heading) * speed;

    return newPosition;
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

export function clipPosition(position, min, max) {
    return {
        x: clip(position.x, min, max),
        y: clip(position.y, min, max),
    }
}

export function hslToRgb(h, s, l) {
    var r, g, b;

    if (s == 0) {
        r = g = b = l; // achromatic
    } else {
        function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return [r * 255, g * 255, b * 255];
}
