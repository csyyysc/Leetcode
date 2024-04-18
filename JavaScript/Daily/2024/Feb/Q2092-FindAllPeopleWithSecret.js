/**
 * @param {number} n
 * @param {number[][]} meetings
 * @param {number} firstPerson
 * @return {number[]}
 */
var findAllPeople = function (n, meetings, firstPerson) {
    const shares = new Set([0, firstPerson]);

    meetings.sort((a, b) => a[2] - b[2]);

    const sortedMeetings = [];
    const seenTime = new Set();
    for (const m of meetings) {
        if (!seenTime.has(m[2])) {
            seenTime.add(m[2]);
            sortedMeetings.push([]);
        }
        sortedMeetings[sortedMeetings.length - 1].push([m[0], m[1]]);
    }

    for (const mg of sortedMeetings) {
        const secret = new Set();
        const graph = {};

        for (const [p1, p2] of mg) {
            if (!graph[p1]) graph[p1] = [];
            if (!graph[p2]) graph[p2] = [];

            graph[p1].push(p2);
            graph[p2].push(p1);

            if (shares.has(p1)) secret.add(p1);
            if (shares.has(p2)) secret.add(p2);
        }

        const queue = [...secret];
        while (queue.length) {
            const curr = queue.shift();
            shares.add(curr);
            for (const nei of graph[curr]) {
                if (!shares.has(nei)) {
                    shares.add(nei);
                    queue.push(nei);
                }
            }
        }
    }

    return [...shares];
};
