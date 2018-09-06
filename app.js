console.log("app.js");
const fs = require("fs");
const os = require("os");
const notes =  require("./Day1/day1.js")
const _ = require("lodash");

var user = os.userInfo();
var day1code  =  new notes([]);
var res = day1code.Add(1, 3);

fs.appendFile("day1.txt", `Hello ${user.username}, u r ${res} `, function(err){if(err)console.log("hello world");} );