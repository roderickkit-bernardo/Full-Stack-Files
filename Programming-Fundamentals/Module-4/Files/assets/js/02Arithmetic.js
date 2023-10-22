/* 
  Developer: Roderick Bernardo
  Purpose: JS Arithmetic demo
*/

let quantity = 100;

// + Add
console.log("Before Add:", quantity);
quantity = quantity + 1;
console.log("After Add:", quantity);

// - Subtract
console.log("Before Subtract:", quantity);
quantity = quantity - 11;
console.log("After Subtract:", quantity);

// * Multiply
console.log("Before Multiply:", quantity);
quantity = quantity * 30;
console.log("After Multiply:", quantity);

// / Divide
console.log("Before Divide:", quantity);
quantity = quantity / 10;
console.log("After Divide:", quantity);

// % Modulus (remainder)
console.log("Before Modulus:", quantity);
quantity = quantity % 7;
console.log("After Modulus:", quantity);

// ** Exponentiation
console.log("Before Exponentiation:", quantity);
quantity = quantity ** 2;
console.log("After Exponentiation:", quantity);

// ++	Increment
console.log("Before Increment:", quantity);
quantity++;
console.log("After Increment:", quantity);

// --	Decrement
console.log("Before Decrement:", quantity);
quantity--;
console.log("After Decrement:", quantity);

let x = 10;
console.log("x is", x);

// +=	Add to
// Same as x = x + 2
x += 2;
console.log("Add to", x);

// -=	Subtract from
// Same as x = x - 2
x -= 2;
console.log("Subtract from", x);

// *=	Multiply by
// Same as x = x * 3
x *= 3;
console.log("Multiply by", x);

// /=	Divide by
// Same as x = x / 3
x /= 3;
console.log("Divide by", x);

// %=	Mod by
// Same as x = x % 4
x %= 4;
console.log("Mod by", x);

// If variables are both strings it will concatenate it
let fullName = "Roderick" + "Bernardo";
console.log(fullName); // => "RoderickBernardo"

// If both operands are numbers, + performs addition.
console.log(2 + 3); // => 5

// If both operands are strings, + performs string concatenation.
console.log("2" + "3"); // => "23"

// If one operand is a number and the other a string, + performs string concatenation.
// The number is converted into a string, and the two strings are concatenated into a single string.
console.log("2" + 3); // => "2" + "3" => "23"

// For all other arithmetic operators, combining a number and a string in an arithmetic expression
// converts the string operand to a number and then performs the arithmetic operation.
console.log("2" * 3); // => 2 * 3 => 6

let pi = parseFloat("3.14");
console.log(pi);
console.log(isNaN(pi));

let salary = parseInt("50000");
console.log(salary);
console.log(isNaN(salary));

let shoeBrand = "Nike";
console.log(isNaN(shoeBrand));
