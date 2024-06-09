// Developer: Roderick Bernardo
// Purpose: React quiz app

import Cookies from "js-cookie";

const Autheticator = {
  login: (token) => {
    // Expires in 1 day
    Cookies.set("authToken", token, { expires: 1 });
  },
  logout: () => {
    Cookies.remove("authToken");
  },
  getToken: () => {
    return Cookies.get("authToken");
  },
  isAuthenticated: () => {
    // Returns true if 'authToken' exists, false otherwise
    return !!Cookies.get("authToken");
  },
};

export default Autheticator;
