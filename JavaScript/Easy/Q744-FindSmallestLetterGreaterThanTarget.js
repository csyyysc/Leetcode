/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let char = letters[0];

    for(let i = 1; i < letters.length; i++) {
        if(char.charCodeAt() > target.charCodeAt()) {
            break;
        }

        if(letters[i].charCodeAt() > target.charCodeAt()) {
            char = letters[i];
            break;
        } 
    }
    return char;
};

const nextGreatestLetter = (letters, target) => {
    let left = 0, right = letters.length;

    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        letters[mid] <= target ? left = mid + 1: right = mid - 1;
    }

    return left === letters.length ? letters[0] : letters[left];
}