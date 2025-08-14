// Developer: Roderick Bernardo
// Purpose: setTimeout and setInterval Demo

setTimeout(() => {
  document.getElementById("setTimeout").innerText = new Date();
}, 5000);

setInterval(() => {
  document.getElementById("setInterval").innerText = new Date();
}, 5000);
