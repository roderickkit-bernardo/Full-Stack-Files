// Developer: Roderick Bernardo
// Purpose: Express app that uses EJS templates

const express = require("express");
const app = express();
const port = 3000;
const APP_NAME = "EJS-APP";

// JSON data used for this app
const appConfig = {
  title: "Rogers-Bell Communications",
  description: "3 Internet Packages to choose from",
  internetPackages: [
    {
      title: "Ignite Internet 50",
      price: "$ 59.99 / month",
      listItems: [
        "50 Mbps download speed",
        "Powerful WiFi 6 technology",
        "Add Ignite Streaming for $5/month",
        "Wifi Satisfaction Guarantee",
      ],
    },
    {
      title: "Ignite Internet 150",
      price: "$ 69.99 / month",
      listItems: [
        "150 Mbps download speed",
        "Powerful WiFi 6 technology",
        "Add Ignite Streaming for $5/month",
        "Wifi Satisfaction Guarantee",
      ],
    },
    {
      title: "Ignite Internet 500",
      price: "$ 89.99 / month",
      listItems: [
        "500 Mbps download speed",
        "Powerful WiFi 6 technology",
        "Add Ignite Streaming for $5/month",
        "Wifi Satisfaction Guarantee",
      ],
    },
  ],
};

// Middleware that uses ejs template as the view engine
app.set("view engine", "ejs");

// Default route
app.get("/", (req, res) => {
  // The render will build the HTML based on the view template and data
  res.render("index", { appConfig: appConfig });
});

app.listen(port, () => {
  console.log(`${APP_NAME} listening on port ${port}`);
});
