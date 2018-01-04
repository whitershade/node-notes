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
    notes.getAll();
    break;
  case 'get':
    notes.get(argv.title);
    break;
  case 'remove':
    notes.remove(argv.title);
    break;
  default:
    console.log('command does not recognize');
}
