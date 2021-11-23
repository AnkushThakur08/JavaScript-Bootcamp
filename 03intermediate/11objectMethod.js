var User = {
  firstName: "Ankush",
  lastName: "Thakur",

  isLoggedFromFacebook: true,
  City: "shimla",
  courseList: [],
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
    // return `${this.firstName} enrolled in ${courseName}`;
  },

  getCourseCount: function () {
    return ` ${this.firstName} is Enrolled in ${this.courseList.length} courses`;
  },

  info: function () {
    return ` ${this.firstName} ${this.lastName} basically from ${this.City} and he is enrolled in Total ${this.courseList.length} courses`;
  },
};

var courseList = true;
// console.log(User.getCourseCount());

// console.log(User.buyCourse("React JS Course"));
// console.log(User.buyCourse("Angular JS Course"));
// console.log(User.buyCourse(" JS Course"));

User.buyCourse("React JS Course");
User.buyCourse("Angualr JS Course");
User.buyCourse(" JS Course");

console.log(User.getCourseCount());

console.log(User.info());
