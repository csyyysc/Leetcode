/**
 * @param {number[]} t
 * @return {number[]}
 */
const dailyTemperatures = (t) => {
    const n = t.length;
    const stack = [],
        answer = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        while (stack.length && t[i] > t[stack[stack.length - 1]]) {
            const idx = stack.pop();
            answer[idx] = i - idx;
        }
        stack.push(i);
    }

    return answer;
};
