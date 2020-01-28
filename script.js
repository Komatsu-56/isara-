$(function(){
  
  $('.panelbody').hide();
  
  $('.panelheading').click(function(){
   $(this).toggleClass('angle-up ');
   
   $(this).next('.panelbody').slideToggle();
   
});

 $('.panelbody1').hide();
  
  $('.panelheading').click(function(){
   $(this).toggleClass('angle-up ');
   
   $(this).next('.panelbody1').slideToggle();
   
});

   var topBtn = $('.pagetop');
      topBtn.hide();
   $(window).scroll(function(){
      if($(this).scrollTop() >150) {
          topBtn.fadeIn();
      } else {
          topBtn.fadeOut();
      }
   });
   topBtn.click(function(){
       $('body,html').animate({
           scrollTop: 0
       },500);
       return false;
   });
   
   
   $('.startpoint').click(function(){
	    	var contactPadding = 40;
        var targetTop = $('.contactform').offset().top;
        $('html,body').animate({
            scrollTop: targetTop-contactPadding
        }, 500);
        return false;
    });
   
});