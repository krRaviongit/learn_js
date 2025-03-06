const accountId = 6996   //this is how a constant value is declared in JS
let accountEmail = "krravigoogle@gmail.com"
var accountPassword = "12345"
accountCity = "Ranchi"

accountEmail = "raviuber@yahoo.com"
accountPassword = "2222"
accountCity = "Ghaziabad"  //This is also a way to declare a variable but we prefer not use this technique.

let accountState;  //here value is undefined 

//accountId = 69 //const value cant be changed; not allowed

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

//In JavaScript putting ";" after the end of statement is optional.

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])