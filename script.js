"use strict";

//演習1
$(function(){
    $("#btn").on("click", function(){
        $("#msg").text("阿部佳織");
        $("#msg").toggleClass("on");
    });
});

//演習2
//$(function(){
//    let color =  $("#msg").css("color");
//    if (color == "rgb(0,0,255)") {
//        $("#msg").css("color", "red");      
//    } else {
//        $("#msg").css("color", "blue");      
//    }
//});

//演習3


