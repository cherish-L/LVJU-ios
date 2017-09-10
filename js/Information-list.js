$(function(){
	
	var Information_listS = new IScroll('.Information-list-section', {
		scrollbars: true,
		fadeScrollbars: true,
		shrinkScrollbars: 'clip'
	})
	var content_li_len=$(".Information-list-section .content-ul .content-li").length
	$(".Information-list-header .found-for-you span").text("为您找到"+content_li_len+"条资讯")
	
	//为你找到资讯
	var found_span_h=$(".Information-list-header .found-for-you span").height()
	$(".Information-list-header .found-for-you").height(found_span_h)
	$(".Information-list-header .found-for-you").css("opacity","1")
	setTimeout(function(){
		$(".Information-list-header .found-for-you").height("0")
		$(".Information-list-header .found-for-you").css("opacity","0")
	},3000)
	
})
