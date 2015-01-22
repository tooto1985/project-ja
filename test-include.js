function QueryString(name) {
	var AllVars = window.location.search.substring(1);
	var Vars = AllVars.split("&");
	for (i = 0; i < Vars.length; i++) {
		var Var = Vars[i].split("=");
		if (Var[0].toUpperCase() == name.toUpperCase()) return Var[1];
	}
	return "";
}

function showdownloadapp(options) {
	var defaultOptions = {
		backgroundColor: "#343434",
		logo: "https://lh4.ggpht.com/1yLfmfOeaYWsTFHV0gyNGszIGhB2GudxM8D68T3GEJzfeljKaaANA14dL-jWTuIKTQ=w40-rw",
		logoWidth: 40,
		logoHeight: 40,
		text: "下載手機版APP瀏覽，活動訊息即時通知！",
		url: "http://app.hishop.com.tw/?download=ja",
		urlText: "立即下載",
		urlWidth: 100,
		urlHeight: 40,
		urlColor: "#333",
		urlBackgroundColor: "#efefef",
		delayTime: 2000,
		height: 60
	};
	options = $.extend(defaultOptions, options);
	if ((/android/i.test(navigator.userAgent) || /iphone/i.test(navigator.userAgent) || /ipad/i.test(navigator.userAgent)) && $("#header").length > 0) {
		var dla = "downloadapp",
			_dla = "." + dla,
			$dla = $(_dla),
			$uip = $(".ui-page"),
			adc = "adclose",
			_adc = "." + adc,
			html = "";
		if ($dla.length < 1) {
			$("head").append($("<link>").attr({
				rel: "stylesheet",
				type: "text/css",
				href: "https://rawgit.com/tooto1985/project-ja/master/test-include.css"
			}));
			$("body").prepend($("<div>").addClass(dla));
			$dla = $(_dla);
		}
		html += "<div style=\"background-color:" + options.backgroundColor + ";\">";
		html += "<table border=\"0\">";
		html += "<tr>";
		html += "<td width=\"" + options.logoWidth + "\">"
		html += "<img src=\"" + options.logo + "\" width=\"" + options.logoWidth + "\" height=\"" + options.logoHeight + "\">";
		html += "</td>"
		html += "<td>"
		html += "<span>" + options.text + "</span>";
		html += "</td>"
		html += "<td width=\"" + options.urlWidth + "\">"
		html += "<a href=\"" + options.url + "\" style=\"width:" + options.urlWidth + "px;height:" + options.urlHeight + "px;color:" + options.urlColor + ";background-color:" + options.urlBackgroundColor + ";\">" + options.urlText + "</a>";
		html += "</td>"
		html += "</tr>";
		html += "</table>";
		html += "<div class=\"" + adc + "\"></div>";
		html += "</div>";
		$dla.html(html).delay(options.delayTime).animate({
			"height": options.height
		});
		$uip.delay(ooptions.delayTime).animate({
			"top": options.height
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
}