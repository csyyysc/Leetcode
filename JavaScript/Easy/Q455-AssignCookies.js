/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    s.sort((a, b) => a - b);
    g.sort((a, b) => a - b);

    let child = 0;
    for(const cookie of s) {
        if(cookie >= g[child]) child++;
    }
    return child;
};