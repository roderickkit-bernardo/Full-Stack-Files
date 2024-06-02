// Developer: Roderick Bernardo
// Purpose: Express crud backend app

const crud = require("./lib/crud");
const cors = require("cors");
const express = require("express");
const app = express();
// Load .env file
require("dotenv").config();
// Use the .env file to set the following
const PORT = parseInt(process.env.PORT);
const APP_NAME = process.env.APP_NAME;

// Allow CORS for testing
app.use(cors());

// To handle Json body requests
app.use(express.json());

// To handle form data
app.use(express.urlencoded({ extended: true }));

// Create
app.post("/", (req, res) => {
  res.send(crud.createItem(req.body));
});

// Read all albums
app.get("/", (req, res) => {
  res.send(crud.readItems());
});

// Read one album
app.get("/:id", (req, res) => {
  res.send(crud.readItems(req.params.id));
});

// Update
app.put("/", (req, res) => {
  res.send(crud.updateItem(req.body));
});

// Delete
app.delete("/", (req, res) => {
  res.send(crud.deleteItem(req.body.id));
});

app.get("*", (req, res) => {
  res.status(401).send({ status: 401, message: `Url: ${req.url} not found.` });
});

app.listen(PORT, () => {
  console.log(`${APP_NAME} listening on PORT ${PORT}`);
});
