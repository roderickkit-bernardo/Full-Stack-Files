// Developer: Roderick Bernardo
// Purpose: React quiz app

const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  REACT_APP_SERVER_END_POINT: process.env.REACT_APP_SERVER_END_POINT,
  REACT_APP_QUIZ_CONFIG: process.env.REACT_APP_QUIZ_CONFIG,
  REACT_APP_VERIFY_USER_NAME_AND_PASSWORD:
    process.env.REACT_APP_VERIFY_USER_NAME_AND_PASSWORD,
  REACT_APP_UPLOAD: process.env.REACT_APP_UPLOAD,
};
