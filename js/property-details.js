$(function(){
	var property_detailsS = new IScroll('.property-details-section', {
		scrollbars: true,
		fadeScrollbars: true,
		shrinkScrollbars: 'clip'
	})
	
	
	var lilen=$(".property-details-houseStyle .houseStyle-content-ul li").length
	var li_w=$(".property-details-houseStyle .houseStyle-content-ul li").width()
	$(".property-details-houseStyle .houseStyle-content-ul").css("width",lilen*li_w)
	
	var contentS = new IScroll('.houseStyle-content', {
		scrollbars: false,
		scrollX: true,
		scrollY: false
	})
})
