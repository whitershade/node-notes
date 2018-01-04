const fs = require('fs');
const os = require('os');
const { argv } = require('yargs');
const _ = require('lodash');
const notes = require('./notes');

const command = process.argv[2]; // node app.js THIRD_ARGUMENT

switch (command) {
  case 'add':
    const note = notes.add(argv.title, argv.body);
    if (note) {
      console.log('Note created.');
      console.log('----');
      console.log(`Title: ${note.title}`);
      console.log(`Body: ${note.body}`);
    } else {
      console.log('Note title already exists');
    }
    break;
  case 'list':
    notes.getAll().forEach(note => {
      console.log('----');
      console.log(`Title: ${note.title}`);
      console.log(`Body: ${note.body}`);
    });
    break;
  case 'get':
    const findedNote = notes.get(argv.title);
    if (findedNote) {
      console.log('----');
      console.log(`Title: ${findedNote.title}`);
      console.log(`Body: ${findedNote.body}`);
    } else {
      console.log('Note was not found');
    }
    break;
  case 'remove':
    const isRemoved = notes.remove(argv.title);
    const message = isRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
    break;
  default:
    console.log('command does not recognize');
}
