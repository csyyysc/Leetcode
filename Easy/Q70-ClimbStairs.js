/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n === 1) {
        return 1;
    }
    else if(n === 2) {
        return 2;
    } else {
        return climbStairs(n-1) + climbStairs(n-2);
    }
};

/**
    n = 1 => 1
    n = 2 => 2
    n = 3 => climbStairs(2) + climbStairs(1) = 2 + 1 = 3
    n = 4 => climbStairs(3) + climbStairs(2) = 3 + 2 = 5
    ...
 */

/**
    2:
        1+1
        2
    3:
        1+1+1
        1+2
        2+1
    4: 
        1+1+1+1
        1+2+1
        1+1+2
        2+1+1
        2+2
    5:
        1+1+1+1+1
        2+1+1+1
        1+2+1+1
        1+1+2+1
        1+1+1+2
        1+2+2
        2+1+2
        2+2+1
    6: 
        1+1+1+1+1+1
        2+1+1+1+1
        1+2+1+1+1
        1+1+2+1+1
        1+1+1+2+1
        1+1+1+1+2
        2+2+1+1
        2+1+2+1
        2+1+1+2
        1+1+2+2
        1+2+1+2
        1+2+2+1
        2+2+2
 */