const buttonColors = ["red","blue","green","yellow"];
var gamePattern=[];
var userClickPattern=[];

function nextSequence(){
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
}



$(".btn").on("click",function(event){
  animateClick(this.id);
  var userChosenColor = this.id;
  userClickPattern.push(userChosenColor);
  playSound(userChosenColor);
});


function animateClick(id){
  var targetClass= "."+id;
  $(targetClass).addClass("pressed");
  setTimeout(function(){
    $(targetClass).removeClass("pressed");
  },100)
  
}

function playSound(id){
  var audioSource = "sounds/"+id+".mp3";
  var sound = new Audio(audioSource);
  sound.play();
}


