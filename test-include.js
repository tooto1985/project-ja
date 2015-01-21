(function() {
	if ((/android/i.test(navigator.userAgent) || /iphone/i.test(navigator.userAgent)) && $("#header").length > 0) {
		var $downloadapp = $(".downloadapp");
		if ($downloadapp.length < 1) {
			$("head").append($("<link>").attr({
				rel: "stylesheet",
				type: "text/css",
				href: "https://rawgit.com/tooto1985/project-ja/master/test-include.css"
			}));
			$("body").prepend($("<div>").addClass("downloadapp"));
			$downloadapp = $(".downloadapp");
		}
		var html = "<div>";
		html += "<table border=\"0\">";
		html += "<tr>";
		html += "<td>"
		html += "<img src=\"https://lh4.ggpht.com/1yLfmfOeaYWsTFHV0gyNGszIGhB2GudxM8D68T3GEJzfeljKaaANA14dL-jWTuIKTQ=w40-rw\">";
		html += "</td>"
		html += "<td>"
		html += "<span>下載手機版APP瀏覽，活動訊息即時通知！</span>";
		html += "</td>"
		html += "<td>"
		html += "<a href=\"http://app.hishop.com.tw/?download=ja\">立即下載</a>";
		html += "</td>"				
		html += "</tr>";
		html += "</table>";
		html += "</div>";
		$downloadapp.html(html);
		$(".downloadapp").animate({
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