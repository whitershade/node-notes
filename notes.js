const fs = require('fs');

const fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('./notes.json'));
  } catch (error) {
    return [];
  }
};

const saveNotes = notes => {
  fs.writeFileSync('./notes.json', JSON.stringify(notes));
};

const add = (title, body) => {
  const notes = fetchNotes();
  const note = {
    title,
    body
  };

  const duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    saveNotes([...notes, note]);
    return note;
  }
};

const getAll = () => fetchNotes();

const get = title => fetchNotes().find(note => note.title === title);

const remove = title => {
  const notes = fetchNotes();
  const notesWithoutDeletedNote = notes.filter(note => note.title !== title);

  if (notes.length !== notesWithoutDeletedNote.length) {
    saveNotes(notesWithoutDeletedNote);
    return true;
  }
};

module.exports = {
  add,
  getAll,
  get,
  remove
};
