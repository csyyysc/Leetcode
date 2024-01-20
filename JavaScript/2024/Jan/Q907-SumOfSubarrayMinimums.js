/**
 * @param {number[]} arr
 * @return {number}
 */
function sumSubarrayMins(nums) {
    let sum = 0;
    const n = nums.length;
    const stack = [],
        MOD = 1e9 + 7;

    for (let i = 0; i <= n; i++) {
        while (stack.length && (i === n || nums[i] <= nums[stack[stack.length - 1]])) {
            const mid = stack.pop();
            const prev = stack.length ? stack[stack.length - 1] : -1;
            const cont = (nums[mid] * (i - mid) * (mid - prev)) % MOD;
            sum += cont;
            sum %= MOD;
        }
        stack.push(i);
    }

    return sum;
}
