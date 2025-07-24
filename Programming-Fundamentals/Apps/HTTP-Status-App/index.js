// Developer: Roderick Bernardo
// Purpose: Express app that demonstrates HTTP method and code testing

const express = require("express");
const app = express();
const PORT = 3000;

// 200 OK
app.get("/success", (req, res) => {
  res.status(200).json({ message: "OK - Success" });
});

// 201 Created
app.post("/create", (req, res) => {
  res.status(201).json({ message: "Resource created successfully" });
});

// 400 Bad Request
app.get("/bad-request", (req, res) => {
  res.status(400).json({ message: "Bad Request" });
});

// 401 Unauthorized
app.get("/unauthorized", (req, res) => {
  res.status(401).json({ message: "Unauthorized access" });
});

// 403 Forbidden
app.get("/forbidden", (req, res) => {
  res.status(403).json({ message: "Forbidden" });
});

// 404 Not Found
app.get("/not-found", (req, res) => {
  res.status(404).json({ message: "Resource not found" });
});

// 500 Internal Server Error
app.get("/error", (req, res) => {
  res.status(500).json({ message: "Internal server error" });
});

// Catch-all route for undefined paths
app.use((req, res) => {
  res.status(404).json({ message: "This route does not exist" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
