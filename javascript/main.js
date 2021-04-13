/*var section = document.getElementById("background"),
  linear = "linear-gradient(to top, rgba(0,0,0,5), rgba(0,0,0,1))";
img = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

function change(section, img) {
  setInterval(function () {
    var myRandom = Math.floor(Math.random() * img.length);
    section.style.backgroundImage = "url('../" + img[myRandom] + "')";
  }, 5000);
}
change(section, img);*/

function creatBubble() {
  const section = document.querySelector("section");
  const createElment = document.createElement("span");
  var size = Math.random() * 60;
  createElment.style.width = 10 + size + "px";
  createElment.style.height = 10 + size + "px";
  createElment.style.left = Math.random() * innerWidth + "px";
  section.appendChild(createElment);
  setTimeout(() => {
    createElment.remove();
  }, 5000);
}
setInterval(creatBubble, 50);
const myDiv = document.querySelector(".container");
const myButton = document.querySelector("img");
const newDiv = document.getElementById("hello");

let mytext =
  " Oh oh Oh oh oh Oh oh Oh oh oh Baby this love, I'll never let it die Can't be touched by no one I'd like to see 'em try I'm a mad man for your touch, girl, I've lost control I'm gonna make this last forever, don't tell me it's impossible 'Cause I love you for infinity Oh oh oh I love you for infinity Oh oh oh Cause I love you for infinity Oh oh oh I love you for infinity Oh oh oh";

let i = 0;
myButton.onclick = function () {
  var typeWriter = setInterval(function () {
    myDiv.textContent += mytext[i];
    i++;
    if (i > mytext.length - 1) {
      clearInterval(typeWriter);
    }
  }, 100);
};
function playAudio(url) {
  new Audio(url).play();
  newDiv.style.display = "None";
}
