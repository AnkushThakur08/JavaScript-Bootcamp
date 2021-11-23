// const array = [10, 20, 30, 40, 50, 60];

// console.log(array);

// const result = array.filter((num) => num != 40);

// console.log(result);

// if (true) {
//   var name = "Ankush";
//   //   console.log(name);
// }

// console.log(name);

// for (let i = 1; i <= 10; i++) {
//   //   console.log(i);
// }

// console.log(i);

/* **************************************************************************************************************************************************************** */
// TODO: PROMIES;

var p = new Promise((resolve, reject) => {
  var a = 1 + 1;
  if (a == 2) {
    resolve("This is Reslove");
  } else {
    reject("This is Reject");
  }
});

p.then((message) => {
  console.log(" THEN FUCNTION" + message);
});
p.catch((err) => {
  console.log(" CATCH FUNCTION" + err);
});
