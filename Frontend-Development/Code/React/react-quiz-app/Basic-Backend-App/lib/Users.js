// Developer: Roderick Bernardo
// Purpose: User account module

const PasswordHasherCommonJS = require("./PasswordHasherCommonJS");

// Default password is password
const users = [
  {
    userName: "elon.musk",
    hashedPassword:
      "$2b$10$kEsnhLJXdiWuAM3tg8Oxt.n.LwM0mUCqf/epC1X.clEcJS2iFG8CO",
    isAdmin: "y",
  },
  {
    userName: "bill.gates",
    hashedPassword:
      "$2b$10$kEsnhLJXdiWuAM3tg8Oxt.n.LwM0mUCqf/epC1X.clEcJS2iFG8CO",
    isAdmin: "n",
  },
];

function verifyUserName(userName) {
  let readResponse = {
    userExists: false,
    message: `${userName} does not exists.`,
  };

  const filteredUser = users.filter((user) => {
    return user.userName == userName;
  });

  if (filteredUser.length == 1) {
    readResponse.userExists = true;
    readResponse.message = "";
  }

  return readResponse;
}

async function verifyUserNameAndPassword(userName, password) {
  const verifyUserNameAndPasswordResponse = {
    isAdmin: "n",
    userNameAndPasswordMatches: false,
    message: "Invalid password. Please re-enter a valid password.",
  };

  const filteredUser = users.filter((user) => {
    return user.userName == userName;
  });

  if (filteredUser.length == 1) {
    const verifyPasswordResponse = await PasswordHasherCommonJS.verifyPassword(
      password,
      filteredUser[0].hashedPassword
    );

    if (verifyPasswordResponse.isMatch) {
      verifyUserNameAndPasswordResponse.isAdmin = filteredUser[0].isAdmin;
      verifyUserNameAndPasswordResponse.userNameAndPasswordMatches =
        verifyPasswordResponse.isMatch;
      verifyUserNameAndPasswordResponse.message = "Password is valid.";
    }
  } else {
    verifyUserNameAndPasswordResponse.message =
      "Data issue, please contact admin.";
  }

  return verifyUserNameAndPasswordResponse;
}

// Export the functions
module.exports = {
  verifyUserName,
  verifyUserNameAndPassword,
};
