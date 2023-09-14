/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(h) {
    let area = 0, i = 0, j = h.length - 1;

    while(i < j) {
        area = Math.max(area, Math.min(h[i], h[j]) * (j - i)) 
        h[i] <= h[j] ? i++ : j--;
    }
    return area;
};