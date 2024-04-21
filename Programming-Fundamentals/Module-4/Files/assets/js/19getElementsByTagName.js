// Developer: Roderick Bernardo
// Purpose: getElementsByTagName Demo

// Get reference to all the buttons
const buttons = document.getElementsByTagName("button");

// Register the each button for the click event
for (let button of buttons) {
  button.addEventListener("click", (event) => {
    processEvent(event.target.textContent);
  });
}

// Do the processing based on the clicked button
function processEvent(action) {
  if (action == "Reset") {
    // This will reload the current page
    window.location.reload();
  } else {
    // Get reference to all p tags
    const pTags = document.getElementsByTagName("p");

    for (const pTag of pTags) {
      if (action == "UPPERCASE") {
        pTag.innerText = pTag.innerText.toUpperCase();
      } else if (action == "lowercase") {
        pTag.innerText = pTag.innerText.toLowerCase();
      } else if (action == "Erase") {
        pTag.innerText = "";
      }
    }
  }
}
