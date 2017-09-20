$(function(){
	
	var report_personallyS = new IScroll('.section-wrapper-personally', {
		scrollbars: true,
		fadeScrollbars: true,
		shrinkScrollbars: 'clip'
	})
	var report_groundS = new IScroll('.section-wrapper-ground', {
		scrollbars: true,
		fadeScrollbars: true,
		shrinkScrollbars: 'clip'
	})
	
	$(".report-property-search .content-nav-li").tap(function(){
		$(this).addClass("select").siblings().removeClass("select")
	})
	
	$(".report-property-personally .report-property-li").tap(function(){
		if(!$(this).find(".report-property-li-btn").hasClass("select")){
			$(this).find(".report-property-li-btn").addClass("select")
		}
		else{
			$(this).find(".report-property-li-btn").removeClass("select")
		}
	})
})
