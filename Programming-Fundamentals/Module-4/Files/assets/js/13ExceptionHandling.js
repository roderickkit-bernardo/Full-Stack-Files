/* 
  Developer: Roderick Bernardo
  Purpose: JS Exception handling demo
*/

try {
  // Division by zero error
  const x = 1n;
  const y = 0n;
  const quotient = x / y;
  console.log(quotient);
} catch (error) {
  console.error(error);
}

function findSum(numbers, startIndex, endIndex) {
  if (startIndex < 0) {
    throw "startIndex is less than 0.";
  } else if (endIndex >= numbers.length) {
    throw "endIndex is too large.";
  }

  let sum = 0;
  for (let i = startIndex; i <= endIndex; i++) {
    sum += numbers[i];
  }

  return sum;
}

let nums = [1, 2, 3, 4];
// This is ok
console.log(findSum(nums, 0, 2));

try {
  // This should cause a error because the end index is invalid
  console.log(findSum(nums, 3, 4));
} catch (exception) {
  console.error(exception);
}

function exceptionTest() {
  try {
    console.log("try");
    throw "crash!!!";

    // Skips because exception is thrown
    console.log("after throw");
  } catch (exception) {
    console.log("catch");
  } finally {
    // This will always execute regardless of the error state
    console.log("finally");
  }

  console.log("after");
}

exceptionTest();
console.log("done");

// Returns the average of the scores array
function findAverage(scores) {
  if (!Array.isArray(scores)) {
    throw new TypeError("Must supply an array.");
  }

  if (scores.length === 0) {
    throw new Error("Must supply at least one score.");
  }

  let sum = 0;
  scores.forEach(function (score) {
    if (!Number.isInteger(score)) {
      throw new TypeError("Score '" + score + "' is not an integer.");
    }
    if (score < 0) {
      throw new RangeError("Negative score encountered.");
    }
    sum += score;
  });
  return sum / scores.length;
}

try {
  let ave = findAverage([50, "cow"]);
} catch (error) {
  console.error(error.name + ": " + error.message);
}

try {
  let ave = findAverage("");
} catch (error) {
  console.error(error.name + ": " + error.message);
}

try {
  let ave = findAverage([]);
} catch (error) {
  console.error(error.name + ": " + error.message);
}
