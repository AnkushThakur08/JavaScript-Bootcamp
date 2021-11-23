var name = "ankush";
console.log("Line no 2", name);

function sayName() {
  var name;
  console.log("Line No. 6", name);
  nameAgain();

  function nameAgain() {
    console.log(name);
  }
}

sayName();
