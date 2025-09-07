// /*
//   Developer: Roderick Bernardo
//   Purpose: JS Strings demo
// */

// Uncomment the "code" to see the result
// You can either see the output on the browser console
// or
// Use node to run this on the command line
// node <name_of_js_file>

// let stringToProcess = "I love JS";
// let totalSpaces = 0;

// Count the number of spaces by using a for loop
// for (let i = 0; i < stringToProcess.length; i++) {
//   if (stringToProcess.charAt(i) === " ") {
//     totalSpaces++;
//   }
// }

// console.log(`string: "I love JS" has ${totalSpaces} spaces"`);

// Index samples
// let text = "Seek and you will find.";
// console.log(text);
// console.log(`01234567890123456789012`);
// console.log(`${text} text.indexOf("and")`, text.indexOf("and")); // 5
// console.log(`${text} text.indexOf("e")`, text.indexOf("e")); // 1 (first occurrence)
// console.log(`${text} text.lastIndexOf("e")`, text.lastIndexOf("e")); // 2 (last occurrence)
// console.log(`${text} text.indexOf("SEEK")`, text.indexOf("SEEK")); // -1 (case-sensitive search)

// String replace samples
// let stringToReplace = "Seek and you will find.";
// console.log(stringToReplace);
// stringToReplace = stringToReplace.replace("find", "discover"); // "Seek and you will discover"
// console.log(`stringToReplace.replace("find", "discover") ${stringToReplace}`);
// stringToReplace = stringToReplace.replace("Seek", "Search"); // "Search and you will discover"
// console.log(`stringToReplace.replace("Seek", "Search") ${stringToReplace}`);
// stringToReplace = stringToReplace.replace("SEARCH", "search"); // No change (case-sensitive search)
// console.log(`stringToReplace.replace("SEARCH", "search") ${stringToReplace}`);

// Other String functions
let s = "";
s = "As you wish.";

// console.log(s);

// console.log(`s.substr(3, 3):`, s.substr(3, 3)); // "you"
// console.log(`s.substr(3)):`, s.substr(3)); // "you wish." (length optional)

// console.log(`s.substring(3, 6):`, s.substring(3, 6)); // "you"
// console.log(`s.substring(3):`, s.substring(3)); // "you wish." (2nd index optional)

// let tokens = s.split(" "); // ["As", "you", "wish."]

// console.log(`tokens:`, tokens);
// for (let token of tokens) {
//   console.log(`token:`, token);
// }

// s = "What?";
// console.log(s, `s.toLowerCase():`, s.toLowerCase()); // "what?"

// s = "What?";
// console.log(s, `s.toUpperCase():`, s.toUpperCase()); // "WHAT?"

// s = "   test  ";
// console.log(`"   test  "`, s.trim()); // "test"

// let x = 2;
// let y = 3;
// let result = "";

// Using concatenation
// result = x + " * " + y + " = " + x * y;
// console.log(`x + " * " + y + " = " + x * y:`, result);

// Using template literals
// result = `${x} * ${y} = ${x * y}`;
// console.log(`\${x} * \${y} = \${x * y}:`, result);

// const record = "roderick.bernardo;student;enrolled;Casa Loma";
// const tokens = record.split(";");

// console.log(tokens);

// for (let token of tokens) {
//   console.log(token);
// }

// tokens.forEach((value, index) => {
//   console.log(value);
// });
