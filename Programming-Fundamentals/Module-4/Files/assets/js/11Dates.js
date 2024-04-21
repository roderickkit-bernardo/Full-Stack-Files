/* 
  Developer: Roderick Bernardo
  Purpose: JS Dates demo
*/

let currDateTime = new Date();
console.log(`new Date()`, currDateTime);

let oneSecPastEpoch = new Date(1000);
console.log(`new Date(1000)`, oneSecPastEpoch);

// Feb 22, 1732
let georgeBirthday = new Date(1732, 1, 22);
console.log(`new Date(1732, 1, 22)`, georgeBirthday);

// Oct 21, 2035 at 7:28:00
let theFuture = new Date(2035, 9, 21, 7, 28, 0);
console.log(`new Date(2035, 9, 21, 7, 28, 0)`, theFuture);

let day;
// month value is zero index => (0 - 11)

// year, month, day
day = new Date(2016, 0, 30);
console.log(`new Date(2016, 0, 30)`, day.getDate()); // 30
day.setDate(21); // 30 -> 21
console.log(`day.setDate(21)`);
console.log(`day.getDate()`, day.getDate());

// year, month, day
day = new Date(2016, 0, 30);
console.log(`new Date(2016, 0, 30)`);
console.log(`day.getDay()`, day.getDay()); // 6 = Saturday

// year, month, day
day = new Date(2016, 0, 30);
console.log(`new Date(2016, 0, 30)`);
console.log(`day.getFullYear()`, day.getFullYear()); // 2016
day.setFullYear(2017); // 2016 -> 2017
console.log(`day.setFullYear(2017)`);
console.log(`day.getFullYear()`, day.getFullYear());

// year, month, day, hours, minutes, seconds, milliseconds
day = new Date(2016, 0, 1, 5, 20, 10, 250);
console.log(`new Date(2016, 0, 1, 5, 20, 10, 250)`);
console.log(`day.getMilliseconds()`, day.getMilliseconds()); // 250
day.setMilliseconds(500); // 250 -> 500
console.log(`day.setMilliseconds(500)`);
console.log(`day.getMilliseconds()`, day.getMilliseconds());

// year, month, day, hours, minutes
day = new Date(2016, 0, 30, 5, 20);
console.log(`new Date(2016, 0, 30, 5, 20)`);
console.log(`day.getMinutes()`, day.getMinutes()); // 20
day.setMinutes(35); // 20 -> 35
console.log(`day.setMinutes(35)`);
console.log(`day.getMinutes()`, day.getMinutes());

// year, month, day, hours, minutes
day = new Date(2016, 0, 30, 5, 20);
console.log(`new Date(2016, 0, 30, 5, 20)`);
console.log(`day.getMonth()`, day.getMonth()); // 0
day.setMonth(3); // 0 (Jan) -> 3 (Apr)
console.log(`day.setMonth(3)`);
console.log(`day.getMonth()`, day.getMonth());

// year, month, day, hours, minutes, seconds, milliseconds
day = new Date(2016, 0, 1, 5, 20, 10, 250);
console.log(`new Date(2016, 0, 1, 5, 20, 10, 250)`);
console.log(`day.getSeconds()`, day.getSeconds()); // 10
day.setSeconds(45); // 10 -> 45
console.log(`day.setSeconds(45)`);
console.log(`day.getSeconds()`, day.getSeconds());

// year, month, day, hours, minutes
day = new Date(2016, 0, 30, 5, 20);
console.log(`new Date(2016, 0, 30, 5, 20)`, day.getTime()); // 1454152800000
day.setTime(1454153700000); // Sat Jan 30 2016 05:35:00 GMT-0600
console.log(`day.setTime(1454153700000)`);
console.log("day.getTime()", day.getTime());
