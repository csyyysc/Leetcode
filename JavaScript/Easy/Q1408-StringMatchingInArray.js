/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
    const n = words.length;
    const matches = [];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i !== j && words[i].includes(words[j])) matches.push(words[j]);
        }
    }

    return [...new Set(matches)];
};

// const sringMatching = (words) => {
//     const n = words.length;
//     const set = new Set();

//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             if (words[i] !== words[j] && words[i].includes(words[j])) set.add(words[j]);
//         }
//     }

//     return Array.from([...set]);
// }
