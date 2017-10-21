$(function() {
	//navsub-ul点击效果
	$(".building-information-header .navsub-ul li").tap(function() {
		$(this).addClass("navsub-ul-active").siblings().removeClass("navsub-ul-active")
	})
	
	
	//article-push
	var metaw = $(".building-information-section").width()
	$(".building-information-container .article-push").css("transform", "translateX("+metaw+"px)")
	
	$(".building-information-container .section-ul .pri-li").tap(function() {
		$(".building-information-container .article-push").css("transform", "translateX(0px)")
		$(".building-information-container .building-information-Mask").fadeIn(250)
		atPushS.refresh()
	})
	
	$(".building-information-container .article-push-header-wrapper .return").tap(function() {
		$(".building-information-container .article-push").css("transform", "translateX("+metaw+"px)")
		$(".building-information-container .building-information-Mask").fadeOut(250)
	})
	
	//input文本框
	var panelw = $(".building-information-container .writing-panel").height()
	$(".building-information-container .article-push-footer .write-reviews").tap(function() {
		$(".building-information-container .article-push-Mask").fadeIn(300)
		$(".building-information-container .writing-box .text-box").focus()
		$(".building-information-container .writing-box").css("bottom", "0")
	})
	
	$('.building-information-container .article-push-Mask').bind("touchstart", function(event) {
		$(".building-information-container .writing-box .text-box").blur()
		$(".building-information-container .article-push-Mask").fadeOut(300)
		$(".building-information-container .writing-box").css("bottom", -panelw+5)
	})
	
	$(".building-information-container .cancel").tap(function() {
		$(".building-information-container .writing-box .text-box").blur()
		$(".building-information-container .article-push-Mask").fadeOut(300)
		$(".building-information-container .writing-box").css("bottom", -panelw+5)
	})
	
	$(".building-information-container .writing-box .send_show").tap(function() {
		if($(".building-information-container .writing-box .text-box").val() !== "") {
			$(".building-information-container .writing-box .text-box").blur()
			$(".building-information-container .article-push-Mask").fadeOut(300)
			$(".building-information-container .writing-box").css("bottom", -panelw)
			$(".building-information-container .text-box").val("")
			$(".building-information-container .comment-success").css("display", "none")
			$(".building-information-container .comment-failed").css("display", "block")
			$(".building-information-container .comment-failed").css("opacity", "1")
			$(".building-information-container .writing-box .writing-panel-header .send_show").css("display","none")
			$(".building-information-container .writing-box .writing-panel-header .send_hide").css("display","block")
			setTimeout(function() {
				$(".building-information-container .comment-failed").fadeOut(300)
			}, 1700)
			setTimeout(function() {
				$(".building-information-container .comment-success").css("display", "block")
				$(".building-information-container .comment-success").css("opacity", "1")
				setTimeout(function() {
					$(".building-information-container .comment-success").fadeOut(300)
				}, 1700)
			}, 2300)
		} else {
			$(".writing-box .text-box").focus()
		}
	})
	
	$(".building-information-container .writing-box .text-box").bind('input propertychange', function() {
		if($(this).val() !== "") {
			$(".building-information-container .writing-box .writing-panel-header .send_show").css("display","block")
			$(".building-information-container .writing-box .writing-panel-header .send_hide").css("display","none")
		} 
		else if($(this).val() == "") {
			$(".building-information-container .writing-box .writing-panel-header .send_show").css("display","none")
			$(".building-information-container .writing-box .writing-panel-header .send_hide").css("display","block")
		}
	})
	
	
	var atPushS = new IScroll('.building-information-container .article-push-body', {
		scrollbars: false
	})
	
	
	//资讯评论样式
	var hoth = 0;
	var hotn = 0;
	$(".building-information-container .hotThread-li").each(function() {
		hoth = $(this).find(".user-say").height()
		hotn = $(this).find(".user-name").height()+3
		if(hoth > 3*hotn) {
			$(this).find(".user-say").addClass("showmore")
			$(this).find(".showall").css("display", "block")
			$(".building-information-container .hotThread-li .showall-wrapper").tap(function() {
				var Hindex = $(this).parents(".hotThread-li").index()
				$(".building-information-container .hotThread-li").eq(Hindex).find(".user-say").removeClass("showmore")
				$(".building-information-container .hotThread-li").eq(Hindex).find(".showall").css("display", "none")
				atPushS.refresh()
			})
		}
	})
	
	
	$(".building-information-footer .footer-nav-li").tap(function(){
		$(this).addClass("select").siblings().removeClass("select")
	})
	
})