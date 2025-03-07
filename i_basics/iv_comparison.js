// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)


//*** This types of conversion must be avoided because it brings inconsistency ***

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);
//NOTE: equality check operator and comparisons operator work differently
// Comparisons convert Null to a number treating it as a zero

// console.log(undefined == 0)
// console.log(undefined > 0)
// console.log(undefined < 0)
//************************************************************************/

// "===" strictly checkes both value and datatypes whereas "=="  only checks the values
console.log("2" == 2);  //automatic conversion hence gives true
console.log("2" === 2); //false

