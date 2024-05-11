// Developer: Roderick Bernardo
// Purpose: const variable demo

// Cannot Reassign a constant value
const age = 10;
// age = 11; // This would result in a error

// Cannot reassign a constant array
const numbers = [0, 1, 2, 3, 4];
const anotherNumbers = [5, 6, 7, 8, 9];
// numbers = anotherNumbers;  // This would result in a error

// Cannot reassign a constant object
const courseInfo1 = { code: "PSY101", title: "Introduction to Psychology" };
const courseInfo2 = { code: "CHM101", title: "Introduction to Chemistry" };
// courseInfo1 = courseInfo2; // This would result in a error

// Can change the properties of constant object
const carInfo = { make: "Toyota", model: "Corolla", year: 2023 };
console.log(carInfo);
carInfo.make = "Honda";
carInfo.model = "Civic";
carInfo.year = 2024;
console.log(carInfo);

// Can change the elements of constant array
const carInfos = [];
carInfos.push(carInfo);
console.log(carInfos);

const ceoNames = [
  { firstName: "Elon", lastName: "Musk" },
  { firstName: "Bill", lastName: "Gates" },
];

console.log("ceoNames:", ceoNames);

const formattedCeoNames = ceoNames.map((ceoName) => {
  return `<p>${ceoName.lastName}, ${ceoName.firstName}</p>`;
});

console.log("formattedCeoNames:", formattedCeoNames);
