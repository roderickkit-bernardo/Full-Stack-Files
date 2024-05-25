// Developer: Roderick Bernardo
// Purpose: Simple login similar to google login

// This app needs the Node js Basic-Backend-App
const REST_END_POINT_BASE_URL = "http://localhost:3001";

// Hide the password div
setDisplay("passwordDiv", "none");
// Hide the message div
setDisplay("messageDiv", "none");

const keydownHandler = (event) => {
  if (event.target.value.length > 0) {
    // Sometimes key can be null
    if (event.key?.toLowerCase() == "enter") {
      if (event.target.id === "userName") {
        verifyUserName(event.target.value);
      } else if (event.target.id === "password") {
        verifyUserNameAndPassword(userName.value, event.target.value);
      }
    }
  }
};

// Listen to keydown events
const userName = document.getElementById("userName");
userName.addEventListener("keydown", (event) => {
  keydownHandler(event);
});

// Listen to keydown events
const password = document.getElementById("password");
password.addEventListener("keydown", (event) => {
  keydownHandler(event);
});

async function verifyUserName(userName) {
  // Fetch using GET
  const fetchResponse = await fetch(
    `${REST_END_POINT_BASE_URL}/verifyUserName/${userName}`
  );
  const fetchResponseJson = await fetchResponse.json();
  // TODO: Check for the HTTP code status

  if (fetchResponseJson.userExists) {
    setDisplay("passwordDiv", "block");
    setDisplay("messageDiv", "none");
    password.focus();
  } else {
    setDisplay("passwordDiv", "none");
    setDisplay("messageDiv", "block");
    document.getElementById("messageDiv").innerText = fetchResponseJson.message;
  }
}

async function verifyUserNameAndPassword(userName, password) {
  // Fetch using POST
  const fetchResponse = await fetch(
    `${REST_END_POINT_BASE_URL}/verifyUserNameAndPassword`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName: userName, password: password }),
    }
  );

  const fetchResponseJson = await fetchResponse.json();
  // TODO: Check for the HTTP code status

  if (fetchResponseJson.userNameAndPasswordMatches) {
    redirect();
  } else {
    setDisplay("passwordDiv", "block");
    setDisplay("messageDiv", "block");
    document.getElementById("password").focus();
    document.getElementById("messageDiv").innerText = fetchResponseJson.message;
  }
}

function setDisplay(id, state) {
  document.getElementById(id).style.display = state;
}

function redirect() {
  const timeout = 5;
  const url = "https://google.com";
  const messageDiv = "messageDiv";
  setDisplay(messageDiv, "block");
  // Flip the style since the credentials are valid
  const element = document.getElementById(messageDiv);
  element.classList.replace("is-danger", "is-info");
  element.innerText = `Credentials are valid, redirecting to ${url} in ${timeout} seconds.`;

  // Redirect after x seconds
  setTimeout(() => {
    window.location = url;
  }, timeout * 1000);
}
