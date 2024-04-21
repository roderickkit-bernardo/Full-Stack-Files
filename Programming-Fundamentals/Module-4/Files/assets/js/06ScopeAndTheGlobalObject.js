/* 
  Developer: Roderick Bernardo
  Purpose: JS Scope and The Global Object demo
*/

var xVar = 17;

function numbersVar() {
  console.log(xVar);

  if (xVar > 0) {
    var yVar = xVar / 2;
    console.log(yVar);
  }
  if (xVar < 100) {
    var zVar = xVar * 2;
    console.log(zVar);
  }

  console.log(yVar);
  console.log(zVar);
}

numbersVar();
console.log(xVar);

// Uncommenting this will cause a error because
// yVar and zVar are not available
// it is only available inside the numbers function

// console.log(yVar);
// console.log(zVar);

let xLet = 17;

function numbersLet() {
  console.log(xLet);

  if (xLet > 0) {
    let yLet = xLet / 2;
    console.log(yLet);
  }
  if (xLet < 100) {
    let zLet = xLet * 2;
    console.log(zLet);
  }

  // Uncommenting this will cause a error because
  // yVar and zVar are not available
  // it is only available inside
  // the if statement where it is declared

  // console.log(yLet);
  // console.log(zLet);
}

numbersLet();
console.log(xLet);

// Uncommenting this will cause a error because
// yVar and zVar are not available
// it is only available inside the numbers function

// console.log(yLet);
// console.log(zLet);

// Using var
function varExample() {
  var x = 10;

  if (true) {
    var x = 20; // This re-declares the variable x
    console.log("Var Inside if block - x:", x); // Outputs 20
  }

  console.log("Var Outside if block - x:", x); // Outputs 20
}

varExample();

// Using let
function letExample() {
  let y = 10;

  if (true) {
    let y = 20; // This declares a new variable y local to this block
    console.log("Let Inside if block - y:", y); // Outputs 20
  }

  console.log("Let Outside if block - y:", y); // Outputs 10
}

letExample();
