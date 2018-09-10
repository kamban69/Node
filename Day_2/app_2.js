const yargsModule = require("yargs");
const day2 = require("./day_2.js") ;
Day2 = new day2([]);
console.log(yargsModule.argv);
console.log(yargsModule.argv.title);