/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let len = columnTitle.length;
    let sum = 0;

    while(len > 0) {
        sum += (columnTitle.charAt(0).charCodeAt() - Math.pow(2, 6)) * Math.pow(26, len - 1);
        columnTitle = columnTitle.substring(1, len);
        len--;
    }
    return sum;
};

const titleToNumber = (columnTitle) => {
  if(!columnTitle) return 0;
  return (columnTitle.charAt(0).charCodeAt() - Math.pow(2, 6)) * Math.pow(26, columnTitle.length - 1) +  titleToNumber(columnTitle.substring(1, columnTitle.length))
}

const titleToNumber = (s) => {
    let sum = 0;
    for(let i = 0; i < s.length; i++) {
      sum = sum * 26 + s.charCodeAt(i) - "A".charCodeAt(0) + 1
    }
    return sum;
  }