const fs = require("fs");

class HandleFile {
    constructor() { }
    WriteToFile() {
        var originalNote = { title: "first json note", body: "Hello World!" };
        originalNoteString = JSON.stringify(originalNote);
        fs.writeFileSync("notes.json", originalNoteString);
    }
    ReadFromFile() {
        var notesString = fs.readFileSync("notes.json");
        return JSON.parse(notesString);
    }
}
module.exports = HandleFile;