jQuery(document).ready(function($){

    $('#nav-button').on('click',function(){
        $('#topnav-bg').toggleClass('topnav-bg');
       
    });

    $('#nav-button').on('click',function(){
        $('#changeline1').toggleClass('changeline1');
        $('#changeline2').toggleClass('changeline2');
        $('#changeline3').toggleClass('changeline3');
       
    });

    $(window).scroll(function(){
       let position = $(this).scrollTop();
       if(position >= 100){
           $('#img-about').addClass('img-about');
           $('#text-head-about').addClass('text-head-about');
       }
       else{
        $('#img-about').removeClass('img-about');
        $('#text-head-about').removeClass('text-head-about');
       }
      
       if(position >= 400){
        $('#topnav-bg').addClass('topnav-bg');
       }
       else{
        $('#topnav-bg').removeClass('topnav-bg');
       } 
    });

    $('#add-to-shop').hide('add-to-shop');
    $('.shop-basket').hover(function(){
        
        $('#add-to-shop').toggle('add-to-shop');
    });

  

});