$(function(){
  
  $('.panelbody').hide();
  
  $('.panelheading').click(function(){
   $(this).toggleClass('angle-up');
   $(this).next('.panelbody').slideToggle();

   if($(this).hasClass("active")){ 
    $(this).removeClass("active");
  }else{
    $(this).addClass("active");
  }
    
});
});