// custom javascript
$(document).ready(function(){
                $('.headline h1').addClass('visibility');
                $('.headline h1').addClass("animated fadeInUp");
     // $("header").removeClass("show");
        if($(window).width() >= 1024){ //web
                console.log("web");
                $("header").removeClass("show");
                $(".banner-content").css("background-attachment","fixed");
                $(".banner-content").BgParallax("50%", 0);
                //$(".headline h1").scrollfadeInUp(150); 
            }else{ //mobile
                console.log("mobile");
                $("header").addClass("show");
                if($("header").hasClass("white-bg")) return;
                $("header .logo img").attr("src","images/logo_white.png");
                // $(".banner-content").css("background-attachment","fixed");
        } 
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
  $(".triangle-footer-right").css("border-right-width" , width + "px");
  $(".triangle-footer-left").css("border-right-width" , width + "px");
  //height
  $(".triangle-up-left").css("border-bottom-width" , angle + "px");
  $(".triangle-up-right").css("border-top-width" , angle + "px");
  $(".triangle-bottom-left").css("border-bottom-width" , angle + "px");
  $(".triangle-bottom-right").css("border-top-width" , angle + "px");
  $(".triangle-footer-left").css("border-bottom-width" , angle + "px");
  $(".triangle-footer-right").css("border-top-width" , angle + "px");
}
resizeTriangle();
$( window ).resize(resizeTriangle);