// Developer: Roderick Bernardo
// Purpose: Downloading Json Data Demo

async function fetchData() {
  const fetchResponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const fetchResponseJson = fetchResponse.json();
  return fetchResponseJson;
}

(async () => {
  const fetchResponseJson = await fetchData();
  updateView(fetchResponseJson);
})();

function updateView(fetchResponseJson) {
  const dataDiv = document.getElementById("dataDiv");

  // Lazy way of loading data
  for (let item of fetchResponseJson) {
    dataDiv.innerHTML = `
    ${dataDiv.innerHTML}<hr>
    <p><b>Id:</b> ${item.id}</p>
    <p><b>User Id:</b> ${item.userId}</p>
    <p><b>Title:</b> ${item.title}</p>
    <p><b>Body:</b> ${item.body}</p>`;
  }
}
