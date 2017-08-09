$(function() {
	var angle=0;
	setInterval(function() {
		angle += 4
		$(".section-loading i").css("transform", "rotate(" + angle + "deg)");
	}, 20)
	
	$(".list-nav-litxt").tap(function() {
		if($(this).hasClass("touch")){
			$(this).removeClass("touch")
		}
		else if(!$(this).hasClass("touch")){
			$(this).addClass("touch").siblings().removeClass("touch")
		}
	})
	
	$(".list-nav-liimg").tap(function() {
		if($(this).hasClass("touch")){
			$(this).removeClass("touch")
		}
		else if(!$(this).hasClass("touch")){
			$(this).addClass("touch")
			$(".list-nav-litxt").removeClass("touch")
		}
	})
	
	
	var lilen = $(".houseStyle-content-ul li").length
	var liw = $(".houseStyle-content-ul li").width() + 16
	$(".houseStyle-content-ul").width(lilen * liw)
	$(".houseStyle-title .num").text('（' + lilen + '）')

	//点击弹框
	var wrapw = $(".container").width()
	$(".listhouse-data-li").tap(function() {
		$(".list-details-push").css("left", "0")
	})
	$(".list-details-pushheader .return").tap(function() {
		$(".list-details-push").css("left", wrapw)
	})



	//楼盘头部滚动监听事件
	var sectionS = new IScroll('.section', {
		scrollbars: false,
		probeType: 3
	})
	
	var updated;
	sectionS.on("scroll", function() {
		maxY = this.maxScrollY - this.y
		if(maxY >= 40) {
			$(".section-wrapper").on("touchstart", function(e) {
				if(e.cancelable) {
					if(!e.defaultPrevented) {
						e.preventDefault();
					}
				}
				clearTimeout(updated)
			})
			$(".section-wrapper").on("touchmove", function(e) {
//				clearTimeout(updated)
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
				if(maxY >= 40) {
					$(".section-load").css("display", "none")
					$(".section-load").text("上拉加载更多")
					$(".section-loading").css("display", "block")
				 	updated=setTimeout(function() {
						$(".section-loading").css("display", "none")
						$(".section-loadnone").css("display", "block")
					}, 1500)
				}
			})
		}
//		sectionS.refresh()
	})

	//弹框头部滚动监听事件
	var pushS = new IScroll('.list-details-pushsection', {
		scrollbars: false,
		probeType: 3
	});
	var houseStyleS = new IScroll('.houseStyle-content', {
		scrollbars: false,
		scrollX: true,
		scrollY: false
	});

	pushS.on('scroll', function() {
		if(pushS.y < 0) {
			var Scrolly = -(pushS.y / 180)
			$(".list-details-pushheader").css("background-color", "rgba(246, 246, 246," + Scrolly + ")")
			$(".list-details-pushheader").css("box-shadow", "0 1px 0 0 rgba(204,204,204," + Scrolly + ")")
			$(".title_txt").css("color", "rgba(57, 64, 67," + Scrolly + ")")
			if(pushS.y < -160) {
				$(".return").addClass("state")
				$(".collection").addClass("state")
				$(".share").addClass("state")
			}
			if(pushS.y >= -160) {
				$(".return").removeClass("state")
				$(".collection").removeClass("state")
				$(".share").removeClass("state")
			}
		}
		if(pushS.y >= 0) {
			$(".list-details-pushheader").css("background-color", "rgba(246, 246, 246,0.0)")
			$(".list-details-pushheader").css("box-shadow", "0 1px 0 0 rgba(204,204,204,0.0)")
			$(".title_txt").css("color", "rgba(57, 64, 67,0.0)")
		}

	});

//头部筛选功能明细
	//区域
	$(".district-ul").css("display","none")
	$(".municipality-ul .municipality-li:first-child").addClass("confirmtwo")
	$(".district-ul .district-li:first-child").addClass("confirmthree")
	$(".regionlist-ul .regionlist-li").tap(function(){
		var index=$(this).index()
		$(".regionlist-ul .regionlist-li").eq(index).addClass("confirmone").siblings().removeClass("confirmone")
		if(index==1){
			$(".district-ul").css("display","none")
			$(".municipality-ul .municipality-li").removeClass("confirmtwo")
			$(".district-ul .district-li").removeClass("confirmthree")
			$(".municipality-ul .municipality-li:first-child").removeClass("confirmtwo")
		}
		else{
			$(".municipality-ul").css("display","block")
			$(".municipality-ul .municipality-li:first-child").addClass("confirmtwo")
		}
		municipalityS.refresh()
		districtS.refresh()
	})
	
	$(".municipality-ul .municipality-li").tap(function(){
		var index=$(this).index()
		var selectclick=$(".district-ul").eq(index-1).find(".district-li")
		selectclick.removeClass("confirmthree")
		$(".district-ul").eq(index-1).css("display","block").siblings().css("display","none")
		$(".regionlist-ul .regionlist-li").eq(0).addClass("confirmone").siblings().removeClass("confirmone")
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
		municipalityS.refresh()
		districtS.refresh()
	})
	$(".region-footer .empty").tap(function(){
		$(".select").removeClass("selected")
		$(".municipality-ul .municipality-li").removeClass("confirmtwo")
		$(".municipality-ul .municipality-li:first-child").addClass("confirmtwo")
		$(".district-ul .district-li").removeClass("confirmthree")
		$(".regionlist-ul .regionlist-li").eq(0).addClass("confirmone").siblings().removeClass("confirmone")
		districtS.refresh()
	})
	
//头部均价功能明细
	$(".averagePrice-body-ul li").tap(function(){
		var index=$(this).index()
		$(".averagePrice-body-ul li").eq(index).addClass("select").siblings().removeClass("select")
	})

//头部户型功能明细
	$(".houseType-body-ul li").tap(function(){
		var index=$(this).index()
		$(".houseType-body-ul li").eq(index).addClass("select").siblings().removeClass("select")
	})
//头部更多功能明细
	var conditionh=$(".demand-condition").height()
	var sectionh=$(".section").height()
	var footerh=$(".footer").height()
	$(".more .list-nav-pushli-wrapper").height(sectionh+footerh+conditionh)
	$(".characteristic-content .select").tap(function(){
		$(this).addClass("selected")
	})
	$(".open-time-content span").tap(function(){
		$(this).addClass("selected").siblings().removeClass("selected")
	})
	$(".more-footer .empty").tap(function(){
		$(".characteristic-content .select").removeClass("selected")
		$(".open-time-content span").removeClass("selected")
	})
//头部排序功能明细
	$(".screen-body-ul li").tap(function(){
		var index=$(this).index()
		$(".screen-body-ul li").eq(index).addClass("select").siblings().removeClass("select")
	})
//筛选主要功能
	var num = 0;
	var pushlih = 0;
	$(".list-nav-ul li").tap(function(){
		num = $(this).index()
		pushlih = $(".list-nav-pushul .list-nav-pushli").eq(num).find(".list-nav-pushli-wrapper").height()
		$(".list-nav-pushul .list-nav-pushli").eq(num).css("transition","all .3s").siblings().css("transition","none")
		$(".list-nav-pushul .list-nav-pushli").eq(num).siblings().height("0")
		$(".list-nav-pushul .list-nav-pushli").eq(num).height(pushlih)
		if($(this).hasClass("touch")){
			$(".list-nav-pushul .list-nav-pushli").eq(num).css("transition","all .3s")
			$(".list-nav-pushul .list-nav-pushli").eq(num).height(pushlih)
			$(".Mask").addClass("show")
			moreS.refresh()
		}
		else if(!$(this).hasClass("touch")){
			$(".list-nav-pushul .list-nav-pushli").eq(num).css("transition","none")
			$(".list-nav-pushul .list-nav-pushli").eq(num).height("0")
			$(".Mask").removeClass("show")
			moreS.refresh()
		}
		$(".determine").tap(function(){
			$(".list-nav-pushul .list-nav-pushli").height("0")
			$(".Mask").removeClass("show")
			$(".list-nav-ul li").removeClass("touch")
			moreS.refresh()
		})
		$(".Mask").tap(function(){
			$(".list-nav-pushul .list-nav-pushli").css("transition","none")
			$(".list-nav-pushul .list-nav-pushli").height("0")
			$(".Mask").removeClass("show")
			$(".list-nav-ul li").removeClass("touch")
			moreS.refresh()
		})
		
	})




//需求水平滚动栏
	//遍历当前以后的需求
	var s=0;
	var demandh=$(".demand-condition-wrapper").height()
	var demandlen=$(".demand-condition-wrapper li").length
	for(var i=0;i<demandlen;i++){
		var liw=$(".demand-condition-wrapper li").eq(i).width()+12
		s=s+liw
	}
	$(".demand-condition-wrapper").width(s+16)
	
	//删除单个需求，刷新demand-condition-wrapper盒子的宽度
	$(".demand-condition-wrapper li i").tap(function(){
		var sNew=0;
		$(this).parent().remove()
		var demandlenNew=$(".demand-condition-wrapper li").length
		for(var iNew=0;iNew<demandlenNew;iNew++){
			var liwNew=$(".demand-condition-wrapper li").eq(iNew).width()+12
			sNew=sNew+liwNew
		}
		$(".demand-condition-wrapper").width(sNew+20)
		if($(".demand-condition-wrapper li").length==0){	
			$(".demand-condition").css("height","0")
			sectionS.refresh()
		}
		else if(!$(".demand-condition-wrapper li").length==0){
			$(".demand-condition").css("height",demandh)
		}
		sectionS.refresh()
		demandS.refresh()
	})
	
	






	var municipalityS = new IScroll('.municipality', {
		scrollbars: false
	})
	var districtS = new IScroll('.district', {
		scrollbars: false
	})
	var averagePriceS = new IScroll('.averagePrice-body', {
		scrollbars: false
	})
	var houseTypeS = new IScroll('.houseType-body', {
		scrollbars: false
	})
	var moreS = new IScroll('.more-body', {
		scrollbars: false
	})
	var screenS = new IScroll('.screen-body', {
		scrollbars: false
	})
	var demandS = new IScroll('.demand-condition', {
		scrollbars: true,
		scrollX: true,
		scrollY: false
	})

})