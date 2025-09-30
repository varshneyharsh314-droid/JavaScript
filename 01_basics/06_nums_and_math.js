const score = 400
// console.log(score);

const balance = new Number(100) // explicitly define the datatype Number
// console.log(balance); // {Number: 100}
// after run inside console you get some methods inside prototype 
// console.log(balance.toString().length); // Converting number into string give many mehods
// console.log(balance.toFixed(2)); // kitna point ka baad value show karni hai

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); // range 1-21 returns a string containing a number representing either in exponential or fixed-point notation with a specified number of digits precision()--give full number
// precion(2) ---- 1.2e^2

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // give value in the us format
// console.log(hundreds.toLocaleString('')); // give value in india format
// run NUMBER in console you give some propperties along with number write NUMBER. you give more options eg max,min value
// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); // run on console you give many properties
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.2)); //5
// console.log(Math.floor(4.9)); //4
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));
// Math.random() * (max - min) + min;//Range min to max
// Math.floor(Math.random() * (max - min + 1)) + min;
console.log(Math.random()); // [0,10)
console.log((Math.random()*10) + 1); // [1,10]
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
