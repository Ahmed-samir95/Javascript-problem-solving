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
