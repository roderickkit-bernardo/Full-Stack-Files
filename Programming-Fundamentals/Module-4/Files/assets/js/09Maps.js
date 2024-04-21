/* 
  Developer: Roderick Bernardo
  Purpose: JS Maps demo
*/

// Map declaration
let stateCapitals = {
  AR: "Little Rock",
  CO: "Denver",
  NM: "Sante Fe",
};

console.log("CO capital is " + stateCapitals["CO"]);
console.log(`CO capital is ${stateCapitals["CO"]}`);
console.log("Before:", stateCapitals);
console.log("Adding TX");
// Adding a new element
stateCapitals["TX"] = "Austin";
console.log("After:", stateCapitals);

// Use the for in loop to iterate
// This will return the key,
// which you can use to access the map
for (let stateCapitalKey in stateCapitals) {
  console.log("Key:", stateCapitalKey);
  console.log("Value:", stateCapitals[stateCapitalKey]);
}

let stateCapitalsMap = {
  AR: "Little Rock",
  CO: "Denver",
  NM: "Sante Fe",
};

let stateCapitalsKeys = Object.keys(stateCapitalsMap);
console.log(stateCapitalsKeys); // AR,CO,NM
console.log(stateCapitalsKeys.length); // 3

// Evaluates true
if ("NM" in stateCapitalsMap) {
  console.log("NM exists");
}

// Remove the NM/Santa Fe pair
delete stateCapitalsMap["NM"];

// Evaluates false
if ("NM" in stateCapitalsMap) {
  console.log("NM exists");
} else {
  console.log("NM does not exists");
}

// Outputs undefined, NM does not exists
console.log(`stateCapitalsMap["NM"]: ${stateCapitalsMap["NM"]}`);

// Map object declaration using the new keyword
let canadianProvinces = new Map();
canadianProvinces.set("ON", "Ontario");
canadianProvinces.set("AB", "Alberta");
canadianProvinces.set("QC", "Quebec");

console.log(`Size of map is ${canadianProvinces.size}`); // 3

if (canadianProvinces.has("ON")) {
  console.log(`using .get('ON') ON is ${canadianProvinces.get("ON")}`);
}

console.log(`All provinces:`);
for (let [provinceCode, provinceName] of canadianProvinces) {
  console.log(`provinceCode: ${provinceCode} is provinceName: ${provinceName}`);
}
