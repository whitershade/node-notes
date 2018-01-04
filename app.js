const fs = require('fs');
const os = require('os');
const notes = require('./notes');

fs.appendFile('./greetings.txt', `hello, ${os.userInfo().username}!`, error => {
  if (error) return console.log(error);
  console.log('done');
});

console.log('Result 3 + 9 =', notes.add(3, 9));
