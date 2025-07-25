/*
  Developer: Roderick Bernardo
  Purpose: Random User demo
*/

function addEventListener(data) {
  const updateDisplayParamObject = {
    infoTitleId: "infoTitleId",
    infoValueId: "infoValueId",
    title: "Hi, My name is",
    value: `${data.results[0].name.first} ${data.results[0].name.last}`,
  };

  setDefault(
    updateDisplayParamObject,
    "circularImageId",
    data.results[0].picture.large
  );

  document
    .getElementById("nameDivId")
    .addEventListener("mouseover", (event) => {
      updateDisplay(
        "infoTitleId",
        "infoValueId",
        "Hi, My name is",
        `${data.results[0].name.first} ${data.results[0].name.last}`
      );
    });

  document
    .getElementById("emailDivId")
    .addEventListener("mouseover", (event) => {
      updateDisplay(
        "infoTitleId",
        "infoValueId",
        "My email address is",
        data.results[0].email
      );
    });

  document
    .getElementById("addressDivId")
    .addEventListener("mouseover", (event) => {
      updateDisplay(
        "infoTitleId",
        "infoValueId",
        "My address is",
        `${data.results[0].location.street.number} ${data.results[0].location.street.name}`
      );
    });

  document
    .getElementById("phoneDivId")
    .addEventListener("mouseover", (event) => {
      updateDisplay(
        "infoTitleId",
        "infoValueId",
        "My phone number is",
        data.results[0].phone
      );
    });
}

function setDefault(updateDisplayParamObject, circularImageId, imageUrl) {
  document.getElementById(circularImageId).src = imageUrl;

  updateDisplay(
    updateDisplayParamObject.infoTitleId,
    updateDisplayParamObject.infoValueId,
    updateDisplayParamObject.title,
    updateDisplayParamObject.value
  );
}

async function getData() {
  const restEndpoint = "https://randomuser.me/api";
  const response = await fetch(`${restEndpoint}`);

  if (response.status >= 200 && response.status < 400) {
    const data = await response.json();
    addEventListener(data);
  } else {
    console.error(
      `Server Response: status: ${response.status} statusText: ${response.statusText}`
    );
  }
}

function updateDisplay(infoTitleId, infoValueId, infoTitleText, infoValueText) {
  document.getElementById(infoTitleId).innerText = infoTitleText;
  document.getElementById(infoValueId).innerText = infoValueText;
}

getData();
