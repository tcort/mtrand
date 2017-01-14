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
    Here are some random numbers: <ul id="results"></ul>

    <script src="mtrand.js"></script>
    <script>
        const seed = 0xC0FFEE;
        const rng = mtrand(seed);

        for (let i = 0; i < 10; i++) {
            const li = document.createElement("LI");
            const val = document.createTextNode(rng.next().value);
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
