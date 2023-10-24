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
