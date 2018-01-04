const add = (title, body) => {
  console.log(title, body);
};

const getAll = () => {
  console.log('get all');
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
