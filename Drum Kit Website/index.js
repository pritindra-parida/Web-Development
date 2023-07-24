// Click Detection
for(var i=0; i<document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll("button")[i].addEventListener("click",function(){
    makeSound(this.innerHTML);
    makeAnimation(this.innerHTML);
  });
}
// Key Detection
document.addEventListener("keydown",function(event){
  makeSound(event.key);
  makeAnimation(event.key);
});

function makeSound(key){
  // var buttonInnerHTML = this.innerHTML;
  var sound = new Audio();
  switch(key){
    case "w":
      sound.src="sounds/tom-1.mp3";
      sound.play();
      break;
    case "a":
      sound.src="sounds/tom-2.mp3";
      sound.play();
      break;
    case "s":
      sound.src="sounds/tom-3.mp3";
      sound.play();
      break;
    case "d":
      sound.src="sounds/tom-4.mp3";
      sound.play();
      break;
    case "j":
      sound.src="sounds/snare.mp3";
      sound.play();
      break;
    case "k":
      sound.src="sounds/crash.mp3";
      sound.play();
      break;
    case "l":
      sound.src="sounds/kick-bass.mp3";
      sound.play();
      break;
    default:
      break;
  }
}


function makeAnimation(key){
  var pressedButton = document.querySelector("."+key);
  pressedButton.classList.add("pressed");
  setTimeout(function(){
    pressedButton.classList.remove("pressed");
  },100);
}
