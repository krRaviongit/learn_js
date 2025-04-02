// ************************* NUMBERS *********************************************

const score = 400;
// console.log(score);

const balance = new Number(100);  // casted as a number(object)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(typeof balance);
// console.log(balance.toString());

// console.log(balance.toFixed(2));  // used in e-commerce website while calculating GST wgera for precision. Here 2 tells number of values after decimal places 
  
const otherNumber = 169.7685;
// console.log(otherNumber.toPrecision(3));  //how much digits you want with precision, It will return a string value.

const hundred = 10000000;
// console.log(hundred.toLocaleString());  // US Standards
// console.log(hundred.toLocaleString('en-IN'));  // Indian Standards

// There are more properties which can be implemented on Number DATA TYPE like .max number , .min number , .max_safe_number , .min_safe_number  etccc... i can check all the properties used for Number on console



// ------------------------------- MATHS ----------------------------------------

// console.log(Math);
// console.log(Math.abs(-4));  // gives positive values
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));  // rounds a number UP to the nearest integer //5
// console.log(Math.floor(4.9)); // rounds a number DOWN to the nearest integer //4
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));


//Most used property of Math i.e. Math.random()

console.log(Math.random());  // gives random decimal number between 0 and 1.
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);


const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max - min + 1)) + min);