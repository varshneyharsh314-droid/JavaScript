// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Go to console and write const numbers =  [1,2,3,4]
// write numbera and inside prototype you get some methods and also give one more prototype 

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // insert array element at first position and move all the elements by 1 position 
// myArr.shift() // remove at fist index and shift all elements by 1 shift left

// console.log(myArr.includes(9)); give boolean values
// console.log(myArr.indexOf(3)); is index is outofbound then it rturn -1

// const newArr = myArr.join() ass all the elements of an array into a string seperatesd by the specific separator

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // 3 not include do not change the originall array

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // 3 included remove all the elements from the originaal array
console.log("C ", myArr);
console.log(myn2);
