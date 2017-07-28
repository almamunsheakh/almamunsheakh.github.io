(function ($) {
	"use strict";

    jQuery(document).ready(function($){
         var uluru = {lat: 24.4555582, lng: 89.6239726};

    $('.map')
      .gmap3({
        center: uluru,
        zoom:10,
        mapTypeId: "shadeOfGrey",
        scrollwheel: false,
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
        }
      })
    .marker({
        position: uluru
      })
      .infowindow({
        content: "Hello From Sirajganj,Rajshahi"
      })
      .then(function (infowindow) {
        var map = this.get(0);
        var marker = this.get(1);
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        })
    })
      
      .styledmaptype(
        "shadeOfGrey",
        [
          {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#838383"},{"lightness":40}]},
          {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#fff"},{"lightness":16}]},
          {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
          {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#F7F7F7"},{"lightness":20}]},
          {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#F7F7F7"},{"lightness":17},{"weight":1.2}]},
          {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#F7F7F7"},{"lightness":20}]},
          {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#EBEBEB"},{"lightness":21}]},
          {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#FFFFFF"},{"lightness":100}]},
          {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#fff"},{"lightness":39},{"weight":0.2}]},
          {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#fff"},{"lightness":180}]},
          {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fff"},{"lightness":1600}]},
          {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#fff"},{"lightness":19}]},
          {"featureType":"water","elementType":"geometry","stylers":[{"color":"#EDEDED"},{"lightness":7}]}
        ],
        {name: "Shades of Grey"})
    
    
        
       


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	