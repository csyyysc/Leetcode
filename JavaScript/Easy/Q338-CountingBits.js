/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const bits = [];

    for(let i = 0; i <= n; i++) {
      let num = i;
      let count = 0;

      while(num > 0) {
        if(num % 2 === 1) count++;
        num = Math.floor(num / 2);
      }
      bits.push(count);
    }
    return bits;
};

/**
 * @note Reference Method1
 * @param {number} n
 * @return {number[]}
 */
const countBits = (n) => {
    let bits = Array(n + 1).fill(0);
    let offset = 1;

    for(let i = 1; i <= n; i++) {
      if(offset * 2 === i) offset = i;
      bits[i] = 1 + bits[i - offset];
    }

    return bits;
};
