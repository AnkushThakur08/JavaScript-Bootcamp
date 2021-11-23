var red = document.querySelector(".red");
var cyan = document.querySelector(".cyan");
var violet = document.querySelector(".violet");
var orange = document.querySelector(".orange");
var pink = document.querySelector(".pink");

var center = document.querySelector(".center");

const BGColor = (element) => {
  return window.getComputedStyle(element).backgroundColor;
};

// const color = BGColor(element);

const disco = (element, color) => {
  element.addEventListener("mouseenter", () => {
    center.style.background = color;
    const audio = new Audio();
    audio.src = "./music.mp3";
    console.log(color);
  });
};

var audio = new Audio("D:AnkushProgrammingJS\04DOMproj2Self/music.mp3");
console.log(audio);
audio.play();

disco(red, BGColor(red));
disco(cyan, BGColor(cyan));
disco(violet, BGColor(violet));
disco(orange, BGColor(orange));
disco(pink, BGColor(pink));
