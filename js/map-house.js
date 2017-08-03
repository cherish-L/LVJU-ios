$(function(){
	$(".map-list-trand").tap(function(){
		if($(this).hasClass("click")){
			$(this).removeClass("click")
			$(".map-list-tranddata").removeClass("hide")
		}
		else{
			$(this).addClass("click")
			$(".map-list-tranddata").addClass("hide")
		}
	})
	
	var btnw=$(".map-list-btn").width()
	var index=0;
	$(".section-map").tap(function(){
		index++;
		if(index%2==1){
			$(".map-list-btn").addClass("listhide")
			$(".map-list-trand").addClass("trandhide")
			$(".map-list-location").addClass("locationhide")
			$(".map-list-tranddata").addClass("tranddatahide")
			$(".section-map-peripheral").addClass("peripheralhide")
		}
		else{
			$(".map-list-btn").removeClass("listhide")
			$(".map-list-trand").removeClass("trandhide")
			$(".map-list-location").removeClass("locationhide")
			$(".map-list-tranddata").removeClass("tranddatahide")
			$(".section-map-peripheral").removeClass("peripheralhide")
		}
	})
//周边列表
	$(".plist").tap(function(){
		$(".section-map-list").css("left",-0.3*btnw)
		$(".section-map-list").css("opacity","0")
		$(".section-map-peripheral").css("left","0")
		$(".peripheral-return").css("opacity","1")
		
	})
	$(".peripheral-return").tap(function(){
		$(".section-map-list").css("left","0")
		$(".section-map-list").css("opacity","1")
		$(".section-map-peripheral").css("left",btnw)
		$(".peripheral-return").css("opacity","0")
		
	})
	
	$(".peripheral-li").tap(function(){
		$(this).addClass("on").siblings().removeClass("on")
	})
	
//筛选弹框
	$(".select").tap(function(){
		$(this).addClass("selected")
	})
	
	$(".screen-push-footer .empty").tap(function(){
		$(".select").removeClass("selected")
		$(".screenli .num").css("display","none")
	})
	
	$(".screen-push-footer .determine").tap(function(){
		$(".maphouse-push").css("height","0")
		$(".screenli .num").css("display","block")
		var len=$(".selected").length
		$(".screenli .num").text(len)
		if($(".screenli .num").text()=="0"){
			$(".screenli .num").css("display","none")
		}
	})
	$(".screen-push-header .return").tap(function(){
		$(".maphouse-push").css("height","0")
	})
	
	var hhh=$(".container").height()
	$(".pscreen").tap(function(){
		$(".maphouse-push").css("height",hhh)
	})
	
	
//区域弹框
	$(".region-push-footer .determine").tap(function(){
		$(".maphouse-push").css("height","0")
		$(".region-push").css("height","0")
	})
	
	$(".region-push-header .return").tap(function(){
		$(".maphouse-push").css("height","0")
		$(".region-push").css("height","0")
	})
	
	
	$(".pregion").tap(function(){
		$(".maphouse-push").css("height",hhh)
	})
	
	
//区域分栏
	$(".district-ul").css("display","none")
	$(".regionlist-ul .regionlist-li").tap(function(){
		var index=$(this).index()
		$(".regionlist-ul .regionlist-li").eq(index).addClass("confirmone").siblings().removeClass("confirmone")
		if(index==1){
			$(".municipality-ul").css("display","none")
			$(".district-ul").css("display","none")
			$(".municipality-ul .municipality-li").removeClass("confirmtwo")
			$(".district-ul .district-li").removeClass("confirmthree")
		}
		else{
			$(".municipality-ul").css("display","block")
		}
	})


	$(".municipality-ul .municipality-li").tap(function(){
		var index=$(this).index()
		var selectclick=$(".district-ul").eq(index-1).find(".district-li")
		selectclick.removeClass("confirmthree")
		
		$(".district-ul").eq(index-1).css("display","block").siblings().css("display","none")
		$(".municipality-ul .municipality-li").eq(index).addClass("confirmtwo").siblings().removeClass("confirmtwo")
		$(".district-ul").find(".district-li").removeClass("confirmthree")
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
		$(".maphouse-push").css("height","0")
		$(".regionli .num").css("display","block")
		var len=$(".confirmthree").length
		$(".regionli .num").text(len)
		if($(".regionli .num").text()=="0"){
			$(".regionli .num").css("display","none")
		}
	})

	$(".region-push-footer .empty").tap(function(){
		$(".select").removeClass("selected")
		$(".municipality-ul .municipality-li").removeClass("confirmtwo")
		$(".district-ul .district-li").removeClass("confirmthree")
	})
	
	//区域滚动监听事件
	var regionS = new IScroll('.region-push-section', {
		scrollbars: false
	});
	//筛选滚动监听事件
	var screenS = new IScroll('.screen-push-section', {
		scrollbars: false
	});
})
