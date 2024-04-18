/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function (n, meetings) {
    meetings.sort((a, b) => a[0] - b[0]);

    const roomTime = new Array(n).fill(0);
    const countRoomFreq = new Array(n).fill(0);

    for (const [s, e] of meetings) {
        let freeRoomIdx = roomTime.findIndex((e) => e <= s);
        if (freeRoomIdx < 0) {
            freeRoomIdx = roomTime.indexOf(Math.min(...roomTime));
        }

        countRoomFreq[freeRoomIdx]++;

        let lastMeetingEndtime = roomTime[freeRoomIdx];
        let meetingEndTime = s < lastMeetingEndtime ? lastMeetingEndtime - s + e : e;
        roomTime[freeRoomIdx] = meetingEndTime;
    }

    return countRoomFreq.indexOf(Math.max(...countRoomFreq));
};
