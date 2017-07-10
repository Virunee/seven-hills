$(document).ready(function(){
  $("#about-link").hover(function() {
    $( '#logo' ).attr("src","images/logo-1.png");
  });
  $("#about-link").mouseout(function() {
    $( '#logo' ).attr("src","images/logo.png");
  });

  $("#showreel-link").hover(function() {
    $( '#logo' ).attr("src","images/logo-2.png");
  });
  $("#showreel-link").mouseout(function() {
    $( '#logo' ).attr("src","images/logo.png");
  });

  $("#people-link").hover(function() {
    $( '#logo' ).attr("src","images/logo-3.png");
  });
  $("#people-link").mouseout(function() {
    $( '#logo' ).attr("src","images/logo.png");
  });

  $("#services-link").hover(function() {
    $( '#logo' ).attr("src","images/logo-4.png");
  });
  $("#services-link").mouseout(function() {
    $( '#logo' ).attr("src","images/logo.png");
  });

  $("#contact-link").hover(function() {
    $( '#logo' ).attr("src","images/logo-5.png");
  });
  $("#contact-link").mouseout(function() {
    $( '#logo' ).attr("src","images/logo.png");
  });
});
