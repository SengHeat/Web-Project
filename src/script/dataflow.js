
let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote.");
}

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}


let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}


for (let i = 0; i < 5; i++) {
    console.log("Count:", i);
  }


let i = 0;

do {
  console.log("Count:", i);
  i++;
} while (i < 5);

let colors = ["red", "blue", "green"];

for (let color of colors) {
  console.log(color);
}

let person = { name: "Alice", age: 30 };

for (let key in person) {
  console.log(key, ":", person[key]);
}

try {
    let result = 10 / 0; // No error here, division by zero is valid in JavaScript
    console.log(result);
    nonExistentFunction(); // This will throw an error
  } catch (error) {
    console.log("An error occurred:", error.message);
  }

  try {
    console.log("Trying something...");
  } finally {
    console.log("Cleaning up...");
  }

  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break; // Exit the loop when i is 5
    }
    console.log(i);
  }

  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  