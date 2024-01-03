// Define the function expression (divide)
let numerator = 16
let denominator = 4
const divide = function (numerator, denominator) {
  if (denominator === 0) {
    return "Cannot divide by zero";
  }
  return numerator / denominator;
};

// Situation where the arrow function is used
const square = (num) => num * num;

console.log(divide(16, 4)*5);
console.log(divide(16, 0)); 
console.log(square(5));

// Declare a function using a function expression
const greet = function (name) {
  return `Hello, ${name}!`;
};

// Declare a function using arrow syntax
const add = (a, b) => a + b;

// Using arrow function
const squareAll = nums => nums.map(num => num ** 2);

// Showing results
console.log(greet("John"));
console.log(add(2, 3));
console.log(squareAll([1, 2, 3]));

  