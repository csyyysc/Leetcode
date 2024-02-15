/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
    let special = 0;
    const m = mat.length;

    for (let i = 0; i < m; i++) {
        if (mat[i].includes(1) && mat[i].filter((e) => e === 1).length === 1) {
            let count = 0,
                k = 0;
            const colIndex = mat[i].indexOf(1);
            while (k < m) {
                if (mat[k][colIndex] === 1) count++;
                k++;
            }
            if (count === 1) special++;
        }
    }

    return special;
};
