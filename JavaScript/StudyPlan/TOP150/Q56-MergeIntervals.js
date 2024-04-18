/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let i = 0;

    while(i < intervals.length - 1) {
        const [_, firstRight] = intervals[i];
        const [secondLeft, secondRight] = intervals[i + 1];

        if(firstRight >= secondLeft) {
            intervals[i][1] = Math.max(firstRight, secondRight);
            intervals.splice(i + 1, 1);
        } else {
            i++;
        }
    }
    return intervals;
}

const merge = intervals => {
    intervals.sort((a, b) => a[0] - b[0]);
    const ranges = [intervals[0]];

    for(let i = 1; i < intervals.length; i++) {
        const curr = ranges[ranges.length - 1];
        if(curr[1] >= intervals[i][0]) {
            const end = Math.max(curr[1], intervals[i][1]);
            const interval = [curr[0], end];
            ranges.pop();
            ranges.push(interval);
            continue;
        }
        ranges.push(intervals[i]);
    }
    return ranges;
}