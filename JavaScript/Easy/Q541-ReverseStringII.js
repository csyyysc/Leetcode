/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    const strLen = s.length;

    if(strLen < k) 
        return s.split("").reverse().join("");
    if(strLen <= k * 2 && strLen > k) 
        return s.substring(0, k).split("").reverse().join("") + s.substring(k, strLen);

    let str = '';
    for(let i = 0; i < strLen; i = i + k * 2) {
        str += s.substring(i, i + k).split("").reverse().join("") + s.substring(i + k, i + 2 * k);
    }
    return str;
};

const reverseStr = (s, k) => {
    s = s.split('');

    for(let i = 0; i < s.length; i += k * 2) {
        let start = i, end = i + k - 1;
        while(start <= end) {
            let temp = s[start];
            s[start] = s[end];
            s[end] = temp;
            start++, end--;
        }
    }
    return s.join('');
}