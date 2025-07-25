/*
  Developer: Roderick Bernardo
  Purpose: Password Complexity Demo
*/

const MIN_LENGTH = 10;
// Location of the icons
const successImgPath = "./assets/images/success.png";
const errorImgPath = "./assets/images/error.png";
// Message text used by the app
const appMessages = {
  lengthCheckTextId: {
    errorText: "Password must contain at least 10 chars",
    successText: "Password has at least 10 chars",
  },

  numberCheckTextId: {
    errorText: "Password must contain at least 1 number",
    successText: "Password has at least 1 number",
  },

  caseCheckTextId: {
    errorText: "Password must contain at least 1 uppercase text",
    successText: "Password has at least 1 uppercase text",
  },

  specialCharCheckTextId: {
    errorText: "Password must contain at least 1 special chars ~!@#$%^&*()_+",
    successText: "Password has at least 1 special chars ~!@#$%^&*()_+",
  },
};

// Set the default values, look of the element with a particular id and set the message based on the same id
document.getElementById("lengthCheckTextId").innerText =
  appMessages["lengthCheckTextId"].errorText;

document.getElementById("numberCheckTextId").innerText =
  appMessages["numberCheckTextId"].errorText;

document.getElementById("caseCheckTextId").innerText =
  appMessages["caseCheckTextId"].errorText;

document.getElementById("specialCharCheckTextId").innerText =
  appMessages["specialCharCheckTextId"].errorText;

function addListeners() {
  // Look for the element passwordToProcess and add an input listener to this
  document
    .getElementById("passwordToProcess")
    .addEventListener("input", (event) => {
      // When there is a input event call the functions below

      // Check the length of the input
      lengthCheck(
        event.target.value,
        "lengthCheckIndicatorId",
        "lengthCheckTextId"
      );

      // Check is the input has a number
      numberCheck(
        event.target.value,
        "numberCheckIndicatorId",
        "numberCheckTextId"
      );

      // Check for case if the input
      caseCheck(event.target.value, "caseCheckIndicatorId", "caseCheckTextId");

      // Check if special chars are included in the input
      specialCharCheck(
        event.target.value,
        "specialCharCheckIndicatorId",
        "specialCharCheckTextId"
      );
    });
}

function lengthCheck(value, indicatorId, textId) {
  const elementIndicator = document.getElementById(indicatorId);
  const elementText = document.getElementById(textId);

  if (value.length >= MIN_LENGTH) {
    setElementValues(true, elementIndicator, elementText, textId);
  } else {
    setElementValues(false, elementIndicator, elementText, textId);
  }
}

function numberCheck(value, indicatorId, textId) {
  const elementIndicator = document.getElementById(indicatorId);
  const elementText = document.getElementById(textId);
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
  // Check if the char is a digit
  const regex = /\d/;

  if (regex.test(value)) {
    setElementValues(true, elementIndicator, elementText, textId);
  } else {
    setElementValues(false, elementIndicator, elementText, textId);
  }
}

function caseCheck(value, indicatorId, textId) {
  const elementIndicator = document.getElementById(indicatorId);
  const elementText = document.getElementById(textId);
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
  // Check if the char is uppercase
  const regex = /[A-Z]/;

  if (regex.test(value)) {
    setElementValues(true, elementIndicator, elementText, textId);
  } else {
    setElementValues(false, elementIndicator, elementText, textId);
  }
}

function specialCharCheck(value, indicatorId, textId) {
  const elementIndicator = document.getElementById(indicatorId);
  const elementText = document.getElementById(textId);
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
  // Check if the char matches one of chars on the character class
  const regex = /[~!@#$%^&*()_+]/;

  if (regex.test(value)) {
    setElementValues(true, elementIndicator, elementText, textId);
  } else {
    setElementValues(false, elementIndicator, elementText, textId);
  }
}

function setElementValues(isSuccess, elementIndicator, elementText, textId) {
  if (isSuccess) {
    elementIndicator.src = successImgPath;
    elementText.innerText = appMessages[textId].successText;
    elementText.className = "";
  } else {
    elementIndicator.src = errorImgPath;
    elementText.innerText = appMessages[textId].errorText;
    elementText.className = "errorState";
  }
}

addListeners();
