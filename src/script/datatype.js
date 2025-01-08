let name = "John";
console.log(typeof name); // Output: "string"

let age = 25;
console.log(typeof age); // Output: "number"

let largeNumber = 1234567890123456789012345678901234567890n;
console.log(typeof largeNumber); // Output: "bigint"

let isValid = true;
console.log(typeof isValid); // Output: "boolean"

let value;
console.log(typeof value); 

let data = null;
console.log(typeof data); // Output: "object" (historical bug in JavaScript)


let uniqueId = Symbol("id");
console.log(typeof uniqueId); // Output: "symbol"


let person = { name: "Alice", age: 30 };
console.log(typeof person); // Output: "object"


let numbers = [1, 2, 3, 4];
console.log(typeof numbers); // Output: "object"


function greet() {
    return "Hello!";
  }
  console.log(typeof greet); // Output: "function"
  