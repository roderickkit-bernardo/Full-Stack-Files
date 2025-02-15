// Developer: Roderick Bernardo
// Purpose: Fullstack Development Course Website

document.title = "Backend Development Course Website";

const homeLabel = "Backend Home";

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });

  const fileName = window.location.pathname.split("/").pop();
  buildMenuTop(fileName);
  buildMenuSide(fileName);
  buildFooter();
});

function scrollToElement(elementId, stickyHeaderHeight) {
  let targetElement = document.getElementById(elementId);
  let targetOffset = targetElement.offsetTop - stickyHeaderHeight;

  window.scrollTo({
    top: targetOffset,
    behavior: "smooth",
  });
}

const menuTopItems = [
  { link: "../../index.html", label: " Home " },
  { link: "index.html", label: ` ${homeLabel} ` },
  {
    link: "backendConcepts.html",
    label: " Backend Concepts ",
  },
  {
    link: "dataSourcesPersistence.html",
    label: " Data Sources / Persistence ",
  },
  {
    link: "appDeployment.html",
    label: " App Deployment ",
  },
];

function buildMenuTop(fileName) {
  const menuClass = "navbar-item";
  const menuTop = document.getElementById("menuTop");
  let innerHTML = "";

  menuTopItems.forEach((menuTopItem) => {
    let link = "";

    if (
      (fileName == "" || fileName == "index.html") &&
      menuTopItem.label == ` ${homeLabel} `
    ) {
      link = menuTopItem.link;
    } else if (
      (fileName == "" || fileName == "index.html") &&
      menuTopItem.label != ` ${homeLabel} `
    ) {
      link = `./html/${menuTopItem.link}`;
    } else if (
      (fileName == "" || fileName != "index.html") &&
      menuTopItem.label == ` ${homeLabel} `
    ) {
      link = `../${menuTopItem.link}`;
    } else {
      link = menuTopItem.link;
    }

    innerHTML = `${innerHTML}<a class="${menuClass}${
      menuTopItem.link == fileName ? " is-active" : ""
    }" href="${link}">${menuTopItem.label}</a>`;
  });

  menuTop.innerHTML = innerHTML;
}

function buildFooter() {
  const footer = document.getElementById("footer");
  footer.innerHTML = `<div class="content has-text-centered"><p><strong>${document.title} by:</strong><a href="https://github.com/roderickkit-bernardo/" target="_blank"> Roderick Bernardo</a>.</p></div>`;
}

const menuSideItemsMap = new Map();
menuSideItemsMap.set("backendConcepts.html", [
  "Introduction to Backend",
  "HTTP Method",
  "API",
  "TypeScript",
  "Express JS",
]);

menuSideItemsMap.set("dataSourcesPersistence.html", [
  "SQL Databases",
  "SQL",
  "Database Design",
  "SQL Object Relational Mapper",
  "No SQL Datatases",
  "No SQL Object Data Modelling",
  "Queues",
]);

menuSideItemsMap.set("appDeployment.html", [
  "Cloud Computing Services",
  "Git Hub",
]);

function buildMenuSide(fileName) {
  if (menuSideItemsMap.has(fileName)) {
    let stickyHeaderHeight = document.querySelector(
      ".navbar.is-fixed-top"
    ).offsetHeight;

    const listItems = menuSideItemsMap.get(fileName);
    const menuSide = document.getElementById("menuSide");
    let innerHTML = "";
    listItems.forEach((listItem) => {
      innerHTML = `${innerHTML}<li><a>${listItem}</a></li>`;
    });

    menuSide.innerHTML = innerHTML;

    const ulElement = document.querySelector(".menu-list.is-size-5");

    // Select all <li> elements inside the <ul> with class "menu-list is-size-5"
    const listItemElements = ulElement.querySelectorAll("li");

    // Loop through each <li> element
    listItemElements.forEach((item, index) => {
      // Setting id based on index to be use for the target element
      item.childNodes[0].setAttribute("id", `link${index + 1}`);
      item.addEventListener("click", (event) => {
        // item.childNodes[0].classList.toggle("is-active");
        scrollToElement(`${event.target.id}Element`, stickyHeaderHeight);
      });
    });
  }
}
