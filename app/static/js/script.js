$(document).ready(function(){

	if ( $.browser.msie )
 		alert( 'Unfortunately, Internet Explorer is not currently supported on this website. Your best options for viewing will be Chrome or Safari. Apologies for the inconvenience. Thank you!' );

	$("#menu").click(function(){
		$('#toggle-menu').slideToggle(400);
	});

	$(".logo").hover(function(){
		$("#home").fadeIn(400);
	},function(){
		$("#home").fadeOut(400);
	});

	$("#professional").hover(function(){
		$("#professional").css("color","#4BC8C6");
		},function(){
		$("#professional").css("color","#4A4A4A");	
	});

	$("#professional").click(function(){
		$("#popup1").slideToggle(400);
	}); 

	$("#content").click(function() {
        $('#popup1').slideUp(300);
        $('#popup2').slideUp(300);
        $('#popup3').slideUp(300);
    });

	$("#creative_outlets").hover(function(){
		$("#creative_outlets").css("color","#4BC8C6");
		},function(){
		$("#creative_outlets").css("color","#4A4A4A");
	});

	$("#creative_outlets").click(function(){
		$("#popup2").slideToggle(400);
	});

	$("#just_for_fun").hover(function(){
		$("#just_for_fun").css("color","#4BC8C6");
		},function(){
		$("#just_for_fun").css("color","#4A4A4A");	
	});

	$("#just_for_fun").click(function(){
		$("#popup3").slideToggle(400);
	});

	$("#next-1").click(function(){
	  $("#education").hide(600);
	  $("#tech").show(1000);
	});

	$("#next-2").click(function(){
	  $("#tech").hide(600);
	  $("#leadership").show(1000);
	});

	$("#next-3").click(function(){
	  $("#leadership").hide(600);
	  $("#computer").show(1000);
	});

	$("#back-1").click(function(){
	  $("#tech").hide(600);
	  $("#education").show(1000);
	});

	$("#back-2").click(function(){
	  $("#leadership").hide(600);
	  $("#tech").show(1000);
	});

	$("#back-3").click(function(){
	  $("#computer").hide(600);
	  $("#leadership").show(1000);
	});

	$('#music-tab').click(function(){
	  	$("#photography").fadeOut(600);
	  	$("#artwork").fadeOut(600);
	  	$("#music").fadeIn(600);
	  	$('#photography-tab').css("color","#4A4A4A");
	  	$('#artwork-tab').css("color","#4A4A4A");
	  	$('#music-tab').css("color","#4BC8C6");
	});
	$('#photography-tab').click(function(){
	  	$("#music").fadeOut(600);
	  	$("#artwork").fadeOut(600);
	  	$("#photography").fadeIn(600);
	  	$('#music-tab').css("color","#4A4A4A");
	  	$('#artwork-tab').css("color","#4A4A4A");
	  	$('#photography-tab').css("color","#4BC8C6");
	});
	$('#artwork-tab').click(function(){
	  	$("#photography").fadeOut(600);
	  	$("#music").fadeOut(600);
	  	$("#artwork").fadeIn(600);
	  	$('#photography-tab').css("color","#4A4A4A");
	  	$('#music-tab').css("color","#4A4A4A");
	  	$('#artwork-tab').css("color","#4BC8C6");
	});

	jQuery(window).on('load', function(){ 
		var $ = jQuery;
		$('#photography-items').masonry({
		itemSelector : '.photo', 
		gutter: 20});
	});

$('#artwork-tab').click(function() {
	var container = document.querySelector('#artwork-items');
	// initialize Masonry after all images have loaded
	imagesLoaded( container, function() {
	  var msnry = new Masonry( container, {gutter:20} );
});
});



});