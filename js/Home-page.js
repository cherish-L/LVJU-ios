$(function(){
	
	//首页头部滚动监听事件
	var homePage_sectionS = new IScroll('.Home-page-section', {
		scrollbars: false,
		preventDefault:false,
		probeType: 3
	})
	var homePage_headerh=$(".Home-page-header").height()
	//上拉加载等待
	var angle_hp=0;
	var angle_hp_time=0;
	
	
	//滚动头部透明度变化
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
			$(".Home-page-container .Home-page-header").css("opacity",(homePage_headerh-homePage_sectionS.y)/homePage_headerh)
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
		
//<----------------------  上拉加载  --------------------------->
//		$(".Home-page-section .section-wrapper").on("touchmove", function(e) {
//			clearTimeout(upDated)
//			$(".Home-page-section .section-load").css("display", "block")
//			$(".Home-page-section .section-loading").css("display", "none")
//			$(".Home-page-section .section-loadnone").css("display", "none")
//			if(maxY >= 40) {
//				$(".Home-page-section .section-load").text("松开加载更多...")
//				$(".Home-page-section .section-load").css("display", "block")
//				$(".Home-page-section .section-loadnone").css("display", "none")
//			}
//		})
//		$(".Home-page-section .section-wrapper").on("touchend", function(e) {
//			if($(".Home-page-section .section-load").text()=="松开加载更多..."){
//				$(".Home-page-section .section-load").css("display", "none")
//				$(".Home-page-section .section-load").text("上拉加载更多")
//				$(".Home-page-section .section-loading").css("display", "block")
//			 	upDated=setTimeout(function() {
//					clearTimeout(angle_hp_time)
//					$(".Home-page-section .section-loading").css("display", "none")
//					$(".Home-page-section .section-loadnone").css("display", "block")
//				}, 1500)	
//				angle_hp_time=setInterval(function() {
//					angle_hp += 4
//					$(".Home-page-section .section-loading i").css("transform", "rotate(" + angle_hp + "deg)");
//				}, 20)
//			}
//			
//		})
	})
	
	//底部点击切换页面
	$(".Home-page-footer .footer-nav-li").tap(function(){
		$(this).addClass("select").siblings().removeClass("select")
	})
	
	//房价走势头部滚动监听事件
	var trendS = new IScroll('.trend-section', {
		scrollbars: false
	})
	
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
		$(".houseprice-trend").css("left",tcw_ht+5)
	})
	
	
//城市定位
	//字母开头城市为0的时候移除 当前字母title
	$(".classify").each(function(){
		var _index=$(this).index()
		var letter_len=$(".classify").eq(_index).find(".wrap li").length
		if(letter_len==0){
			var classify_index=$(this).index()
			$(".classify").eq(classify_index).remove()
			$(".location_list .classification li").eq(classify_index).remove()
		}
	})
	$(".classify .city").tap(function(){
		var txt=$(this).text()
		$(".Home-page-header .Search_bar .current-location").text(txt)
		$(".city-position-header .current_location").text("当前: "+txt)
		$(".located .wraps").find(".located_city .cityed").text(txt)
		if(!$(this).hasClass("lick")){
			$(".history_location .wrap").prepend("<li class='city history_city'>"+txt+"</li>")
			$(this).addClass("lick")
		}
		$(".history_city").tap(function(){
			var txts_hc=$(this).text()
			$(".Home-page-header .Search_bar .current-location").text(txts_hc)
			$(".current_location").text("当前: "+txts_hc)
			$(".located .wraps").find(".located_city .cityed").text(txts_hc)
		})
		if($(".history_location .wrap").children().length>=2){
			$(".history_location").css("display","block")
		}
	})
	//点击弹出城市定位
	$(".Home-page-header .Search_bar .current-location").tap(function(){
		$(".city-position").css("left","0")
		$(".city-position-header .title_bar .del").tap(function(){
			$(".city-position").css("left",tcw_ht+5)
		})
	})
	
	
