// Developer: Roderick Bernardo
// Purpose: ES6 module demo

import { hashPassword, verifyPassword } from "./lib/PasswordHasherES6.js";

if (process.argv.length === 2) {
  console.error("Usage: node ES6.js <PASSWORD_TO_HASH>");
  process.exit(1);
} else {
  const plainPassword = process.argv[2];
  console.log(`Hashing password text: ${plainPassword}`);

  // Using Promises
  hashPassword(plainPassword).then((hashPasswordResponse) => {
    console.log("Using Promises");
    console.log(hashPasswordResponse);

    verifyPassword(plainPassword, hashPasswordResponse.hashedPassword).then(
      (verifyPasswordResponse) => {
        console.log("Using Promises Response");
        console.log(verifyPasswordResponse);
      }
    );
  });

  // Immediately Invoked Function Expression
  (async () => {
    const hashPasswordResponse = await hashPassword(plainPassword);
    console.log("Using Immediately Invoked Function Expression");
    console.log(hashPasswordResponse);

    const verifyPasswordResponse = await verifyPassword(
      plainPassword,
      hashPasswordResponse.hashedPassword
    );
    console.log("Using Immediately Invoked Function Expression Response");
    console.log(verifyPasswordResponse);
  })();

  // Using Async Function
  invokePasswordHasherCommonJS(plainPassword);
}

async function invokePasswordHasherCommonJS(plainPassword) {
  const hashPasswordResponse = await hashPassword(plainPassword);
  console.log("Using Async Function");
  console.log(hashPasswordResponse);

  const verifyPasswordResponse = await verifyPassword(
    plainPassword,
    hashPasswordResponse.hashedPassword
  );
  console.log("Using Async Function Response");
  console.log(verifyPasswordResponse);
}
