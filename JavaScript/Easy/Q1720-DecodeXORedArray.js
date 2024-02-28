/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
    const decoded = new Array(encoded.length + 1).fill(0);
    decoded[0] = first;

    for (let i = 0; i < encoded.length; i++) {
        decoded[i + 1] = encoded[i] ^ decoded[i];
    }

    return decoded;
};
