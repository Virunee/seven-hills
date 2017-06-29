$(document).ready(function(){
$(".div").hover(function() {
$( '.img-class' ).attr("src","new-img.png");
}, function() {
});
$( '.div' ).attr("src","old-img.png");
