// Developer: Roderick Bernardo
// Purpose: TypeScript demo

/*
Steps to setup a typscript node js app
Initialize a Node js app:
npm init -y
Intall Typescript:
npm i typescript -D
Initialize tsconfig.json
npx tsc --init
Uncomment "outDir" and set it to "./build"
Uncomment "removeComments": true
Modify package.json and add "build": "tsc" to the scripts attribute
*/

class Course {
  courseCode: string;
  courseTitle: string;
  courseStartDate: Date;
  courseEndDate: Date;

  constructor(
    courseCode: string,
    courseTitle: string,
    courseStartDate: Date,
    courseEndDate: Date
  ) {
    this.courseCode = courseCode;
    this.courseTitle = courseTitle;
    this.courseStartDate = courseStartDate;
    this.courseEndDate = courseEndDate;
  }
}

const courseStartDate: Date = new Date();
const courseEndDate: Date = new Date();

// Add 5 months to the current date
courseEndDate.setMonth(courseEndDate.getMonth() + 5);

const course = new Course(
  "COMP9783",
  "Front-end Development",
  courseStartDate,
  courseEndDate
);

console.log(
  `This app was originally coded using TypeScript but has been transplied to JavaScript.`
);
console.log(course);
