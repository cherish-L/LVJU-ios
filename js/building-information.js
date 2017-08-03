$(function(){
	//定义navsub-ul 的宽度
	var liwidth=$(".navsub-ul li").width()
	var lilen=$(".navsub-ul li").length
	$(".navsub-ul").width(liwidth*lilen)
	//navsub-ul点击效果
	$(".navsub-ul li").tap(function(){
		$(this).addClass("navsub-ul-active").siblings().removeClass("navsub-ul-active")
	})
	
	//article-push
	var metaw=$(".section-content-body").width()
	$(".section-content-massage .pri-li").tap(function(){
		$(".article-push").css("left","0")
	})
	
	$(".article-push-header-wrapper .return").tap(function(){
		$(".article-push").css("left",metaw)
	})
	
	
	//input文本框
	var panelw=$(".writing-panel").height()
	$(".article-push-footer .write-reviews").tap(function(){
		$(".zhezhao").css("z-index","50")
		$(".zhezhao").css("opacity","1")
		$(".writing-box").css("height",panelw)
		
	})
	$(".zhezhao").tap(function(){
		$(".zhezhao").css("z-index","-1")
		$(".zhezhao").css("opacity","0")
		$(".writing-box").css("height","0")
	})
	$(".cancel").tap(function(){
		$(".zhezhao").css("z-index","-1")
		$(".zhezhao").css("opacity","0")
		$(".writing-box").css("height","0")
	})
	$(".send").tap(function(){
		$(".zhezhao").css("z-index","-1")
		$(".zhezhao").css("opacity","0")
		$(".writing-box").css("height","0")
		$(".text-box").val("")
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
