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


const calcTip = (bill) => {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15
  } else {
    return bill * 0.2
  }
}
const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length -1])]
console.log(tips)
const totals = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[bills.length - 1] + tips[tips.length - 1],
];
console.log(totals)
