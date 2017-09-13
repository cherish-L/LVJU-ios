$(function(){
	
	var building_listS = new IScroll('.rental-list-section', {
		scrollbars: true,
		fadeScrollbars: true,
		shrinkScrollbars: 'clip'
	})
	
	$(".rental-list-column .demand-li").tap(function(){
		$(this).addClass('select').siblings().removeClass("select")
	})
	
	//为你找到楼盘
	var found_h=$(".rental-list-column .found-for-you span").height()
	$(".rental-list-column .found-for-you").height(found_h)
	$(".rental-list-column .found-for-you").css("opacity","1")
	setTimeout(function(){
		$(".rental-list-column .found-for-you").height("0")
		$(".rental-list-column .found-for-you").css("opacity","0")
	},3000)
	
	
	var len=$(".rental-list-section .recommend-content-li").length
	$(".found-for-you span").text("为您找到"+len+"个楼盘")
	
	
	
})
