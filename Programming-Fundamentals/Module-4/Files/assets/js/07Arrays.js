/* 
  Developer: Roderick Bernardo
  Purpose: JS Arrays demo
*/

// Array of strings
let courseNames = ["CHM101", "PSY101", "GEO101", "MTH101"];

// Can be accessed by index number
console.log(courseNames[0]); // CHM101
console.log(courseNames[1]); // PSY101
console.log(courseNames[2]); // GEO101
console.log(courseNames[3]); // MTH101

// Array of objects
let countryInformation = [
  { code: "CA", name: "Canada" },
  { code: "USA", name: "United States" },
  { code: "MX", name: "Mexico" },
];

// Can be accessed by index number
console.log(countryInformation[0]); // { code: "CA", name: "Canada" }

// Properties can be accessed by
console.log(countryInformation[0].code);
console.log(countryInformation[0].name);

// push(value)	Adds a value to the end of the array
let numsPush = [2, 4, 6];
console.log("Before:", numsPush);
numsPush.push(8); // nums = [2, 4, 6, 8]
console.log("After:", numsPush);

// pop()	Removes the last array element and returns the element
let numsPop = [2, 4, 6];
console.log("Before:", numsPop);
console.log("pop() returns:", numsPop.pop()); // returns 6, nums = [2, 4]
console.log("After:", numsPop);

// unshift(value)	Adds a value to the beginning of the array
let numsUnshift = [2, 4, 6];
console.log("Before:", numsUnshift);
numsUnshift.unshift(0); // nums = [0, 2, 4, 6]
console.log("After:", numsUnshift);

// shift()	Removes the first array element and returns the element
let numsShift = [2, 4, 6];
console.log("Before:", numsShift);
console.log("shift() returns:", numsShift.shift()); // returns 2, nums = [4, 6]
console.log("After:", numsShift);

// splice(startingIndex, numElemToDelete, valuesToAdd)	Adds or removes elements from anywhere in the array and returns the deleted elements (if any)
let numsSplice = [2, 4, 6, 8, 10];

// Deletes all elements from index 3 to the end
numsSplice.splice(3); // nums = [2, 4, 6]

// Deletes 2 elements starting at index 0
numsSplice.splice(0, 2); // nums = [6]

// Adds 3, 5 starting at index 0
numsSplice.splice(0, 0, 3, 5); // nums = [3, 5, 6]

// Adds 7, 9, 11 starting at index 2
numsSplice.splice(2, 0, 7, 9, 11); // nums = [3, 5, 7, 9, 11, 6]

// Array looping
let autos = ["Chevrolet", "Dodge", "Ford", "Ram"];

// for loop using index and array length
for (let index = 0; index < autos.length; index++) {
  console.log(autos[index]);
}

// for of loop
for (let auto of autos) {
  console.log(auto);
}

// forEach using function expression
autos.forEach(function (value, index) {
  console.log(value, index);
});

// forEach using the arrow function
autos.forEach((value, index) => {
  console.log(value, index);
});

// Passing an array to a function
function totalValue(numberElements) {
  let numberElementSum = 0;
  for (let numberElement of numberElements) {
    numberElementSum += numberElement;
  }

  return numberElementSum;
}

console.log("totalValue:", totalValue([1, 2, 3, 4, 5]));

let scores = [80, 92, 75, 64, 88, 92];

console.log(scores, scores.indexOf(92)); // 1
console.log(scores, scores.indexOf(92, 2)); // 5
console.log(scores, scores.indexOf(100)); // -1
console.log(scores, scores.lastIndexOf(92)); // 5
console.log(scores, scores.lastIndexOf(92, 4)); // 1
console.log(scores, scores.lastIndexOf(50)); // -1

let numbers = [200, 30, 1000, 11, 4];

console.log("Default:", numbers);

// Sort based on Unicode values: [1000, 11, 200, 30, 4]
console.log("Default sort()", numbers.sort());

let sortedNumbers;

// Sort numbers in ascending order: [4, 11, 30, 200, 1000]
sortedNumbers = numbers.sort((a, b) => {
  return a - b;
});

console.log("ascending:", sortedNumbers);

// Sort numbers in descending order: [1000, 200, 30, 11, 4]
sortedNumbers = numbers.sort((a, b) => {
  return b - a;
});

console.log("descending:", sortedNumbers);
