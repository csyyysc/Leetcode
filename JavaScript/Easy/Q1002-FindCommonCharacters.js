/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
    const common = [];
    const word = words[0];

    for (let i = 0; i < word.length; i++) {
        let flag = true;
        for (let j = 1; j < words.length; j++) {
            if (!words[j].includes(word[i])) {
                flag = false;
                break;
            } else {
                words[j] = words[j].replace(word[i], "");
            }
        }
        if (flag) common.push(word[i]);
    }

    return common;
};

const commonChars = (words) => {
    let common = [...words[0]];
    for (let i = 1; i < words.length; i++) {
        common = common.filter((c) => {
            const l = words[i].length;
            words[i] = words[i].replace(c, "");
            return l > words[i].length;
        });
    }

    return common;
};
