document.addEventListener("DOMContentLoaded", () => {
  let stickyHeaderHeight = document.querySelector(
    ".navbar.is-fixed-top"
  ).offsetHeight;

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

  const ulElement = document.querySelector(".menu-list.is-size-5");

  // Select all <li> elements inside the <ul> with class "menu-list is-size-5"
  const listItems = ulElement.querySelectorAll("li");

  // Loop through each <li> element
  listItems.forEach((item, index) => {
    // Setting id based on index to be use for the target element
    item.childNodes[0].setAttribute("id", `link${index + 1}`);
    item.addEventListener("click", (event) => {
      // item.childNodes[0].classList.toggle("is-active");
      scrollToElement(`${event.target.id}Element`, stickyHeaderHeight);
    });
  });
});

function scrollToElement(elementId, stickyHeaderHeight) {
  let targetElement = document.getElementById(elementId);
  let targetOffset = targetElement.offsetTop - stickyHeaderHeight;

  window.scrollTo({
    top: targetOffset,
    behavior: "smooth",
  });
}
