const fs = require('fs');
const os = require('os');

fs.appendFile('./greetings.txt', `hello, ${os.userInfo().username}!`, error => {
  if (error) return console.log(error);
  console.log('done');
});
