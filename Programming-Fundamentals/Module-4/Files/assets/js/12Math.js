/* 
  Developer: Roderick Bernardo
  Purpose: JS Math demo
*/

// abs(x)	Returns the absolute value of x
console.log(`(Math.abs(-5)`, Math.abs(-5)); // 5

// ceil(x)	Returns x rounded up to the nearest integer
console.log(`Math.ceil(2.1)`, Math.ceil(2.1)); // 3

// cos(x)	Returns the cosine of the radians x
console.log(`Math.cos(Math.PI)`, Math.cos(Math.PI)); // -1

// floor(x)	Returns x rounded down to the nearest integer
console.log(`Math.floor(2.9)`, Math.floor(2.9)); // 2

// log(x)	Returns the natural logarithm of x
console.log(`Math.log(Math.E)`, Math.log(Math.E)); // 1

// max(n1, n2, n3, ...)	Returns the largest number
console.log(`Math.max(5, 2, 8, 1)`, Math.max(5, 2, 8, 1)); // 8

// min(n1, n2, n3, ...)	Returns the smallest number
console.log(`Math.min(5, 2, 8, 1)`, Math.min(5, 2, 8, 1)); // 1

// pow(x, y)	Returns x to the power of y
console.log(`Math.pow(2, 3)`, Math.pow(2, 3)); // 8

// round(x)	Returns x rounded to the nearest integer
console.log(`Math.round(3.5)`, Math.round(3.5)); // 4

// sin(x)	Returns the sine of radians x
console.log(`Math.sin(Math.PI)`, Math.sin(Math.PI)); // 0

// sqrt(x)	Returns the square root of x
console.log(`Math.sqrt(25)`, Math.sqrt(25)); // 5

// tan(x)	Returns the tangent of radians x
console.log(`Math.tan(Math.PI / 4)`, Math.tan(Math.PI / 4)); // 1

// Return a random integer between min and max (inclusive).
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(`getRandomNumber(1, 10) 5 times`);
for (let i = 0; i < 5; i++) {
  console.log(getRandomNumber(1, 10));
}
