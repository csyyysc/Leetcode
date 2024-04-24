var MyHashMap = function () {
    this.map = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    this.map.set(key, value);
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    const value = this.map.get(key);
    return value === undefined ? -1 : value;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    this.map.delete(key);
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

class MyHashMap1 {
    constructor() {
        this.data = new Array(1000001);
    }

    put(key, val) {
        this.data[key] = val;
    }

    get(key) {
        const val = this.data[key];
        return val !== undefined ? val : -1;
    }

    remove(key) {
        delete this.data[key];
    }
}

class ListNode {
    constructor(key, val, next) {
        this.key = key;
        this.val = val;
        this.next = next;
    }
}

class MyHashMap2 {
    constructor() {
        this.size = 19997;
        this.mult = 12582917;
        this.data = new Array(this.size);
    }

    hash(key) {
        return (key * this.mult) % this.size;
    }

    put(key, val) {
        this.remove(key);
        const h = this.hash(key);
        const node = new ListNode(key, val, this.data[h]);
        this.data[h] = node;
    }

    get(key) {
        let h = this.hash(key),
            node = this.data[h];
        for (; node; node = node.next) if (node.key === key) return node.val;
        return -1;
    }

    remove(key) {
        let h = this.hash(key),
            node = this.data[h];
        if (!node) return;
        if (node.key === key) this.data[h] = node.next;
        else
            for (; node.next; node = node.next)
                if (node.next.key === key) {
                    node.next = node.next.next;
                    return;
                }
    }
}
