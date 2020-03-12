const fs = require("fs");
const chaulk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();

  const dupeNote = notes.find(note => {
    return note.title === title;
  });

  if (!dupeNote) {
    notes.push({ title: title, body: body });
    saveNotes(notes);
  } else {
    console.log("dupe title");
  }
};

const removeNote = title => {
  const notes = loadNotes();
  const filteredNotes = notes.filter(note => {
    return note.title !== title;
  });
  if (notes.length > filteredNotes.length) {
    saveNotes(filteredNotes);
    console.log(chaulk.greenBright(`removed:${title}`));
  } else {
    console.log(chaulk.red("no note found"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log("your notes:");
  for (const note of notes) {
    console.log(chaulk.blue(`${note.title}: ${note.body}`));
  }
};

const readNote = title => {
  const notes = loadNotes();
  const note = notes.find(note => {
    return note.title === title;
  });

  if (note) {
    console.log(`${note.body}`);
  }
};
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    return JSON.parse(dataBuffer.toString());
  } catch (e) {
    return [];
  }
};

const saveNotes = notes => {
  const jsonString = JSON.stringify(notes);
  fs.writeFileSync("notes.json", jsonString);
};
module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
