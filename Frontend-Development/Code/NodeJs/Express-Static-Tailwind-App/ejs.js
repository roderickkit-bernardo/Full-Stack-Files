let ejs = require("ejs");

let people = ["geddy", "neil", "alex"];
// let html = ejs.render('<%= people.join(", "); %>', { people: people });

// console.log(html);

console.log(people.join(", "));
