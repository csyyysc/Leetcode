/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const map = {};

    for(let i = 0; i < arr1.length; i++) {
        map[arr1[i].id] = arr1[i];
    }
    
    for(let j = 0; j < arr2.length; j++) {
        if(map[arr2[j].id]) {
            for(const key in arr2[j]) map[arr2[j].id][key] = arr2[j][key];
        } else {
            map[arr2[j].id] = arr2[j];
        }
    }

    return Object.values(map);
}