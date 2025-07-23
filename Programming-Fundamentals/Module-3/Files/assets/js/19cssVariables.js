// Developer: Roderick Bernardo
// Purpose: Change the theme of a page by using variables

function changeTheme() {
  const root = document.documentElement;
  const backgroundColorValue =
    getComputedStyle(root).getPropertyValue("--backgroundColor");
  const foregroundColorValue =
    getComputedStyle(root).getPropertyValue("--foregroundColor");

  // Just switch the color code
  root.style.setProperty("--backgroundColor", foregroundColorValue);
  root.style.setProperty("--foregroundColor", backgroundColorValue);

  const themeButton = document.getElementById("themeButton");
  console.log(themeButton.innerText);
  if (themeButton.innerText == "Light Theme") {
    themeButton.innerText = "Dark Theme";
  } else {
    themeButton.innerText = "Light Theme";
  }
}
