$(function(){
	//点击
	$(".home-page-section .address").bind("touchstart",function(e){
		e.preventDefault()
		$(this).find(".address-city").css("color","#ff7c00")
		$(this).find(".address-city").addClass("click")
	})
	$(".home-page-section .address").bind("touchend",function(){
		$(this).find(".address-city").css("color","#333333")
		$(this).find(".address-city").removeClass("click")
	})
	
	//section-list 宽度
	var big_w=$(".section-list .section-list-big").width()
	$(".section-list .section-list-big li").width((big_w-5)/2)
	
	var small_w=$(".section-list .section-list-small").width()
	$(".section-list .section-list-small li").width((small_w-10)/3)
	
	var home_pageS = new IScroll('.home-page-section', {
		scrollbars: true,
		fadeScrollbars: true,
		shrinkScrollbars: 'clip'
	})
	
	
	
})
