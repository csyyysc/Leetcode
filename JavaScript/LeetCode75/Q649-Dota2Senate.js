/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    const dires = [];
    const radiants = [];
    const n = senate.length;

    for(let i = 0; i < n; i++) {
        if(senate[i] === 'D') {
            dires.push(i + n);
        } else {
            radiants.push(i + n);
        }
    }

    while(dires.length && radiants.length) {
        if(radiants[0] < dires[0]) {
            radiants.push(radiants[0] + n);
        } else {
            dires.push(dires[0] + n);
        }
        dires.shift();
        radiants.shift();
    }

    return radiants.length ? "Radiant" : "Dire";
}