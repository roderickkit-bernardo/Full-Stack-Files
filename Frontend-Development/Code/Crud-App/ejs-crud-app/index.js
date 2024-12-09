// Developer: Roderick Bernardo
// Purpose: EJS / Express Node js app

const express = require("express");
const app = express();
const port = 3000;
const APP_NAME = "ejs-crud-app";

app.set("view engine", "ejs");
app.use(express.static("public"));

const data = {
  form: {
    id: "albumForm",
    method: "POST",
    fields: [
      {
        forIdName: "albumName",
        label: "Album Name:",
        placeholder: "Enter the album name",
      },
      {
        forIdName: "artistName",
        label: "Artist Name:",
        placeholder: "Enter the artist name",
      },
      {
        forIdName: "year",
        label: "Year:",
        placeholder: "Enter the year",
      },
    ],
    buttons: [
      { class: "button is-link", name: "submit", label: "Submit" },
      {
        class: "button is-link is-light",
        name: "cancel",
        label: "Reset",
      },
    ],
  },
  tableHeaders: ["Album Name", "Artist Name", "Year", "List Operations"],
};

app.get("/", (req, res) => {
  res.render("index", { data: data });
});

app.listen(port, () => {
  console.log(`${APP_NAME} listening on port ${port}`);
});
