import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// function double(x) {
//   return x * 2;
// }

// const newNumbers = numbers.map(double);

// numbers.forEach(double);

// var newNumbers = [];
// numbers.forEach(function(x) {
//   newNumbers.push(x * 2);
// })

// const newNumbers = numbers.map(function double(x) {
//   return x * 2;
// })

// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

// const newNumbers = numbers.filter(function (num) {
//   return num < 10;
// });

// const newNumbers = [];

// numbers.forEach(function(number) {
//   if (number > 10)
//     newNumbers.push(number);
// })

// console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.

// var newNumber = 0;
// numbers.forEach(function(currentNumber) {
//   newNumber += currentNumber;
// })

const sum = numbers.reduce(function (accumulator, currentNumber) {
  console.log("accumulator = " + accumulator);
  console.log("currentNumber = " + currentNumber);
  return accumulator + currentNumber;
});

console.log(sum);

//Find - find the first item that matches from an array.

const foundNumber = numbers.find(function (num) {
  return num > 10;
});

console.log("foundNumber - " + foundNumber);

//FindIndex - find the index of the first item that matches.
const index = numbers.findIndex(function (num) {
  return num > 10;
});

console.log("index - " + index);

var meanings = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(meanings);
