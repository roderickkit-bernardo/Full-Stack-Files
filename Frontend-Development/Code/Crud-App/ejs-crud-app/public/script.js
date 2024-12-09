// Developer: Roderick Bernardo
// Purpose: CRUD demo

// const BASE_REST_END_POINT_URL = "http://localhost:3001";
const BASE_REST_END_POINT_URL = "http://localhost:8080";
const albumForm = document.getElementById("albumForm");
albumForm.addEventListener("submit", (event) => {
  // Prevent from submitting we will handle the submission ourselves
  event.preventDefault();

  if (event.submitter.name === "submit") {
    // Create FormData object using Form Api
    const formData = new FormData(albumForm);

    let data = {};
    for (let pair of formData.entries()) {
      data[pair[0]] = pair[1];
    }

    processData(data, "create");
  } else if (event.submitter.name === "cancel") {
    albumForm.reset();
  }
});

const albumFormUpdate = document.getElementById("albumFormUpdate");
albumFormUpdate.addEventListener("submit", (event) => {
  // Prevent from submitting we will handle the submission ourselves
  event.preventDefault();
  if (event.submitter.name === "submit") {
    // Create FormData object using Form Api
    const formData = new FormData(albumFormUpdate);

    let data = {};
    for (let pair of formData.entries()) {
      data[pair[0]] = pair[1];
    }

    // TODO: Validate input and prevent blank entries
    processData(data, "update", "form");
  } else if (event.submitter.name === "cancel") {
    albumFormUpdate.reset();
  }
});

// One time call to load the table data
processData(null, null);

async function createItem(data) {
  return await genericFetch("POST", data);
}

async function readItems(id = "") {
  const fetchResponse = await fetch(`${BASE_REST_END_POINT_URL}/${id}`);
  const fetchResponseJson = await fetchResponse.json();
  return fetchResponseJson;
}

async function updateItem(data) {
  return await genericFetch("PUT", data);
}

async function deleteItem(data) {
  return await genericFetch("DELETE", data);
}

async function genericFetch(method, data) {
  const headers = { "Content-Type": "application/json" };
  const body = JSON.stringify(data);

  const fetchResponse = await fetch(`${BASE_REST_END_POINT_URL}`, {
    method: method,
    headers: headers,
    body: body,
  });

  return await fetchResponse.json();
}

function buildTable(items) {
  const tbody = document.getElementById("tbody");
  // Make sure to rebuild the table
  tbody.innerHTML = ``;
  if (items.length > 0) {
    items.forEach((item) => {
      const tr = document.createElement("tr");
      const td1 = document.createElement("td");
      const td2 = document.createElement("td");
      const td3 = document.createElement("td");
      const td4 = document.createElement("td");

      td1.innerText = item.albumName;
      td2.innerText = item.artistName;
      td3.innerText = item.year;
      // Lazy way of building the buttons
      td4.innerHTML = `
<div class="buttons are-small">
    <button class="button js-modal-trigger is-warning" data-target="modal-update" data-id="${item.id}">Update</button>
    <button class="button is-danger" data-id="${item.id}">Delete</button>
</div>`;
      // Append to the correct parent
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);

      // Append to the correct parent
      tbody.appendChild(tr);
    });
  } else {
    // Lazy way of creating elements
    tbody.innerHTML = `<tr><th class="has-text-centered" colspan="4">List of albums is currently empty.</th></tr>`;
  }

  const elementsWithDataId = document.querySelectorAll("[data-id]");

  elementsWithDataId.forEach((element) => {
    element.addEventListener("click", (event) => {
      processData(
        { id: event.target.dataset.id },
        event.target.innerText.toLowerCase(),
        "button"
      );
    });
  });

  // JS code from bulma
  // Add a click event on buttons to open a specific modal
  (
    document.querySelectorAll(".button.js-modal-trigger.is-warning") || []
  ).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener("click", () => {
      openModal($target);
    });
  });

  // JS code from bulma
  // Add a click event on various child elements to close the parent modal
  (
    document.querySelectorAll(
      ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
    ) || []
  ).forEach(($close) => {
    const $target = $close.closest(".modal");

    $close.addEventListener("click", () => {
      closeModal($target);
    });
  });
}

async function processData(data, operation, source = "") {
  if (operation == "create") {
    const createItemResponse = await createItem(data);
    console.log(createItemResponse);
    albumForm.reset(); // Clear the form and remove the previous input
  } else if (operation == "read") {
    // intentionally blank
  } else if (operation == "update") {
    if (source == "button") {
      const currentData = await readItems(data.id);
      populateFormFields(albumFormUpdate, currentData[0]);
    } else if (source == "form") {
      const updateItemResponse = await updateItem(data);
      console.log(updateItemResponse);
      closeAllModals();
    }
  } else if (operation == "delete") {
    const deleteItemResponse = await deleteItem(data);
    console.log(deleteItemResponse);
  }

  // This will refresh the tables
  const readItemsResponse = await readItems();
  console.log(`Number of albums fetched: ${readItemsResponse.length}.`);
  buildTable(readItemsResponse);
}

function populateFormFields(formObject, currentData) {
  formObject.elements.idUpdate.value = currentData.id;
  formObject.elements.albumNameUpdate.value = currentData.albumName;
  formObject.elements.artistNameUpdate.value = currentData.artistName;
  formObject.elements.yearUpdate.value = currentData.year;
}

// JS code from bulma
// Functions to open and close a modal
function openModal($el) {
  $el.classList.add("is-active");
}

function closeModal($el) {
  $el.classList.remove("is-active");
}

function closeAllModals() {
  (document.querySelectorAll(".modal") || []).forEach(($modal) => {
    closeModal($modal);
  });
}

// Add a keyboard event to close all modals
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeAllModals();
  }
});
