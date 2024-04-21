// Developer: Roderick Bernardo
// Purpose: Form Validation Demo

const formTest = document.getElementById("formTest");
formTest.addEventListener("submit", (event) => {
  let fieldCheck = 0;
  const userName = document.getElementById("userName");
  const userNameMessage = document.getElementById("userNameMessage");

  if (!userName.value) {
    userNameMessage.innerText = "User name is a required field.";
  } else {
    userNameMessage.innerText = "";
    fieldCheck++;
  }

  const courseSelect = document.getElementById("courseSelect");
  const courseSelectMessage = document.getElementById("courseSelectMessage");

  if (!courseSelect.value) {
    courseSelectMessage.innerText = "Course is a required field.";
  } else {
    courseSelectMessage.innerText = "";
    fieldCheck++;
  }

  const termsConditionsCheckbox = document.getElementById(
    "termsConditionsCheckbox"
  );
  const termsConditionsCheckboxMessage = document.getElementById(
    "termsConditionsCheckboxMessage"
  );

  if (!termsConditionsCheckbox.checked) {
    termsConditionsCheckboxMessage.innerText =
      "Terms and Conditions is a required field.";
  } else {
    termsConditionsCheckboxMessage.innerText = "";
    fieldCheck++;
  }

  const questions = document.getElementsByName("question");
  const questionMessage = document.getElementById("questionMessage");

  const radioCheck = 0;
  for (let question of questions) {
    if (question.checked) {
      radioCheck++;
      break;
    }
  }

  if (radioCheck == 0) {
    questionMessage.innerText =
      "Fulltime student question is a required field.";
  } else {
    questionMessage.innerText = "";
    fieldCheck++;
  }

  if (fieldCheck != 4) {
    event.preventDefault();
  }
});

document.getElementById("resetId").addEventListener("click", (event) => {
  document.getElementById("userNameMessage").innerHTML = "";
  document.getElementById("courseSelectMessage").innerHTML = "";
  document.getElementById("termsConditionsCheckboxMessage").innerHTML = "";
  document.getElementById("questionMessage").innerHTML = "";
});
