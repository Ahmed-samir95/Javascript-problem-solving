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












