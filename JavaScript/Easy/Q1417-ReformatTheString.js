/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
    let str = "",
        digits = 0,
        alphas = 0;

    for (const c of s) {
        const code = c.charCodeAt();
        if (code >= 97 && code <= 122) {
            digits++;
        } else if (code >= 48 && code <= 57) {
            alphas++;
        }
    }

    if (digits !== alphas && Math.abs(digits - alphas) > 1) return "";

    const aStack = [],
        dStack = [];
    for (const c of s) {
        const code = c.charCodeAt();
        if (code >= 97 && code <= 122) aStack.push(c);
        if (code >= 48 && code <= 57) dStack.push(c);
    }

    while (aStack.length && dStack.length) {
        if (aStack.length > dStack.length) {
            str += aStack.pop();
            str += dStack.pop();
        } else {
            str += dStack.pop();
            str += aStack.pop();
        }
    }

    while (aStack.length) {
        str += aStack.pop();
    }

    while (dStack.length) {
        str += dStack.pop();
    }

    return str;
};
