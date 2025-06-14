const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) //push or combine the elements in its original form 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) // returns a new array and contains everything in the element form.

// console.log(allHeros);


const all_new_heros = [...marvel_heros, ...dc_heros] //The ... (three dots) is called the spread operator in JavaScript. It "spreads out" the elements of an array into another array or function call. 


// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //here infinity is depth of the array
console.log(real_another_array);



console.log(Array.isArray("Ravi")) //tells whether Ravi is an array or not
console.log(Array.from("Ravi")) // makes an array from each elemnt  of Ravi
console.log(Array.from({name: "ravi"})) // interesting case as it will not get converted into an array as Array.from() operator does not know how to convert an object type into an array.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // combines the given element to form an array