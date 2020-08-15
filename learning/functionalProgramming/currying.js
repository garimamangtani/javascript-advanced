// Currying: It a function with multiple arguments into a series of functions each taking a single argument at a time.
// This is one of the application of High order function and closures.

const multiply = (a,b) => a*b;
// console.log(multiply(2,3));
const curryMultiply = (a) => (b) => a*b;

console.log(curryMultiply(2)(3));
