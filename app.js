const fs = require('fs');
const os = require('os');
const { argv } = require('yargs');
const _ = require('lodash');
const notes = require('./notes');

const command = process.argv[2]; // node app.js THIRD_ARGUMENT

switch (command) {
  case 'add':
    notes.add(argv.title, argv.body);
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
