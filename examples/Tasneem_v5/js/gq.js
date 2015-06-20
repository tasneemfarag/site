$(document).ready(function() {
	/* console.log("hghkg");
	$( ".modal-dialog" ).dialog({
	title: "Global Quran",
	width: 1000,
	modal: true,
	opacity: 0.1
	});*/ 
     
    $("div.modal-close").click(function() {
    	//$("div#myModal").dialog("close");
    });

	function allButtonsNotSelecetedView() {
		if ($("div#surah").is(":visible") == false && $("div#juz").is(":visible") == false && $("div#page").is(":visible") == false) {
			console.log("hello");
		}
	}

	
	$("#btn-surah").click(function() {
		if ($("div#surah").is(":visible") == true) {
			$("#btn-surah").toggleClass("active");
			$("div#surah").hide("slow");
		} else {
			$("div#surah").show("slow");
			$("div#juz").hide("slow");
			$("div#page").hide("slow");
			$("div.Al-Faatiha").hide("slow");
			$("div.Al-Baqara").hide("slow");
			$("div.Aal-Imran").hide("slow");
			$("div.An-Nisaa").hide("slow");
			$("div.juz-2").hide("slow");
			$("div.page-16").hide("slow");
		}
	});
	$("#btn-juz").click(function() {
		if ($("div#juz").is(":visible") == true) {
			$("div#juz").hide("slow");
		} else {
			$("#btn-surah").removeClass("active");
			$("div#juz").show("slow");
			$("div#surah").hide("slow");
			$("div#page").hide("slow");
			$("div.Al-Faatiha").hide("slow");
			$("div.Al-Baqara").hide("slow");
			$("div.Aal-Imran").hide("slow");
			$("div.An-Nisaa").hide("slow");
			$("div.juz-2").hide("slow");
			$("div.page-16").hide("slow");
		}
	});
	$("#btn-page").click(function() {
		if ($("div#page").is(":visible") == true) {
			$("div#page").hide("slow");
		} else {
			$("#btn-surah").removeClass("active");
			$("div#page").show("slow");
			$("div#surah").hide("slow");
			$("div#juz").hide("slow");
			$("div.Al-Faatiha").hide("slow");
			$("div.Al-Baqara").hide("slow");
			$("div.Aal-Imran").hide("slow");
			$("div.An-Nisaa").hide("slow");
			$("div.juz-2").hide("slow");
			$("div.page-16").hide("slow");
		}
	});
	$(".btn-Al-Faatiha").click(function() {
		if ($("div.Al-Faatiha").is(":visible") == true) {
			$("div.Al-Faatiha").hide("slow");
		} else {
			$("div.Al-Faatiha").show("slow");
			$("div#surah").hide("slow");
			$("div#juz").hide("slow");
			$("div#page").hide("slow");
		}
	});
	$("#btn-juz-2").click(function() {
		if ($("div.juz-2").is(":visible") == true) {
			$("div.juz-2").hide("slow");
		} else {
			$("div.juz-2").show("slow");
			$("div#surah").hide("slow");
			$("div#juz").hide("slow");
			$("div#page").hide("slow");
		}
	});
	$("#btn-page-16").click(function() {
		if ($("div.page-16").is(":visible") == true) {
			$("div.page-16").hide("slow");
		} else {
			$("div.page-16").show("slow");
			$("div#surah").hide("slow");
			$("div#juz").hide("slow");
			$("div#page").hide("slow");
		}
	});
	$("div#play").click(function() {
		if ($("div#play > button > span").hasClass('glyphicon-pause')) {
			$("div#play > button > span").switchClass("glyphicon-pause", "glyphicon-play", 4000, "easeInOutQuad");
		} else {
			$("div#play > button > span").switchClass("glyphicon-play", "glyphicon-pause", 4000, "easeInOutQuad");
		}
	});
	
	$("div#myModal>div.modal-dialog>div.modal-content>div.modal-body>div.container-fluid>div.row>div.setting-tab-menu>div.list-group>a").click(function(e) {
		e.preventDefault();
		$(this).siblings('a.active').removeClass("active");
		$(this).addClass("active");
		var index = $(this).index();
		$("div.setting-tab>div.setting-tab-content").removeClass("active");
		$("div.setting-tab>div.setting-tab-content").eq(index).addClass("active");
	});
});
/*
(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s);
	js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=175325295868821&version=v2.0";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
! function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0],
		p = /^http:/.test(d.location) ? 'http' : 'https';
	if (!d.getElementById(id)) {
		js = d.createElement(s);
		js.id = id;
		js.src = p + '://platform.twitter.com/widgets.js';
		fjs.parentNode.insertBefore(js, fjs);
	}
}(document, 'script', 'twitter-wjs');
*/