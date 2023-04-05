const buttonColors = ["red","blue","green","yellow"];
var gamePattern=[];


function nextSequence(){
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
}



$(".btn").on("click",function(event){
  clickResponse(event.target.id);
});

function clickResponse(id){
  var targetId = "#"+id;
  $(targetId).fadeOut(100).fadeIn(100);
  var audioSource = "sounds/"+id+".mp3";
  var sound = new Audio(audioSource);
  sound.play();
}


