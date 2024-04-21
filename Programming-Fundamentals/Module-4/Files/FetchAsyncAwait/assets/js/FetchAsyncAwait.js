/*
  Developer: Roderick Bernardo
  Purpose: Fetch Async Await demo
*/

// Same function as the following apps:
// FetchAsyncAwait
// FetchPromise
// XMLHttpRequest
function addEventListener() {
  // Register the input event
  document.getElementById("userId").addEventListener("input", (event) => {
    if (
      event.target.value < 1 ||
      event.target.value > 10 ||
      event.target.value === ""
    ) {
      // Default value when invalid inputs are entered
      event.target.value = 1;
    }

    getData(event.target.value);
  });
}

// Placing an async keyword to make it handle promises
async function getData(id = 1) {
  const restEndpoint = "https://jsonplaceholder.typicode.com/users";
  // await will ensure the app will wait for the server response
  const response = await fetch(`${restEndpoint}/${id}`);

  if (response.status >= 200 && response.status < 400) {
    // response.json() also needs an await since it returns a promise
    const data = await response.json();
    displayData(data);
  } else {
    console.error(
      `Server Response: status: ${response.status} statusText: ${response.statusText}`
    );
  }
}

// Same function as the following apps:
// FetchAsyncAwait
// FetchPromise
// XMLHttpRequest
function displayData(data) {
  // Updating the values of the html elements by getting their ids
  document.getElementById("name").innerText = data["name"];
  document.getElementById("username").innerText = data["username"];
  document.getElementById("email").innerText = data["email"];
  document.getElementById(
    "address"
  ).innerText = `${data["address"].street} ${data["address"].suite} ${data["address"].city} ${data["address"].zipcode}`;
  document.getElementById("phone").innerText = data["phone"];
  document.getElementById("website").innerText = data["website"];
  document.getElementById("company").innerText = data["company"].name;
}

addEventListener();
getData();
