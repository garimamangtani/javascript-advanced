// // composing
const print = (val) => console.log(val);
const square = (a) => a * a;
const sum = (x, y) => x + y;
const sub = (x, y) => x - y;
const compose = (f, g, h) => (x, y) => f(g(h(x, y)));

compose(print, square, sub)(3, 2);
// // ============================

// // filter
// const array = [1, 2, 3, 4, 5];
// const newarray = array.filter((num) => num > 2);

// console.log(newarray);
// scope
// var name = function print() {
//   console.log("garima");
// };

// name();
// //////////////////

// function FN() {
//   console.log("garima");
//   return function LN() {
//     console.log("Mangtani");
//     return function age() {
//       console.log("27");
//     };
//   };
// }

// FN()()();

// const name = "Ambuj";
// function imp() {
//   console.log(this.name);
//   console.log(this.age);
//   return this.num1 * this.num2;
// }

// // imp();

// const obj1 = {
//   name: "garima",
//   num1: 10,
//   num2: 2,
//   imp: imp,
//   age: 27,
// };

// const obj2 = {
//   name: "Manan",
//   age: 17,
//   imp: imp,
// };

// console.log(obj1.imp());

// function name() {
//   return function nameplz(name) {
//     console.log(name);
//   };
// }

// const b = name();

// b("garima");
///////////////////////////////////

// const array = [1, 2, 3, 4];
// for (var i = 0; i < array.length; i++) {
//   setInterval(function () {
//     console.log("I am at index" + i);
//   }, 3000);
// }

// let a = 5;
// function name() {
//   let a = "garima";
//   console.log(a);
//   let a = "ambuj";
// }

// console.log(a);
// name();
