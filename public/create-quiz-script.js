$(document).ready(function() {
  // Change the nav buttons to active and color the jquery loaded display
  $('.list-group-item').click(function(event) {
    $('ul').css('background-color', '#d1dbff');
    $(".list-group-item.active").removeClass("active");
    $(this).addClass('active');
  });

  //
});
