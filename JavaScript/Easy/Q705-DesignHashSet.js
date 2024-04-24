var MyHashSet = function () {
    this.set = new Set();
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    this.set.add(key);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    this.set.delete(key);
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    return this.set.has(key);
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

/** BST
 *  @param {number} x
 *  @return {void}
 */
function Node(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

/**
 * @return {number}
 */
Node.prototype.successor = function () {
    let node = this.right;
    while (node.left) {
        node = node.left;
    }
    return node.val;
};

/**
 * @return {number}
 */
Node.prototype.predecessor = function () {
    let node = this.left;
    while (node.right) {
        node = node.right;
    }
    return node.val;
};

/**
 * @param {number} x
 * @return {Node}
 */
Node.prototype.add = function (x) {
    if (!this) return new Node(x);

    if (x === this.val) {
        return this;
    } else if (x < this.val) {
        this.left = this.left ? this.left.add(x) : new Node(x);
    } else {
        this.right = this.right ? this.right.add(x) : new Node(x);
    }
    return this;
};

/**
 * @param {number} x
 * @return {Node}
 */
Node.prototype.remove = function (x) {
    if (!this) return null;
    if (x === this.val) {
        if (this.right) {
            this.val = this.successor();
            this.right = this.val ? this.right.remove(this.val) : null;
        } else if (this.left) {
            this.val = this.predecessor();
            this.left = this.val ? this.left.remove(this.val) : null;
        } else {
            return null;
        }
    } else if (x > this.val) {
        this.right = this.right ? this.right.remove(x) : null;
    } else {
        this.left = this.left ? this.left.remove(x) : null;
    }
    return this;
};

/**
 * @param {number} x
 * @return {bool}
 */
Node.prototype.contains = function (x) {
    if (!this || x === this.val) {
        return this !== null;
    }

    if (x < this.val) {
        return this.left !== null && this.left.contains(x);
    }
    return this.right !== null && this.right.contains(x);
};

/**
 * @return {void}
 */
const MyHashSet = function () {
    this.hashSet = new Array(769).fill(null);
};

/** Hash Set
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    if (!this.hashSet[key % 769]) {
        this.hashSet[key % 769] = new Node(key);
    } else {
        this.hashSet[key % 769].add(key);
    }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    if (!this.hashSet[key % 769]) return;
    this.hashSet[key % 769] = this.hashSet[key % 769].remove(key);
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    if (!this.hashSet[key % 769]) return false;
    return this.hashSet[key % 769].contains(key);
};
