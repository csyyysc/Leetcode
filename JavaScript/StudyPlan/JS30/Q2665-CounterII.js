/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let curr = init;
    return {
        increment: () => ++curr,
        decrement: () => --curr,
        reset: () => curr = init,
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

class Counter {
    constructor(init) {
        this.init = init;
        this.curr = init;
    }

    increment() {
        return ++this.curr;
    }

    decrement() {
        return --this.curr;
    }

    reset() {
        this.curr = this.init;
        return this.init;
    }
}

var createCounter = function(init) {
    return new Counter(init);
}