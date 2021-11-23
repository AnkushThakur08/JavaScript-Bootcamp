var red = document.querySelector(".red");
var cyan = document.querySelector(".cyan");
var violet = document.querySelector(".violet");
var orange = document.querySelector(".orange");
var pink = document.querySelector(".pink");

var center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (element) => {
  return window.getComputedStyle(element).backgroundColor;
};

/*
var color = getBGColor(red);

console.log(getBGColor(violet));

red.addEventListener("mouseenter", () => {
center.style.background = color;
 });
*/

const disco = (element, color) => {
  return element.addEventListener("mouseenter", () => {
    center.style.background = color;
  });
};

disco(red, getBGColor(red));
disco(cyan, getBGColor(cyan));
disco(violet, getBGColor(violet));
disco(orange, getBGColor(orange));
disco(pink, getBGColor(pink));
