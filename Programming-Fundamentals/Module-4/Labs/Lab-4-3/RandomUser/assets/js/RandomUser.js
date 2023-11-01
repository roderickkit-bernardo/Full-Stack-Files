/*
  Developer: 
  Purpose: 
*/

function addEventListener(data) {
  // JavaScript Task:
  /*
  Set updateDisplayParamObject to the following:
    infoTitleId to "infoTitleId"
    infoValueId to "infoValueId"
    title to "Hi, My name is"
    value to `${data.results[0].name.first} ${data.results[0].name.last}`
  */
  const updateDisplayParamObject = {
    infoTitleId: null,
    infoValueId: null,
    title: null,
    value: null,
  };

  // JavaScript Task:
  /*
  Call the setDefault function with the following parameters:
    updateDisplayParamObject
    "circularImageId"
    data.results[0].picture.large
  */

  document
    // JavaScript Task: Set getElementById to nameDivId
    .getElementById("")
    // JavaScript Task: Set addEventListener first parameter to mouseover
    .addEventListener("", (event) => {
      // JavaScript Task:
      /*
      Call the updateDisplay function with the following parameters:
        "infoTitleId"
        "infoValueId"
        "Hi, My name is"
        `${data.results[0].name.first} ${data.results[0].name.last}`
      */
    });

  document
    // JavaScript Task: Set getElementById to emailDivId
    .getElementById("")
    // JavaScript Task: Set addEventListener first parameter to mouseover
    .addEventListener("", (event) => {
      // JavaScript Task:
      /*
      Call the updateDisplay function with the following parameters:
        "infoTitleId"
        "infoValueId"
        "My email address is"
        data.results[0].email
      */
    });

  document
    // JavaScript Task: Set getElementById to addressDivId
    .getElementById("")
    // JavaScript Task: Set addEventListener first parameter to mouseover
    .addEventListener("", (event) => {
      // JavaScript Task:
      /*
      Call the updateDisplay function with the following parameters:
        "infoTitleId",
        "infoValueId",
        "My address is",
        `${data.results[0].location.street.number} ${data.results[0].location.street.name}`
      */
    });

  document
    // JavaScript Task: Set getElementById to phoneDivId
    .getElementById("")
    // JavaScript Task: Set addEventListener first parameter to mouseover
    .addEventListener("", (event) => {
      // JavaScript Task:
      /*
      Call the updateDisplay function with the following parameters:
        "infoTitleId"
        "infoValueId"
        "My phone number is"
        data.results[0].phone
      */
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
  // JavaScript Task: Set restEndpoint to "https://randomuser.me/api"
  const restEndpoint = "";
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
