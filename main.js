$('.buy_now_link2').click(function () {
    $('.menu_ul').toggleClass('active')
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
  
    if (scroll >= 10) {
        $("nav").addClass("active");
        
        $(".header_main").addClass("active");
        
    
    }
    else{
        $("nav").removeClass("active");
   
        $(".header_main").removeClass("active");
    }
    
    
    
  });