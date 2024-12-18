// Developer: Roderick Bernardo
// Purpose: Express Microservice JWT user authentication

const express = require("express");
const app = express();
// Load .env file
require("dotenv").config();
// Use the .env file to set the following
const PORT = parseInt(process.env.PORT);
const APP_NAME = process.env.APP_NAME;
const jwt = require("jsonwebtoken");
const SECRET_TOKEN_KEY = process.env.SECRET_TOKEN_KEY;
const KEY = "token=";

// Body parser middleware
app.use(express.json());

// Body parser middleware
app.use(express.urlencoded({ extended: true }));

const requireAuthJWT = (req, res, next) => {
  let token;
  // Sometimes headers and cookie can be null
  const cookies = req.headers?.cookie?.split(" ");
  let loginRedirect = false;

  if (typeof cookies != "undefined") {
    let filteredCookie = cookies.filter((element) => {
      return element.startsWith(KEY);
    });

    if (filteredCookie.length == 1) {
      token = filteredCookie[0];
      token = token.substring(KEY.length);
    }
  }

  if (token) {
    try {
      const decodedToken = jwt.verify(token, SECRET_TOKEN_KEY);
      const { userName, iat, exp } = decodedToken;

      console.log(decodedToken);
      console.log(`User Name: ${userName}`);
      console.log(`Issued Date: ${new Date(iat * 1000).toUTCString()}`);
      console.log(`Expiration Date: ${new Date(exp * 1000).toUTCString()}`);

      next();
    } catch (error) {
      console.log("error:", error);
      loginRedirect = true;
    }
  } else {
    loginRedirect = true;
  }

  if (loginRedirect) {
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

        const token = jwt.sign(
          { userName: req.body.userName },
          SECRET_TOKEN_KEY,
          {
            expiresIn: "1h", // One hour expiration
          }
        );

        res.cookie("token", token, {
          httpOnly: true,
          secure: false, // Only for testing
          maxAge: 3600000,
        });

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
  res.clearCookie(KEY.substring(0, KEY.length - 1));
  console.log("Successfully logged out.");
  res.redirect("/");
});

app.get("/", (req, res) => {
  res.redirect("/landingPage");
});

app.get("/landingPage", requireAuthJWT, (req, res) => {
  res.sendFile(`${__dirname}/landingPage.html`);
});

app.listen(PORT, () => {
  console.log(`${APP_NAME} listening on port ${PORT}`);
});
