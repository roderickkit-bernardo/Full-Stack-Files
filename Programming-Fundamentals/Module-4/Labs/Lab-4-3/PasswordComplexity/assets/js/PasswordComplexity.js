/*
  Developer: 
  Purpose: 
*/

// JavaScript Task: Set successImgPath to "./assets/images/success.png"
const successImgPath;

// JavaScript Task: Set errorImgPath to "./assets/images/error.png"
const errorImgPath;

function addListeners() {
  document
    // JavaScript Task: Set to passwordToProcess
    .getElementById("")
    // JavaScript Task: Set the addEventListener parameter to input
    .addEventListener("", (event) => {
      // JavaScript Task: Call the function lengthCheck
      // With the following parameters:
      // event.target.value
      // "lengthCheckIndicatorId"
      // "lengthCheckTextId"

      // JavaScript Task: Call the function numberCheck
      // With the following parameters:
      // event.target.value
      // "numberCheckIndicatorId"
      // "numberCheckTextId"

      // JavaScript Task: Call the function caseCheck
      // With the following parameters:
      // event.target.value
      // "caseCheckIndicatorId"
      // "caseCheckTextId"
      
      // JavaScript Task: Call the function specialCharCheck
      // With the following parameters:
      // event.target.value
      // "specialCharCheckIndicatorId"
      // "specialCharCheckTextId"
    });
}

function lengthCheck(value, indicatorId, textId) {
  const elementIndicator = document.getElementById(indicatorId);
  const elementText = document.getElementById(textId);

  if (value.length >= 10) {
    // JavaScript Task: Set elementIndicator.src to successImgPath
    elementIndicator.src;
    elementText.innerText = `Password has ${value.length} chars`;
    // JavaScript Task: Set elementText.className to ""
    elementText.className;
  } else {
    // JavaScript Task: Set elementIndicator.src to errorImgPath;
    elementIndicator.src;
    elementText.innerText = `Password must be at least 10`;
    // JavaScript Task: Set elementText.className to "errorState"
    elementText.className;
  }
}

function numberCheck(value, indicatorId, textId) {
  const elementIndicator = document.getElementById(indicatorId);
  const elementText = document.getElementById(textId);
  // JavaScript Task: Set regex to /\d/
  const regex;

  if (regex.test(value)) {
    // JavaScript Task: Set elementIndicator.src to successImgPath
    elementIndicator.src;
    elementText.innerText = "Password contains at least 1 number";
    // JavaScript Task: Set elementText.className to ""
    elementText.className;
  } else {
    // JavaScript Task: Set elementIndicator.src to errorImgPath;
    elementIndicator.src;
    elementText.innerText = "Password must contain at least 1 number";
    // JavaScript Task: Set elementText.className to "errorState"
    elementText.className;
  }
}

function caseCheck(value, indicatorId, textId) {
  const elementIndicator = document.getElementById(indicatorId);
  const elementText = document.getElementById(textId);
  // JavaScript Task: Set regex to /[A-Z]/
  const regex;

  if (regex.test(value)) {
    // JavaScript Task: Set elementIndicator.src to successImgPath
    elementIndicator.src;
    elementText.innerText = "Password contains at least 1 uppercase char";
    // JavaScript Task: Set elementText.className to ""
    elementText.className;
  } else {
    // JavaScript Task: Set elementIndicator.src to errorImgPath
    elementIndicator.src;
    elementText.innerText = "Password must contain at least 1 uppercase char";
    // JavaScript Task: Set elementText.className to "errorState"
    elementText.className;
  }
}

function specialCharCheck(value, indicatorId, textId) {
  const elementIndicator = document.getElementById(indicatorId);
  const elementText = document.getElementById(textId);
  // JavaScript Task: Set regex to /[~!@#$%^&*()_+]/
  const regex;

  if (regex.test(value)) {
    // JavaScript Task: Set elementIndicator.src to successImgPath
    elementIndicator.src;
    elementText.innerText =
      "Password contains at least 1 special char ~!@#$%^&*()_+";
    // JavaScript Task: Set elementText.className to ""
    elementText.className;
  } else {
    // JavaScript Task: Set elementIndicator.src to errorImgPath
    elementIndicator.src;
    elementText.innerText =
      "Password must contain at least 1 special char ~!@#$%^&*()_+";
    // JavaScript Task: Set  elementText.className to "errorState"
    elementText.className;
  }
}

addListeners();