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
  }

  login() {
    this.loginState = true;
  }

  logout() {
    this.loginState = false;
  }
}

const user = new User(
  "roderick.bernardo",
  "roderick.bernardo@me.com",
  "111111111",
  false
);

console.log(user);
user.login();
console.log(user);

class Student extends User {
  courses;

  constructor(userName, email, id, state, courses) {
    super(userName, email, id, state);
    this.courses = courses;
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
