/**
 * @GreedyAlgorithm
 *      A greedy algorithm is an approach for solving a problme by selecting the best option available at the moment. 
 *      It does not worry if the current best result will bring the overall optimal result
 */

/**
/**
 * @description Reference Method1
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {

    for(let i = 0; i < flowerbed.length && n !== 0; i++) {
        if(flowerbed[i - 1] !== 1 & flowerbed[i] === 0 & flowerbed[i + 1] !== 1) {
            n--;
            i++;
        }
    }

    return !n;
};

/**
 * @description Reference Method2
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
    let count = 0;
    for(let i = 0; i < flowerbed.length; i = i + 2) {
        if(flowerbed[i] === 0) {
            if(i === flowerbed.lnegth - 1 || flowerbed[i + 1] === 0) {
                count++;
            } else {
                i++;
            }
        }
    }

    return count >= n;
}
