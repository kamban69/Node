var chai = require("chai");
var chaiFiles = require('chai-files');
chai.use(chaiFiles);
var expect = chai.expect;
var file = chaiFiles.file;

var day3_Code = require("./../Day_3/day_3.js");
const day3 = new day3_Code([]);

describe(
    "Day3",
    function(){
        it("check if write to file works", function(){
            day3.WriteToFile();
            expect(file("notes.json")).to.exist;           
         });    
         it("Check if File is read",
        function(){
var actual = day3.ReadFromFile();
expect(day3.ReadFromFile().body).to.equal("Hello World!");
        });    
    }
)