function greet() {
    console.log("Hello, world!");
}

function greet(name) {
    console.log("Hello, " + name + "!");
}


greet("Alice");  // Output: Hello, Alice!
greet("Bob");    // Output: Hello, Bob!


greet();  // Output: Hello, world!
