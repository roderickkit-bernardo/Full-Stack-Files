// Developer: Roderick Bernardo
// Purpose: Window Properties and Values Demo

// Get all window properties dynamically
const windowProperties = Object.keys(window);

// Get a reference to the div for display purposes
const windowPropertiesDiv = document.getElementById("windowPropertiesDiv");

// Make sure to clear everything before starting
windowPropertiesDiv.innerHTML = "";
windowPropertiesDiv.innerHTML = windowProperties.toString();

// Loop through the properties and create a html nodes
windowProperties.forEach((propertyName) => {
  console.log(
    "[" + propertyName + "][" + typeof window[propertyName] + "]",
    window[propertyName]
  );
});
