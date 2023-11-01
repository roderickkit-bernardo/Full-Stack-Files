/* 
  Developer: Roderick Bernardo
  Purpose: JS Strings demo
*/

let stringToProcess = "I love JS";
let totalSpaces = 0;

// Count the number of spaces by using a for loop
for (let i = 0; i < stringToProcess.length; i++) {
  if (stringToProcess.charAt(i) === " ") {
    totalSpaces++;
  }
}

console.log(totalSpaces + " spaces");
// Index samples
let text = "Seek and you will find.";
console.log(text.indexOf("and")); // 5
console.log(text.indexOf("e")); // 1 (first occurrence)
console.log(text.lastIndexOf("e")); // 2 (last occurrence)
console.log(text.indexOf("SEEK")); // -1 (case-sensitive search)

// String replace samples
let stringToReplace = "Seek and you will find.";
stringToReplace = stringToReplace.replace("find", "discover"); // "Seek and you will discover"
console.log(stringToReplace);
stringToReplace = stringToReplace.replace("Seek", "Search"); // "Search and you will discover"
console.log(stringToReplace);
stringToReplace = stringToReplace.replace("SEARCH", "search"); // No change (case-sensitive search)

// Other String functions
let s = "";
s = "As you wish.";
console.log(s.substr(3, 3)); // "you"
console.log(s.substr(3)); // "you wish." (length optional)

s = "As you wish.";
console.log(s.substring(3, 6)); // "you"
console.log(s.substring(3)); // "you wish." (2nd index optional)

s = "As you wish.";
let tokens = s.split(" "); // ["As", "you", "wish."]
for (let token of tokens) {
  console.log(token);
}

s = "What?";
console.log(s.toLowerCase()); // "what?"

s = "What?";
console.log(s.toUpperCase()); // "WHAT?"

s = "   test  ";
console.log(s.trim()); // "test"

let x = 2;
let y = 3;
let result = "";

// Using concatenation
result = x + " * " + y + " = " + x * y;
console.log(result);

// Using template literals
result = `${x} * ${y} = ${x * y}`;
console.log(result);
