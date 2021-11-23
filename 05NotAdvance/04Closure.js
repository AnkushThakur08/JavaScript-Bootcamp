function init() {
  var firstName = "Ankush";

  function sayName() {
    console.log(firstName);
  }

  return sayName;
}

var value = init();

value();
