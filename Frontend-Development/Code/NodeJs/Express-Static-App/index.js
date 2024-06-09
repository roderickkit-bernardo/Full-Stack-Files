// Developer: Roderick Bernardo
// Purpose: Express static app

const express = require("express");
const app = express();
const port = 3000;
const APP_NAME = "Express-Static-App";

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.listen(port, () => {
  console.log(`${APP_NAME} listening on port ${port}`);
});
