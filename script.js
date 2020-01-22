$(function(){
  
  $('.panelbody').hide();
  
  $('.panelheading').click(function(){
   $(this).toggleClass('angle-up ');
   
   $(this).next('.panelbody').slideToggle();
   
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
});