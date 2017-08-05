$(function(){
	
	//首页头部滚动监听事件
	var sectionS = new IScroll('.section', {
		scrollbars: false,
		probeType: 3
	});
	sectionS.on('scroll',function(){
		if(sectionS.y < 0){
			var Scrolly=-(sectionS.y/116)
			$(".container .header").css("background","rgba(246, 246, 246,"+Scrolly+")")
			$(".container .header").css("box-shadow","0 1px 0 0 rgba(204,204,204,"+Scrolly+")")
			if(sectionS.y < -116){
				$(".current-location").addClass("state")
				$(".Search-frame").addClass("state")
				$(".current-map").addClass("state")
			}
			if(sectionS.y >= -116){
				$(".current-location").removeClass("state")
				$(".Search-frame").removeClass("state")
				$(".current-map").removeClass("state")
			}
		}
		if(sectionS.y >= 0){
			$(".container .header").css("background","rgba(246, 246, 246,0.0")
			$(".container .header").css("box-shadow","0 1px 0 0 rgba(204,204,204,0.0")
		}
	});
	
	
	//房价走势头部滚动监听事件
	var trendS = new IScroll('.trend-section', {
		scrollbars: false
	});
	
	
	$(".loading-fail").tap(function(){
		$(".loading-fail").css("display","none")
		$(".trend-section").css("display","block")
	})
	
	

	var trendh=$(".trend-section").height()
	$(".loading-fail").height(trendh)
	var tcw=$(".houseprice-trend").width()
	$(".historicalprice-title span").tap(function(){
		$(".houseprice-trend").css("left","0")
	})
	$(".trend-header .return").tap(function(){
		$(".houseprice-trend").css("left",tcw)
	})
})