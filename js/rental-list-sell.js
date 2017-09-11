$(function(){
	
	var sellS = new IScroll('.rental-list-sell-section', {
		scrollbars: true,
		fadeScrollbars: true,
		shrinkScrollbars: 'clip'
	})
	
	//为你找到楼盘
	var found_h=$(".rental-list-sell-column .found-for-you span").height()
	$(".rental-list-sell-column .found-for-you").height(found_h)
	$(".rental-list-sell-column .found-for-you").css("opacity","1")
	setTimeout(function(){
		$(".rental-list-sell-column .found-for-you").height("0")
		$(".rental-list-sell-column .found-for-you").css("opacity","0")
	},3000)
	
	
	var len=$(".rental-list-sell-section .recommend-content-li").length
	$(".found-for-you span").text("为您找到"+len+"个楼盘")
	
	
	//点击需求导航
	var time=null;
	$(".rental-list-sell-demand .rental-list-sell-demand-ul li").tap(function() {
		clearTimeout(time)
		var demand_index=$(this).index()
		var wrapper_h=$('.rental-list-sell-demand-column .nav-list-li').eq(demand_index).find(".nav-list-li-wrapper").height()
		if($(this).hasClass("select")) {
			$(this).removeClass("select")
			$(".rental-list-sell-column .rental-list-sell-demand-ul").removeClass("select")
			$(".rental-list-sell-Mask").removeClass("show")
			$('.rental-list-sell-demand-column').css("height","0")
			time=setTimeout(function(){
				$('.rental-list-sell-demand-column .nav-list-li').css("height","0")
			},300)
		} 
		else if(!$(this).hasClass("select")) {
			$(this).addClass("select").siblings().removeClass("select")
			$(".rental-list-sell-column .rental-list-sell-demand-ul").addClass("select")
			$(".rental-list-sell-Mask").addClass("show")
			$('.rental-list-sell-demand-column').css("height",wrapper_h)
			$('.rental-list-sell-demand-column .nav-list-li').eq(demand_index).css("height",wrapper_h).siblings().css("height","0")
			$(".rental-list-sell-Mask").bind("touchstart",function(){
				$(".rental-list-sell-Mask").removeClass("show")
				$(".rental-list-sell-column .rental-list-sell-demand-ul").removeClass("select")
				$('.rental-list-sell-demand-column').css("height","0")
				$(".rental-list-sell-demand .rental-list-sell-demand-ul li").removeClass("select")
				time=setTimeout(function(){
					$('.rental-list-sell-demand-column .nav-list-li').css("height","0")
				},300)
			})
		}
	})
	//点击地址 切换定位城市
	 $(".rental-list-sell-demand-wrapper .demand_city .demand_city-body-ul li").tap(function(){
	 	var _this_txt=$(this).text()
	 	var _city_index=$(".rental-list-sell-demand-wrapper .demand_city").index()
	 	$(this).addClass("select").siblings().removeClass("select")
	 	$(".rental-list-sell-demand .demand-li").eq(_city_index).find("span").text(_this_txt)
	 })
	 
	//点击价格 切换楼盘总价
	 $(".rental-list-sell-demand-wrapper .demand_price .demand_price-body-ul li").tap(function(){
	 	var _this_txt=$(this).text()
	 	var _city_index=$(".rental-list-sell-demand-wrapper .demand_price").index()
	 	$(this).addClass("select").siblings().removeClass("select")
	 	$(".rental-list-sell-demand .demand-li").eq(_city_index).find("span").text(_this_txt)
	 })
	 
	 //输入价格 切换楼盘总价
	 var $input=$(".rental-list-sell-demand-wrapper .demand_price .demand_price-input")
	 $input.find(".btn").tap(function(){
	 	if($input.find(".min-price").val()!=="" && $input.find(".max-price").val()!==""){
	 		var mintxt=$input.find(".min-price").val()
	 		var maxtxt=$input.find(".max-price").val()
	 		$(".rental-list-sell-demand .demand-li").eq(1).find("span").text(mintxt+"-"+maxtxt+"")
	 	}
	 })
	 
	 //点击面积 切换楼盘面积
	 $(".rental-list-sell-demand-wrapper .demand_area .demand_area-body-ul li").tap(function(){
	 	$(this).addClass("select").siblings().removeClass("select")
	 })
	 
	//点击户型 切换楼盘户型
	 $(".rental-list-sell-demand-wrapper .demand_houseType .demand_houseType-body-ul li").tap(function(){
	 	$(this).addClass("select").siblings().removeClass("select")
	 })
	 
	 //点击地址 切换定位城市
	 $(".rental-list-sell-demand-wrapper .demand_orientation .demand_orientation-body-ul li").tap(function(){
	 	var _this_txt=$(this).text()
	 	var _orientation_index=$(".rental-list-sell-demand-wrapper .demand_orientation").index()
	 	$(this).addClass("select").siblings().removeClass("select")
	 	$(".rental-list-sell-demand .demand-li").eq(_city_index).find("span").text(_this_txt)
	 })
	
	//点击排序
	 $(".rental-list-sell-demand-wrapper .demand_sort .demand_sort-body-ul li").tap(function(){
	 	$(this).addClass("select").siblings().removeClass("select")
	 })
	
	
})
