$(document).ready(function(){
  $(".carousel_block").owlCarousel({
    items: 1,
    dots: true,
    smartSpeed: 1500,
    loop: true,
  });
});

$(document).ready(function(){
  $(".ad_carousel").owlCarousel({
    items: 2,
    nav: true,
    smartSpeed: 500,
    loop: true,
  });
});


// toggle js animation 

$(document).ready(function () {
  $('.example5').click(function () {
    $('.example5').toggleClass("active");
    event.stopPropagation();
    // $('.menu-drop').slideToggle(600);
    // do stuff with menu here
  });
  $(document).click(function (e) {
    $('.example5').removeClass("active");
    // $('.menu-drop').slideUp(600);
    // undo stuff with menu here
  });
});