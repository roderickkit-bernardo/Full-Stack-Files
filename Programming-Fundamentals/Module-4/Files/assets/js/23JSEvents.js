// Developer: Roderick Bernardo
// Purpose: JS Events Demo

const userNameElement = document.getElementById("userName");

// Register to different events
userNameElement.addEventListener("input", (event) => {
  console.log(`input event ${event.target.value}`);
});

userNameElement.addEventListener("focus", (event) => {
  console.log(`focus event ${event.target.value}`);
});

userNameElement.addEventListener("blur", (event) => {
  console.log(`blur event ${event.target.value}`);
});

const courseSelectElement = document.getElementById("courseSelect");
courseSelectElement.addEventListener("change", (event) => {
  console.log(`change event ${event.target.value}`);
});
