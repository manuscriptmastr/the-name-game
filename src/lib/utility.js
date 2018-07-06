export let log = (item) => {
  console.log(`Logged: ${item.toString()}`);
  return item;
};

export let pipe = (...ops) => (arr) => ops.reduce((a, op) => op(a), arr);