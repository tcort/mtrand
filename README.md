# mtrand

Implementation of the MT19937 Random Number Generator Algorithm.

## Installation

    npm install --save mtrand

## API

### **function* mtrand(seed)**

Parameters:

* `seed` 32-bit unsigned integer value to use as the seed.

Return value:

* [Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)

### **function* mtrand(seed, upper_bound)**

Parameters:

* `seed` 32-bit unsigned integer value to use as the seed.
* `upper_bound` all results will be less than this number.

Return value:

* [Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)

## Examples

`node.js`:
```
'use strict';

const mtrand = require('mtrand');

const seed = 0xC0FFEE;
const rng = mtrand(seed);

console.log('Here are some random numbers:\n');
for (let i = 0; i < 10; i++) {
    console.log(`* ${rng.next().value}`);
}
```

`browser`:
```
<!DOCTYPE html>
<html>
<head>
    <meta charset=utf-8 />
    <title>mtrand example</title>
</head>
<body>
    Here are some random dice rolls: <ul id="results"></ul>

    <script src="mtrand.js"></script>
    <script>
        const seed = 0xC0FFEE;
        const rng = mtrand(seed, 6);
        const faces = [ '\u2680', '\u2681', '\u2682', '\u2683', '\u2684', '\u2685' ];
        for (let i = 0; i < 10; i++) {
            const li = document.createElement("LI");
            const val = document.createTextNode(faces[rng.next().value]);
            li.appendChild(val);
            document.getElementById("results").appendChild(li);
        }
    </script>
</body>
</html>
```

## Testing

    npm test

## License

See [LICENSE.md](https://github.com/tcort/mtrand/blob/master/LICENSE.md)
