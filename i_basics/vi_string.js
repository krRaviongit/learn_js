const name = "Kumar Ravi";  //string declare method 1
const repoCount = 24;

//technique 1: To concatenate strings
// console.log(name + " has " + repoCount + " repositories");


//technique 2: String Interpolation technique to concatenate strings.
// we use `` (backticks)for this method.
//${} -> This Placeholder is used to dynamically inject variables values and methods inside string literal.
console.log(`Hello my name is ${name} and I have ${repoCount} repositories.`); //modern way


//string declare method 2
let userName = new String("Badass Ravi");

// console.log(userName);

//*********** DIFFERENT OPERATIONS ON STRINGS *******************/

// console.log(userName[1]); //give character at given index of String.
// // console.log(userName.__proto__); // gives object symbol in output.

// console.log(userName.length);
// console.log(userName.toUpperCase());
// console.log(userName.charAt(6)); //give space in output
// console.log(userName.charAt(7));
// console.log(userName.indexOf('R'));


const newString = userName.substring(0,4);  //end value is exclusive i.e only till 3rd index OR endIndex-1  value will be printed.
// console.log(newString);

const anotherString = userName.slice(-5,-3); //neg index means start from last and character 'i' will denote -1 value as index.
// slice can handle negative indices
// console.log(anotherString);

const nayaString = "   Ravi Bhai        ";
// console.log(nayaString);
// console.log(nayaString.trim()); //used to delete blankspaces from left and right.

const url ="https://kumarravi.com/badass%20ravi";
console.log(url.replace('%20', '-'));


// includes() method
// console.log(url.includes('kumar'));
// console.log(url.includes('bhayia'));


let value = "kumar-ravi-don-badass";
console.log(value.split('-')) //converts string objects into array by taking a separator in its parameter
