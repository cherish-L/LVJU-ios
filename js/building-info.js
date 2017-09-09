$(function(){
	$(".building-info-section").bind("touchstart",function(){
		building_infoS.refresh()
	})
	var building_infoS = new IScroll('.building-info-section', {
		scrollbars: true,
		fadeScrollbars: true,
		shrinkScrollbars: 'clip'
	})
	
	
	var section_h=$(".building-info-section").height()
	$(".building-info-banner").height(section_h*0.65)
	$(".building-info-switch").height(section_h*0.35)
})
