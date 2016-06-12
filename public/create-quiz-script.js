$(document).ready(function() {
  $("#output").hide();
  $(".answer1").hide();
  $(".answer2").hide();
  $(".answer3").hide();
  $(".show").hide();
  $('.quiz-output').hide();
  $('.qq1').hide();
  $('.qq2').hide();
  $('.qq3').hide();

  $(".german").on("click", function(event){
    event.preventDefault();
    $('#output').slideToggle("slow");
  });

$(document).on('click', '.q1', function (event) {
  event.preventDefault();
  // $("#output").hide();
  var newQ = event.target.innerHTML;
  $("#output-header").hide(newQ);
  $("q").hide();
  $(".answer2").hide("slow");
  $(".answer3").hide("slow");
  $("q").hide();
  $(".answer1").slideToggle("slow");
});

$(document).on('click', '.q2', function (event) {
  event.preventDefault();
  // $("#output").hide();
  var newQ = event.target.innerHTML;
  $("#output-header").hide(newQ);
  $("q").hide();
  $(".answer1").hide("slow");
  $(".answer3").hide("slow");
  $(".answer2").slideToggle("slow");
});

$(document).on('click', '.q3', function (event) {
  event.preventDefault();
  // $("#output").hide();
  var newQ = event.target.innerHTML;
  $("#output-header").hide(newQ);
  $("q").hide();
  $(".answer1").hide("slow");
  $(".answer2").hide("slow");
  $(".answer3").slideToggle("slow");
});

var counter = 0;
$(document).on('click', '.add', function (event) {
  event.preventDefault();
  $(".quiz-output").show("slow");

  if (counter == 0 ){
    $(".qq1").show();
    counter++;
  } else if (counter == 1){
    $(".qq2").show();
    counter++;
  } else if (counter == 2) {
    $(".qq3").show();
    counter++;
  }
});



  // // Change the nav buttons to active and color the jquery loaded display
  //
  // $('.list-group-item').click(function(event) {
  //   $('ul').css('background-color', '#d1dbff');
  //   $(".list-group-item.active").removeClass("active");
  //   $(this).addClass('active');
  // });

  //
});
