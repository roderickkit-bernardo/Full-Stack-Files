/* 
  Developer: Roderick Bernardo
  Purpose: JS Functions demo
*/

// Function without a return and parameters
function sayGreeting() {
  console.log("Hello");
}

// Function call
console.log(`Calling function sayGreeting();`);
sayGreeting();

// Function without a return but with parameters
function displayName(firstName, lastName) {
  console.log(lastName + ", " + firstName);
}

// Function call
console.log(`Calling function displayName("Bill", "Gates");`);
displayName("Bill", "Gates");

// Function with a return statement and parameters
function addNumbers(a, b) {
  const sum = a + b;
  return sum;
}

// Function call
const sum = addNumbers(1, 2);
console.log(`Calling function and assigning const sum = addNumbers(1, 2);`);
console.log(sum);

// Function expression
const calculateAreaFE = function (length, width) {
  const area = length * width;
  return area;
};

// Function call
console.log(`Calling function expression calculateAreaFE(5, 5);`);
console.log(calculateAreaFE(5, 5));

// Arrow function
const calculateAreaAF = (length, width) => {
  const area = length * width;
  return area;
};

// Function call
console.log(`Calling arrow function calculateAreaAF(5, 5);`);
console.log(calculateAreaAF(5, 5));
