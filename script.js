$(function(){
  
  $('.panelbody').hide();
  $('.panelbody1').hide();
  
  
  $('.panelheading').click(function(){
      
   $(this).next('.panelbody,.panelbody1').slideToggle();
  $(this).toggleClass('active');
   $('.panelheading').not($(this)).next('.panelbody1').slideUp();
  $('.panelheading.active').not($(this)).toggleClass('active');
      
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
   
   
   $('.startpoint,.conversionbtn').click(function(){
	    	var contactPadding = 40;
        var targetTop = $('.contactform').offset().top;
        $('html,body').animate({
            scrollTop: targetTop-contactPadding
        }, 500);
        return false;
    });
    
   
});