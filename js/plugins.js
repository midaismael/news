$(document).ready(function ()
 {'use strict';

 /*$("body").niceScroll();*/

  $('.carousel').carousel({ interval: 6000 });
  console.log("ready");
  $('.gear-check').on('click', function () {
    console.log("gear clicked")
    $(".color-option").fadeToggle();
  });
  //change theme color on click
    var colorLi=$(".color-option ul li"); 
    $(".color-option ul li")
    .eq(0).css("backgroundColor","#ff0000").end()
    .eq(1).css("backgroundColor","#0400ff").end()
    .eq(2).css("backgroundColor","#cc00ff").end()
    .eq(3).css("backgroundColor","#dad411");
    colorLi.click(function ()
    {
      console.log($(this).attr("data-value") )
      $("link[href*='theme']").attr("href",$(this).attr("data-value"));
    });
    var scrollButton = $("#scroll-top");
    $(window).scroll( function ()
    {
      if ($(this).scrollTop() >= 1  )
      {
        scrollButton.show();
      }
      else
      {
        scrollButton.hide()
      } 
      });
      scrollButton.click( function ()
      {
        $("html, body").animate({scrollTop : 0}, 600);
    });
});
//loading screen
$(window).load(function()
{  
  $(".loading-overlay .spinner").fadeOut(1000, function ()
  {
    $(this).parent().fadeOut(1000, function ()
    {
      $("body").css("overflow","auto")
      $(this).remove(); 
    });
  })
});
   /* $(".testimonials .carousel-in
   dicators li").click(function() {
      $(this).addClass("active").siblings().removeClass("active")
      
  });*/

  /*if (typeof $next == 'object' && $next.length) $next[0].offsetWidth;*/

  /*$(document).ready(function () {
    'use strict';
    $(".gear-check").click(function () {
      $(".clore-option").toggle();
    });
  });*/
  