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

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/verifyUserName/:userName", (req, res) => {
  console.log(`/verifyUserName/${req.params.userName}`);
  res.send(Users.verifyUserName(req.params.userName));
});

app.post("/verifyUserNameAndPassword", (req, res) => {
  Users.verifyUserNameAndPassword(req.body.userName, req.body.password).then(
    (verifyUserNameAndPasswordResponse) => {
      console.log(`/verifyUserNameAndPassword/${req.body.userName}`);
      res.send(verifyUserNameAndPasswordResponse);
    }
  );
});

app.get("/quizConfig", (req, res) => {
  console.log(`/quizConfig`);
  res.send({
    title: "Canadian Provinces Capital Cities",
    description: `This quiz is about the capitals cities of canadian provinces. The passing mark is 80%.`,
    passingCriteria: 80,
    questionAndAnswers: [
      {
        question: "What is the capital city of Ontario?",
        answers: [
          { text: "Toronto", isCorrect: 1 },
          { text: "Brampton", isCorrect: 0 },
          { text: "Scarborough", isCorrect: 0 },
          { text: "Ajax", isCorrect: 0 },
        ],
      },
      {
        question: "What is the capital city of Quebec?",
        answers: [
          { text: "Montreal", isCorrect: 0 },
          { text: "Quebec City", isCorrect: 1 },
          { text: "Laval", isCorrect: 0 },
          { text: "Gatineau", isCorrect: 0 },
        ],
      },
      {
        question: "What is the capital city of Manitoba?",
        answers: [
          { text: "Brandon", isCorrect: 0 },
          { text: "Dauphin", isCorrect: 0 },
          { text: "Selkirk", isCorrect: 0 },
          { text: "Winnipeg", isCorrect: 1 },
        ],
      },
      {
        question: "What is the capital city of British Columbia?",
        answers: [
          { text: "Nanaimo", isCorrect: 0 },
          { text: "Victoria", isCorrect: 1 },
          { text: "Coquitlam", isCorrect: 0 },
          { text: "Vancouver", isCorrect: 0 },
        ],
      },
      {
        question: "What is the capital city of Alberta?",
        answers: [
          { text: "Medicine Hat", isCorrect: 0 },
          { text: "Reed Deer", isCorrect: 0 },
          { text: "Edmonton", isCorrect: 1 },
          { text: "Calgary", isCorrect: 0 },
        ],
      },
    ],
  });
});

app.get("*", (req, res) => {
  console.log(`${req.url}`);
  res.status(401).send({ status: 401, message: `Url: ${req.url} not found.` });
});

app.listen(PORT, () => {
  console.log(`${APP_NAME} listening on port ${PORT}`);
});
