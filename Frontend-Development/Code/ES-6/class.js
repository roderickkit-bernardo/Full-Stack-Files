// Developer: Roderick Bernardo
// Purpose: Class demo

class User {
  userName;
  email;
  id;
  loginState;

  constructor(userName, email, id, loginState) {
    this.userName = userName;
    this.email = email;
    this.id = id;
    this.loginState = loginState;
    console.log("User contructor is called.");
  }

  getUserName() {
    return this.userName;
  }

  setUserName(userName) {
    this.userName = userName;
  }

  login() {
    this.loginState = true;
  }

  logout() {
    this.loginState = false;
  }
}

// const user = new User(
//   "roderick.bernardo",
//   "roderick.bernardo@me.com",
//   "111111111",
//   false
// );

// console.log(user);
// user.login();
// console.log(user);

class Student extends User {
  courses;

  constructor(userName, email, id, state, courses) {
    super(userName, email, id, state);
    this.courses = courses;
    console.log("Student contructor is called.");
  }
}

const courses = [
  { code: "PSY101", name: "College Psychology" },
  { code: "CHM101", name: "College Chemistry" },
];

const student = new Student(
  "bill.gates",
  "bill.gates@me.com",
  "222222222",
  false,
  courses
);

console.log(student);

class Employee extends User {
  deparment;

  constructor(userName, email, id, loginState, deparment) {
    super(userName, email, id, loginState);
    this.deparment = deparment;
    console.log("Employee contructor is called.");
  }
}

const employee = new Employee(
  "elon.musk",
  "elon.musk@me.com",
  "333333333",
  false,
  "Research and Development"
);

console.log(employee);
