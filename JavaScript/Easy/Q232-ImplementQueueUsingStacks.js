var MyQueue = function () {
    this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    return this.stack.shift();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    return this.stack[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return !this.stack.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

class MyQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
        this.front = null;
    }

    push(x) {
        if (!this.stack1.length) this.front = x;
        this.stack1.push(x);
    }

    pop() {
        if (!this.stack2.length) {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }

    peek() {
        return this.stack2.length === 0 ? this.front : this.stack2[this.stack2.length - 1];
    }

    empty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}
