"use strict";
class Course {
    constructor(courseCode, courseTitle, courseStartDate, courseEndDate) {
        this.courseCode = courseCode;
        this.courseTitle = courseTitle;
        this.courseStartDate = courseStartDate;
        this.courseEndDate = courseEndDate;
    }
}
const courseStartDate = new Date();
const courseEndDate = new Date();
courseEndDate.setMonth(courseEndDate.getMonth() + 5);
const course = new Course("COMP9783", "Front-end Development", courseStartDate, courseEndDate);
console.log(`This app was originally coded using TypeScript but has been transplied to JavaScript.`);
console.log(course);
