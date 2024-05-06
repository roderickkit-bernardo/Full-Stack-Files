const Users = require("./lib/Users");
const cors = require("cors");
const express = require("express");
const app = express();
const port = 3000;
const APP_NAME = "Basic-Backend-App";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(users);
});

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

app.listen(port, () => {
  console.log(`${APP_NAME} listening on port ${port}`);
});
