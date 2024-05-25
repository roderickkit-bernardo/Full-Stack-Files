// Developer: Roderick Bernardo
// Purpose: JS app demo

// JSON data used for this app
const appConfig = {
  title: "Rogers-Bell Communications",
  description: "3 Internet Packages to choose from",
  internetPackages: [
    {
      title: "Ignite Internet 50",
      price: "$ 59.99 / month",
      listItems: [
        "50 Mbps download speed",
        "Powerful WiFi 6 technology",
        "Add Ignite Streaming for $5/month",
        "Wifi Satisfaction Guarantee",
      ],
    },
    {
      title: "Ignite Internet 150",
      price: "$ 69.99 / month",
      listItems: [
        "150 Mbps download speed",
        "Powerful WiFi 6 technology",
        "Add Ignite Streaming for $5/month",
        "Wifi Satisfaction Guarantee",
      ],
    },
    {
      title: "Ignite Internet 500",
      price: "$ 89.99 / month",
      listItems: [
        "500 Mbps download speed",
        "Powerful WiFi 6 technology",
        "Add Ignite Streaming for $5/month",
        "Wifi Satisfaction Guarantee",
      ],
    },
  ],
};

// Modify the title and description
document.getElementById("app-title").innerText = appConfig.title;
document.getElementById("app-description").innerText = appConfig.description;

// Loop through the different packages and create the needed elements
appConfig.internetPackages.forEach((internetPackage) => {
  const divColumn = document.createElement("div");
  divColumn.className = "column";

  const divBox = document.createElement("div");
  divBox.className = "box";

  const pTitle = document.createElement("p");
  pTitle.className = "has-text-centered is-size-4";
  pTitle.innerText = internetPackage.title;

  const pPrice = document.createElement("p");
  pPrice.className = "has-text-centered is-size-3";
  pPrice.innerText = internetPackage.price;

  const hr = document.createElement("hr");

  const divContent = document.createElement("div");
  divContent.className = "content";

  const pContent = document.createElement("p");
  pContent.innerText = "Comes with:";

  const ulContent = document.createElement("ul");
  ulContent.className = "is-size-6";

  internetPackage.listItems.forEach((listItem) => {
    const liContent = document.createElement("li");
    liContent.innerText = listItem;
    ulContent.appendChild(liContent);
  });

  const buttonContent = document.createElement("button");
  buttonContent.className = "button is-fullwidth";
  buttonContent.innerText = "Check Availability";

  // Ensure to append to the correct parent the dynamically created elements
  divContent.appendChild(pContent);
  divContent.appendChild(ulContent);
  divContent.appendChild(buttonContent);

  // Ensure to append to the correct parent the dynamically created elements
  divBox.appendChild(pTitle);
  divBox.appendChild(pPrice);
  divBox.appendChild(hr);
  divBox.appendChild(divContent);

  // Ensure to append to the correct parent the dynamically created elements
  divColumn.appendChild(divBox);

  // Ensure to append to the correct parent the dynamically created elements
  document.getElementById("divColumns").appendChild(divColumn);
});
