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

const getAll = () => {
  const note = fs.readFileSync('./notes.json');

  console.log(JSON.parse(note));
};

const get = title => {
  console.log('read: ' + title);
};

const remove = title => {
  console.log('remove: ' + title);
};

module.exports = {
  add,
  getAll,
  get,
  remove
};
