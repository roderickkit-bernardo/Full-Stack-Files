/* 
  Developer: Roderick Bernardo
  Purpose: JS Arrays demo
*/

// Uncomment the "code" to see the result
// You can either see the output on the browser console
// or
// Use node to run this on the command line
// node <name_of_js_file>

// Array of strings
// let courseNames = ["CHM101", "PSY101", "GEO101", "MTH101"];
// index:            [0]        [1]       [2]       [3]

// Can be accessed by index number
// console.log(`courseNames`, courseNames);
// console.log(`courseNames[0]`, courseNames[0]); // CHM101
// console.log(`courseNames[1]`, courseNames[1]); // PSY101
// console.log(`courseNames[2]`, courseNames[2]); // GEO101
// console.log(`courseNames[3]`, courseNames[3]); // MTH101

// Array of objects
// let countryInformation = [
//   {
//     code: "CA",
//     name: "Canada",
//     population: 40,
//     "French name attribute": "French name value", // properties with spaces
//   },
//   { code: "USA", name: "United States" },
//   { code: "MX", name: "Mexico" },
// ];

// Can be accessed by index number
// console.log(`countryInformation`, countryInformation);
// console.log(`countryInformation[0]`, countryInformation[0]); // { code: "CA", name: "Canada", population: 40, "French name attribute": "French name value" }

// Properties can be accessed by
// console.log(`countryInformation[0].code`, countryInformation[0].code); // "CA"
// console.log(`countryInformation[0].name`, countryInformation[0].name); // "Canada"
// console.log(`countryInformation[0]["code"]`, countryInformation[0]["code"]); // "CA"
// console.log(`countryInformation[0]["name"]`, countryInformation[0]["name"]); // "Canada"
// console.log(
//   `countryInformation[0]["French name attribute"]`,
//   countryInformation[0]["French name attribute"]
// ); // French name value

// push(value) Adds a value to the end of the array
// let numsPush = [2, 4, 6];
// console.log("numsPush Before:", numsPush); // [2, 4, 6]
// console.log(`numsPush.push(8);`);
// numsPush.push(8);
// console.log("numsPush After:", numsPush); // [2, 4, 6, 8]

// pop() Removes the last array element and returns the element
// let numsPop = [2, 4, 6];
// console.log("numsPop Before:", numsPop); // [2, 4, 6]
// console.log("numsPop.pop() returns:", numsPop.pop()); // returns 6
// console.log("numsPop After:", numsPop); // [2, 4]

// unshift(value) Adds a value to the beginning of the array
// let numsUnshift = [2, 4, 6];
// console.log("numsUnshift Before:", numsUnshift); // [2, 4, 6]
// console.log(`numsUnshift.unshift(0);`);
// numsUnshift.unshift(0);
// console.log("numsUnshift After:", numsUnshift); // [0, 2, 4, 6]

// shift() Removes the first array element and returns the element
// let numsShift = [2, 4, 6];
// console.log("numsShift Before:", numsShift); // [2, 4, 6]
// console.log("numsShift.shift() returns:", numsShift.shift()); // returns 2
// console.log("numsShift After:", numsShift); // [4, 6]

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// splice(startingIndex, numElemToDelete, valuesToAdd) Adds or removes elements from anywhere in the array and returns the deleted elements (if any)
// let numsSplice = [2, 4, 6, 8, 10];
// index:            0  1  2  3  4

// Deletes all elements from index 3 to the end
// console.log(`Before numsSplice`, numsSplice); // [2, 4, 6, 8, 10]
// console.log(
//   `Deletes all elements from index 3 to the end numsSplice.splice(3);`,
//   numsSplice.splice(3)
// ); // [8, 10]
// console.log(`After numsSplice`, numsSplice); // [2, 4, 6]

// Deletes 2 elements starting at index 0
// console.log(`Before numsSplice`, numsSplice); // [2, 4, 6, 8, 10]
// console.log(
//   `Deletes 2 elements starting at index 0 numsSplice.splice(0, 2);`,
//   numsSplice.splice(0, 2)
// ); // [2, 4]
// console.log(`After numsSplice`, numsSplice); // [6, 8, 10]

