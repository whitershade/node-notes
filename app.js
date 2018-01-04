const fs = require('fs');
const os = require('os');
const yargs = require('yargs');
const _ = require('lodash');
const notes = require('./notes');

const command = process.argv[2]; // node app.js THIRD_ARGUMENT

const title = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const body = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};

const argv = yargs
  .command('add', 'Add a new note', {
    title,
    body
  })
  .command('list', 'List all notes')
  .command('get', 'Get a note by title', {
    title
  })
  .command('remove', 'Remove a note by title', {
    title
  })
  .help().argv;

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
