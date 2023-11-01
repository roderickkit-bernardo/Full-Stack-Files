/*
  Developer: Roderick Bernardo
  Purpose: Fetch Async Await demo
*/

function addEventListener() {
  document.getElementById("userId").addEventListener("input", (event) => {
    if (
      event.target.value < 0 ||
      event.target.value > 10 ||
      event.target.value === ""
    ) {
      event.target.value = 1;
    }

    getData(event.target.value);
  });
}

async function getData(id = 1) {
  const restEndpoint = "https://jsonplaceholder.typicode.com/users";
  const response = await fetch(`${restEndpoint}/${id}`);

  if (response.status >= 200 && response.status < 400) {
    const data = await response.json();
    displayData(data);
  } else {
    console.error(
      `Server Response: status: ${response.status} statusText: ${response.statusText}`
    );
  }
}

function displayData(data) {
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
