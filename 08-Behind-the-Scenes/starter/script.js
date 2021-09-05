'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
      // firstName is 'Steven'
    let output = `${firstName} are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1991 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW varialble with same name as outer scope's variable
      const firstName = 'Steven'

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!'

      // firstName is 'Steven'
      const str = `Oh, and you're a millenial, ${firstName}`
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      console.log(output)
    }
    // block scopeにアクセスできない
    // console.log(str);

    // こっちはアクセスできる
    // var is function scope not block scope
    console.log(millenial);
    // アクセスできない
    // console.log(add(2, 3));

  }
  printAge();
  return age;
}

// global scope
const firstName = 'Jonas';
calcAge(1991);
// can't access
// console.log(age);
// printAge();
