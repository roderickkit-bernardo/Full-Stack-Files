// Developer: Roderick Bernardo
// Purpose: Express Microservice Backend app for user authentication

const Users = require("./lib/Users");
const cors = require("cors");
const express = require("express");
const app = express();

// Load .env file
require("dotenv").config();
// Use the .env file to set the following
const PORT = parseInt(process.env.PORT);
const APP_NAME = process.env.APP_NAME;

// Required Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/verifyUserName/:userName", (req, res) => {
  res.send(Users.verifyUserName(req.params.userName));
});

app.post("/verifyUserNameAndPassword", (req, res) => {
  Users.verifyUserNameAndPassword(req.body.userName, req.body.password).then(
    (verifyUserNameAndPasswordResponse) => {
      res.send(verifyUserNameAndPasswordResponse);
    }
  );
});

app.get("*", (req, res) => {
  res.status(401).send({ status: 401, message: `Url: ${req.url} not found.` });
});

app.listen(PORT, () => {
  console.log(`${APP_NAME} listening on PORT ${PORT}`);
});
