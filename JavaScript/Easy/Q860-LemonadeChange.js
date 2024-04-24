/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    const change = {};

    for (let i = 0; i < bills.length; i++) {
        switch (bills[i]) {
            case 10:
                if (change[5]) {
                    change[5]--;
                    change[bills[i]] = change[bills[i]] ? change[bills[i]] + 1 : 1;
                } else return false;
                break;
            case 20:
                if (change[5] && change[10]) {
                    change[5]--;
                    change[10]--;
                    change[bills[i]] = change[bills[i]] ? change[bills[i]] + 1 : 1;
                } else if (change[5] >= 3) {
                    change[5] -= 3;
                    change[bills[i]] = change[bills[i]] ? change[bills[i]] + 1 : 1;
                } else return false;
                break;
            default:
                change[bills[i]] = change[bills[i]] ? change[bills[i]] + 1 : 1;
                break;
        }
    }

    return true;
};

const lemonadeChange = (bills) => {
    let n5 = 0,
        n10 = 0;

    for (const bill of bills) {
        if (bill === 5) n5++;
        else if (bill === 10) n5--, n10++;
        else if (bill === 20 && n10 > 0) n5--, n10--;
        else n5 -= 3;

        if (n5 < 0) return false;
    }

    return true;
};
