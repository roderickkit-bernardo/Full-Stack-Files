// Developer: Roderick Bernardo
// Purpose: Fullstack Development Course Website

document.title = "Fullstack Development Course Website";

function buidList() {
  const mainSection = document.getElementById("mainSection");

  // Website configuration
  const listConfig = [
    {
      href: "./frontendDevelopment/index.html",
      label: "Frontend Development",
    },
    {
      href: "./backendDevelopment/index.html",
      label: "Backend Development",
    },
  ];

  listConfig.forEach((listItemConfig) => {
    mainSection.appendChild(buidListItem(listItemConfig));
  });
}

function buidListItem(listItemConfig) {
  const div = document.createElement("div");
  div.className = "block";
  const h1 = document.createElement("h1");
  h1.className = "glow largeFont has-text-centered has-text-weight-bold";
  const a = document.createElement("a");
  a.className = "has-text-white";
  a.href = listItemConfig.href;
  a.innerText = listItemConfig.label;

  h1.appendChild(a);
  div.appendChild(h1);

  return div;
}

buidList();
