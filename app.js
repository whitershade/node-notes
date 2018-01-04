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
      notes.logNote(note);
    } else {
      console.log('Note title already exists');
    }
    break;
  case 'list':
    console.log('List of notes:');
    notes.getAll().forEach(note => notes.logNote(note));
    break;
  case 'get':
    const foundNote = notes.get(argv.title);
    if (foundNote) {
      console.log('Note found.');
      notes.logNote(foundNote);
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
