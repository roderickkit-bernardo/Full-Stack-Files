const uuid = require("uuid");

function generateUUID(version) {
  let generateUUIDResult = "";

  if (version == 1) {
    generateUUIDResult = uuid.v1();
  } else if (version == 4) {
    generateUUIDResult = uuid.v4();
  }

  return generateUUIDResult;
}

module.exports = { generateUUID };
