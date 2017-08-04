$(function() {
	//定义navsub-ul 的宽度
	var liwidth = $(".navsub-ul li").width()
	var lilen = $(".navsub-ul li").length
	$(".navsub-ul").width(liwidth * lilen)
	//navsub-ul点击效果
	$(".navsub-ul li").tap(function() {
		$(this).addClass("navsub-ul-active").siblings().removeClass("navsub-ul-active")
	})

	//article-push
	var metaw = $(".section-content-body").width()
	$(".article-push").css("left", metaw)
	$(".section-content-massage .pri-li").tap(function() {
		$(".article-push").css("left", "0")
		atPushS.refresh()
	})

	$(".article-push-header-wrapper .return").tap(function() {
		$(".article-push").css("left", metaw)
		atPushS.refresh()
	})

	//input文本框
	var panelw = $(".writing-panel").height()
	$(".article-push-footer .write-reviews").tap(function() {
		$(".zhezhao").css("z-index", "50")
		$(".zhezhao").css("opacity", "1")
		$(".writing-box").css({
			"position": "static",
			"bottom": 0
		});
		atPushS.refresh()

	})

//	$('.writing-box').bind("focus", function() {
//		
//	}).bind("blur", function() {
//		$(".div_ft").css("position", "fixed");
//	});

	$('.zhezhao').bind("touchstart", function(event) {
		$(".zhezhao").css("z-index", "-1")
		$(".zhezhao").css("opacity", "0")
		$(".writing-box").css("bottom", -panelw)
		atPushS.refresh()
	});
	$(".cancel").tap(function() {
		$(".zhezhao").css("z-index", "-1")
		$(".zhezhao").css("opacity", "0")
		$(".writing-box").css("bottom", -panelw)
		atPushS.refresh()
	})
	$(".send").tap(function() {
		$(".zhezhao").css("z-index", "-1")
		$(".zhezhao").css("opacity", "0")
		$(".writing-box").css("bottom", -panelw)
		$(".text-box").val("")
		atPushS.refresh()
	})

	$(".showall-wrapper").tap(function() {
		$(".user-say").removeClass("showmore")
		$(".showall").css("display", "none")
		atPushS.refresh()
	})

	var navS = new IScroll('.content-nav', {
		scrollbars: false,
		scrollX: true,
		scrollY: false
	});
	var sectionS = new IScroll('.section', {
		scrollbars: false
	});
	var atPushS = new IScroll('.article-push-body', {
		scrollbars: false
	});

})