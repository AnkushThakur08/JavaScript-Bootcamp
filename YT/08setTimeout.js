// TODO: CODE1

/* function x() {
  var a = 10;

  setTimeout(() => {
    console.log(a);
  }, 3000);

  console.log("Ankush Thakur");
}

x();
 */

// TODO: CODE2
/* function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

x(); */

// TODO: CODE3

function x() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(() => {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
  console.log("JavaScript");
}
x();
