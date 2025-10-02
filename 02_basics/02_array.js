const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); // ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) //combine two arrays This method return a new array without modifying any existing arrays
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] //spread operator

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // Retuns a new array with alll sub-array elements concatenated into itrecussively up to a specified depth
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // check is it array or not // false
console.log(Array.from("Hitesh")) // convert into array
console.log(Array.from({name: "hitesh"})) // interesting // give empty array isme batana padhata hai ki keys/values kisse saai array banana hai

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // return a new array from a set of elements
