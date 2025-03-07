"use strict"; // treat all JS codes as newer version

// alert(3+3)  // we are using nodeJs not browser.

console.log(3
    +
    3)         //this way of writing is wrong because code readability should be given priority 

let name = "ravi"
let age = 21
let isLoggedIn = true
let state = null

//key points 
/*
Primitive DataTypes
number => 2 to the power 53
bigint dataType
string => ''  ""  ``   these are three techniques to write string data Type
boolean => true/false
null => standalone value
undefined => value is not assigned
symbol => mostly used in react to find uniqueness in different components


object
*/

console.log(typeof "badassravikumar") //typeof tells about the type of dataType used
console.log(typeof 69)
console.log(typeof false)
console.log(typeof "false")


console.log(typeof null) //output is "object"
console.log(typeof undefined) //output is "undefined"
