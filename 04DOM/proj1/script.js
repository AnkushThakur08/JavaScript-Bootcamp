// TODO: Query Selector
/* 
var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 1;
setInterval(() => {
  if (count < 1000) {
    count++;
    counter.innerText = count;
  }
}, 1);

setTimeout(() => {
  followers.innerText = "Followers on Youtube!!!";
}, 7000);
 */
// TODO: getElementbyID

// var counter = document.getElementById("count");
// var followers = document.getElementById("follower");

// let count = 1;

// setInterval(() => {
//   if (count < 1000) {
//     count++;
//     return (counter.innerText = count);
//   }
// }, 1);

// var counter = document.querySelector(".counter");
// var followers = document.querySelector(".followers");

var counter = document.getElementById("count")
var followers = document.getElementById("follower")

// counter.innerText = "Ankush";
// followers.innerHTML = "<h6> Hello Guys </h6>";

let count = 1;

setInterval(() => {
  if (count < 1000) {
    count++;
    counter.innerText = count;
  }
}, 1);

setTimeout(() => {
  followers.innerText = "Followers in YouTube";
}, 7000);
