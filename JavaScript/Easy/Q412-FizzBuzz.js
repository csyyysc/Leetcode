/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const game = [];

    for(let i = 1; i <= n; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            game.push("FizzBuzz")
        } else if(i % 3 === 0) {
            game.push("Fizz");
        } else if(i % 5 === 0) {
            game.push("Buzz")
        } else {
            game.push(`${i}`)
        }
    }

    return game;
};

var fizzBuzz = function(n) {
    const game = [];

    for(let i = 1; i <= n; i++) {
        let str = "";
        if(i % 3 === 0) str += "Fizz";
        if(i % 5 === 0) str += "Buzz"; 
        game.push(str.length > 0 ? str : `${i}`);
    }

    return game;
};


const fizzBuzz = (n) => new Array(n).fill(0).map((a, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i);