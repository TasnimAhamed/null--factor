$( document ).ready(function() {
    $(window).scroll(function(){
        var navFixed = $(window).scrollTop();
        if(navFixed > 10){
            $(".header--section").addClass("changeBg");
        }else{
            $(".header--section").removeClass("changeBg");
        }
    });
    $('.navbar-collapse a').click(function (e) {
        if(document.getElementById('mainNav').classList.contains('show')){
            $('.navbar-collapse').collapse('toggle');
        }
    });
    $('.show--more-content').hide();
    $('.show--less button').hide();

    $('.show--more button').click(function(){
        $('.show--more-content').show(300);
        $('.show--less button').show();
        $('.show--more button').hide();
    });

    $('.show--less button').click(function(){
        $('.show--more-content').hide(300);
        $('.show--less button').hide();
        $('.show--more button').show();
    });
});