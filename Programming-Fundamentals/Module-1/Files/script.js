// This is visible in the browser’s developer tools.
console.log("Hello World");

(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const json = await response.json();
  console.log(json);
})();
