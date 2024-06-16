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
const calAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calAverage(44,23,71);
const scoreKoalas = calAverage(65,54,49);
const averageScores = `Dolphins and koalas both attempted the test and they both has the following scores, dolphins has ${scoreDolphins} while koalas has ${scoreKoalas}`;
console.log(scoreDolphins,scoreKoalas,averageScores);
  