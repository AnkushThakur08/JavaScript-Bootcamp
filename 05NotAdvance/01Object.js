var User = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
  /* This is Functional Way of Creating an Object (RECOMMENDED) */
  this.getCourseCount = function () {
    console.log(`${firstName} course Count is : ${courseCount} `);
  };
};

// var harsh =  User("Harsh", 1);
// console.log(harsh); /* For all regular Function call this points to window so Object, so it will give undefined */

/* We can also ADD/INJECT new functionality to the User Object, without touching it, WITH HELP OF PROTOTYPE */
User.prototype.getfirstName = function () {
  console.log(this.firstName);
};

var harsh = new User("Harsh", 1);
// console.log(harsh);
harsh.getCourseCount();
harsh.getfirstName();
/* New Keyword is responsible of running the above code, NEW KEYWORD ALWAYS CREATE NEW INSTANCE EVERY TIME  */

var sam = new User("Sam", 5);
// console.log(sam);
sam.getCourseCount();

if (sam.hasOwnProperty("firstName")) { /* It is much better code, as we are checking */
  sam.getfirstName();
}
