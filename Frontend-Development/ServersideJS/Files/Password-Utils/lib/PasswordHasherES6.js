// Developer: Roderick Bernardo
// Purpose: ES6 module demo

import bcrypt from "bcrypt";

// Define a function to hash a password
async function hashPassword(plainPassword) {
  const hashPasswordResponse = { status: "", hashedPassword: "" };

  try {
    // Generate a salt
    const salt = await bcrypt.genSalt();
    // Hash the password with the salt
    hashPasswordResponse.status = "success";
    hashPasswordResponse.hashedPassword = await bcrypt.hash(
      plainPassword,
      salt
    );
  } catch (error) {
    hashPasswordResponse.status = "failure";
  } finally {
    return hashPasswordResponse;
  }
}

// Define a function to verify a password
async function verifyPassword(plainPassword, hashedPassword) {
  const verifyPasswordResponse = { status: "", isMatch: false };
  try {
    // Use bcrypt.compare to verify the password
    verifyPasswordResponse.status = "success";
    verifyPasswordResponse.isMatch = await bcrypt.compare(
      plainPassword,
      hashedPassword
    );
  } catch (error) {
    verifyPasswordResponse.status = "failure";
  } finally {
    return verifyPasswordResponse;
  }
}

export { hashPassword, verifyPassword };
