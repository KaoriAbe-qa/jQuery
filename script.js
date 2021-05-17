"use strict";

//演習1
$(function(){
    $("#btn").on("click", function(){
        $("#msg").text("阿部佳織").css("color","blue");
        $("#msg").toggleClass("on");
    });
});

//演習2
$(function(){
    $(".on").css("color", "red");      
});

//演習3