// Adds 3, 5 starting at index 0
// console.log(`Before numsSplice`, numsSplice); // [ 2, 4, 6, 8, 10 ]
// console.log(
//   `Adds 3, 5 starting at index 0 numsSplice.splice(0, 0, 3, 5);`,
//   numsSplice.splice(0, 0, 3, 5)
// ); // [] because we are not deleting
// console.log(`After numsSplice`, numsSplice); // [ 3, 5, 2, 4, 6, 8, 10 ]

// Adds 7, 9, 11 starting at index 2
// console.log(`Before numsSplice`, numsSplice); // [ 2, 4, 6, 8, 10 ]
// console.log(
//   `Adds 7, 9, 11 starting at index 2 numsSplice.splice(2, 0, 7, 9, 11);`,
//   numsSplice.splice(2, 0, 7, 9, 11)
// ); // [] because we are not deleting
// console.log(`After numsSplice`, numsSplice); // [2, 4, 7, 9, 11, 6, 8, 10 ]

// Array looping
// let autos = ["Chevrolet", "Dodge", "Ford", "Ram"];

// console.log(`autos`, autos);

// for loop using index and array length
// console.log(`for loop`);
// for (let index = 0; index < autos.length; index++) {
//   console.log(autos[index]);
// }

// for loop using index and array length => reverse
// index >= 0
// Same result
// index > -1

// for (let index = autos.length - 1; index >= 0; index--) {
//   console.log(autos[index]);
// }

// while loop using index and array length
// console.log(`while loop`);
// let index = 0;

// while (index < autos.length) {
//   console.log(autos[index]);
//   index++;
// }

// for of loop
// console.log(`for of loop`);
// for (let auto of autos) {
//   console.log(auto);
// }

// forEach using function expression
// console.log(`forEach loop function expression`);
// autos.forEach(function (value, index) {
//   console.log(value, index);
// });

// forEach using the arrow function
// console.log(`forEach loop arrow function`);
// autos.forEach((value, index) => {
//   console.log(value, index);
// });

// Passing an array to a function
// function totalValue(numberElements) {
//   let numberElementSum = 0;
//   for (let numberElement of numberElements) {
//     numberElementSum += numberElement;
//   }
//
//   return numberElementSum;
// }

// console.log(`totalValue([1, 2, 3, 4, 5])`, totalValue([1, 2, 3, 4, 5])); // 15

// let scores = [80, 92, 75, 64, 88, 92];
// index         0   1   2   3   4   5
// console.log(scores);
// console.log(`scores.indexOf(92)`, scores.indexOf(92)); // 1
// console.log(`scores.indexOf(92, 2)`, scores.indexOf(92, 2)); // 5
// console.log(`scores.indexOf(100)`, scores.indexOf(100)); // -1
// console.log(`scores.lastIndexOf(92)`, scores.lastIndexOf(92)); // 5
// console.log(`scores.lastIndexOf(92, 4)`, scores.lastIndexOf(92, 4)); // 1
// console.log(`scores.lastIndexOf(50)`, scores.lastIndexOf(50)); // -1

// let numbers = [200, 30, 1000, 11, 4];

// Numeric sort
// [4, 11, 30, 200, 1000] But it is not like that

// console.log("Default:", numbers);

// Sort based on Unicode values: [1000, 11, 200, 30, 4]
// console.log("Default sort()", numbers.sort());

// console.log(numbers);

// let sortedNumbers;

// Sort numbers in ascending order: [4, 11, 30, 200, 1000]
// a - b
// Negative number means a comes before b.
// Zero means they are equal (order stays the same).
// Positive number means a comes after b.

// sortedNumbers = numbers.sort((a, b) => {
//   console.log(`a: ${a} b: ${b} ${a - b}`);
//   return a - b;
// });

// console.log("ascending:", sortedNumbers);

// Sort numbers in descending order: [1000, 200, 30, 11, 4]
// b - a
// Negative number means b comes before a.
// Zero means they are equal (order stays the same).
// Positive number means b comes after a.

// sortedNumbers = numbers.sort((a, b) => {
//   console.log(`a: ${a} b: ${b} ${b - a}`);
//   return b - a;
// });

// console.log("descending:", sortedNumbers);
