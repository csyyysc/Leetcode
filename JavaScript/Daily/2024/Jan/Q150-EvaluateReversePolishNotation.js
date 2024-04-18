/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = [];
    const ops = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => Math.trunc(a / b),
    };

    for (const token of tokens) {
        if (ops[token]) {
            const first = stack.pop();
            const second = stack.pop();
            stack.push(ops[token](second, first));
        } else {
            stack.push(parseInt(token));
        }
    }

    return stack.pop();
};
