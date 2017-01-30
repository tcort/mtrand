'use strict';

(function (window) {
    'use strict';

    function uint32(n) { // "cast" to unsigned 32-bit integer
        return (new Uint32Array([n]))[0];
    }

    function *_mtrand(seed) {

        // algorithm parameters
        const W =  32;
        const N = 624;
        const M = 397;
        const F = 1812433253;
        const U = 11;
        const D = 0xFFFFFFFF;
        const S = 7;
        const B = 0x9D2C5680;
        const T = 15;
        const C = 0xEFC60000;
        const L = 18;
        const R = 31;
        const HI = (1 << R);
        const LO = (1 << R) - 1;
        const A = 0x9908B0DF;

        // state
        let index;
        const mt = [];

        // initialization
        mt[0] = uint32(seed);
        for (index = 1; index < N; index++) {
            let x = mt[index - 1] ^ (mt[index - 1] >>> 30);
            mt[index] = uint32(
               ((((x & 0xffff0000) >>> 16) * F) << 16) +
               ((((x & 0x0000ffff) >>>  0) * F) <<  0) +
               index
            );
        }

        // main loop
        do {
            // do the twist
            for (index = 0; index < N; index++) {
                const x = uint32((mt[index] & HI) + (mt[(index + 1) % N] & LO));
                mt[index] = (mt[(index + M) % N] ^ x >>> 1);
                mt[index] = uint32((x & 1) ? (mt[index] ^ A) : mt[index]);
            }

            // yield some results
            for (index = 0; index < N; index++) {
                let y = mt[index];
                y ^= (y >>> U);
                y ^= (y << S) & B;
                y ^= (y << T) & C;
                y ^= (y >>> L);
                yield uint32(y);
            }
        } while (true);

    }

    function *_mtrand_uniform(seed, upper_bound) {

        const MTRAND_MAX = 0xFFFFFFFF;
        const limit = MTRAND_MAX - (((MTRAND_MAX % upper_bound) + 1) % upper_bound);

        const rng = mtrand(seed);
        do {
            const n = rng.next().value;
            if (n > limit) {
                continue;
            }
            yield n % upper_bound;
        } while (true);
    }

    function mtrand(seed, upper_bound) {
        if (arguments.length === 2) {
            return _mtrand_uniform(seed, upper_bound);
        } else {
            return _mtrand(seed);
        }
    }

    if (typeof module === "object" && module && typeof module.exports === "object") {
        module.exports = mtrand;
    } else {
        window.mtrand = mtrand;
        if (typeof define === "function" && define.amd) {
            define("mtrand", [], function () { return mtrand; });
        }
    }
})(this);
