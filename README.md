# JavaScript.Random

> A randomizer class with floating-point precision and range support.

[![NPM](https://nodei.co/npm/js-random.png)](https://nodei.co/npm/js-random/)

**JavaScript.Random** exposes a `Random` class with floating-point precision. It is useful for randomize numbers in a specified range.

```javascript
var random = new Random(2);
var number = random.next(10, 2);
console.log(number); // prints a random number between 2 and 10, with 0 until 2 decimal places
```

## How to use?

### Requiring the module

```javascript
var Random = require('js-random').Random;
```

### Creating an instance

A randomizer is an instance of `Random`.

```javascript
var randomizer = new Random([precision]);
```

The constructor requires one argument:

- [Number] `precision`: The number of decimal places to randomize. Defaults to `0`.

### Randomizing a number

```javascript
var number = random.next(max, [min]);
```

###### Arguments

- [Number] `max`: the maximum number in the range (inclusive).
- [Number] `min`: the minimum number in the range (inclusive). Defaults to `0`.

###### Returns
- [Number] A randomized number in the specified range.

## Support

[Open an issue](https://github.com/ggondim/JavaScript.Random/issues/new) if you are having problems with this project.

##### Why the version still is 0.x.x?

Despite this module was used in many projects, it was only used by his author. **It not means that it is unstable or was not tested**, but it means that it was tested by a single person, which puts it to a *beta* state.

Help us to move out from v0 and *[tell us you are using this project](mailto:gustavospgondim@gmail.com)*. When we reach 10 dependents we will move to v1.

## Contributing

Feel free to [fork this project](https://github.com/ggondim/JavaScript.Random#fork-destination-box) and contribute to make it better.

## License

This project is licensed under the *[GNU AGPLv3 License](https://github.com/ggondim/JavaScript.Random/blob/master/LICENSE)*.

```
Copyright © 2016 Gustavo Gondim (https://github.com/ggondim)
```
