$(document).on('ready', function() {
    "use strict";
    $("#navigation").menumaker({
        title: "Menu",
        format: "multitoggle"
    });


 $(window).scroll(function(){
  var sticky = $('.header'),
      scroll = $(window).scrollTop();
if(screen.width>768){
	if (scroll >= 40) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
}
  
});
 


});