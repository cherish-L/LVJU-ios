$(function(){
	
	//首页头部滚动监听事件
	var homePage_sectionS = new IScroll('.Home-page-section', {
		scrollbars: false,
		probeType: 3
	});
	
	var angle_hp=0;
	setInterval(function() {
		angle_hp += 4
		$(".Home-page-section .section-loading i").css("transform", "rotate(" + angle_hp + "deg)");
	}, 20)
	
	var upDated=null;
	homePage_sectionS.on('scroll',function(){
		if(homePage_sectionS.y < 0){
			var Scrolly=-(homePage_sectionS.y/180)
			$(".Home-page-container .Home-page-header").css("opacity","1")
			$(".Home-page-container .Home-page-header").css("background","rgba(246, 246, 246,"+Scrolly+")")
			$(".Home-page-container .Home-page-header").css("box-shadow","0 1px 0 0 rgba(204,204,204,"+Scrolly+")")
			if(homePage_sectionS.y < -116){
				$(".Home-page-header .current-location").addClass("state")
				$(".Home-page-header .Search-frame").addClass("state")
				$(".Home-page-header .current-map").addClass("state")
			}
			if(homePage_sectionS.y >= -116){
				$(".Home-page-header .current-location").removeClass("state")
				$(".Home-page-header .Search-frame").removeClass("state")
				$(".Home-page-header .current-map").removeClass("state")
			}
		}
		if(homePage_sectionS.y >= 0){
			$(".Home-page-container .Home-page-header").css("opacity",(100-homePage_sectionS.y)/100)
			$(".Home-page-container .Home-page-header").css("background","rgba(246, 246, 246,0)")
			$(".Home-page-container .Home-page-header").css("box-shadow","0 1px 0 0 rgba(204,204,204,0)")
		}
		maxY = this.maxScrollY - this.y
		$(".Home-page-section .section-wrapper").on("touchstart", function(e) {
			if(e.cancelable) {
				if(!e.defaultPrevented) {
					e.preventDefault();
				}
			}
		})
		$(".Home-page-section .section-wrapper").on("touchmove", function(e) {
			clearTimeout(upDated)
			$(".Home-page-section .section-load").css("display", "block")
			$(".Home-page-section .section-loading").css("display", "none")
			$(".Home-page-section .section-loadnone").css("display", "none")
			if(maxY >= 40) {
				$(".Home-page-section .section-load").text("松开加载更多...")
				$(".Home-page-section .section-load").css("display", "block")
				$(".Home-page-section .section-loadnone").css("display", "none")
			}
		})
		$(".Home-page-section .section-wrapper").on("touchend", function(e) {
			if($(".Home-page-section .section-load").text()=="松开加载更多..."){
				$(".Home-page-section .section-load").css("display", "none")
				$(".Home-page-section .section-load").text("上拉加载更多")
				$(".Home-page-section .section-loading").css("display", "block")
			 	upDated=setTimeout(function() {
					$(".Home-page-section .section-loading").css("display", "none")
					$(".Home-page-section .section-loadnone").css("display", "block")
				}, 1500)	
			}
		})
	});
	
	//底部点击切换页面
	$(".Home-page-footer .footer-nav-li").tap(function(){
		$(this).addClass("select").siblings().removeClass("select")
	})
	
	//房价走势头部滚动监听事件
	var trendS = new IScroll('.trend-section', {
		scrollbars: false
	});
	
	
	$(".trend-section .loading-fail").tap(function(){
		$(".trend-section .loading-fail").css("display","none")
		$(".trend-section").css("display","block")
	})
	
	//房价走势交互效果
	var trend_h=$(".trend-section").height()
	var tcw_ht=$(".houseprice-trend").width()
	
	$(".trend-section .loading-fail").height(trend_h)
	$(".historicalprice-title span").tap(function(){
		$(".houseprice-trend").css("left","0")
	})
	$(".trend-header .return").tap(function(){
		$(".houseprice-trend").css("left",tcw_ht)
	})
})