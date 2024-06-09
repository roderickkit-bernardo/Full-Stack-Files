// Developer: Roderick Bernardo
// Purpose: Express routing middleware app

const express = require("express");
const app = express();
const port = 3000;
const APP_NAME = "Express-Routing-Middleware-App";

app.use(simpleMiddleware);

app.get("/", (req, res) => {
  res.send("GET request");
});

app.post("/", (req, res) => {
  res.send("POST request");
});

app.put("/", (req, res) => {
  res.send("PUT request");
});

app.delete("/", (req, res) => {
  res.send("DELETE request");
});

app.listen(port, () => {
  console.log(`${APP_NAME} listening on port ${port}`);
});

function simpleMiddleware(req, res, next) {
  console.log(
    `[Type: Request] [Url: ${req.url}] [Method: ${req.method}] [User Agent: ${req.headers["user-agent"]}]`
  );
  next();
  console.log(
    `[Type: Response] [Status Code: ${res.statusCode}] [Status Message: ${res.statusMessage}]`
  );
}
