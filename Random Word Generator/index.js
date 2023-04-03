const characters = "abcdefghijklmnopqrstuvwxyz";
var randomLength = Math.floor(Math.random() * 10) + 2;
var randomWord = randomString(randomLength);
var count = -1;

function randomString(len){
  var word="";
  for(var i = 0; i<len; i++){
    word = word + characters[Math.floor(Math.random()*26)];
  }
  return word;
}
document.querySelector("h1").innerHTML=randomWord;


function keyResponse(key, count){
  var audioSource = "sounds/s" + (Math.floor(Math.random()*7)+1) + ".mp3";
  var sound = new Audio(audioSource);

  if(count>=randomLength){
    location.reload();
  }
  if(key==randomWord[count]){
    sound.play();
  }else {
    var error = new Audio("sounds/error.mp3");
    error.play();
    count--;
  }
}


document.addEventListener("keydown",function(event){
  count++;
  keyResponse(event.key, count);
});



