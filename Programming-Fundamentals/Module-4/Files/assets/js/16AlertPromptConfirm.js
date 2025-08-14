// Developer: Roderick Bernardo
// Purpose: Alert, Prompt and Confirm Demo

alert("This is a sample alert!");
const confirmText = confirm("Are you sure you want to log off?");
document.getElementById("confirmResponse").innerHTML = confirmText;

const promptText = prompt("What is your name?");
document.getElementById("promptResponse").innerHTML = promptText;
