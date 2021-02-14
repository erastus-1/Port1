$(document).ready(function () {
    $("#back").click(function () {
       $("#back").fadeToggle(1000);
       $("#back-p").fadeToggle(1000);
    });
    $("#back-p").click(function () {
       $("#back-p").fadeToggle(1000);
       $("#back").fadeToggle(1000);
    });
    $("#front").click(function () {
       $("#front").fadeToggle(1000);
       $("#front-p").fadeToggle(1000);
    });
    $("#front-p").click(function () {
       $("#front-p").fadeToggle(1000);
       $("#front").fadeToggle(1000);
    });
    $("#tools").click(function () {
       $("#tools").fadeToggle(1000);
       $("#tools-p").fadeToggle(1000);
    });
    $("#tools-p").click(function () {
       $("#tools-p").fadeToggle(1000);
       $("#tools").fadeToggle(1000);
    });
 
 });