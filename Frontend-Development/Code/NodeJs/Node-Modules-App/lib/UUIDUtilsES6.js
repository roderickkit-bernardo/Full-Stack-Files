import { v1, v4 } from "uuid";

function generateUUID(version) {
  let generateUUIDResult = "";

  if (version == 1) {
    generateUUIDResult = v1();
  } else if (version == 4) {
    generateUUIDResult = v4();
  }

  return generateUUIDResult;
}

export { generateUUID };
