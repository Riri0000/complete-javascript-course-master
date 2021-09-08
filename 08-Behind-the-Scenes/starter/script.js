'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//       // firstName is 'Steven'
//     let output = `${firstName} are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1991 && birthYear <= 1996) {
//       var millenial = true;
//       // Creating NEW varialble with same name as outer scope's variable
//       const firstName = 'Steven'

//       // Reassigning outer scope's variable
//       output = 'NEW OUTPUT!'

//       // firstName is 'Steven'
//       const str = `Oh, and you're a millenial, ${firstName}`
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//       console.log(output)
//     }
//     // block scopeにアクセスできない
//     // console.log(str);

//     // こっちはアクセスできる
//     // var is function scope not block scope
//     console.log(millenial);
//     // アクセスできない
//     // console.log(add(2, 3));

//   }
//   printAge();
//   return age;
// }

// // global scope
// const firstName = 'Jonas';
// calcAge(1991);
// // can't access
// // console.log(age);
// // printAge();

// // Variables
// console.log(me);
// // ReferenceError: Cannot access 'job' before initialization
// // console.log(job);
// // console.log(year);

// var me = "Jonas";
// let job = 'teacher';
// const year = 1991;

// //Functions
// console.log(addDecl(2, 3));

// // ReferenceError: Cannot access 'addExpr' before initialization
// // console.log(addExpr(2,3));
// // console.log(addArrow(2,3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// }

// const addArrow = (a,b) => a+b

// Event listner
console.log(this);
// Window {window: Window, self: Window, document: document, name: "", location: Location, …}

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // simple function call
  console.log(this);
  //undefined
}
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
  // window, globalThis
}
calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  }
}
jonas.calcAge();

const matilda = {
  year: 2017,
}

matilda.calcAge = jonas.calcAge
matilda.calcAge();

const f = jonas.calcAge;
f();
