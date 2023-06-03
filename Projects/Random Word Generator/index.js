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
$("h1").html(randomWord);



// function keyResponse(key, count){
//   var audioSource = "sounds/s" + (Math.floor(Math.random()*7)+1) + ".mp3";
//   var sound = new Audio(audioSource);
//   if(count>=randomLength){
//     location.reload();
//   }
//   if(key==randomWord[count]){
//     sound.play();
//   }else {
//     var error = new Audio("sounds/error.mp3");
//     error.play();
//     count--;
//   }
// }

function keyResponse(key){
  if(key==randomWord[0]){
    $("h1").addClass("pressed");
    setTimeout(function(){
      $("h1").removeClass("pressed");
    },300);
  }
  else{
    $("h1").addClass("wrongKey");
    setTimeout(function(){
      $("h1").removeClass("wrongKey");
    },300);
  }
}


document.addEventListener("keydown",function(event){
  count++;
  keyResponse(event.key);
});



