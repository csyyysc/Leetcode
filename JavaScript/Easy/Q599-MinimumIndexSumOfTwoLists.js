/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let min = Infinity, res = [];
    
    const map = new Map();
    for(let i = 0; i < list1.length; i++)
        map.set(list1[i], i);

    for(let j = 0; j < list2.length; j++) {
        if(map.has(list2[j])) {
            let index1 = map.get(list2[j]);
            let index2 = j;
            res.push({ val: list2[j], index: index1 + index2 });
            min = Math.min(min, index1 + index2);
        }
    }
    return res.filter(item => item.index === min).map(item => item.val);
}