//地图找房
	$(".Home-page-section .section-nav .map_house").tap(function(){
		$(".map-house").css("left",0)
		$(".map-house-header .title_bar .return").tap(function(){
			$(".map-house").css("left",tcw_ht+5)
		})
	})


	$(".map-house-wrapper .section-map-list .map-list-trand").tap(function(){
		if($(this).hasClass("click")){
			$(this).removeClass("click")
			$(".map-house-wrapper .section-map-list .map-list-tranddata").removeClass("hide")
		}
		else{
			$(this).addClass("click")
			$(".map-house-wrapper .section-map-list .map-list-tranddata").addClass("hide")
		}
	})
	
	var map_housew=$(".map-house-wrapper").width()
	var map_house_index=0;
	$(".map-house-section").tap(function(){
		map_house_index++;
		if(map_house_index%2==1){
			$(".map-house-wrapper .map-list-btn").addClass("listhide")
			$(".map-house-wrapper .map-list-trand").addClass("trandhide")
			$(".map-house-wrapper .map-list-location").addClass("locationhide")
			$(".map-house-wrapper .map-list-tranddata").addClass("tranddatahide")
			$(".map-house-wrapper .section-map-peripheral").addClass("peripheralhide")
		}
		else{
			$(".map-house-wrapper .map-list-btn").removeClass("listhide")
			$(".map-house-wrapper .map-list-trand").removeClass("trandhide")
			$(".map-house-wrapper .map-list-location").removeClass("locationhide")
			$(".map-house-wrapper .map-list-tranddata").removeClass("tranddatahide")
			$(".map-house-wrapper .section-map-peripheral").removeClass("peripheralhide")
		}
	})
	
	//周边列表
	$(".map-house-wrapper .section-map-list .map-list-btn .listli").tap(function(){
		$(".map-house-wrapper .section-map-list").css("left",-0.3*map_housew)
		$(".map-house-wrapper .section-map-list").css("opacity","0")
		$(".map-house-wrapper .section-map-peripheral").css("left","0")
		$(".map-house-wrapper .peripheral-return").css("opacity","1")
	})
	$(".map-house-wrapper .section-map-peripheral .peripheral-return").tap(function(){
		$(".map-house-wrapper .section-map-list").css("left","0")
		$(".map-house-wrapper .section-map-list").css("opacity","1")
		$(".map-house-wrapper .section-map-peripheral").css("left",map_housew)
		$(".map-house-wrapper .peripheral-return").css("opacity","0")
		
	})
	$(".peripheral-li").tap(function(){
		$(this).addClass("on").siblings().removeClass("on")
	})
	
	//区域弹框和筛选弹框
	var htmlh=$("html").height()
	$(".map-house-wrapper .screen-push").css("bottom",-htmlh-5)
	$(".map-house-wrapper .region-push").css("bottom",-htmlh-5)
		//筛选弹框
		$(".map-house-wrapper .screen-push .select").tap(function(){
			$(this).addClass("selected")
		})
		$(".screen-push-footer .empty").tap(function(){
			$(".map-house-wrapper .screen-push .select").removeClass("selected")
			$(".section-map-list .map-list-btn .screenli .num").css("opacity","0")
			screenS.refresh()
		})
		$(".screen-push-footer .determine").tap(function(){
			var len=$(".map-house-wrapper .screen-push .selected").length
			$(".map-house-wrapper .screen-push").css("bottom",-htmlh-5)
			$(".section-map-list .map-list-btn .screenli .num").css("opacity","1")
			$(".section-map-list .map-list-btn .screenli .num span").text(len)
			if($(".section-map-list .map-list-btn .screenli .num span").text()=="0"){
				$(".section-map-list .map-list-btn .screenli .num").css("opacity","0")
			}
		})
		$(".screen-push-header .return").tap(function(){
			$(".map-house-wrapper .screen-push").css("bottom",-htmlh-5)
		})
		$(".map-house-wrapper .section-map-list .map-list-btn .screenli").tap(function(){
			$(".map-house-wrapper .screen-push").css("bottom","0")
		})
	
	
		//区域弹框
		var regionp=$(".region-push-section").height()
		$(".region-push-section-wrapper .regionlist").css("height",regionp)
		$(".region-push-section-wrapper .municipality").css("height",regionp)
		$(".region-push-section-wrapper .district").css("height",regionp)
		
		$(".region-push-footer .determine").tap(function(){
			$(".region-push").css("bottom",-htmlh-5)
		})
		$(".region-push-header .return").tap(function(){
			$(".region-push").css("bottom",-htmlh-5)
		})
		$(".map-house-wrapper .section-map-list .map-list-btn .regionli").tap(function(){
			$(".region-push").css("bottom","0")
		})
		
	
		//区域分栏
		$(".region-push-section-wrapper .district .district-ul").css("display","none")
		
		$(".region-push-section-wrapper .municipality-ul .municipality-li:first-child").addClass("confirmtwo")
		$(".region-push-section-wrapper .district-ul .district-li:first-child").addClass("confirmthree")
		$(".region-push-section-wrapper .regionlist-ul .regionlist-li").tap(function(){
			var index=$(this).index()
			$(".region-push-section-wrapper .regionlist-ul .regionlist-li").eq(index).addClass("confirmone").siblings().removeClass("confirmone")
			if(index==1){
				$(".region-push-section-wrapper .district-ul").css("display","none")
				$(".region-push-section-wrapper .municipality-ul .municipality-li").removeClass("confirmtwo")
				$(".region-push-section-wrapper .district-ul .district-li").removeClass("confirmthree")
				$(".region-push-section-wrapper .municipality-ul .municipality-li:first-child").removeClass("confirmtwo")
			}
			else{
				$(".region-push-section-wrapper .municipality-ul").css("display","block")
				$(".region-push-section-wrapper .municipality-ul .municipality-li:first-child").addClass("confirmtwo")
			}
		})
	
		$(".region-push-section-wrapper .municipality-ul .municipality-li").tap(function(){
			var index=$(this).index()
			var selectclick=$(".region-push-section-wrapper .district-ul").eq(index-1).find(".district-li")
			selectclick.removeClass("confirmthree")
			$(".region-push-section-wrapper .district-ul").eq(index-1).css("display","block").siblings().css("display","none")
			$(".region-push-section-wrapper .municipality-ul .municipality-li").eq(index).addClass("confirmtwo").siblings().removeClass("confirmtwo")
			$(".region-push-section-wrapper .district-ul").find(".district-li").removeClass("confirmthree")
			selectclick.tap(function(){
				var ind=$(this).index()
				selectclick.eq(ind).addClass("confirmthree")
				if(selectclick.eq(0).hasClass("confirmthree")){
					$(this).siblings().removeClass("confirmthree")
				}
				else{
					selectclick.eq(ind).addClass("confirmthree")
				}
			})
		})
	
		$(".region-push-footer .determine").tap(function(){
			$(".map-house-wrapper .section-map-list .map-list-btn .regionli .num").css("opacity","1")
			var len=$(".confirmthree").length
			$(".map-house-wrapper .section-map-list .map-list-btn .regionli .num span").text(len)
			if($(".map-house-wrapper .section-map-list .map-list-btn .regionli .num span").text()=="0"){
				$(".map-house-wrapper .section-map-list .map-list-btn .regionli .num").css("opacity","0")
			}
		})
	
		$(".region-push-footer .empty").tap(function(){
			$(".map-house-wrapper .screen-push .select").removeClass("selected")
			$(".region-push-section-wrapper .municipality-ul .municipality-li").removeClass("confirmtwo")
			$(".region-push-section-wrapper .district-ul .district-li").removeClass("confirmthree")
			
		})
	
	//筛选滚动监听事件
	var screenS = new IScroll('.screen-push-section', {
		scrollbars: false
	})
	
	
})