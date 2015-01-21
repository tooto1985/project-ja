(function() {
	if ((/android/i.test(navigator.userAgent) || /iphone/i.test(navigator.userAgent)) && $("#header").length > 0) {
		var $downloadapp = $(".downloadapp");
		if ($downloadapp.length < 1) {
			$("body").prepend($("<div>").addClass("downloadapp"));
			$downloadapp = $(".downloadapp");
		}
		var html = "<div>";
		html += "<img src=\"https://lh4.ggpht.com/1yLfmfOeaYWsTFHV0gyNGszIGhB2GudxM8D68T3GEJzfeljKaaANA14dL-jWTuIKTQ=w40-rw\">";
		html += "<span>下載手機版APP瀏覽，活動訊息即時通知！</span>";
		html += "<a href=\"http://app.hishop.com.tw/?download=ja\"></a>";
		html += "</div>";
		$downloadapp.html(html);
		$(".downloadapp").height(0).css("overflow", "hidden").animate({
			"height": 60
		});
		$(".ui-page").animate({
			"top": 60
		});
		$(".ui-page").click(function() {
			if ($(".downloadapp").height() !== 0) {
				$(".downloadapp").animate({
					"height": 0
				});
				$(".ui-page").animate({
					"top": 0
				});
			}
		});
	}
})();