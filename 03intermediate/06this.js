// TODO: PART 1;

/*  console.log(this);

function sayName(){
  var name = "ankush";
  console.log(this);
} 

sayName();  */ 
/*
function work() {
  console.log(this);
}

work(); */

// TODO: Part-2
/* FOR ALL REGULAR FUNCTION CALL, THIS POINTS TO WINDOW OBJECT OR GLOBAL OBJECT */
console.log("Line no 13", this);

var user = {
  firstName: "John",
  courseCount: 4,
  getCourseCount: function () {
    console.log("Line no 19", this);

    function sayHello() {
      console.log("hello line no 22");
      console.log("Line no 23", this);
    }

    sayHello();
  },
};

user.getCourseCount();
