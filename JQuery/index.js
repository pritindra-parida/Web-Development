console.log($("h1").css("margin"));
$("h1").addClass("large-title red");

$("button").on("click",function(){
  $("h1").slideToggle();
});

// $("button").on("click",function(){
//   $("h1").animate({opacity: 0.5});
// });

