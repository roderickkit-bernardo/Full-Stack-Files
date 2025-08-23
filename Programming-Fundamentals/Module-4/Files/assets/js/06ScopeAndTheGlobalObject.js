/* 
  Developer: Roderick Bernardo
  Purpose: JS Scope and The Global Object demo
*/

// Explicit window object
// alert(window.location);
// Implicit window object
// alert(location);
// var location = "GBC location";

// var xVar = 17; // This has global scope

// function numbersVar() {
//   console.log("Inside numbersVar() xVar:", xVar); // 17
//
//   if (xVar > 0) {
//     var yVar = xVar / 2;
//     console.log("Inside if yVar:", yVar); // 17 / 2
//   }
//   if (xVar < 100) {
//     var zVar = xVar * 2; // 17 * 2
//     console.log("Inside if zVar:", zVar);
//   }
//
//   console.log("Outside if yVar:", yVar); // 17 / 2
//   console.log("Outside if zVar:", zVar); // 17 * 2
// }

// numbersVar();
// console.log("Outside numbersVar() xVar:", xVar);

// Uncommenting this will cause a error because
// yVar and zVar are not available
// it is only available inside the numbers function

// console.log(yVar);
// console.log(zVar);

// let xLet = 17;

// function numbersLet() {
//   console.log("Inside numbersLet() xLet:", xLet);
//
//   if (xLet > 0) {
//     let yLet = xLet / 2;
//     console.log("1 - Inside if yLet:", yLet);
//
//     if (xLet > 0) {
//       console.log("2 - Inside if yLet:", yLet);
//     }
//   }
//
//   if (xLet < 100) {
//     let zLet = xLet * 2;
//     console.log("Inside if xLet:", zLet);
//   }
//
// Uncommenting this will cause a error because
// yVar and zVar are not available
// it is only available inside
// the if statement where it is declared
//
//   console.log(yLet);
//   console.log(zLet);
// }

// numbersLet();
// console.log(xLet);

// Uncommenting this will cause a error because
// yLet and zLet are not available
// it is only available inside the numbers function

// console.log(yLet);
// console.log(zLet);

// Using var
// function varExample() {
//   var x = 10;
//
//   if (true) {
//     var x = 20; // This re-declares the variable x
//     console.log("Var Inside if block - x:", x); // Outputs 20
//   }
//
//   console.log("Var Outside if block - x:", x); // Outputs 20
// }

// varExample();

// Using let
// function letExample() {
//   let y = 10;
//
//   if (true) {
// This will be an error only when y is redeclared
//     console.log("Before Let Inside if block - y:", y); // 10
//     let y = 20; // This declares a new variable y local to this block
//     console.log("After Let Inside if block - y:", y); // Outputs 20
//   }
//
//   console.log("Let Outside if block - y:", y); // Outputs 10
// }

// letExample();
