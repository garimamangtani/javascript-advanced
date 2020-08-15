// // composing
const print = (val) => console.log(val);
const square = (a) => a * a;
const sum = (x, y) => x + y;
const sub = (x, y) => x - y;
const compose = (f, g, h) => (x, y) => f(g(h(x, y)));

compose(print, square, sub)(3, 2);

