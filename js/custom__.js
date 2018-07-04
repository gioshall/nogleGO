// custom javascript
$(document).ready(function() {
    $("header").removeClass("show");
});
// window scroll resize menu
$(window).resize(resizeWindow).scroll(resizeWindow);

function resizeWindow() {
    var scroll = (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop;
    //var scroll = $(window).scrollTop();
    var width = $(window).width(),
        height = $(window).height();
    //console.log(width + "," + height);

    if (scroll >= 100 || (width <= 500)) {
        $("header").addClass("show");
        if($("header").hasClass("white-bg")) return;
        $("header .logo img").attr("src","images/logo_white.png");
    } else {
        $("header").removeClass("show");
        if($("header").hasClass("white-bg")) return;
        $("header .logo img").attr("src","images/logo.png");
    }
}

//triangle for top and bottom
var resizeTriangle = function(){
var width = $(".triangle").width(),
    height = $(".triangle").height(),
  ratio = 1.4,
  angle=Math.atan2(width,height);
  var n1 = Math.atan2(width,height);
  var angle = n1/(Math.PI / 180) * ratio;
  
  //width
  $(".triangle-up-left").css("border-left-width" , width + "px");
  $(".triangle-up-right").css("border-left-width" , width + "px");
  $(".triangle-bottom-right").css("border-right-width" , width + "px");
  $(".triangle-bottom-left").css("border-right-width" , width + "px");
  //height
  $(".triangle-up-left").css("border-bottom-width" , angle + "px");
  $(".triangle-up-right").css("border-top-width" , angle + "px");
  $(".triangle-bottom-left").css("border-bottom-width" , angle + "px");
  $(".triangle-bottom-right").css("border-top-width" , angle + "px");
}
resizeTriangle();
$( window ).resize(resizeTriangle);