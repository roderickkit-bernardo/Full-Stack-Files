/* 
  Developer: Roderick Bernardo
  Purpose: JS Variables demo
*/

// Declare and initialize
let greeting = "Hello World";

// Display the value of the variable on the browser console
console.log("greeting: " + greeting);

// Declare
let courseName;

// Display the value of the variable on the browser console
// Since this variable was not initialized it will show as undefined
console.log("courseName: " + courseName);

// Assign a value
courseName = "Programming Fundametals";

// Display the value of the variable on the browser console
console.log("courseName: ", courseName);

// Variable naming styles
// Starts with a lowercase letter and then capitalizes the first letter of each subsequent word
let camelCase;

// Words are written in lowercase and separated by underscores (_)
let snake_case;

// A constant is an initialized variable whose value cannot change
const salary = 100000;

// An error message is generated when assigning a value to a const variable
// salary = 1;

// Data Types
// string - Group of characters delimited with 'single' or "double" quotes
let dogName = "waffles";
console.log("dogName Type: " + typeof dogName + " dogName Value: " + dogName);

// number	- Numbers with or without decimal places
let quantity = 100;
let price = 8.5;
console.log(
  "quantity Type: " + typeof quantity + " quantity Value: " + quantity
);
console.log("price Type: " + typeof price + " price Value: " + price);

// boolean - true or false
let isStudent = true;
console.log(
  "isStudent Type: " + typeof isStudent + " isStudent Value:" + isStudent
);

// array - List of items
let courses = [
  "Programming Fundamentals",
  "Frontend Development",
  "Frontend Development",
];

console.log("courses Type: " + typeof courses + " courses Value: " + courses);

// object	- Collection of property and value pairs
let book = {
  title: "Good Night Moon",
  author: "Margaret Wise Brown",
  ISBN10: "0694003611",
  ISBN13: "978-0694003617",
};

console.log("book Type: " + typeof courses + " book Value: " + courses);

// undefined - Variable that has not been assigned a value
let message;

console.log("message Type: " + typeof message + " message Value: " + message);

// null	- Intentionally absent of any object value
let petName = null;

console.log("petName Type: " + typeof petName + " petName Value: " + petName);
