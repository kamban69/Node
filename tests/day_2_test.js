var chai = require("chai");
var expect = chai.expect;
var day2_Code = require("./../Day_2/day_2.js")

describe(
    "Day2", 
    function(){
        it("Check if arguments are available", function(){
            day2  =  new day2_Code([]);
            expect(day2.Add(1,2)).to.equal(3);
        })
    }
);