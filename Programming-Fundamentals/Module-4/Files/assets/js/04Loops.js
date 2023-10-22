/* 
  Developer: Roderick Bernardo
  Purpose: JS Loops demo
*/

// While loop - Will execute 0 or more times
let i = 0;
let max = 5;

// This will repeat 5 times
console.log("while loop");
while (i < max) {
  console.log(i);
  i++;
}

// Do-While loop - Will execute 1 or more times
i = 0;
max = 5;

// This will repeat 5 times
console.log("do-while loop");
do {
  console.log(i);
  i++;
} while (i < max);

// For-Loop - Will execute 0 or more times
// This will repeat 5 times
console.log("for loop");
for (i = 0; i < max; i++) {
  console.log(i);
}
