/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function (h, b, l) {
    const len = h.length - 1;
    const pq = new MinPriorityQueue({ priority: (x) => x });

    for (let i = 0; i < len; i++) {
        let diff = h[i + 1] - h[i];
        if (diff > 0) {
            if (l > 0) pq.enqueue(diff), l--;
            else if (pq.front() && diff > pq.front().element) pq.enqueue(diff), (b -= pq.dequeue().element);
            else b -= diff;

            if (b < 0) return i;
        }
    }

    return len;
};
