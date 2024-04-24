/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    if(!functions.length) return x => x;
    return functions.reduceRight((prevFn, nextFn) => {
        return (x) => nextFn(prevFn(x));
    })
}

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */