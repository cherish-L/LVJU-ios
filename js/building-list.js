$(function(){
	//点击
	$(".home-page-search-section .address").bind("touchstart",function(e){
		e.preventDefault()
		$(this).find(".address-city").css("color","#ff7c00")
		$(this).find(".address-city").addClass("click")
	})
	$(".home-page-search-section .address").bind("touchend",function(){
		$(this).find(".address-city").css("color","#333333")
		$(this).find(".address-city").removeClass("click")
	})
	
	//section-list 宽度
	var big_w=$(".section-list .section-list-big").width()
	$(".section-list .section-list-big li").width((big_w-5)/2)
	
	var small_w=$(".section-list .section-list-small").width()
	$(".section-list .section-list-small li").width((small_w-10)/3)
	
	var building_listS = new IScroll('.building-list-section', {
		scrollbars: true,
		fadeScrollbars: true,
		shrinkScrollbars: 'clip'
	})
	
	//报名免费看房团
	$(".building-list-column .building-list-search .Sign-up").tap(function(){
		$(this).addClass("select")
		$(".building-list-Mask").addClass("signal_show")
		$(".sign-up-push").addClass("show")
		$(".sign-up-push .sign-up-btn span").tap(function(){
			if($(".name_ipt").val()!=="" && $(".contact_ipt").val()!=="" && $(".intention_ipt").val()!==""){
				$(".name_ipt").val("")
				$(".contact_ipt").val("")
				$(".intention_ipt").val("")
				$(".sign-up-push").removeClass("show")
				$(".sign-up-false").addClass("show")
				$(".sign-up-false a").tap(function(){
					$(".sign-up-success").addClass("show")
					$(".sign-up-false").removeClass("show")
					$(".sign-up-push").removeClass("show")
				})
				
			}
		})
		
		$(".sign-up-push .sign-up-del").tap(function(){
			$(".sign-up-push").removeClass("show")
			$(".building-list-Mask").removeClass("signal_show")
			$(".building-list-column .building-list-search .Sign-up").removeClass("select")
		})
		
		$(".building-list-Mask").tap(function(){
			$(".sign-up-success").removeClass("show")
			$(".sign-up-false").removeClass("show")
			$(".sign-up-push").removeClass("show")
			$(".building-list-Mask").removeClass("signal_show")
			$(".building-list-column .building-list-search .Sign-up").removeClass("select")
		})
	})
	
	
	
	//点击需求导航
	$(".building-list-demand .building-list-demand-ul li").tap(function() {
		var demand_index=$(this).index()
		var wrapper_h=$('.building-list-demand-column .nav-list-li').eq(demand_index).find(".nav-list-li-wrapper").height()
		if($(this).hasClass("select")) {
			$(this).removeClass("select")
			$(".building-list-column .building-list-demand-ul").removeClass("select")
			$(".building-list-Mask").removeClass("show")
			$('.building-list-demand-column').css("height","0")
			setTimeout(function(){
				$('.building-list-demand-column .nav-list-li').css("height","0")
			},300)
		} 
		else if(!$(this).hasClass("select")) {
			$(this).addClass("select").siblings().removeClass("select")
			$(".building-list-column .building-list-demand-ul").addClass("select")
			$(".building-list-Mask").addClass("show")
			$('.building-list-demand-column').css("height",wrapper_h)
			$('.building-list-demand-column .nav-list-li').eq(demand_index).css("height",wrapper_h).siblings().css("height","0")
			$(".building-list-Mask").bind("touchstart",function(){
				$(".building-list-Mask").removeClass("show")
				$('.building-list-demand-column').css("height","0")
				$(".building-list-demand .building-list-demand-ul li").removeClass("select")
				setTimeout(function(){
					$('.building-list-demand-column .nav-list-li').css("height","0")
				},300)
			})
		}
	})
	//点击地址 切换定位城市
	 $(".building-list-demand-wrapper .demand_city .demand_city-body-ul li").tap(function(){
	 	var _this_txt=$(this).text()
	 	var _city_index=$(".building-list-demand-wrapper .demand_city").index()
	 	$(this).addClass("select").siblings().removeClass("select")
	 	$(".building-list-demand .demand-li").eq(_city_index).find("span").text(_this_txt)
	 })
	 
	//点击价格 切换楼盘均价
	 $(".building-list-demand-wrapper .demand_price .demand_price-body-ul li").tap(function(){
	 	var _this_txt=$(this).text()
	 	var _city_index=$(".building-list-demand-wrapper .demand_price").index()
	 	$(this).addClass("select").siblings().removeClass("select")
	 	$(".building-list-demand .demand-li").eq(_city_index).find("span").text(_this_txt)
	 })
	 
	 //输入价格 切换楼盘均价
	 var $input=$(".building-list-demand-wrapper .demand_price .demand_price-input")
	 $input.find(".btn").tap(function(){
	 	if($input.find(".min-price").val()!=="" && $input.find(".max-price").val()!==""){
	 		var mintxt=$input.find(".min-price").val()
	 		var maxtxt=$input.find(".max-price").val()
	 		$(".building-list-demand .demand-li").eq(1).find("span").text(mintxt+"-"+maxtxt+"元")
	 	}
	 })
	 
	//点击户型 切换楼盘户型
	 $(".building-list-demand-wrapper .demand_houseType .demand_houseType-body-ul li").tap(function(){
	 	$(this).addClass("select").siblings().removeClass("select")
	 })
	 
	//点击主题 切换主题
	 $(".building-list-demand-wrapper .demand_theme .demand_theme-body-ul .unlimited").tap(function(){
	 	$(this).addClass("select").siblings().removeClass("select")
	 })
	 
	 $(".building-list-demand-wrapper .demand_theme .demand_theme-body-ul .theme").tap(function(){
	 	if($(this).hasClass("select")){
	 		$(this).removeClass("select")
	 	}
	 	else if(!$(this).hasClass("select")){
	 		$(this).addClass("select")
	 		if($(this).hasClass("select")){
	 			$(".building-list-demand-wrapper .demand_theme .demand_theme-body-ul .unlimited").removeClass("select")
	 		}
	 	}
	 })
	//点击排序
	 $(".building-list-demand-wrapper .demand_sort .demand_sort-body-ul li").tap(function(){
	 	$(this).addClass("select").siblings().removeClass("select")
	 })
	

	
	//为你找到楼盘
	var found_h=$(".building-list-column .found-for-you span").height()
	$(".building-list-column .found-for-you").height(found_h)
	$(".building-list-column .found-for-you").css("opacity","1")
	setTimeout(function(){
		$(".building-list-column .found-for-you").height("0")
		$(".building-list-column .found-for-you").css("opacity","0")
	},3000)
	
	//楼盘列表 无lable 隐藏span
	$(".building-list-section .recommend-content-li").each(function(){
		var val_r=$(this).find(".recommend-content-li-img span").text()
		if(val_r==""){
			var index=$(this).index()
			$(".building-list-section .recommend-content-li").eq(index).find(".recommend-content-li-img span").remove()
		}
	})
	
	
	
	
	
	
})
