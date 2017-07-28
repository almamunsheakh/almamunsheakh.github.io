(function ($) {
	"use strict";

    jQuery(document).ready(function($){

    var footerHeight = $('.footer-area').outerHeight();
    $('.full-content-wrapper').css('margin-bottom',footerHeight + 'px');
        
        $(window).scroll(function(){
            var headerHeight = $('.header-menu').outerHeight();
            var widowHeight = $(window).scrollTop();
            if( widowHeight > headerHeight){
                $('.header-menu').addClass('is-sticky');
                return false;
                
            }else{
                $('.header-menu').removeClass('is-sticky');
            }
        });
        
        

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	