$(document).ready(function () {
    $("#back").click(function () {
       $("#back").fadeToggle(1000);
       $("#back-ul").fadeToggle(1000);
    });
    $("#back-ul").click(function () {
       $("#back-ul").fadeToggle(1000);
       $("#back").fadeToggle(1000);
    });
    $("#front").click(function () {
       $("#front").fadeToggle(1000);
       $("#front-ul").fadeToggle(1000);
    });
    $("#front-ul").click(function () {
       $("#front-ul").fadeToggle(1000);
       $("#front").fadeToggle(1000);
    });
    $("#tools").click(function () {
       $("#tools").fadeToggle(1000);
       $("#tools-ul").fadeToggle(1000);
    });
    $("#tools-ul").click(function () {
       $("#tools-ul").fadeToggle(1000);
       $("#tools").fadeToggle(1000);
    });
 
 });