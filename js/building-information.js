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
	$(".section-ul .pri-li").tap(function() {
		$(".article-push").css("left", "0")
		atPushS.refresh()
	})

	$(".article-push-header-wrapper .return").tap(function() {
		$(".article-push").css("left", metaw)
	})
	
	//input文本框
	var panelw = $(".writing-panel").height()
	$(".article-push-footer .write-reviews").tap(function() {
		$(".zhezhao").css("z-index", "50")
		$(".zhezhao").css("opacity", "1")
		$(".writing-box .text-box").focus()
		$(".writing-box").css("bottom", "0")
	})
	$('.zhezhao').bind("touchstart", function(event) {
		$(".writing-box .text-box").blur()
		$(".zhezhao").css("z-index", "-1")
		$(".zhezhao").css("opacity", "0")
		$(".writing-box").css("bottom", -panelw)
	});
	$(".cancel").tap(function() {

		$(".writing-box .text-box").blur()
		$(".zhezhao").css("z-index", "-1")
		$(".zhezhao").css("opacity", "0")
		$(".writing-box").css("bottom", -panelw)
	})
	$(".writing-box .send").tap(function() {
		if($(".writing-box .text-box").val() !== "") {
			$(".writing-box .text-box").blur()
			$(".zhezhao").css("z-index", "-1")
			$(".zhezhao").css("opacity", "0")
			$(".writing-box").css("bottom", -panelw)
			$(".text-box").val("")
			$(".comment-success").css("display", "none")
			$(".comment-failed").css("display", "block")
			$(".comment-failed").css("opacity", "1")
			setTimeout(function() {
				$(".comment-failed").fadeOut(500)
			}, 1500)
			setTimeout(function() {
				$(".comment-success").css("display", "block")
				$(".comment-success").css("opacity", "1")
				setTimeout(function() {
					$(".comment-success").fadeOut(500)
				}, 1500)
			}, 2000)
		} else {
			alert("发送内容不能为空")
			$(".writing-box .text-box").focus()
		}
	})

	//导航滑动
	var _thisli_w = $(".header-nav .nav-list li").width()
	var _thisli_len = $(".header-nav .nav-list li").length
	$(".header-nav .nav-list").width(_thisli_w * _thisli_len)

	var testh=$(".section").height()
	$(".section-li").height(testh)
	
	var atPushS = new IScroll('.article-push-body', {
		scrollbars: false
	})
	
	
	//资讯评论样式
	var hoth = 0;
	$(".hotThread-li").each(function() {
		hoth = $(this).find(".user-say").height()
		if(hoth >= 78) {
			$(this).find(".user-say").addClass("showmore")
			$(this).find(".showall").css("display", "block")
			$(".hotThread-li .showall-wrapper").tap(function() {
				var Hindex = $(this).parents(".hotThread-li").index()
				$(".hotThread-li").eq(Hindex).find(".user-say").removeClass("showmore")
				$(".hotThread-li").eq(Hindex).find(".showall").css("display", "none")
				atPushS.refresh()
			})
		}
	})
})