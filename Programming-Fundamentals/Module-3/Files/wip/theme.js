function changeTheme() {
  const root = document.documentElement;
  const backgroundColorValue =
    getComputedStyle(root).getPropertyValue("--backgroundColor");
  const foregroundColorValue =
    getComputedStyle(root).getPropertyValue("--foregroundColor");

  // Just switch the color code
  root.style.setProperty("--backgroundColor", foregroundColorValue);
  root.style.setProperty("--foregroundColor", backgroundColorValue);
}
