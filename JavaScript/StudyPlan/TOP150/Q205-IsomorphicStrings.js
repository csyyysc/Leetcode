/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const m = new Map();
    for(let i = 0; i < s.length; i++) {
        if(!m.has(s[i])) m.set(s[i], t[i]);
        else {
            if(m.get(s[i] !== t[i])) return false;
        }
    }
    return new Set([...m.values()]).size === m.size;
}

const isIsomorphic = (s, t) => {
    for(let i = 0; i < s.length; i++) {
        if(s.indexOf(s[i], i + 1) !== t.indexOf(t[i], i + 1)) { 
            return false;
        }
    }
    return true;
}

