'use strict';

const expect = require('expect.js');
const mtrand = require('../mtrand');

describe('mtrand', function () {

    it('should have the same output as the reference implementation for the same seed', function () {
        const output = [];
        const rng = mtrand(0xC0FFEE);
        for (let i = 0; i < 1000; i++) {
            output.push(rng.next().value);
        }
        expect(output).to.eql(require('./expected.output.js'));
    });

    it('should accept an upper_bound', function () {
        const rng = mtrand(0xC0FFEE, 6);
        for (let i = 0; i < 1000; i++) {
            expect(rng.next().value).to.be.lessThan(6);
        }
    });
});
