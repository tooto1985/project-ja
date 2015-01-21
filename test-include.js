(function() {
	if ((/android/i.test(navigator.userAgent) || /iphone/i.test(navigator.userAgent)) && $("#header").length > 0) {
		var dla = "downloadapp",
			_dla = "." + dla,
			$dla = $(_dla),
			$uip = $(".ui-page"),
			adc = "adclose",
			_adc = "." + adc;
		if ($dla.length < 1) {
			$("head").append($("<link>").attr({
				rel: "stylesheet",
				type: "text/css",
				href: "https://rawgit.com/tooto1985/project-ja/master/test-include.css"
			}));
			$("body").prepend($("<div>").addClass(dla));
			$dla = $(_dla);
		}
		var html = "<div>";
		html += "<table border=\"0\">";
		html += "<tr>";
		html += "<td width=\"40\">"
		html += "<img src=\"https://lh4.ggpht.com/1yLfmfOeaYWsTFHV0gyNGszIGhB2GudxM8D68T3GEJzfeljKaaANA14dL-jWTuIKTQ=w40-rw\">";
		html += "</td>"
		html += "<td>"
		html += "<span>下載手機版APP瀏覽，活動訊息即時通知！</span>";
		html += "</td>"
		html += "<td width=\"100\">"
		html += "<a href=\"http://app.hishop.com.tw/?download=ja\">立即下載</a>";
		html += "</td>"
		html += "</tr>";
		html += "</table>";
		html += "<div class=\"" + adc + "\"></div>";
		html += "</div>";
		$dla.html(html).delay(2000).animate({
			"height": 60
		});
		$uip.delay(2000).animate({
			"top": 60
		});
		$uip.add($(_adc)).click(function() {
			if ($dla.height() !== 0) {
				$dla.animate({
					"height": 0
				});
				$uip.animate({
					"top": 0
				});
			}
		});
	}
})();