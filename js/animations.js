$(document).ready(function(){
	$('.page-content p').addClass('visibility');
	$('.with-description li img').addClass('visibility');

	$('.values-intro li img').addClass('visibility');

	$('.step-image').addClass('visibility');
	$('.desc').addClass('visibility');

	$('.step_icon').addClass('visibility');

	$('.title-home').addClass('visibility');
	$('#icon01').addClass('visibility');
    $('#icon02').addClass('visibility');
    $('#icon03,.btn3').addClass('visibility');
	$('.phonedemo .pic').addClass('visibility');
	$('.phonedemo .feature1').addClass('visibility');
	$('.phonedemo .feature2').addClass('visibility');
	$('.phonedemo .feature3').addClass('visibility');
	$('.section_gray .row').addClass('visibility');

});


//iphone carousel animation
$(window).load(function () {
	$('.headtop p').addClass("animated fadeInLeft");
	$('.video').addClass("animated fadeInLeft");
});


$(window).scroll(function () {
var scrollTop = $(window).scrollTop();
//animations	
    $('.arow_down').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("animated fadeOutUp");
			}	
			else{
				$(this).removeClass("animated fadeOutUp");
			}		
	});

	$('.step_icon').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("animated bounceIn");
			}			
	});


	$('.page-content p').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("animated fadeIn");
			}		
				
	});
	$('.desc').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("animated fadeInUp");
			}		
				
	});
	
	$('.with-description li img').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+500) {
				$(this).addClass("animated fadeInUp");
			}		
				
	});

	$('.values-intro li img').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+500) {
				$(this).addClass("animated fadeInUp");
			}		
	});

	$('.step-image').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+500) {
				$(this).addClass("animated fadeInUp");
			}		
	});

	$('.laptop_mockup_step').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+500) {
				$(this).css("background", "no-repeat url(css/images/laptop_mockview/step01.gif) center");
			}		
	});

	$('#icon03').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("animated fadeInUp");
			}		
				
	});
	
	
	$('.btn3').each(function(){
	var imagePos = $(this).offset().top;
	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+650) {
			$(this).addClass("animated bounceIn");
		}		
			
	});

	$('.phonedemo .pic').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("animated fadeInLeft");
			}		
				
	});
	
	$('.phonedemo .feature1,.phonedemo .feature2').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("animated fadeInUp");
			}		
				
	});
	
	$('.phonedemo .feature3,.section_gray .row').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("animated fadeInRight");
			}		
				
	});

	
	
	
});