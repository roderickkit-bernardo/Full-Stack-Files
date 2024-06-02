// import { v1, v4 } from "uuid";

// console.log(`UUID Version 1 (Time-based): ${v1()}`);
// console.log(`UUID Version 4 (Random): ${v4()}`);

import { generateUUID } from "./lib/UUIDUtilsES6.js";

console.log(`Calling version 1: ${generateUUID(1)}`);
console.log(`Calling version 4: ${generateUUID(4)}`);
console.log(`Invalid: ${generateUUID()}`);
