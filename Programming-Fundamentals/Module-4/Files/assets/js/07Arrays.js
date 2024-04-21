/* 
  Developer: Roderick Bernardo
  Purpose: JS Arrays demo
*/

// Array of strings
let courseNames = ["CHM101", "PSY101", "GEO101", "MTH101"];

// Can be accessed by index number
console.log(`courseNames`, courseNames);
console.log(`courseNames[0]`, courseNames[0]); // CHM101
console.log(`courseNames[1]`, courseNames[1]); // PSY101
console.log(`courseNames[2]`, courseNames[2]); // GEO101
console.log(`courseNames[3]`, courseNames[3]); // MTH101

// Array of objects
let countryInformation = [
  { code: "CA", name: "Canada" },
  { code: "USA", name: "United States" },
  { code: "MX", name: "Mexico" },
];

// Can be accessed by index number
console.log(`countryInformation`, countryInformation);
console.log(`countryInformation[0]`, countryInformation[0]); // { code: "CA", name: "Canada" }

// Properties can be accessed by
console.log(`countryInformation[0].code`, countryInformation[0].code);
console.log(`countryInformation[0].name`, countryInformation[0].name);

// push(value)	Adds a value to the end of the array
let numsPush = [2, 4, 6];
console.log("numsPush Before:", numsPush);
console.log(`numsPush.push(8);`);
numsPush.push(8); // nums = [2, 4, 6, 8]
console.log("numsPush After:", numsPush);

// pop()	Removes the last array element and returns the element
let numsPop = [2, 4, 6];
console.log("numsPop Before:", numsPop);
console.log("numsPop.pop() returns:", numsPop.pop()); // returns 6, nums = [2, 4]
console.log("numsPop After:", numsPop);

// unshift(value)	Adds a value to the beginning of the array
let numsUnshift = [2, 4, 6];
console.log("numsUnshift Before:", numsUnshift);
console.log(`numsUnshift.unshift(0);`);
numsUnshift.unshift(0); // nums = [0, 2, 4, 6]
console.log("numsUnshift After:", numsUnshift);

// shift()	Removes the first array element and returns the element
let numsShift = [2, 4, 6];
console.log("numsShift Before:", numsShift);
console.log("numsShift.shift() returns:", numsShift.shift()); // returns 2, nums = [4, 6]
console.log("numsShift After:", numsShift);

// splice(startingIndex, numElemToDelete, valuesToAdd)	Adds or removes elements from anywhere in the array and returns the deleted elements (if any)
let numsSplice = [2, 4, 6, 8, 10];

// Deletes all elements from index 3 to the end
console.log(`Before numsSplice`, numsSplice);
console.log(
  `Deletes all elements from index 3 to the end numsSplice.splice(3);`,
  numsSplice.splice(3)
); // nums = [2, 4, 6]
console.log(`After numsSplice`, numsSplice);

// Deletes 2 elements starting at index 0
console.log(`Before numsSplice`, numsSplice);
console.log(
  `Deletes 2 elements starting at index 0 numsSplice.splice(0, 2);`,
  numsSplice.splice(0, 2)
); // nums = [6]
console.log(`After numsSplice`, numsSplice);

// Adds 3, 5 starting at index 0
console.log(`Before numsSplice`, numsSplice);
console.log(
  `Adds 3, 5 starting at index 0 numsSplice.splice(0, 0, 3, 5);`,
  numsSplice.splice(0, 0, 3, 5)
); // nums = [3, 5, 6]
console.log(`After numsSplice`, numsSplice);

// Adds 7, 9, 11 starting at index 2
console.log(`Before numsSplice`, numsSplice);
console.log(
  `Adds 7, 9, 11 starting at index 2 numsSplice.splice(2, 0, 7, 9, 11);`,
  numsSplice.splice(2, 0, 7, 9, 11)
); // nums = [3, 5, 7, 9, 11, 6]
console.log(`After numsSplice`, numsSplice);

// Array looping
let autos = ["Chevrolet", "Dodge", "Ford", "Ram"];
console.log(`autos`, autos);
console.log(`for loop`);
// for loop using index and array length
for (let index = 0; index < autos.length; index++) {
  console.log(autos[index]);
}

console.log(`for of loop`);
// for of loop
for (let auto of autos) {
  console.log(auto);
}

console.log(`forEach loop function expression`);
// forEach using function expression
autos.forEach(function (value, index) {
  console.log(value, index);
});

console.log(`forEach loop arrow function`);
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

console.log(`totalValue([1, 2, 3, 4, 5])`, totalValue([1, 2, 3, 4, 5]));

let scores = [80, 92, 75, 64, 88, 92];
console.log(scores);
console.log(`scores.indexOf(92)`, scores.indexOf(92)); // 1
console.log(`scores.indexOf(92, 2)`, scores.indexOf(92, 2)); // 5
console.log(`scores.indexOf(100)`, scores.indexOf(100)); // -1
console.log(`scores.lastIndexOf(92)`, scores.lastIndexOf(92)); // 5
console.log(`scores.lastIndexOf(92, 4)`, scores.lastIndexOf(92, 4)); // 1
console.log(`scores.lastIndexOf(50)`, scores.lastIndexOf(50)); // -1

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
