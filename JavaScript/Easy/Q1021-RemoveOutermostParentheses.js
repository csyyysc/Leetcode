/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let parenthes = 0,
        ans = "";

    for (const l of s) {
        if (l === "(") {
            if (parenthes) ans += l;
            parenthes++;
        } else {
            parenthes--;
            if (parenthes) ans += l;
        }
    }

    return ans;
};

const removeOuterParentheses = (s) => {
    let ans = "";
    const stack = [];

    for (const l of s) {
        if (l === "(") {
            if (stack.length) ans += l;
            stack.push(l);
        } else {
            stack.pop();
            if (stack.length) ans += l;
        }
    }

    return ans;
};
