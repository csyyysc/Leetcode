/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
    let com = "";
    let bits = n.toString(2);

    for (let i = 0; i < bits.length; i++) {
        if (bits[i] === "1") com += "0";
        else com += "1";
    }

    return parseInt(com, 2);
};

const bitwiseComplement = (N) => N ^ parseInt("1".repeat(N.toString(2).length), 2);
