/*
  Developer: Roderick Bernardo
  Purpose: XMLHttpRequest demo
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

function getData(id = 1) {
  const xmlHttpRequest = new XMLHttpRequest();
  const restEndpoint = "https://jsonplaceholder.typicode.com/users";

  xmlHttpRequest.open("GET", `${restEndpoint}/${id}`, true);

  xmlHttpRequest.addEventListener("load", () => {
    if (xmlHttpRequest.status >= 200 && xmlHttpRequest.status < 400) {
      let data = JSON.parse(xmlHttpRequest.responseText);
      displayData(data);
    } else {
      console.error(
        `Server Response: status: ${xmlHttpRequest.status} statusText: ${xmlHttpRequest.statusText}`
      );
    }
  });

  xmlHttpRequest.addEventListener("error", () => {
    console.error("Network Error");
  });

  xmlHttpRequest.send();
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
