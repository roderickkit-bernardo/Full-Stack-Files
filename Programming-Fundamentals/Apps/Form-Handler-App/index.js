// Developer: Roderick Bernardo
// Purpose: Express app that demonstrates form handling

const express = require("express");
const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Configure storage for multer (where files will be saved)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads"); // folder to save files
  },
  filename: (req, file, cb) => {
    // Rename the file to avoid overwriting
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.originalname + "-" + uniqueSuffix + ext);
  },
});

const upload = multer({ storage });

app.use(bodyParser.urlencoded({ extended: true }));

// Handle GET requests
app.get("/", (req, res) => {
  const response = { method: req.method, url: req.url, data: { ...req.query } };

  console.log(response);
  res.send(response);
});

// Handle POST requests
app.post("/", (req, res) => {
  const response = {
    method: req.method,
    url: req.url,
    data: req.body,
  };

  console.log(response);
  res.send(response);
});

// Handle file upload POST
app.post("/upload", upload.single("myFile"), (req, res) => {
  const response = {
    method: req.method,
    url: req.url,
    data: req.body,
    file: req.file,
  };

  console.log(response);

  if (!req.file) {
    return res.status(400).json(response);
  }

  res.json(response);
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
