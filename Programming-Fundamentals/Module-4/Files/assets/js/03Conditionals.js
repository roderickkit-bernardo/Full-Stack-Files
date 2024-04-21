/* 
  Developer: Roderick Bernardo
  Purpose: JS Conditionals demo
*/

// Logic using if, not efficient since all of the conditions will be checked
let numberOfCourses = 5;

if (numberOfCourses >= 3) {
  console.log(
    "Condition: numberOfCourses >= 3",
    "You are taking " + numberOfCourses + " which is full time load."
  );
}

if (numberOfCourses < 3) {
  console.log(
    "Condition: numberOfCourses < 3",
    "You are taking " + numberOfCourses + " which is part time load."
  );
}

// Logic using if else, better because it will only execute
// one code block
if (numberOfCourses >= 3) {
  console.log(
    "Condition: numberOfCourses >= 3",
    "You are taking " + numberOfCourses + " which is full time load."
  );
} else {
  console.log(
    "Condition: numberOfCourses < 3",
    "You are taking " + numberOfCourses + " which is part time load."
  );
}

// == Equality
console.log(`2 == 2`, 2 == 2); // true
console.log(`"bat" == "bat"`, "bat" == "bat"); // true

// !=	Inequality
console.log(`2 != 3`, 2 != 3); // true
console.log(`"bat" != "zoo"`, "bat" != "zoo"); // true

// ===	Identity
console.log(`2 === 2`, 2 === 2); // true
console.log(`"2" === 2`, "2" === 2); // false

// !==	Non-identity
console.log(`2 !== 2`, 2 !== 2); // false
console.log(`"2" !== 2`, "2" !== 2); // true

// < Less than
console.log(`2 < 3`, 2 < 3); // true
console.log(`"bat" < "zoo"`, "bat" < "zoo"); // true

// <=	Less than or equal
console.log(2 <= 3); // true
console.log(`"bat" <= "bat"`, "bat" <= "bat"); // true

// >	Greater than
console.log(3 > 2); // true
console.log(`"zoo" > "bat"`, "zoo" > "bat"); // true

// >=	Greater than or equal
console.log(3 >= 2); // true
console.log(`"zoo" >= "zoo"`, "zoo" >= "zoo"); // true

const birthYear = 1959;
console.log("Nested logic Birth year " + birthYear + " is:");

if (birthYear >= 2010) {
  console.log("Alpha");
} else {
  if (birthYear >= 1997) {
    console.log("Gen Z");
  } else {
    if (birthYear >= 1981) {
      console.log("Millenial");
    } else {
      if (birthYear >= 1965) {
        console.log("Gen X");
      } else {
        if (birthYear >= 1946) {
          console.log("Baby Boomer");
        } else {
          console.log("Not assigned");
        }
      }
    }
  }
}

console.log("Non Nested logic Birth year " + birthYear + " is:");

if (birthYear >= 2010) {
  console.log("Alpha");
} else if (birthYear >= 1997) {
  console.log("Gen Z");
} else if (birthYear >= 1981) {
  console.log("Millenial");
} else if (birthYear >= 1965) {
  console.log("Gen X");
} else if (birthYear >= 1946) {
  console.log("Baby Boomer");
} else {
  console.log("Not assigned");
}

// Truthy
console.log("Truthy");
const myObject = {};
const myArray = [];

if (32) {
  console.log(`32 is`, true);
} else {
  console.log(false);
}

if ("cat") {
  console.log(`"cat is"`, true);
} else {
  console.log(false);
}

if (myObject) {
  console.log(myObject, `is`, true);
} else {
  console.log(false);
}

if (myArray) {
  console.log(myArray, `is`, true);
} else {
  console.log(false);
}

// Falsy
console.log("Falsy");
if (0) {
  console.log(true);
} else {
  console.log(`0 is`, false);
}

if ("") {
  console.log(true);
} else {
  console.log(`""`, false);
}

if (NaN) {
  console.log(true);
} else {
  console.log(`NaN`, false);
}

if (undefined) {
  console.log(true);
} else {
  console.log(`undefined`, false);
}

if (null) {
  console.log(true);
} else {
  console.log(`null`, false);
}

// Ternary
const food = "meat";
let vegan = food == "non-meat" ? true : false;

console.log("You chose food: " + food + " then you are vegan: " + vegan);

const carMake = "BMW";

switch (carMake) {
  case "Honda":
    console.log(carMake + " is a Japanese brand.");
    break;
  case "BMW":
    console.log(carMake + " is a German brand.");
    break;
  default:
    console.log("Unknown car make.");
}
