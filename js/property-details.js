$(function(){
	
	$(".property-details-section").bind("touchstart",function(){
		property_detailsS.refresh()
	})
	var property_detailsS = new IScroll('.property-details-section', {
		scrollbars: true,
		fadeScrollbars: true,
		shrinkScrollbars: 'clip'
	})
	
	//户型种类水平滚动
	var lilen=$(".property-details-houseStyle .houseStyle-content-ul li").length
	var li_w=$(".property-details-houseStyle .houseStyle-content-ul li").width()
	var li_last_w=$(".property-details-houseStyle .houseStyle-content-ul li:last-child").width()
	$(".property-details-houseStyle .houseStyle-content-ul").css("width",(lilen-1)*li_w+li_last_w+5)
	$(".property-details-houseStyle .houseStyle-title-txt").text("户型展示("+lilen+"种)")
	
	var contentS = new IScroll('.houseStyle-content', {
		scrollbars: false,
		scrollX: true,
		scrollY: false
	})
	
	//推荐楼盘水平滚动
	var R_lilen=$(".property-details-recommend .recommend-content-ul li").length
	
	var R_li_w=$(".property-details-recommend .recommend-content-ul li").width()
	var R_li_last_w=$(".property-details-recommend .recommend-content-ul li:last-child").width()
	$(".property-details-recommend .recommend-content-ul").css("width",(R_lilen-1)*R_li_w+R_li_last_w+5)
	
	var recommendS = new IScroll('.recommend-content', {
		scrollbars: false,
		scrollX: true,
		scrollY: false
	})
	var head_h=$(".head-portrait").height()
	var max_h=(head_h*48/27)+5
	$(".QA-content-li").each(function(){
		var index=$(this).index()
		var li_index=$(".QA-content-li").eq(index)
		if(li_index.find(".answer").height()>max_h){
			$(this).find(".answer").siblings(".full_text").css("display","block")
			$(this).find(".answer").addClass("showall")
		}
		else if(li_index.find(".answer").height()<max_h){
			$(this).find(".answer").siblings(".full_text").css("display","none")
			$(this).find(".answer").removeClass("showall")
		}
	})
	$(".full_text").tap(function(){
		$(this).css("display","none")
		$(this).siblings(".answer").removeClass("showall")
		property_detailsS.refresh()
	})
	
	
	
	//底部评论点击效果
	$(".property-details-footer .footer-comment").bind("touchstart",function(e){
		e.preventDefault()
		$(this).addClass("click")
	})
	$(".property-details-footer .footer-comment").bind("touchend",function(){
		$(this).removeClass("click")
	})
	//底部旅游看房点击效果
	$(".property-details-footer .footer-touristHouse").bind("touchstart",function(e){
		e.preventDefault()
		$(this).addClass("click")
	})
	$(".property-details-footer .footer-touristHouse").bind("touchend",function(){
		$(this).removeClass("click")
	})
	//底部评论点击效果
	$(".property-details-footer .footer-consultation").bind("touchstart",function(e){
		e.preventDefault()
		$(this).addClass("click")
	})
	$(".property-details-footer .footer-consultation").bind("touchend",function(){
		$(this).removeClass("click")
	})
})
