;(function($){
	function mobileNav(){
		$(".btnMobileNav").on("click", function(){
			$(this).toggleClass("isActiveNav");
			var navPos = parseInt($(".navigationOuter").css("right"));

			if(navPos == -250){

				$(this).animate({
					right:145
				});
				$(this).find("span").text("Close");

				$(".navigationOuter, .btnMobileNavOuter").stop(true, true).animate({
					right:0
				}, 300);
				$(".bodyBg").stop(true, true).fadeIn(300);
				$("body").css({
					overflowY:"hidden"
				});

			}
			else{

				$(this).animate({
					right:15
				});
				$(this).find("span").text("Menu");

				$(".navigationOuter, .btnMobileNavOuter").stop(true, true).animate({
					right:-250
				}, 300);
				$(".bodyBg").stop(true, true).fadeOut(300);
				$("body").css({
					overflowY:"auto"
				});
				
				
			}
		});
	}

	$(function(){
		mobileNav();
	});

})(jQuery);




