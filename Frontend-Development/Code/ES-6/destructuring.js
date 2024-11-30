// Developer: Roderick Bernardo
// Purpose: Destructuring demo

// Array destructuring - Positioning matters
const numbers = [1, 2, 3];
const [first, second, third] = numbers;
// Same as above less compact
// const first = numbers[0];
// const second = numbers[1];
// const third = numbers[2];

// console.log(first);
// console.log(second);
// console.log(third);

// Object destructuring
// let country = { cCode: "MX", cName: "Mexico" };

// Attribute names need to match with object
// const { cCode, cName } = country;
// console.log(cCode, cName);

// // With default values, since the attribute names does not match then it would assign it
// const { countryCode = "CA", countryName = "Canada" } = country;
// console.log(countryCode, countryName);

// // Choose which attribute to use
let country = { c_code: "MX", c_name: "Mexico" };
// const { c_code } = country;

// console.log(c_code);

// // Can be used as function parameter
function display({ c_code, c_name }) {
  console.log("As function parameter", c_code, c_name);
}

display(country);
