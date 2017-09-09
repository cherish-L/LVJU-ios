$(function(){
	$(".building-info-section").bind("touchstart",function(){
		building_infoS.refresh()
	})
	var building_infoS = new IScroll('.building-info-section', {
		scrollbars: true,
		fadeScrollbars: true,
		shrinkScrollbars: 'clip'
	})
	
	
	var section_w=$(".building-info-section").width()
	$(".building-info-banner").height(section_w*1.1)
})
