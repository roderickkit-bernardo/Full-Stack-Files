// Developer: Roderick Bernardo
// Purpose: EJS / Express Node js app

const express = require("express");
const app = express();
const port = 3000;
const APP_NAME = "ejs-login-app";

app.set("view engine", "ejs");
app.use(express.static("public"));

const data = {
  form: {
    id: "loginForm",
    method: "POST",
    fields: [
      {
        forIdName: "userName",
        label: "User Name:",
        placeholder: "Enter your User Name",
        divId: "",
      },
      {
        forIdName: "password",
        label: "Password:",
        placeholder: "Enter your password",
        divId: "passwordDiv",
      },
    ],
  },
};

app.get("/", (req, res) => {
  res.render("index", { data: data });
});

app.listen(port, () => {
  console.log(`${APP_NAME} listening on port ${port}`);
});
