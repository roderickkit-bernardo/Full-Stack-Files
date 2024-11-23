// Developer: Roderick Bernardo
// Purpose: Express app

const express = require("express");
const app = express();
const port = 3000;
const APP_NAME = "Express-App";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/json", (req, res) => {
  const userObject = { firstName: "Elon", lastName: "Musk" };
  res.send(userObject);
});

app.get("/html", (req, res) => {
  const htmlObject = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Simple HTML" />
    <title>Simple HTML</title>
  </head>
  <body>
    <h1>Simple HTML</h1>
  </body>
</html>`;

  res.send(htmlObject);
});

app.listen(port, () => {
  console.log(`${APP_NAME} listening on port ${port}`);
});
