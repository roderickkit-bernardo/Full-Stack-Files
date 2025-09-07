// Developer: Roderick Bernardo
// Purpose: Downloading Json Data Demo

async function fetchData() {
  const fetchResponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const fetchResponseJson = fetchResponse.json();
  return fetchResponseJson;
}

// IIFE - Immediately invoke function expression

(async () => {
  const fetchResponseJson = await fetchData();
  updateView(fetchResponseJson);
})();

// Or

// fetchData().then((fetchResponseJson) => {
//   updateView(fetchResponseJson);
// });

function updateView(fetchResponseJson) {
  const dataDiv = document.getElementById("dataDiv");

  // Lazy way of loading data
  for (let item of fetchResponseJson) {
    // Display on the console
    // console.log(item);
    // console.log(item.id);
    // console.log(item["id"]);
    // console.log(item.title);
    // console.log(item["title"]);
    dataDiv.innerHTML = `
    ${dataDiv.innerHTML}<hr>
    <p><b>Id:</b> ${item.id}</p>
    <p><b>User Id:</b> ${item.userId}</p>
    <p><b>Title:</b> ${item.title}</p>
    <p><b>Body:</b> ${item.body}</p>`;
  }
}
