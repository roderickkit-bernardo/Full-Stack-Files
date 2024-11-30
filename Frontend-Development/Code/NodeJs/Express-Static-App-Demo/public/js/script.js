// Developer: Roderick Bernardo
// Purpose: Express static app

const baseUrl = "https://unpkg.com/sakura.css/css";

let theme = document.getElementById("theme");

theme.addEventListener("change", (event) => {
  let cssTheme = document.getElementById("cssTheme");
  cssTheme.href = `${baseUrl}/${theme.value}.css`;
  alert(`cssTheme.href is set to: ${cssTheme.href}`);
});
