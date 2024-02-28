function sayHello(theName, theGender) {
  if (theGender === "Male") {
    console.log(`Hello Mr ${theName}`);
  } if (theGender === "Female") {
    console.log(`Hello Miss ${theName}`);
  } else {
    console.log(`Hello ${theName}`);
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
// --------------------------------------------------------------------------------------
function calculate(firstNum, secondNum, operation) {
    if (operation === "add") {
      console.log(firstNum + secondNum);
    } if (operation === "subtract") {
      console.log(firstNum - secondNum);
    } if (operation === "multiply") {
      console.log(firstNum * secondNum);
    } else {
      console.log("Second Number Not Found");
    }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600
// -------------------------------------------------------------------------------------------
function createSelectBox(startYear, endYear) {
  for (let i = startYear; i <= endYear; i++) {
    let select = document.createElement("select")
    let option = document.createElement("option")
    let optionText = document.createTextNode(i)
    option.appendChild(optionText)
    select.appendChild(option)
    document.body.appendChild(select)
    
  }
}
createSelectBox(2000, 2021);
// ---------------------------------------------------------------------------------------
function addition(num1) {
  return  num1 += 1
}

console.log(addition(1)); // 2
console.log(addition(4)); // 5
console.log(addition(-1)); // 0
// ------------------------------------------------------------------------------
function remainder(num1, num2) {
  return num1 % num2
}
console.log(remainder(1, 3)); // 1
console.log(remainder(-9, 45)); // -9
// -------------------------------------------------------------------------------------------
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function EvenOrOdd(num) {
  return num % 2 == 0 ? "Even" : "Odd"
}
console.log(EvenOrOdd(2))
// ----------------------------------------------------------------------------------------
// We need a function that can transform a number (integer) into a string.
function numberToString(num) {
  return num.toString()
}
console.log(numberToString(123))
// --------------------------------------------------------------------------------------
// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).
function opposite(num) {
  return -num
}
console.log(opposite(-14));
// Complete the solution so that it reverses the string passed into it.
function solution(str){
  return str.split("").reverse().join("");
}
console.log(solution("ahmed"));
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
function makeNegative(num) {
  return num < 0 ? num : -num
}
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
function boolToWord( bool ){
  return bool === true ? "Yes" : "No"
}
// You get an array of numbers, return the sum of all of the positives ones.
function positiveSum(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      res += arr[i]
    }
  }
  return res
}
console.log(positiveSum([1, -4, 7, 12]));
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
function repeatStr (n, s) {
  return s.repeat(n);
}
console.log(repeatStr(5, "hello"));
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.
function removeChar(str){
  //You got this!
  // return str.length > 2 ? str.split("").shift().pop().join("") : str;
  // if (str.length > 2) {
  //   return str.split("").shift().join("")
  // } else {
  //   return str
  // }
  return str.slice(1, -1);

 };
console.log(removeChar("ahmed"));
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
function squareSum(numbers){
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i] ** 2; 
  }
  return sum;
}
console.log(squareSum([1, 2, 2]));
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.
var summation = function (num) {
  let res = 0;
  for (let i = 1; i <= num; i++) {
      res += i;
  }
  return res;
}
console.log(summation(2));
// Extract the letters, exclude the numbers, and combine the letters to form a word
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"]; // Elzero
let st = mix.map((el)=>{
  return isNaN(parseInt(el)) ? el : ""
}).reduce((acc, cur)=>{
  return acc + cur
})
console.log(st);
// Extract the numbers and exclude the letters, then convert the positive numbers to negative and vice versa
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"]; // [-1, -10, 10, 20, -5, -3]
let conv = numsAndStrings.filter((el)=>{
  return !isNaN(parseInt(el))
}).map((ele)=>{
  return -ele
})
console.log(conv);





