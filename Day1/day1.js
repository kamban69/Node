const _ = require("lodash");

function Day1 ()  {}
    Day1.prototype.GetAge = () =>   90;
    Day1.prototype.Add = (n1, n2) => { 
        if(!(_.isNumber(n1) && _.isNumber(n2))) 
            return 0;
         return n1+n2;
        } 

module.exports = Day1;