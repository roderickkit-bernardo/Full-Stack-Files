const express = require("express");
const app = express();
// Load .env file
require("dotenv").config();
// Use the .env file to set the following
const PORT = parseInt(process.env.PORT);
const APP_NAME = process.env.APP_NAME;
const SECRET_TOKEN_KEY = process.env.SECRET_TOKEN_KEY;
const session = require("express-session");

// Session middleware
app.use(
  session({
    secret: SECRET_TOKEN_KEY,
    resave: false,
    saveUninitialized: true,
    // Set the true if https
    cookie: { secure: false },
  })
);

// Body parser middleware
app.use(express.json());

// Body parser middleware
app.use(express.urlencoded({ extended: true }));

const requireAuthSessions = (req, res, next) => {
  if (typeof req.session.userName == "string" && req.session.userName) {
    console.log("User already logged in.");
    next(); // User is authenticated, continue to next middleware
  } else {
    // User is not authenticated, redirect to login page
    console.log("User not logged in.");
    console.log("Redirecting to the login page.");
    res.sendFile(`${__dirname}/login.html`);
  }
};

app.post("/login", (req, res) => {
  if (
    typeof req.body.userName == "string" &&
    typeof req.body.password == "string"
  ) {
    (async () => {
      const response = await fetch(`${process.env.AUTH_END_POINT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: req.body.userName,
          password: req.body.password,
        }),
      });

      const responseJson = await response.json();
      if (responseJson.userNameAndPasswordMatches) {
        console.log("Successfully logged in.");
        console.log("Redirecting to the landing page.");
        req.session.userName = req.body.userName;
        res.redirect("/landingPage");
      } else {
        console.log("Invalid username and password.");
        console.log("Redirecting to the login page.");
        res.sendFile(`${__dirname}/login.html`);
      }
    })();
  } else {
    console.log("Redirecting to login.html.");
    res.sendFile(`${__dirname}/login.html`);
  }
});

app.post("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        console.log("Unable to log out.");
        res.redirect("/landingPage");
      } else {
        console.log("Successfully logged out.");
        res.redirect("/landingPage");
      }
    });
  }
});

app.get("/", (req, res) => {
  res.redirect("/landingPage");
});

app.get("/landingPage", requireAuthSessions, (req, res) => {
  res.sendFile(`${__dirname}/landingPage.html`);
});

app.listen(PORT, () => {
  console.log(`${APP_NAME} listening on port ${PORT}`);
});
