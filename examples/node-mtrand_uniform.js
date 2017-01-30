'use strict';

const mtrand = require('../mtrand');

const seed = 0xC0FFEE;
const rng = mtrand(seed, 6);

console.log('Here are some random dice rolls:\n');
for (let i = 0; i < 10; i++) {
    console.log(`* ${rng.next().value + 1}`);
}
