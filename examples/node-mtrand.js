'use strict';

const mtrand = require('../mtrand');

const seed = 0xC0FFEE;
const rng = mtrand(seed);

console.log('Here are some random numbers:\n');
for (let i = 0; i < 10; i++) {
    console.log(`* ${rng.next().value}`);
}
