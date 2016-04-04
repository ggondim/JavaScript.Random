function Random(precision) {
  this.precision == precision || 0;
}

Random.prototype.next = function (max, opt_min) {
  if ((max || null) === null) {
    throw "Um valor máximo deve ser especificado.";
  }
  max = Number(max) === max && max % 1 !== 0 ? parseFloat(max) : parseInt(max);
  var min = opt_min || 0;
  var size = max.toString().length;
  var random = parseFloat((Math.random() * Math.pow(10, size)).toFixed(this.precision));
  if (random > max) {
    if (size > 1) {
      random = parseFloat((Math.random() * Math.pow(10, size - 1)).toFixed(this.precision));
    } else {
      while (random > max) {
        random = parseFloat(Math.random().toFixed(this.precision));
      }
    }
  }
  if (random < min) {
    random = min + random;
  }
  return random;
}
