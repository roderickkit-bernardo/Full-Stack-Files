const fs = require("fs");
const path = require("path");

const dirPath = "../images";

fs.readdir(dirPath, { withFileTypes: true }, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  const folders = files
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name);

  console.log("const images =", folders);
});
