// Developer: Roderick Bernardo
// Purpose: Spread operator demo

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2];

// console.log(array3); // Output: [1, 2, 3, 4, 5, 6]

function sum(firstParam, secondParam, thirdParam) {
  return firstParam + secondParam + thirdParam;
}

const numbers = [1, 2, 3];
// console.log(sum(...numbers)); // Output: 6

/*
  Shallow copy is a copy of an object or an array where only the top-level structure is duplicated.
  This means that the original object and the copied object share references to the same nested objects or arrays
*/

// // Attributes a and b are top level
const obj1 = { a: 1, b: 2, c: { nestedObject: "original" } };
// Attributes d and e are top level
const obj2 = { d: 3, e: 4 };
const obj3 = { ...obj1, ...obj2 };

// console.log(obj3); // Output: { a: 1, b: 2, c: { nestedObject: 'original' }, d: 3, e: 4 }
// obj1.c.nestedObject = "modified";
// console.log(obj3); // Output: { a: 1, b: 2, c: { nestedObject: 'modified' }, d: 3, e: 4 }

const header = [{ text: "header" }];
const content = [{ text: "content" }];
const footer = [{ text: "footer" }];
const index = [...header, ...content, ...footer];

console.log(header);
console.log(content);
console.log(footer);
console.log(index);

let courseObject = {
  courseName: "courseName",
  courseDescription: "courseDescription",
  courseCRN: "courseCRN",
};

// console.log(courseObject);

// Can be used to update just one element
// courseObject = { ...courseObject, courseName: "courseNameUpdated" };
// Equivalent to this:
// courseObject.courseName = "courseNameUpdated";

// console.log(courseObject);
