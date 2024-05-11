// Developer: Roderick Bernardo
// Purpose: Arrow function demo

let arrowFunction;

arrowFunction = () => {
  console.log("Arrow FE Without param.... []");
};

arrowFunction();

arrowFunction = (param) => {
  console.log(`Arrow FE with param.... [${param}]`);
};

arrowFunction("JS");

(() => {
  console.log("Arrow IIFE Without param.... []");
})();

((param) => {
  console.log(`Arrow FE with param.... [${param}]`);
})("JS");

arrowFunction = () =>
  console.log("No curly braces, Arrow FE Without param.... []");
arrowFunction();

arrowFunction = (param) =>
  console.log(`No curly braces, Arrow FE with param.... [${param}]`);
arrowFunction("JS");

(() => console.log("No curly braces, Arrow IIFE Without param.... []"))();

((param) => console.log(`No curly braces, Arrow FE with param.... [${param}]`))(
  "JS"
);
