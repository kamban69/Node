var chai = require("chai");
var expect = chai.expect;
var day1Code = require("./../Day1/day1.js")

describe(
    "day1_Func get age", function(){
        it('getAges() should return 90' , function(){   
            day1code          =  new day1Code([]);
            expect(day1code.GetAge()).to.equal(90); 
        })
    }
);

describe(
    "day1_Func add", function(){
        it('add() should add and return when 2 valid inputs are sent' , function(){   
            day1code  =  new day1Code([]);
            expect(day1code.Add(1, 5)).to.equal(6); 
        });
    }
);

describe(
    "day1_Func add", function(){
        it('add() should return 0 when 2 valid inputs are sent' , function(){   
            day1code  =  new day1Code([]);
            expect(day1code.Add('1', '5')).to.equal(0); 
        });
    }
);