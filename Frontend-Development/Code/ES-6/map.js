// Developer: Roderick Bernardo
// Purpose: map demo

const ceoNames = [
  { firstName: "Elon", lastName: "Musk" },
  { firstName: "Bill", lastName: "Gates" },
];

console.log("ceoNames:", ceoNames);

// If the map is enclosed via curly brace, ensure to add the return statment
const formattedCeoNamesCurly = ceoNames.map((ceoName, index) => {
  return `<p>${ceoName.lastName}, ${ceoName.firstName}, ${index}</p>`;
});

// If the map is not enclosed via curly brace, you dont need a return statment
const formattedCeoNamesParenthesis = ceoNames.map(
  (ceoName, index) =>
    `<p>${ceoName.lastName}, ${ceoName.firstName}, ${index}</p>`
);

console.log("formattedCeoNames:", formattedCeoNamesCurly);
console.log("formattedCeoNames:", formattedCeoNamesParenthesis);
