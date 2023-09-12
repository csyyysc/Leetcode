/**
 * @note Reference Method1
 * @param {string} s
 * @return {string}
 */
const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];

var reverseVowels = function(s) {
    let left = 0;
    let right = s.length - 1;
    let str = s.split('');

    while(left < right) {
        if(vowels.indexOf(str[left]) !== -1 && vowels.indexOf(str[right]) !== -1) {
            [str[left], str[right]] = [str[right], str[left]];
            left++, right--;
        } 
        if(vowels.indexOf(str[left]) == -1){
            left++;
        }
        if(vowels.indexOf(str[right]) == -1){
            right--;
        }
    }
    return str.join('');
};

/**
 * @note Reference Method2
 * @param {string} s
 * @return {string}
 */
const reverseVowels = (s) => {
    const vowels = s.split('').filter(a => /[aeiou]/i.test(a));
    return s.split(/[aeiou]/i).reduce((res, a) => res + a + (vowels.pop() || ''), '');
};