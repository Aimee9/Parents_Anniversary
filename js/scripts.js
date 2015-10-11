


// var factorial = function(number) {
//   if (number === 0) {
//     return 1;
//   } else {
//
//     return (number * factorial(number-1));
//   }
// }
//
//
$(document).ready(function() {
  $(".btn").click(function() {
    $("#beginning").hide();
       $("#result").show();
       $(".mom img.bottom").toggleClass("transparent");
      //  $(".dad img.bottom").toggleClass("transparent");

  });

  $("#again").click(function() {
    $(".mom img.top").toggleClass("transparent");
    // $(".dad img.top").toggleClass("transparent");
    $("#last").fadeIn(2000);
  });
});
