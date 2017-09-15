$(function() {
	var c=0;
	var s=0;
	var li_len=$(".album-page-section .section-wrapper-vertical .bottom-nav-ul li").length
	var album_h = $(".album-page-section").height()
	var img_box = $(".album-page-section .section-wrapper-vertical .img-box").height()
	$(".album-page-section .section-wrapper-vertical .top-txt").height((album_h - img_box) * 0.39)
	$(".album-page-section .section-wrapper-vertical .img-box").height(album_h-(album_h - img_box) * 0.39)
	for(var i=0;i<li_len;i++){
		c=$(".album-page-section .section-wrapper-vertical .bottom-nav-ul li").eq(i).width()
		s=s+c
	}
	$(".album-page-section .section-wrapper-vertical .bottom-nav-ul").width(s+5)
	
	
	var sale_w = $(".section-wrapper-transverse .sale-name").width()
	var current_w = $(".section-wrapper-transverse .current-page").width()
	$(".section-wrapper-transverse .top-txt").width(sale_w+current_w+10)
	
	var li_w=0;
	var li_total_w=0;
	for(var i=0;i<li_len;i++){
		li_w=$(".album-page-section .section-wrapper-transverse .bottom-nav-ul li").eq(i).width()
		li_total_w=li_total_w+li_w
	}
	$(".album-page-section .section-wrapper-transverse .bottom-nav-ul").width(li_total_w+5)
	
	
	$(".album-page-section .section-wrapper-vertical .bottom-nav-ul li").tap(function(){
		var _this_index=$(this).index()
		$(this).addClass("select").siblings().removeClass("select")
		$(".album-page-section .section-wrapper-transverse .bottom-nav-ul li").eq(_this_index).addClass("select").siblings().removeClass("select")
	})
	
	$(".album-page-section .section-wrapper-transverse .bottom-nav-ul li").tap(function(){
		var _this_index=$(this).index()
		$(this).addClass("select").siblings().removeClass("select")
		$(".album-page-section .section-wrapper-vertical .bottom-nav-ul li").eq(_this_index).addClass("select").siblings().removeClass("select")
	})
	
	
	var verticalS = new IScroll('.section-wrapper-vertical .bottom-nav .bottom-nav-box', {
		scrollbars: false,
		scrollX: true,
		scrollY: false
	})
})