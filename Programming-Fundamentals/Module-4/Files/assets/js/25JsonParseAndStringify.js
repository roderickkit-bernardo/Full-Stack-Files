// Developer: Roderick Bernardo
// Purpose: JSON.parse() and JSON.stringify() Demo

const jsonString = `{"user": "Bill Gates"}`;
console.log(
  `jsonString type: ${typeof jsonString} jsonString value: ${jsonString}`
);
const jsonObject = JSON.parse(jsonString);
console.log(
  `jsonObject type: ${typeof jsonObject} jsonObject value: ${jsonObject.user}`
);

console.log(
  `jsonObject type: ${typeof JSON.stringify(
    jsonObject
  )} jsonObject value: ${JSON.stringify(jsonObject)}`
);
