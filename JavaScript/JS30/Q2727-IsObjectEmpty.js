/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    return (JSON.stringify(obj) === "{}" || JSON.stringify(obj) === "[]")  ? true : false;
};

const isEmpty = (obj) => {
    return !Object.keys(obj).length;
}