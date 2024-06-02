const UUIDUtilsCommonJS = require("./UUIDUtilsCommonJS");

let albums = [];

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

module.exports = { createItem, readItems, updateItem, deleteItem };
