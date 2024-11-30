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

class Student extends User {
  courses;

  constructor(userName, email, id, state, courses) {
    super(userName, email, id, state);
    this.courses = courses;
    console.log("Student contructor is called.");
  }
}

class Phd extends Student {
  thesis;

  constructor(userName, email, id, state, courses, thesis) {
    super(userName, email, id, state, courses);
    this.thesis = thesis;
    console.log("Phd contructor is called.");
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
user.logout();
console.log(user);

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

const phd = new Phd("steve.jobs", "steve.jobs@apple.com", 111, true, courses, {
  title: "title of the thesis",
  abstract: "abstract of the thesis",
  paragraph: [
    { docId: "Paragraph 1", docContent: "Content of the thesis", docPage: "1" },
  ],
});

console.log(phd);

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
