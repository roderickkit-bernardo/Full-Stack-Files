// Developer: Roderick Bernardo
// Purpose: Change the theme of a page by changing the style sheet

function changeTheme() {
  const themeButton = document.getElementById("themeButton");
  const linkElement = document.getElementById("css");
  // Toggle switch the style sheet files
  if (linkElement.href.includes("32cssChangeFileLight.css")) {
    linkElement.href = "./assets/css/32cssChangeFileDark.css";
    themeButton.innerText = "Dark Theme";
  } else {
    linkElement.href = "./assets/css/32cssChangeFileLight.css";
    themeButton.innerText = "Light Theme";
  }
}
