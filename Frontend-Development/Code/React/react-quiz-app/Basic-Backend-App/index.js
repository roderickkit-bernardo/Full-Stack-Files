// Developer: Roderick Bernardo
// Purpose: Express Microservice Backend app for user authentication

const Users = require("./lib/Users");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();

// Load .env file
require("dotenv").config();
// Use the .env file to set the following
const PORT = parseInt(process.env.PORT);
const APP_NAME = process.env.APP_NAME;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    const filePath = `./uploads/${file.originalname}`;
    // Overwrite the file if it exists as per design
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.get("/verifyUserName/:userName", (req, res) => {
  console.log(`/verifyUserName/${req.params.userName}`);
  res.send(Users.verifyUserName(req.params.userName));
});

app.post("/verifyUserNameAndPassword", (req, res) => {
  Users.verifyUserNameAndPassword(req.body.userName, req.body.password).then(
    (verifyUserNameAndPasswordResponse) => {
      console.log(`/verifyUserNameAndPassword/${req.body.userName}`);
      console.log(verifyUserNameAndPasswordResponse);
      res.send(verifyUserNameAndPasswordResponse);
    }
  );
});

app.get("/quizConfig", (req, res) => {
  console.log(`/quizConfig`);
  fs.readFile(`./uploads/quizConfig.json`, (error, data) => {
    if (error) {
      res.send({});
    } else {
      res.send(data);
    }
  });
});

app.post("/upload", upload.single("fileUpload"), (req, res) => {
  console.log("/upload");

  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  res.send(`File uploaded successfully.`);
});

app.get("*", (req, res) => {
  console.log(`Not found: ${req.url}`);
  res.status(401).send({ status: 401, message: `Url: ${req.url} not found.` });
});

app.listen(PORT, () => {
  console.log(`${APP_NAME} listening on port ${PORT}`);
});
