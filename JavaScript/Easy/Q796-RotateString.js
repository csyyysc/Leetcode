/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
    let i = 0;
    let str = s;
    while(i < s.length) {
        str = str.slice(1, str.length).concat(str[0]);
        if(str === goal) return true;
        i++;
    }
    return false;
};

const rotateString = (s, goal) => {
    return s.length === goal.length ? s.concat(s).includes(goal) : false;
};