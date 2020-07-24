var randomNumber1 = Math.floor(Math.random()*6) + 1;

var srcImg1 = "images/" + "dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", srcImg1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var srcImg2 = "images/" + "dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[1].setAttribute("src", srcImg2);
if (randomNumber1>randomNumber2) {
  document.querySelectorAll("h1")[0].innerHTML = "Player 1 wins 🚩";
}
else if(randomNumber1<randomNumber2){
  document.querySelectorAll("h1")[0].innerHTML = "Player 2 wins 🚩";
}
else{
  document.querySelectorAll("h1")[0].innerHTML = "Draw!";
}
