// function isEven(element) {
//   if (element % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
//   return element % 2 === 0;
// }

// console.log(isEven(2));

// var res = [2, 4, 7, 8].every(isEven);
/* This is a reference to a function, we are not running  the function ,,so when EVERY goes into the array, it should know where to look for the funcction*/
/* Every goes into the array and look for every single element,,,, IT WILL DO THAT TEST/OPERATION with every single element */
// console.log(res);

// TODO: Callback
/* Callback is a simple funct, that does not have a name */ 
/* WE can take a function and pass it into another funct, aur jis funct ko hum pass krte hai usse callback funct bolte hai */
var res = [2, 4, 6, 9].every((element) => element % 2 == 0);

// console.log(res);

setTimeout(function () {
  console.log("Timer");
}, 5000);

function x(y) {
  console.log("x");
  y();
}

x(function y() {
  console.log("y");
});

/* Now my fucnt Y is a Call-Back Fucntion, Call-back funct gives us the power of asyncrinting */
