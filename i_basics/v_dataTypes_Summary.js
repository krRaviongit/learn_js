//dataTypes are categorised into two depending upon
//How data is stored in the memory and how data can be accessed


// 1) Primitive DataType (callByValue)
// 7 types: string, number, boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id===anotherId);  //output: false bcz Symbol dataType is used to assign unique values.

const bigNumber = 696969696969696969n //bigInt
// console.log(typeof bigNumber);


// 2) Non-Primitive(Reference) DataType
// types: array, objects, functions

const heroes = ["IronMan", "Hulk", "Spiderman", "Captain America"] //array

let myObj = {  //object
    name : "ravi",
    age : 21,
}

const myFunction = function(){  //function
    console.log("Hello World");
    
}



//JavaScript is dynamically typed, which means that the type of a variable is determined at runtime. This is different from statically typed languages, where the type of a variable is known at compile time. 



// we use typeof function to find the type of datatype used 
console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof bigNumber);
console.log(typeof heroes);
console.log(typeof myObj);
console.log(typeof myFunction);



