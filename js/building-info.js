$(function(){
	$(".building-info-section").bind("touchstart",function(){
		building_infoS.refresh()
	})
	var building_infoS = new IScroll('.building-info-section', {
		scrollbars: true,
		fadeScrollbars: true,
		shrinkScrollbars: 'clip'
	})
	
})
