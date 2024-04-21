// Developer: Roderick Bernardo
// Purpose: getElementsByTagName Demo

// Get reference to all the buttons
const buttons = document.getElementsByTagName("button");

// Register the each button for the click event
for (let button of buttons) {
  button.addEventListener("click", (event) => {
    processEvent(event.target.textContent.trim());
  });
}

// Do the processing based on the clicked button
function processEvent(action) {
  alert(action);
  const googleLink = document.getElementById("googleLink");
  if (action == "Add Alt Attribute") {
    googleLink.setAttribute("alt", "This is a google link.");
  } else if (action == "Remove Alt Attribute") {
    googleLink.removeAttribute("alt");
  }
}
