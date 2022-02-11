$(document).ready(function(){
    $(window).scroll(function(){
        if(this. width < 999){
            $('.Clients').removeClass('h1::before');
        }
    });
    $('.menu-btn').click(function(){ 
        $('.navbar .menu').toggleClass("active");
    });
});