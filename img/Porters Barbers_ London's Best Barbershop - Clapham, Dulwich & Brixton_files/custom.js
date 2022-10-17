$(document).ready(function($) {
$(".rp4wp-related-posts").find("ul > li").addClass("col-md-4");
$(".comments-area").addClass("container");
<!-- =============================================== -->
<!-- ========== fancy box ========== -->
<!-- =============================================== -->
$(".youtube-media").on("click", function(e) {
var jWindow = $(window).width();
if (jWindow <= 310) {
return;
}
$.fancybox({
href: this.href,
padding: 4,
type: "iframe",
'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
});
return false;
});
<!-- =============================================== -->
<!-- ========== Owl Carousel ========== -->
<!-- =============================================== -->
$('#testimonials').owlCarousel({
// center: true,
items:1,
autoplay: 3000,
loop:true,
dots:true,
nav:true,
navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
responsive:{
1200:{
items:1
},
769:{
items:1
},
480:{
items:1
}
}
});
<!-- =============================================== -->
<!-- ========== Owl Carousel ========== -->
<!-- =============================================== -->
$('#owl-carousel-team').owlCarousel({
// center: true,
items:1,
// autoplay: 3000,
loop:true,
dots:true,
nav:true,
navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
responsive:{
1200:{
items:3
},
769:{
items:2
},
480:{
items:2
}
}
});
<!-- =============================================== -->
<!-- ========== jquery easing ========== -->
<!-- =============================================== -->
$('.scrolldown a ,.scrolldown-arrow a').bind('click', function () {
$('html , body').stop().animate({
scrollTop: $($(this).attr('href')).offset().top -64
}, 1500, 'easeInOutExpo');
return false;
event.preventDefault();
});

<!-- =============================================== -->
<!-- ========== Sticky Nav ========== -->
<!-- =============================================== -->
//Shrink Navigation
var cbpAnimatedHeader = (function () {
function init() {
"use strict";
window.addEventListener('scroll', function (event) {
}, false);
window.addEventListener('scroll', function (e) {
if ($(window)
.scrollTop() > 10) {
$('nav')
.addClass('shrink-nav');
} else {
$('nav')
.removeClass('shrink-nav');
}
});
}
function scrollY() {
return window.pageYOffset || docElem.scrollTop;
}
init();
})();
function init() {
}
window.onload = init();
<!-- =============================================== -->
<!-- ========== Shrink nav on scroll ========== -->
<!-- =============================================== -->
$(window)
.scroll(function () {
if ($(window)
.scrollTop() > 10) {
$('nav')
.addClass('shrink-nav');
} else {
$('nav')
.removeClass('shrink-nav');
}
});
// Mobile Toggle Control
$('.mobile-toggle')
.click(function () {
$('nav')
.toggleClass('open-nav');
});

$(".btn").click(function(event) {
$(".hidden-item").fadeIn(1000).css("display" , "block");
});

$(".btn").click(function(event) {
$(".btn").hide();
});
});
<!-- =============================================== -->
<!-- ========== Map ========== -->
<!-- =============================================== -->
/*You need to include this script on any page that has a Google Map.
When using Google Maps on your own site you MUST signup for your own API key at:
https://developers.google.com/maps/documentation/javascript/tutorial#api_key
After your sign up replace the key in the URL below or paste in the new script tag that Google provides.*/
$(document).ready(function() {


// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
var claphamlocation = new google.maps.LatLng(51.453701, -0.140437),
dulwichlocation = new google.maps.LatLng(51.441868, -0.084805);
// Basic options for a simple Google Map
// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
var mapOptions = {
// How zoomed in you want the map to start at (always required)
zoom: 12,
zoomControl: false,
scaleControl: false,
scrollwheel: false,
// The latitude and longitude to center the map (always required)
center: new google.maps.LatLng(51.453701, -0.140437), // New York
// How you would like to style the map.
// This is where you would paste any style found on Snazzy Maps.
styles: [
{
"featureType": "administrative",
"elementType": "labels.text.fill",
"stylers": [
{
"color": "#444444"
}
]
},
{
"featureType": "administrative.locality",
"elementType": "geometry.fill",
"stylers": [
{
"visibility": "off"
}
]
},
{
"featureType": "landscape",
"elementType": "all",
"stylers": [
{
"color": "#f2f2f2"
}
]
},
{
"featureType": "landscape.natural.terrain",
"elementType": "labels.text.fill",
"stylers": [
{
"saturation": "-26"
}
]
},
{
"featureType": "poi",
"elementType": "all",
"stylers": [
{
"visibility": "off"
}
]
},
{
"featureType": "road",
"elementType": "all",
"stylers": [
{
"saturation": -100
},
{
"lightness": 45
}
]
},
{
"featureType": "road.highway",
"elementType": "all",
"stylers": [
{
"visibility": "simplified"
}
]
},
{
"featureType": "road.arterial",
"elementType": "labels.icon",
"stylers": [
{
"visibility": "off"
}
]
},
{
"featureType": "transit",
"elementType": "all",
"stylers": [
{
"visibility": "off"
}
]
},
{
"featureType": "water",
"elementType": "all",
"stylers": [
{
"color": "#46bcec"
},
{
"visibility": "on"
}
]
},
{
"featureType": "water",
"elementType": "geometry.fill",
"stylers": [
{
"saturation": "-19"
},
{
"color": "#ffffff"
}
]
}
]
};
// Get the HTML DOM element that will contain your map
// We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');
    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    // Let's also add a marker while we're at it
    var markerclap = new google.maps.Marker({
    position: claphamlocation,
    map: map,
    icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png',
    title: 'Clapham'
    });
    var markerdulw = new google.maps.Marker({
    position: dulwichlocation,
    map: map,
    icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png',
    title: 'Dulwich'
    });
    popupContentClap = 'Porters Barbers Clapham<br/>';
    popupContentClap += 'Phone Info: 020 8675 0309';
    popupContentDulw = 'Porters Barbers Dulwich<br/>';
    popupContentDulw += 'Phone Info: 020 8693 1818';
    
    var infowindowClap = new google.maps.InfoWindow({
    content: popupContentClap,
    maxWidth: 270
    });
    var infowindowDulw = new google.maps.InfoWindow({
    content: popupContentDulw,
    maxWidth: 270
    });
    markerclap.addListener('click', function() {
    infowindowClap.open(map, markerclap);
    });
    markerdulw.addListener('click', function() {
    infowindowDulw.open(map, markerdulw);
    });
    }
    
    });