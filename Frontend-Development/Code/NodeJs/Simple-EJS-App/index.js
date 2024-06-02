// Developer: Roderick Bernardo
// Purpose: Express EJS template app using the following CSS frameworks:
// Bulma
// Bootstrap

const express = require("express");
const app = express();
const port = 3000;
const APP_NAME = "Simple-EJS-App";

// Data used by the website
const config = {
  config: {
    header: {
      brandText: "Header text...",
      navItems: [
        {
          label: "Link 1",
          href: "#",
          styleBulma: "button is-primary is-outlined",
          styleBootstrap: "btn btn-primary",
        },
        {
          label: "Link 2",
          href: "#",
          styleBulma: "button is-info is-outlined",
          styleBootstrap: "btn btn-secondary",
        },
        {
          label: "Link 3",
          href: "#",
          styleBulma: "button is-warning is-outlined",
          styleBootstrap: "btn btn-success",
        },
      ],
    },
    content: {
      listTitle: "MAANG Companies",
      listItems: ["Meta", "Apple", "Amazon", "Netflix", "Google"],
    },
    footer: "Footer text...",
  },
};

// Use the ejs view engine
app.set("view engine", "ejs");

// Bulma template
app.get("/bulma", (req, res) => {
  res.render("bulma", config);
});

// Bootstrap template
app.get("/bootstrap", (req, res) => {
  res.render("bootstrap", config);
});

app.listen(port, () => {
  console.log(`${APP_NAME} listening on port ${port}`);
});
