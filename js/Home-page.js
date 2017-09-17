$(function(){
	
	//首页头部滚动监听事件
	var sectionS = new IScroll('.Home-page-section', {
		scrollbars: false,
		probeType: 3
	});
	var angle=0;
	setInterval(function() {
		angle += 4
		$(".section-loading i").css("transform", "rotate(" + angle + "deg)");
	}, 20)
	var upDated=null;
	sectionS.on('scroll',function(){
		if(sectionS.y < 0){
			var Scrolly=-(sectionS.y/180)
			$(".Home-page-container .header").css("background","rgba(246, 246, 246,"+Scrolly+")")
			$(".Home-page-container .header").css("box-shadow","0 1px 0 0 rgba(204,204,204,"+Scrolly+")")
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
			$(".Home-page-container.header").css("background","rgba(246, 246, 246,0.0")
			$(".Home-page-container .header").css("box-shadow","0 1px 0 0 rgba(204,204,204,0.0")
		}
		maxY = this.maxScrollY - this.y
		$(".section-wrapper").on("touchstart", function(e) {
			if(e.cancelable) {
				if(!e.defaultPrevented) {
					e.preventDefault();
				}
			}
		})
		$(".section-wrapper").on("touchmove", function(e) {
			clearTimeout(upDated)
			$(".section-load").css("display", "block")
			$(".section-loading").css("display", "none")
			$(".section-loadnone").css("display", "none")
			if(maxY >= 40) {
				$(".section-load").text("松开加载更多...")
				$(".section-load").css("display", "block")
				$(".section-loadnone").css("display", "none")
			}
		})
		$(".section-wrapper").on("touchend", function(e) {
			if($(".section-load").text()=="松开加载更多..."){
				$(".section-load").css("display", "none")
				$(".section-load").text("上拉加载更多")
				$(".section-loading").css("display", "block")
			 	upDated=setTimeout(function() {
					$(".section-loading").css("display", "none")
					$(".section-loadnone").css("display", "block")
				}, 1500)	
			}
		})
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