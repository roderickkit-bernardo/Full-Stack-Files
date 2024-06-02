// Developer: Roderick Bernardo
// Purpose: Express app that uses EJS templates

const express = require("express");
const app = express();
const port = 3000;
const APP_NAME = "Simple-Express-EJS-App";

app.set("view engine", "ejs");

const data = {
  header: { title: "header datas..." },
  content: {
    title: "North American Countries",
    northAmericanCountries: [
      { name: "Canada", code: "CA" },
      { name: "Mexico", code: "MX" },
      { name: "United States", code: "US" },
    ],
  },
  footer: { title: "footer data..." },
};

app.get("/", (req, res) => {
  res.render("index", { data: data });
});

app.listen(port, () => {
  console.log(`${APP_NAME} listening on port ${port}`);
});
