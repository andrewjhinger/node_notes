const yargs = require("yargs");
const note = require("./notes.js");

yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    note.addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: "remove",
  describe: "Remove a new note",
  builder: {
    title: {
      describe: "remove title",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    note.removeNote(argv.title);
  }
});

yargs.command({
  command: "list",
  describe: "list all notes",
  handler: function() {
    note.listNotes();
  }
});
yargs.command({
  command: "read",
  describe: "Read a given note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    note.readNote(argv.title);
  }
});
// const notes = [];
// if (yargs.command === "add") {
//   console.log("test");
//   //   notes.push = process.argv[3];
// } else if (yargs.command === "remove") {
//   const index = notes.indexOf();
// }

// for (const note of notes) {
//   console.log(notes);
// }
yargs.parse();
