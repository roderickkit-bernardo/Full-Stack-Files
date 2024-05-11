// Developer: Roderick Bernardo
// Purpose: Express crud backend app

const UUIDUtilsCommonJS = require("./lib/UUIDUtilsCommonJS");
const cors = require("cors");
const express = require("express");
const app = express();
const port = 3000;
const APP_NAME = "Crud-Backend-App";
let albums = [];

// Allow CORS for testing
app.use(cors());

// To handle Json body requests
app.use(express.json());

// To handle form data
app.use(express.urlencoded({ extended: true }));

// Create
app.post("/", (req, res) => {
  res.send(createItem(req.body));
});

// Read all albums
app.get("/", (req, res) => {
  res.send(readItems());
});

// Read one album
app.get("/:id", (req, res) => {
  res.send(readItems(req.params.id));
});

// Update
app.put("/", (req, res) => {
  res.send(updateItem(req.body));
});

// Delete
app.delete("/", (req, res) => {
  res.send(deleteItem(req.body.id));
});

app.get("*", (req, res) => {
  res.status(401).send({ status: 401, message: `Url: ${req.url} not found.` });
});

app.listen(port, () => {
  console.log(`${APP_NAME} listening on port ${port}`);
});

function createItem(album) {
  album.id = UUIDUtilsCommonJS.generateUUID(4);
  albums.push(album);

  const message = `Album id: ${album.id} successfully created.`;
  console.log(message);

  return {
    status: "ok",
    message: message,
  };
}

function readItems(id = "") {
  let message = `Number of albums fetched:`;

  if (id === "") {
    console.log(`${message} ${albums.length}.`);
    return albums;
  } else {
    console.log(`${message} 1.`);
    return albums.filter((album) => {
      return album.id === id;
    });
  }
}

function updateItem(albumParam) {
  let albumToUpdate = albums.find((album) => {
    return album.id === albumParam.idUpdate;
  });

  const keys = Object.keys(albumToUpdate);
  delete keys.id;

  keys.forEach((key) => {
    if (albumToUpdate[key] != albumParam[`${key}Update`]) {
      albumToUpdate[key] = albumParam[`${key}Update`];
    }
  });

  const message = `Album id: ${albumToUpdate.id} successfully updated.`;
  console.log(message);

  return { status: "ok", message: message };
}

function deleteItem(id) {
  albums = albums.filter((album) => {
    return album.id !== id;
  });

  const message = `Album id: ${id} successfully deleted.`;
  console.log(message);

  return { status: "ok", message: message };
}
