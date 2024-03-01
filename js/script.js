document.body.style.backgroundColor = "#e5f0ff";
document.body.style.transition = "background-color 1s ease";
document.body.style.backgroundColor = "#345f5f";
document.body.style.padding = "20px";
document.getElementById("cornflowerblue").style.backgroundColor =
  "cornflowerblue";
document.getElementById("red").style.backgroundColor = "red";
document.getElementById("green").style.backgroundColor = "green";
document.getElementById("chocolate").style.backgroundColor = "chocolate";
document.getElementById("blueviolet").style.backgroundColor = "blueviolet";
document.getElementById("hotpink").style.backgroundColor = "hotpink";
document.getElementById("black").style.backgroundColor = "black";
document.getElementById("gold").style.backgroundColor = "gold";
document.getElementById("aqua").style.backgroundColor = "aqua";
var corBox = document.getElementById("boxcores");
var buttonCornflowerBlue = document.getElementById("cornflowerblue");
var buttonRed = document.getElementById("red");
var buttonGreen = document.getElementById("green");
var buttonChocolate = document.getElementById("chocolate");
var buttonBlueviolet = document.getElementById("blueviolet");
var buttonHotpink = document.getElementById("hotpink");
var buttonGold = document.getElementById("gold");
var buttonAqua = document.getElementById("aqua");
var buttonBlack = document.getElementById("black");
var body = document.body;
buttonAqua.addEventListener("click", function () {
  corBox.style.backgroundColor = "aqua";
  body.style.backgroundColor = "#345f5f";
});
buttonGold.addEventListener("click", function () {
  corBox.style.backgroundColor = "gold";
  body.style.backgroundColor = "#564e25";
});
buttonCornflowerBlue.addEventListener("click", function () {
  corBox.style.backgroundColor = "cornflowerblue";
  body.style.backgroundColor = "#2f3a4d";
});
buttonRed.addEventListener("click", function () {
  corBox.style.backgroundColor = "red";
  body.style.backgroundColor = "#5e3535";
});
buttonGreen.addEventListener("click", function () {
  corBox.style.backgroundColor = "green";
  body.style.backgroundColor = "#253a25";
});
buttonChocolate.addEventListener("click", function () {
  corBox.style.backgroundColor = "chocolate";
  body.style.backgroundColor = "#543824";
});
buttonBlueviolet.addEventListener("click", function () {
  corBox.style.backgroundColor = "blueviolet";
  body.style.backgroundColor = "#341e48";
});
buttonHotpink.addEventListener("click", function () {
  corBox.style.backgroundColor = "hotpink";
  body.style.backgroundColor = "#4e2946";
});
buttonBlack.addEventListener("click", function () {
  corBox.style.backgroundColor = "black";
  body.style.backgroundColor = "#393939";
});
