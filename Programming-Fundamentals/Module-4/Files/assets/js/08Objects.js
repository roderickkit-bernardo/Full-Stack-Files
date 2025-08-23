/* 
  Developer: Roderick Bernardo
  Purpose: JS Objects demo
*/

// Uncomment the "code" to see the result
// You can either see the output on the browser console
// or
// Use node to run this on the command line
// node <name_of_js_file>

// book object
// let book = {
//   title: "Hatching Twitter",
//   published: 2013,
//   keywords: ["origins", "betrayal", "social media"],
//   author: {
//     firstName: "Nick",
//     lastName: "Bilton",
//   },
//
//   // Define a method
//   getAuthorNameV1() {
//     return this.author.firstName + " " + this.author.lastName;
//   },
//
//   // Define a method as function expression
//   getAuthorNameV2: function () {
//     return this.author.firstName + " " + this.author.lastName;
//   },
// };

// console.log(`Object structure:`, book);
// Properties can be accessed via dot and property name notation
// console.log(`book.title`, book.title);
// console.log(`book.published`, book.published);

// console.log(`book.keywords.forEach`);
// book.keywords.forEach((value, index) => {
//   console.log(`forEach value: ${value} index: ${index}`);
// });

// console.log(`book.author.firstName`, book.author.firstName);
// console.log(`book.author.lastName`, book.author.lastName);
// console.log(`book.getAuthorNameV1()`, book.getAuthorNameV1());
// console.log(`book.getAuthorNameV2()`, book.getAuthorNameV2());

// accessor property using get and set
// let square = {
//   width: 5,
//   height: 5,

//   get area() {
//     console.log("get area() is called...");
//     return this.width * this.height;
//   },

//   set area(value) {
//     console.log("set area() is called...");
//     // Set width and height to the square root of the value
//     this.width = Math.sqrt(value);
//     this.height = this.width;
//   },
// };

// let area = square.area; // Calling getter returns 25
// console.log(area);
// square.area = 100; // Calling setter sets width and height to 10
// console.log(`square.width`, square.width); // 10
// console.log(`square.height`, square.height); // 10

// Passing by copy
// let number = 1;

// function value(numberParam) {
//   numberParam = numberParam + 1;
//   console.log("value() code block:", numberParam);
// }

// console.log("Passing by copy Before:", number); // 1
// value(number); // 2
// console.log("Passing by copy After", number); // 1
// console.log("Passing by copy makes a copy of the variable");

// Passing by reference
// let objectToSend = { title: "HTML" };

// function reference(objectToSendParam) {
//   objectToSendParam.title = "CSS";
//   console.log("reference() code block:", objectToSendParam);
// }

// console.log("Passing by reference Before:", objectToSend); // {title: "HTML"}
// reference(objectToSend); // {title: "CSS"}
// console.log("Passing by reference After", objectToSend); // {title: "CSS"}
// console.log(
//   "Passing by reference does not make a copy of the variable, since it is a reference, you are making changes to it"
// );
