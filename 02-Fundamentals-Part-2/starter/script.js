"use strict";

// let hasDriversLicnese = false;
// let passTest = true;

// if (passTest) hasDriversLicnese = true;
// if (hasDriversLicnese) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;

// function logger() {
//   console.log('My name is Sari');
// }

// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const applejuice = fruitProcessor(5, 0);
// console.log(applejuice)
// console.log(fruitProcessor(5, 0));

// function calcAge1(birthYeah) {
//   return 2037 - birthYeah;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// const calcAge2 = function(birthYeah) {
//   return 2037 - birthYeah;
// }

// const age2 = calcAge2(1991);
// console.log(age1, age2)

// const calcAge3 = birthYear => 2037 - birthYear
// const age3 = calcAge3(1991)
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Sari'))
// console.log(yearsUntilRetirement(1980, 'Jonas'))

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples)
//   const orangePieces = cutFruitPieces(oranges)

//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2,3))
///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

// my answer

// const calcAverage = (score1, score2, score3) => score1 + score2 + score3 / 3

//どうやってavgを引数に渡すか分からなかった…→普通に呼び出すときに引数に渡せばいいんだ
// const checkWinner = function () {
//   const avgDolhins = calcAverage(44, 23, 71);
//   const avgKoalas = calcAverage(65, 54, 49);
// ↑中にいれたら、数字変えられない…
//   if (avgDolhins >= avgKoalas * 2) {
//     console.log(`Dolhins win (${avgDolhins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= avgDolhins * 2) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
//   } else {
//     console.log('No winners!')
//   }
// }

// checkWinner()

// good answer
// const calcAverage = (a, b, c) => (a + b + c) / 3;

// let scoreDolphins = calcAverage(85, 54, 41);
// let scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas)

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolhins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log('No winners!')
//   }
// }

// checkWinner(scoreDolphins, scoreKoalas)

// const friends = ['Micheal', 'Stiven', 'Peter'];
// console.log(friends)

// const y = new Array(1990, 1991, 1992, 1993)

// console.log(friends.length)
// console.log(friends[friends.length -1])

// // arrayはconstでもmutable
// friends[2] = 'Jay'
// console.log(friends)

// const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', friends]
// console.log(jonas)

// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah
// }
// const years = [1990, 1967, 2008, 2010, 2021]

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length -1])]
// console.log(ages);

// Add elements
// const friends = ['Micheal', 'Steven', 'Peter'];
// const newLength = friends.push('Sari')
// console.log(friends)
// console.log(newLength)

// friends.unshift('John')
// console.log(friends)

// // Remove elements
// friends.pop(); //Last
// console.log(friends)
// const popped = friends.pop();
// console.log(popped)

// friends.shift() // First
// console.log(friends);

// console.log(friends.indexOf('Steven'))


// console.log(friends.includes('Steven'))
// console.log(friends.includes('Bob'))

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/


// const calcTip = (bill) => {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15
//   } else {
//     return bill * 0.2
//   }
// }
// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length -1])]
// console.log(tips)
// const totals = [
//   bills[0] + tips[0],
//   bills[1] + tips[1],
//   bills[bills.length - 1] + tips[tips.length - 1],
// ];
// console.log(totals)

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   // calcAge: function (birthYear) {
//   //   return 2037 - birthYear;
//   // }
//   // calcAge: function () {
//   //   console.log(this)
//   //   return 2037 - this.birthYear;
//   // }
//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age
//   },
//   getSummary: function () {
//     return `${this.firstName}is a ${this.calcAge()} old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
//   }
// };

// console.log(jonas.calcAge())
// // console.log(jonas['calcAge'](1991))
// console.log(jonas.age)

// //Challenge
// console.log(jonas.getSummary())

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2
//     return this.bmi
//   }
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// console.log(
//   `${mark.calcBMI() > john.calcBMI() ? "Mark" : "John"}'s BMI (${
//     mark.calcBMI() > john.calcBMI() ? mark.calcBMI() : john.calcBMI()
//   }) is higher than ${mark.calcBMI() > john.calcBMI() ? "John's" : "Mark's"} (${
//     mark.calcBMI() > john.calcBMI() ? john.calcBMI() : mark.calcBMI()
//   })!`
// );

// console.log('Lifrint weight repetition 1')

// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++){
//   console.log(`Lifrint weight repetition ${rep}`)
// }

// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];
// const types = [];

// for (let i = 0; i < jonas.length; i++){
//   console.log(jonas[i], typeof jonas[i])

//   // Filling types array
//   // types[i] = typeof jonas[i]

//   types.push(typeof jonas[i])
// }

// console.log(types)

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++){
//   ages.push(2037 - years[i])
// }
// console.log(ages)

// console.log('--- only strings ---')
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== 'string') continue;
//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log('--- Break with number ---')
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === 'number') break;
//   console.log(jonas[i], typeof jonas[i]);
// }

// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

// for (let i = jonas.length - 1; i >= 0; i--){
//   console.log(i, jonas[i])
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-----Starting exercise ${exercise}`)

//   for (let rep = 1; rep < 6; rep++){
//     console.log(`Lifting weight repetition ${rep}`)
//   }
// }

// for (let rep = 1; rep < 10; rep++){
//   console.log(`Lifting weight repetition ${rep}`)
// };

// let rep =1
// while (rep <= 10) {
//   console.log(`WHILE: Lifting weight repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6)

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`)
//   dice = Math.trunc(Math.random() * 6) + 1 ;
//   if(dice === 6) console.log('Loop is about to end...')
// }

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/


// const calcTip = (bills) => {
//   if (bills >= 50 && bills <= 300) {
//     return bills * 0.15;
//   } else {
//     return bills * 0.2;
//   }
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// const tips = []
// const totals = []

// for (let i = 0; i < bills.length; i++){
//   const tip = calcTip(bills[i])
//   tips.push(tip)
//   totals.push(bills[i] + tip)
// }
// console.log(bills, tips, totals)

// const calcAverage = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++){
//     sum += arr[i]
//   }
//   return sum / arr.length;
// }
// console.log(calcAverage(totals))
