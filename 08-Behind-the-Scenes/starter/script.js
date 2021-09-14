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
// console.log(this);
// // Window {window: Window, self: Window, document: document, name: "", location: Location, …}

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   // simple function call
//   console.log(this);
//   //undefined
// }
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
//   // window, globalThis
// }
// calcAgeArrow(1991);

// // var firstName = 'Matilda'

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },

//   greet: () => {
//     // arrow functionのときはglobalThisになる。this.firstNameはundefinedになる
//     // この場合、 94行目の varを呼んでしまう
//     console.log(this)
//     console.log(`Hey ${this.firstName}`)
//   },
// };
// jonas.calcAge();
// // jonas.greet
// jonas.greet();

// const matilda = {
//   year: 2017,
// }

// matilda.calcAge = jonas.calcAge
// matilda.calcAge();

// const f = jonas.calcAge;
// f();

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // }
    // isMillenial();

    // Solution 2
    // allow functionはparentsからthisを呼ぶから
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    }
    isMillenial();
  },
};
jonas.calcAge();

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);

//99. Primitives vs. Objects (Primitivevs. Reference Types)

//Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference Types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);
