/*'use strict';
const age = 23;
console.log(age);
*/
//Functions declaration
/*function logger() {
    console.log('My name is jonas');
}
//calling/running/invoking function
logger()


function fruitProcessor(apples, oranges) {
    const juice =`juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
 const appleJuice = fruitProcessor(5, 0);
 console.log(appleJuice);
 const appleOrangeJuice = fruitProcessor(2, 4);
 console.log(appleOrangeJuice);
  
 function calAge1(birthYear){
    return 2037 - birthYear;
}
const age1 =calAge1(1991);
//function expression
const calAge2 = function(birthYear){
    return 2037 - birthYear;
}
const age2 =calAge2(1991);
console.log(age1, age2);

//Arrow function
// return can be ommited if it has a single function
const calAge3 = birthYear => 2037 - birthYear;
const age3 = calAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires from government service in ${retirement}years`;
}
console.log(yearsUntilRetirement(1991, 'jonas'));
*/
// functions calling other functtions
/*function cutFruitPieces(fruit) {
    return fruit * 3;
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice =`juice with ${applePieces} of apples and ${orangePieces} pieces of oranges`;
    return juice;
}
console.log(fruitProcessor(2, 3));
*/
//chanllenge #1
//1
/*
const calAverage = (a, b, c) => (a + b + c) / 3;
//2
const scoreDolphins = calAverage(44, 23, 71);
const scoreKoalas = calAverage(65, 54, 49);
//3
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins * 2 > avgKoalas) {
    console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
  } else if (avgKoalas * 2 > avgDolphins) {
    console.log(`koalas win ${avgKoalas} vs. ${avgDolphins}`);
  } else {
    console.log(`No team wins.`);
  }
};
console.log(checkWinner(scoreDolphins,scoreKoalas));

/*
const calAverage2 = function(nun1,nun2,nun3){
    const averageScore =(nun1 + nun2 + nun3) / 3;
    return averageScore;
}
*/
//ARRAY
/*
const friends = ['michael', 'john', 'steven'];
console.log(friends);
const years = new Array(1991, 1992, 1993);
console.log(years);
console.log(friends[0]);
friends[2] = 'jay';
console.log(friends);
const firstName = 'jonas';
const jonas = [firstName, 'schedtman', 2037 - 1991, 'teacher', friends];
console.log(jonas);
*/
//push element adds element to the end of the array
/*const friends = ['michael', 'john', 'steven'];
const newLength = friends.push ('jay');
console.log(newLength);
// unshift element adds element to the beginning of the array
friends.unshift('sarah');
console.log(friends);
//pop element removes the last element 
friends.pop();
console.log(friends);
//shift element removes the first element
friends.shift();
console.log(friends);
// indexOf shows the an element is in an array
console.log(friends.indexOf('john'));
// includes element shows if an element is in the array and if its not in the array by using true or false
console.log(friends.includes('jennifer'));
console.log(friends.includes('john'));
*/
//challenge #2
//1
/*
const calcTip = function (billValue){
return billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
};
/*const bills [125, 555, 44];
console.log(bills);*/
/*const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);
*/
//object
const ozioma = {
  firstName: 'Agholor',
  lastName: 'Ozioma',
  birthYear: 2001,
  job: 'teacher',
  friends: ['Osarugue', 'chisom', 'Arosa'],
  hasDriverLicence: true,
  calcAge: function() {
    this.age = 2024 - this.birthYear;
    return this.age;
   console.log(ozioma.calcAge());
   /* console.log(this);
    return 2024 - this.birthYear;*/
  }
};
console.log(ozioma.age);
console.log(ozioma.age);
//console.log(ozioma['calcAge'](2001));

/*calcAge: function() {
  this.age = 2024 - this.birthYear;
  return this.age;
  console.log(ozioma.calcAge());
  console.log(ozioma.age);
};*/

console.log(`${ozioma.lastName} is a ${ozioma.calcAge()} years old ${ozioma.job}, and she has ${this.hasDriverLicence ? 'a' : 'no'} driver's licence`);

/*console.log(ozioma);
console.log(`${ozioma.firstName} has ${ozioma.friends.length} friends and her bestfriend is called ${ozioma.friends[0]} `);
*/