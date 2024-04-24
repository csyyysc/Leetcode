/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
    salary.sort((a, b) => a - b);
    (salary[0] = 0), (salary[salary.length - 1] = 0);
    return salary.reduce((sum, sal) => sum + sal, 0) / (salary.length - 2);
};
