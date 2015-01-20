(function() {
	if ((/android/i.test(navigator.userAgent) || /iphone/i.test(navigator.userAgent)) && $("#header").length > 0) {
		var $downloadapp = $(".downloadapp");
		if ($downloadapp.length < 1) {
			$("body").prepend($("<div>").addClass("downloadapp"));
			$downloadapp = $(".downloadapp");
		}
		var html = "<div>";
		html += "<a href=\"http://app.hishop.com.tw/?download=ja\">下載APP</a>";
		html += "</div>";
		$downloadapp.html(html);
		$(".downloadapp").height(0).animate({"height":60},800);
		$(".ui-page").animate({"top":60},800);
	}
})();