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
// console.log(typeof score);
// console.log(typeof scoreValue);
// console.log(typeof isLoggedIn);
// console.log(typeof outsideTemp);
// console.log(typeof userEmail);
// console.log(typeof id);
// console.log(typeof bigNumber);
// console.log(typeof heroes);
// console.log(typeof myObj);
// console.log(typeof myFunction);







//*****************************************************************************/
                                  /*MEMORY*/

//Primitive DataTypes are stored in STACK Memory.
//It uses the concept of call by value where CHANGES are made in the COPY of the variables.

//EXAMPLE
let userName = "ravikumar";
let anotherName = userName;

anotherName = "badassravikumar"  //changes made to it will not affect the value of userName as earlier the COPY of value of userName was passed to anotherName.

// console.log(userName);
// console.log(anotherName);




//Non Primitive DataTypes uses HEAP Memory.
//It uses the concept of call by reference where CHANGES are made in the reference of the variables i.e the ACTUAL VALUES are changed.

//EXAMPLE

let userOne = {
    email: "ravi@google.com",
    upi: "ravi@ybl"
}

let userTwo = userOne  //REFERENCE of value is passed here from HEAP memory to the variable userTwo which is present in STACK memory.

console.log(userTwo.email);


userTwo.email = "badass@yahoo.com" //CHANGE made here will also reflect in the email of userOne as REFERENCE was passed earlier.

console.log(userOne.email);
console.log(userTwo.email);






