const fs = require("fs");

function HandleFile() {};
HandleFile.prototype.WriteToFile = function(){
var originalNote = {title : "first json note", body : "Hello World!"};
originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync("notes.json", originalNoteString);
}
HandleFile.prototype.ReadFromFile = function(){
var notesString = fs.readFileSync("notes.json");
return JSON.parse(notesString);
}

module.exports = HandleFile;