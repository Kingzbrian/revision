#!/usr/bin/node
const c = parseInt(process.argv[2]);
const d = parseInt(process.argv[3]);

function add (a, b) {
  if (isNaN(a) || isNaN(b)) {
    return ('NaN');
  } else {
    return (a + b);
  }
}
console.log(add(c, d));
