/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let w = parseInt(Math.sqrt(area));

    while(!Number.isInteger(area / w)) w--;

    return [area / w, w];
}