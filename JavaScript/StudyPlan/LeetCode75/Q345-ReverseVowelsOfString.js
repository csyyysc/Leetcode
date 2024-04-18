const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];

const reverseVowels = (s) => {
    let left = 0;
    let right = s.length - 1;
    let str = s.split("");

    while(left < right) {
        if(vowels.indexOf(str[left]) !== -1 && vowels.indexOf(str[right]) !== -1) {
            [str[left], str[right]] = [str[right], str[left]];
            left++, right--;
        } 
        if(vowels.indexOf(str[left]) === -1) left++;
        if(vowels.indexOf(str[right]) === -1) right--;
    }
    return str.join('');
}

function reverseVowels(s) {
    const vowels = s.split('').filter(a => /[aeiou]/i.test(a));
    return s.split(/[aeiou]/i).reduce((r, a) => r + a + (vowels.pop() || ''), '');
}

console.log(reverseVowels("hello"));