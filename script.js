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
$(function(){
    let result = $("#hobby").val();
    if(result == "brank"){
        $(".hideSelect").hide();
    } 
});

$(function(){
    $("#hobby").on("change",function(){
        let result = $("#hobby").val();

        if(result == "triathlon"){
            $("#triathlon").show();
            $("#triathlonId").show();
            $("#like").hide();
            $("#likeId").hide();
        }else if(result == "other"){
            $("#like").show();
            $("#likeId").show();
            $("#triathlon").hide();
            $("#triathlonId").hide();
        } 
    });
});

//演習4
$(function(){
    $("#btn2").on("click", function(){
        $("#btn2").prop("disabled",true);
        //確認用
        let result = $("#name").val();
        console.log(result);
    });
});

//演習5
$(function(){
    $("#btn3").on("click", function(){
        let result = $("#mailAddress").val();
        if(result == ""){
            alert("メールアドレスを入力してください！");
        }
    });
});
