/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function(arr, n) {
    const flatten = [];
    const stack = [...arr.map(item => [item, n])];

    while(stack.length) {
        const [item, depth] = stack.pop();

        if(Array.isArray(item) && depth) {
            stack.push(...item.map(subItem => [subItem, depth - 1]));
        } else {
            flatten.push(item);
        }
    }
    
    return flatten.reverse();
}

const flat = (arr, n) => {
    const flatten = [];

    function helper(arr, depth) {
        for(const item of arr) {
            if(typeof(item) === 'object' && depth < n) {
                helper(item, depth + 1);
            } else {
                flatten.push(item);
            }
        }
        return flatten;
    }

    return helper(arr, 0);
}