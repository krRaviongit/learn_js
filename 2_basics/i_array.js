//array declaration
//an array can has its elements of the same types or different types ie combinations
const myArr = [0,1,2,3,4,5]
const myHeros = ["Ironman","Spiderman","Thanos"]
const myArr2 = new Array(1,2,3,4,5)

// console.log(myArr2[2]);  //print the elements of the array using index here it is 2
// console.log(myHeros[0]);
// console.log(myHeros[2]);

//array methods

myArr.push(6); //add elements at the last
myArr.push(7);

myArr.pop();  // removes the last element from the array
// console.log(myArr);

myArr.unshift(9);  //inserts elements at the start of the array
myArr.shift();  //removes the first element from the array and returns it if the array is empty it returns undefined 

// console.log(myArr);

// console.log(myArr.includes(7)); //includes() returns boolean values either true or false
// console.log(myArr.indexOf(2));
// console.log(myArr.indexOf(10));  //if the element is not present inside the array it returns -1


const newArr = myArr.join();  //join() binds the elements of the array in the form of strings

// console.log(newArr);




// slice and splice

// console.log("A", myArr);  //original array

const mynA = myArr.slice(1,3); //Does NOT modify the original array , Returns a new array, Used to extract a section of the array and end the end index is exclusive that is not included

// console.log("B", myArr);
// console.log(mynA);


const mynA2 = myArr.splice(1,3); //Modifies the original array,Can add, remove, or replace elements, Returns the deleted elements as an array  here 1 is the start index and 3 is the total no of items to be removed 

// console.log("C", myArr);
// console.log(mynA2);


let fruits = ["apple","mango","bananna","guava","orange","berry"]
console.log("original array:",fruits);
let removed = fruits.splice(1,3);
console.log("original array after splice():",fruits);
console.log("elements spliced:",removed);



let fruits1 = ["apple","mango","bananna","guava","orange","berry"]
console.log("original array:",fruits1);
let removed1 = fruits1.slice(1,3);
console.log("original array after slice():",fruits1);
console.log("elements sliced:",removed1);



