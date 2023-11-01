// Developer Name:
// Purpose:

// Show / hide divs based on it's id
// Change button text based on it's current value
function toggleDiv(divId, buttonId) {
  const div = document.getElementById(divId);

  if (div.style.display == "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }

  const button = document.getElementById(buttonId);
  if (button.innerText == "CLOSE") {
    button.innerText = "OPEN";
  } else {
    button.innerText = "CLOSE";
  }
}
