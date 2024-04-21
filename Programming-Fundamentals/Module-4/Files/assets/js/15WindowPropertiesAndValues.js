// Developer: Roderick Bernardo
// Purpose: Window Properties and Values Demo

// Get all window properties dynamically
const windowProperties = Object.keys(window);

// Get a reference to the table body for display purposes
const tableBody = document.getElementById("tableBody");

// Make sure to clear everything before starting
tableBody.innerHTML = "";

// Dynamically create the table header row
const trHead = document.createElement("tr");
const thProperty = document.createElement("th");
thProperty.innerText = "Property";
const thValue = document.createElement("th");
thValue.innerText = "Value";

// Append the child element to the parent
trHead.appendChild(thProperty);
trHead.appendChild(thValue);

// Append the child element to the parent
tableBody.appendChild(trHead);

// Loop through the properties and create a html nodes
windowProperties.forEach((propertyName) => {
  const trData = document.createElement("tr");
  const tdName = document.createElement("td");
  tdName.innerHTML = propertyName;
  const tdValue = document.createElement("td");
  tdValue.innerHTML = window[propertyName];

  trData.appendChild(tdName);
  trData.appendChild(tdValue);
  tableBody.appendChild(trData);

  console.log(`Property: ${propertyName} Value: ${window[propertyName]}`);
});
