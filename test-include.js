(function() {
	if ((/android/i.test(navigator.userAgent) || /iphone/i.test(navigator.userAgent)) && $("#header").length > 0) {
		var $downloadapp = $(".downloadapp");
		if ($downloadapp.length < 1) {
			$("body").prepend($("<div>").addClass("downloadapp"));
			$downloadapp = $(".downloadapp");
		}

		$downloadapp.html("<div><h1>test</h1></div>");


		$(".downloadapp").height(0).animate({"height":60},800);
		$(".ui-page").animate({"top":60},800);

	}
})();