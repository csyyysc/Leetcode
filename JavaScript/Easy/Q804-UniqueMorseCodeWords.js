/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
    const morses = {
        a: ".-",
        b: "-...",
        c: "-.-.",
        d: "-..",
        e: ".",
        f: "..-.",
        g: "--.",
        h: "....",
        i: "..",
        j: ".---",
        k: "-.-",
        l: ".-..",
        m: "--",
        n: "-.",
        o: "---",
        p: ".--.",
        q: "--.-",
        r: ".-.",
        s: "...",
        t: "-",
        u: "..-",
        v: "...-",
        w: ".--",
        x: "-..-",
        y: "-.--",
        z: "--..",
    };

    const transformers = [];
    for (const word of words) {
        let morse = "";
        for (let i = 0; i < word.length; i++) {
            morse += morses[word[i]];
        }
        transformers.push(morse);
    }
    return new Set(transformers).size;
};

const uniqueMorseRepresentations = (words) => {
    const MORSES = {
        'a': ".-",  'b': "-...", 'c': "-.-.", 'd': "-..", 'e': ".",
        'f': "..-.", 'g': "--.", 'h': "....", 'i': "..", 'j': ".---",
        'k': "-.-",'l': ".-..", 'm': "--", 'n': "-.", 'o': "---",
        'p': ".--.", 'q': "--.-", 'r': ".-.", 's': "...", 't': "-",
        'u': "..-", 'v': "...-", 'w': ".--", 'x': "-..-", 'y': "-.--",
        'z': "--.."
    }

    return new Set(words.map(word => word.split('').map(letter => MORSES[letter]).join(''))).size;
}