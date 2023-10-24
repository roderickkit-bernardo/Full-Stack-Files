/* 
  Developer: Roderick Bernardo
  Purpose: JS Objects demo
*/

// book object
let book = {
  title: "Hatching Twitter",
  published: 2013,
  keywords: ["origins", "betrayal", "social media"],
  author: {
    firstName: "Nick",
    lastName: "Bilton",
  },

  // Define a method
  getAuthorNameV1() {
    return this.author.firstName + " " + this.author.lastName;
  },

  // Define a method as function expression
  getAuthorNameV2: function () {
    return this.author.firstName + " " + this.author.lastName;
  },
};

// Properties can be access via dot and property name notation
console.log(book.title);
console.log(book.published);

book.keywords.forEach((value, index) => {
  console.log(value);
});

console.log(book.author.firstName);
console.log(book.author.lastName);
console.log(book.getAuthorNameV1());
console.log(book.getAuthorNameV2());

// accessor property using get and set
let rectangle = {
  width: 5,
  height: 8,
  get area() {
    return this.width * this.height;
  },
  set area(value) {
    // Set width and height to the square root of the value
    this.width = Math.sqrt(value);
    this.height = this.width;
  },
};

let area = rectangle.area; // Calling getter returns 40
rectangle.area = 100; // Calling setter sets width and height to 10
console.log(rectangle.width); // 10
