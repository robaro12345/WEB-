var audio;
$(".main").mouseover(function () { 
    $(".main").addClass("gradient-background");
    audio = new Audio("sound/Main_Title.mp3");
    audio.play();
});
$(".main").mouseout(function () { 
    $(".main").removeClass("gradient-background");
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
});
$(".Luke_Skywalker").mouseover(function () { 
    $(".Luke_Skywalker").addClass("gradient-background1");
    audio = new Audio("sound/forcetheme.mp3");
    audio.play();
});
$(".Luke_Skywalker").mouseout(function () { 
    $(".Luke_Skywalker").removeClass("gradient-background1");
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
});
$(".Leia_Skywalker").mouseover(function () { 
    $(".Leia_Skywalker").addClass("gradient-background2");
    audio = new Audio("sound/lieas.mp3");
    audio.play();
});
$(".Leia_Skywalker").mouseout(function () { 
    $(".Leia_Skywalker").removeClass("gradient-background2");
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
});
$(".Yoda").mouseover(function () { 
    $(".Yoda").addClass("gradient-background");
    audio = new Audio("sound/forcetheme.mp3");
    audio.play();
});
$(".Yoda").mouseout(function () { 
    $(".Yoda").removeClass("gradient-background");
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
});
$(".Han_Solo").mouseover(function () { 
    $(".Han_Solo").addClass("gradient-background1");
    audio = new Audio("sound/hansolo.mp3");
    audio.play();
});
$(".Han_Solo").mouseout(function () { 
    $(".Han_Solo").removeClass("gradient-background1");
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
});
$(".Darth_Vader").mouseover(function () { 
    $(".Darth_Vader").addClass("gradient-background3");
    audio = new Audio("sound/DarthVader.mp3");
    audio.play();
});
$(".Darth_Vader").mouseout(function () { 
    $(".Darth_Vader").removeClass("gradient-background3");
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
});