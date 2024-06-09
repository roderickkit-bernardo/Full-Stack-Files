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
  const htmlObject = `<!doctypehtml><meta charset=utf-8><meta content="width=device-width,initial-scale=1"name=viewport><title>Simple HTML</title><h1>Simple HTML</h1>`;
  res.send(htmlObject);
});

app.listen(port, () => {
  console.log(`${APP_NAME} listening on port ${port}`);
});
