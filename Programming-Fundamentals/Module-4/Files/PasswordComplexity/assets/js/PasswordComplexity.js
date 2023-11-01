/*
  Developer: Roderick Bernardo
  Purpose: Password Complexity Demo
*/

const successImgPath = "./assets/images/success.png";
const errorImgPath = "./assets/images/error.png";

function addListeners() {
  document
    .getElementById("passwordToProcess")
    .addEventListener("input", (event) => {
      lengthCheck(
        event.target.value,
        "lengthCheckIndicatorId",
        "lengthCheckTextId"
      );
      numberCheck(
        event.target.value,
        "numberCheckIndicatorId",
        "numberCheckTextId"
      );
      caseCheck(event.target.value, "caseCheckIndicatorId", "caseCheckTextId");
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

  if (value.length >= 10) {
    elementIndicator.src = successImgPath;
    elementText.innerText = `Password has ${value.length} chars`;
    elementText.className = "";
  } else {
    elementIndicator.src = errorImgPath;
    elementText.innerText = `Password must be at least 10`;
    elementText.className = "errorState";
  }
}

function numberCheck(value, indicatorId, textId) {
  const elementIndicator = document.getElementById(indicatorId);
  const elementText = document.getElementById(textId);
  const regex = /\d/;

  if (regex.test(value)) {
    elementIndicator.src = successImgPath;
    elementText.innerText = "Password contains at least 1 number";
    elementText.className = "";
  } else {
    elementIndicator.src = errorImgPath;
    elementText.innerText = "Password must contain at least 1 number";
    elementText.className = "errorState";
  }
}

function caseCheck(value, indicatorId, textId) {
  const elementIndicator = document.getElementById(indicatorId);
  const elementText = document.getElementById(textId);
  const regex = /[A-Z]/;

  if (regex.test(value)) {
    elementIndicator.src = successImgPath;
    elementText.innerText = "Password contains at least 1 uppercase char";
    elementText.className = "";
  } else {
    elementIndicator.src = errorImgPath;
    elementText.innerText = "Password must contain at least 1 uppercase char";
    elementText.className = "errorState";
  }
}

function specialCharCheck(value, indicatorId, textId) {
  const elementIndicator = document.getElementById(indicatorId);
  const elementText = document.getElementById(textId);
  const regex = /[~!@#$%^&*()_+]/;

  if (regex.test(value)) {
    elementIndicator.src = successImgPath;
    elementText.innerText =
      "Password contains at least 1 special char ~!@#$%^&*()_+";
    elementText.className = "";
  } else {
    elementIndicator.src = errorImgPath;
    elementText.innerText =
      "Password must contain at least 1 special char ~!@#$%^&*()_+";
    elementText.className = "errorState";
  }
}

addListeners();
