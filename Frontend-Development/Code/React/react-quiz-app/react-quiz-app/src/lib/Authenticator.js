// Developer: Roderick Bernardo
// Purpose: React quiz app

import Cookies from "js-cookie";

const Authenticator = {
  login: (token) => {
    // Expires in 1 day
    Cookies.set("userName", token.userName, { expires: 1 });
    Cookies.set("isAdmin", token.isAdmin, { expires: 1 });
  },
  logout: () => {
    Cookies.remove("userName");
    Cookies.remove("isAdmin");
  },
  getUserName: () => {
    let userName = Cookies.get("userName");
    if (typeof userName === "undefined") {
      userName = "";
    }
    return userName;
  },
  isAdmin: () => {
    let isAdmin = Cookies.get("isAdmin");
    if (typeof isAdmin === "undefined") {
      isAdmin = "n";
    }

    return isAdmin;
  },
  isAuthenticated: () => {
    // Returns true if 'authToken' exists, false otherwise
    return !!Cookies.get("userName");
  },
};

export default Authenticator;
