// there are two ways to declare objects using CONSTRUCTORS and LITERALS
// singleton is made using CONSTRUCTORS
// Object.create -> OBJECT DECLARED USING CONSTRUCTORS method

// OBJECTS ARE IN THE FORM OF KEY AND VALUE PAIR!

// object literals METHOD

const mySym = Symbol("key1")  //this is a symbol datatype


const JsUser = {
    name: "Ravi",
    "full name": "Kumar Ravi",
    [mySym]: "mykey1",  //this is the correct way to declare symbol datatype as key of an object using [] bracket
    age: 21,
    location: "Ranchi",
    email: "ravi@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)  // dot is often used to acess the keys of obj but in some cases we have to use [] brackets as there is no other option.
// console.log(JsUser["email"]) //ANOTHER WAY TO ACCESS OBJECT
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
//console.log(typeof mySym);

JsUser.email = "ravi@chatgpt.com"  //email changed that is value is overriden
// Object.freeze(JsUser)  //freeze doesnt allow to change the value of the object
JsUser.email = "ravi@microsoft.com"  // this email will not show bcz freeze function is used
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  //this is used to reference the same object
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

