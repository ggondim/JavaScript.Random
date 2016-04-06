function Random(precision) {
    this.precision = precision || 0;
}

Random.prototype.next = function(max, opt_min) {
    if ((max || null) === null) {
        throw new Error("A maximum value must be specified.");
    }
    max = Number(max) === max && max % 1 !== 0 ? parseFloat(max) : parseInt(max);
    var min = opt_min || 0;
    min = Number(min) === min && min % 1 !== 0 ? parseFloat(min) : parseInt(min);

    if (max <= min) {
        return min;
    };

    var size = max.toString().split('.')[0].length;
    if (max < 1) {
        size = -1;
    }
    var random = parseFloat((Math.random() * Math.pow(10, size)).toFixed(this.precision));
    while (random > max || random < min) {
        random = parseFloat((Math.random() * Math.pow(10, size)).toFixed(this.precision));
    }
    return random;
}

exports.module = Random;
