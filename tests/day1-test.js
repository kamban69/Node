var chai = require("chai");
var expect = chai.expect;
var day1Code = require("./../Day1/day1.js")

describe(
    "day1_Func", function(){
        it('getAges() should return 90' , function(){   
            day1code          =  new day1Code([]);
            expect(day1code.GetAge()).to.equal(90); 
        })
    }
);