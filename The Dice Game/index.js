var randomNumber1 =Math.floor(6*Math.random())+1;
var randomNumber2 =Math.floor(6*Math.random())+1;

var randomDiceName1 = "dice" + randomNumber1 + ".png";
var randomDiceName2 = "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", "images/" + randomDiceName1);
document.querySelectorAll("img")[1].setAttribute("src", "images/" + randomDiceName2);



if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent="🚩Player 1 Wins!";
}else if(randomNumber1<randomNumber2){
  document.querySelector("h1").textContent="Player 2 Wins! 🚩";
}else{
  document.querySelector("h1").textContent="Draw!";
}