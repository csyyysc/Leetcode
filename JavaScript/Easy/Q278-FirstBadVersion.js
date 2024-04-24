/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let idx = 0;
        for(let i = 1; i <= n ; i++) {
            if(isBadVersion(i)) {
                idx = i;
                break;
            }
        }
        return idx;
    };
};

/**
 * @note Reference Method1
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = (isBadVersion) => {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 1, end = n;
        while(start < end) {
            let mid = Math.floor((start + end) / 2);
            if(isBadVersion(mid)) {
                end = mid;
            } else {
                start = mid + 1;
            }
        }
        return start;
    };
};