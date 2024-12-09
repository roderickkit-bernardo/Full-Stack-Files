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
  const createItemResult = crud.createItem(req.body);
  console.log("[POST - Method]");
  console.log("[Request]");
  console.log(req.body);
  console.log("[Response]");
  console.log(createItemResult);
  res.send(createItemResult);
});

// Read all albums
app.get("/", (req, res) => {
  const readItemsResult = crud.readItems();
  console.log("[GET - Method]");
  console.log("[Request]");
  console.log("/");
  console.log("[Response]");
  console.log(readItemsResult);
  res.send(readItemsResult);
});

// Read one album
app.get("/:id", (req, res) => {
  const readItemsResult = crud.readItems(req.params.id);
  console.log("[GET - Method]");
  console.log("[Request]");
  console.log("/" + req.params.id);
  console.log("[Response]");
  console.log(readItemsResult);
  res.send(readItemsResult);
});

// Update
app.put("/", (req, res) => {
  const updateItemResult = crud.updateItem(req.body);
  console.log("[PUT - Method]");
  console.log("[Request]");
  console.log(req.body);
  console.log("[Response]");
  console.log(updateItemResult);
  res.send(updateItemResult);
});

// Delete
app.delete("/", (req, res) => {
  const deleteItemResult = crud.deleteItem(req.body.id);
  console.log("[DELETE - Method]");
  console.log("[Request]");
  console.log(req.body);
  console.log("[Response]");
  console.log(deleteItemResult);
  res.send(deleteItemResult);
});

app.get("*", (req, res) => {
  res.status(401).send({ status: 401, message: `Url: ${req.url} not found.` });
});

app.listen(PORT, () => {
  console.log(`${APP_NAME} listening on PORT ${PORT}`);
});
