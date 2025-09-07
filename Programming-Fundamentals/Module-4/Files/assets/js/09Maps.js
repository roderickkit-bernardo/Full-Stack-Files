/* 
  Developer: Roderick Bernardo
  Purpose: JS Maps demo
*/

// Uncomment the "code" to see the result
// You can either see the output on the browser console
// or
// Use node to run this on the command line
// node <name_of_js_file>

// Map declaration - Old school way which is represented by
// Keys and Values
// let stateCapitals = {
//   AR: "Little Rock",
//   CO: "Denver",
//   NM: "Sante Fe",
// };

// Using dot or bracket to access the value
// console.log("CO capital is " + stateCapitals.CO); // Denver
// console.log(`CO capital is ${stateCapitals["CO"]}`); // Denver
// console.log("Before:", stateCapitals);
// console.log("Adding TX");
// Adding a new element
// stateCapitals["TX"] = "Austin";
// console.log("After:", stateCapitals);

// Use the for in loop to iterate
// This will return the key,
// // which you can use to access the map
// for (let stateCapitalKey in stateCapitals) {
//   console.log("Key:", stateCapitalKey);
//   console.log("Value:", stateCapitals[stateCapitalKey]);
// }

// let stateCapitalsMap = {
//   AR: "Little Rock",
//   CO: "Denver",
//   NM: "Sante Fe",
// };

// let stateCapitalsKeys = Object.keys(stateCapitalsMap);
// console.log(stateCapitalsKeys); // AR,CO,NM
// console.log(stateCapitalsKeys.length); // 3

// for (let i = 0; i < stateCapitalsKeys.length; i++) {
//   console.log(stateCapitalsMap[stateCapitalsKeys[i]]);
// }

// Evaluates true
// if ("NM" in stateCapitalsMap) {
//   console.log("NM exists");
// } else {
//   console.log("Does not exists");
// }

// Remove the NM/Santa Fe pair
// delete stateCapitalsMap["NM"];

// Evaluates false
// if ("NM" in stateCapitalsMap) {
//   console.log("NM exists");
// } else {
//   console.log("NM does not exists");
// }

// Outputs undefined, NM does not exists
// console.log(`stateCapitalsMap["NM"]: ${stateCapitalsMap["NM"]}`);

// Map object declaration using the new keyword
// This will give you access to get(), set() and has() functions
// let canadianProvinces = new Map();
// canadianProvinces.set("ON", { title: "Ontario" });
// canadianProvinces.set("AB", "Alberta");
// canadianProvinces.set("QC", "Quebec");

// console.log(typeof canadianProvinces);
// console.log(canadianProvinces);

// console.log(`Size of map is ${canadianProvinces.size}`); // 3

// if (canadianProvinces.has("ON")) {
//   console.log(`using .get('ON') ON is`, canadianProvinces.get("ON"));
// }

// This is an example of
// let province = canadianProvinces.get("ON");
// console.log("Before:", province);
// province.title = "Ottawa";
// console.log("After:", province);
// console.log("After:", canadianProvinces.get("ON"));

// console.log(`All provinces:`);
// for (let canadianProvince of canadianProvinces) {
//   console.log(canadianProvince);
//   console.log(
//     `provinceCode: ${canadianProvince[0]} is provinceName:`,
//     canadianProvince[1]
//   );
// }

// for (let [provinceCode, provinceName] of canadianProvinces) {
//   console.log(`provinceCode: ${provinceCode} is provinceName:`, provinceName);
// }
