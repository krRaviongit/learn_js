// date is also an object in js
// date objects are calculated  in milliseconds time since jan 1, 1970 (choosen)
// read about Temporal API

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString);
// console.log(myDate.toDateString);
// console.log(myDate.toLocaleString);
// console.log(typeof myDate);

let mycreatedDate = new Date(2025,0,20);  // 0 is january month in js
console.log(mycreatedDate);
console.log(mycreatedDate.toDateString());  // for readable format

// let mycreatedDates = new Date(2025,0,20,5,3); 
// console.log(mycreatedDates.toLocaleString());

let mycreatedDates = new Date("2025-01-15"); 
console.log(mycreatedDates.toLocaleString());


// helpful for making quizzes to see the fastest ans
let myTimeStamp = Date.now();
// console.log(myTimeStamp);  // gives millisec value from 1 jan 1970
// console.log(mycreatedDates.getTime());

console.log(Math.floor(Date.now()/1000));  //gives time in sec



let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());



//useful
newDate.toLocaleString('default',{
    weekday: "long",
})