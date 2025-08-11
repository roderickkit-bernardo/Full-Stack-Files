// Developer: Roderick Bernardo
// Purpose: Express app that provides Tax bracket data

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

// 200 OK
app.get("/", (req, res) => {
  res.status(200).json({
    federal: {
      2025: {
        brackets: [
          { rate: 14.5, ceiling: 57375, floor: 0 },
          { rate: 20.5, ceiling: 114750, floor: 57375 },
          { rate: 26, ceiling: 177882, floor: 114750 },
          { rate: 29, ceiling: 253414, floor: 177882 },
          { rate: 33, ceiling: -1, floor: 253414 },
        ],
      },
    },

    provincial: {
      Ontario: {
        2025: {
          brackets: [
            { rate: 5.05, ceiling: 52886, floor: 0 },
            { rate: 9.15, ceiling: 105775, floor: 52886 },
            { rate: 11.16, ceiling: 150000, floor: 105775 },
            { rate: 12.16, ceiling: 220000, floor: 150000 },
            { rate: 13.16, ceiling: -1, floor: 220000 },
          ],
        },
      },
    },
  });
});

// Catch-all route for undefined paths
app.use((req, res) => {
  res.status(404).json({ message: "This route does not exist" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
