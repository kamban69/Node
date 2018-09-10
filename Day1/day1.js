const _ = require("lodash");

class Day1 {
    constructor() { }
    GetAge() { return 90; }
    Add(n1, n2) {
        if (!(_.isNumber(n1) && _.isNumber(n2)))
            return 0;
        return n1 + n2;
    }
}

module.exports = Day1;