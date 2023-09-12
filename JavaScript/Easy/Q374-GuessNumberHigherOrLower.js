/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let l = 0, r = n - 1;

    while(l <= r) {
        let mid = Math.floor((l + r) / 2);
        let result = guess(mid);
        if(result === 0) return mid;
        else if (result === 1) l = mid + 1;
        else r = mid - 1;
    }
    return l;
};

const guessNumber = (right, left = 1) => {
    const mid = ((left + right) / 2) << 0;
    switch(guess(mid)) {
        case 0:
            return mid;
        case -1:
            return guessNumber(mid - 1, left);
        case 1:
            return guessNumber(right, mid + 1);
    }
}