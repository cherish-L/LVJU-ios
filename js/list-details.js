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
	
	var updated=null;
	sectionS.on("scroll", function() {
		clearTimeout(updated)
		maxY = this.maxScrollY - this.y
		if(maxY >= 40) {
			$(".section-wrapper").on("touchstart", function(e) {
				if(e.cancelable) {
					if(!e.defaultPrevented) {
						e.preventDefault();
					}
				}
			})
			$(".section-wrapper").on("touchmove", function(e) {
				clearTimeout(updated)
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
	
	//收藏成功、取消收藏弹框代码
	var Suctime=null;
	var canceltime=null;
	$('.collection').tap(function(){
		$(this).collection()
	})
	
	$.fn.collection = function () {
		if(!$('.collection').hasClass("collectionState")){
			$('.collection').addClass("collectionState")
			clearTimeout(canceltime)
			$(".collection-cancel").css("display","none")
			$(".collection-succeed").css("display","block")
			$(".collection-succeed").css("opacity","1")
			Suctime=setTimeout(function(){
				$(".collection-succeed").fadeOut(500)
			}, 1500)
		}
		else if($('.collection').hasClass("collectionState")){
			$('.collection').removeClass("collectionState")
			clearTimeout(Suctime)
			$(".collection-succeed").css("display","none")
			$(".collection-cancel").css("display","block")
			$(".collection-cancel").css("opacity","1")
			canceltime=setTimeout(function(){
				$(".collection-cancel").fadeOut(500)
			}, 1500)
		}
	}
	
	
	
	

//头部区域功能明细
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
	
	var municipalityindex=0
	$(".municipality-ul .municipality-li").tap(function(){
		municipalityindex=$(this).index()
		var selectclick=$(".district-ul").eq(municipalityindex-1).find(".district-li")
		selectclick.removeClass("confirmthree")
		$(".district-ul").eq(municipalityindex-1).css("display","block").siblings().css("display","none")
		$(".regionlist-ul .regionlist-li").eq(0).addClass("confirmone").siblings().removeClass("confirmone")
		$(".municipality-ul .municipality-li").eq(municipalityindex).addClass("confirmtwo").siblings().removeClass("confirmtwo")
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
		
		
		$(".districtbox").remove()
		$(".municipality-ul .municipality-li").dynamic()
		
		municipalityS.refresh()
		districtS.refresh()
	})
	
	
	$(".region-footer .empty").tap(function(){
		$(".select").removeClass("selected")
		$(".municipality-ul .municipality-li").removeClass("confirmtwo")
		$(".municipality-ul .municipality-li:first-child").addClass("confirmtwo")
		$(".district-ul .district-li").removeClass("confirmthree")
		$(".regionlist-ul .regionlist-li").eq(0).addClass("confirmone").siblings().removeClass("confirmone")
		$(".districtbox").remove()
		$(".region-footer .empty").dynamic()
		districtS.refresh()
	})
	
	//添加需求并显示在需求项目栏中
	var districtTxt=null;
	var municipalityTxt=null;
	$(".district-li").tap(function(){
//		var districtboxtxt=null;
		if(!$(this).hasClass("confirmthree")){
			districtTxt=$(this).find(".district-li-txt").text()
			municipalityTxt=$(".confirmtwo").text()
			if(districtTxt!=="不限"){
				$(".demand-condition-wrapper").append("<li class='districtbox'><span>"+districtTxt+"</span><i></i></li>")
			}
			else if(districtTxt=="不限"){
				$(".demand-condition-wrapper").append("<li class='districtbox'><span>"+municipalityTxt+"</span><i></i></li>")
			}
			$(".district-li").dynamic()
		}
		$(".district-li").dynamic()
		
		
		$(".demand-condition-wrapper .districtbox i").tap(function(){
			var districtboxtxt=$(this).siblings("span").text()
//			var lenul=$(".district-ul").eq(municipalityindex-1).find(".district-li").length
			var model=$(".district-ul").eq(municipalityindex-1).find(".district-li")
			//遍历后存放到数组中。。要用的时候再根据需要取.
			var arr = new Array();
			model.each(function(index){
			    arr.push(model.eq(index).text());
			})
			 console.log(arr)
			//调用..---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//			for(var i in arr){
//			    console.log(arr[i]);
//			    if(arr[i]===districtboxtxt){
//			    		alert(i)
//			    }
//			}
		})
	
	
		$(".demand-condition-wrapper li i").tap(function(){
			$(this).parent().remove()
			$(".demand-condition-wrapper li i").dynamic()
		})
			
	})
	


	
	
	
//头部均价功能明细
	var PriceTxt=0;
	$(".averagePrice-body-ul li").tap(function(){
		var index=$(this).index()
		$(".demand-condition-wrapper .Pricebox").remove()
		//均价添加需求并显示在需求项目栏中
		if(!$(this).hasClass("select")){
			$(".averagePrice-body-ul li").eq(index).addClass("select").siblings().removeClass("select")
			PriceTxt=$(this).find("span").text()
			if(PriceTxt!=="不限"){
				$(".demand-condition-wrapper").append("<li class='Pricebox'><span>"+PriceTxt+"</span><i></i></li>")
			}
			$(".averagePrice-body-ul li").dynamic()
		}
		$(".averagePrice-body-ul li").dynamic()
		
		$(".demand-condition-wrapper .Pricebox i").tap(function(){
			$(this).parent().remove()
			$(this).dynamic()
			$(".averagePrice-body-ul li").eq(0).addClass("select").siblings().removeClass("select")
		})
	})
	$(".averagePrice-footer .determine").tap(function(){
		if($(".minprice").val()!=="" && $(".maxprice").val()!==""){
			var minpricetxt=$(".minprice").val()
			var maxpricetxt=$(".maxprice").val()
			$(".demand-condition-wrapper .Pricebox").remove()
			$(".averagePrice-body-ul li").removeClass("select")
			$(".demand-condition-wrapper").append("<li class='Pricebox'><span>"+minpricetxt+"-"+maxpricetxt+"万"+"</span><i></i></li>")
			$(".minprice").val("")
			$(".maxprice").val("")
		}
		$(".averagePrice-footer .determine").dynamic()
		
		$(".demand-condition-wrapper .Pricebox i").tap(function(){
			$(this).parent().remove()
			$(this).dynamic()
			$(".averagePrice-body-ul li").eq(0).addClass("select").siblings().removeClass("select")
		})
		
	})
	
	
//头部户型功能明细
	var houseTypeTxt=0;
	$(".houseType-body-ul li").tap(function(){
		$(".demand-condition-wrapper .houseTypebox").remove()
		//均价添加需求并显示在需求项目栏中
		if(!$(this).hasClass("select")){
			$(this).addClass("select").siblings().removeClass("select")
			houseTypeTxt=$(this).find("span").text()
			if(houseTypeTxt!=="不限"){
				$(".demand-condition-wrapper").append("<li class='houseTypebox'><span>"+houseTypeTxt+"</span><i></i></li>")
			}
			$(".houseType-body-ul li").dynamic()
		}
		$(".houseType-body-ul li").dynamic()
		
		$(".demand-condition-wrapper .houseTypebox i").tap(function(){
			$(this).parent().remove()
			$(this).dynamic()
			$(".houseType-body-ul li").eq(0).addClass("select").siblings().removeClass("select")
		})
		
	})
	$(".houseType-footer .empty").tap(function(){
		$(".houseTypebox").remove()
		$(".houseType-body-ul li").eq(0).addClass("select").siblings().removeClass("select")
		$(".houseType-footer .empty").dynamic()
		districtS.refresh()
	})
	
//头部更多功能明细
	var opentimeTxt=0;
	var conditionh=$(".demand-condition").height()
	var sectionh=$(".section").height()
	var footerh=$(".footer").height()
	$(".more .list-nav-pushli-wrapper").height(sectionh+footerh+conditionh)
	
	//开盘时间
	$(".open-time-content span").tap(function(){
		$(".demand-condition-wrapper .opentimebox").remove()
		//均价添加需求并显示在需求项目栏中
		if(!$(this).hasClass("selected")){
			$(this).addClass("selected").siblings().removeClass("selected")
			opentimeTxt=$(this).text()
			if(opentimeTxt!=="不限"){
				$(".demand-condition-wrapper").append("<li class='opentimebox'><span>"+opentimeTxt+"</span><i></i></li>")
			}
			$(".open-time-content span").dynamic()
		}
		$(".open-time-content span").dynamic()
		
		$(".demand-condition-wrapper .opentimebox i").tap(function(){
			$(this).parent().remove()
			$(this).dynamic()
			$(".open-time-content span").removeClass("selected")
		})
		
	})
	
	//特色
	var characteristicTxt=null;
	$(".characteristic-content .select").tap(function(){
		if(!$(this).hasClass("selected")){
			$(this).addClass("selected")
			characteristicTxt=$(this).text()
			$(".demand-condition-wrapper").append("<li class='characteristicbox'><span>"+characteristicTxt+"</span><i></i></li>")
			$(".characteristic-content .select").dynamic()
		}
		$(".characteristic-content .select").dynamic()
		
		
		
		
		//		$(".demand-condition-wrapper .districtbox i").tap(function(){
//			var districtboxtxt=$(this).siblings("span").text()
////			var lenul=$(".district-ul").eq(municipalityindex-1).find(".district-li").length
//			var model=$(".district-ul").eq(municipalityindex-1).find(".district-li")
//			//遍历后存放到数组中。。要用的时候再根据需要取.
//			var arr = new Array();
//			model.each(function(index){
//			    arr.push(model.eq(index).text());
//			})
//			 console.log(arr)
//			//调用..---------------------------------------------------------------------------------------------------------------------------------------------------------------------
////			for(var i in arr){
////			    console.log(arr[i]);
////			    if(arr[i]===districtboxtxt){
////			    		alert(i)
////			    }
////			}
//		})
		
		
		
		
		$(".demand-condition-wrapper .characteristicbox i").tap(function(){
			$(this).parent().remove()
			$(this).dynamic()
		})
		
	})
	
	
	$(".more-footer .empty").tap(function(){
		$(".characteristic-content .select").removeClass("selected")
		$(".open-time-content span").removeClass("selected")
		$(".demand-condition-wrapper .opentimebox").remove()
		$(".demand-condition-wrapper .characteristicbox").remove()
		$(this).dynamic()
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
	$(".demand-condition-wrapper").width(s+20)
	
	//删除单个需求，刷新demand-condition-wrapper盒子的宽度
	$(".demand-condition-wrapper li i").tap(function(){
		$(this).parent().remove()
		$(".demand-condition-wrapper li i").dynamic()
	})
	




//
	$.fn.dynamic = function () {
		var sNew=0;
		var demandlenNew=$(".demand-condition-wrapper li").length
		for(var iNew=0;iNew<demandlenNew;iNew++){
			var liwNew=$(".demand-condition-wrapper li").eq(iNew).width()+12
			sNew=sNew+liwNew
		}
		if($(".demand-condition-wrapper li").length<=1){
			$(".demand-condition-wrapper").width(sNew+55)
		}
		else if($(".demand-condition-wrapper li").length>1){
			$(".demand-condition-wrapper").width(sNew+20)
		}
		if($(".demand-condition-wrapper li").length==0){	
			$(".demand-condition").css("height","0")
			sectionS.refresh()
		}
		else if(!$(".demand-condition-wrapper li").length==0){
			$(".demand-condition").css("height",demandh)
		}
		sectionS.refresh()
		demandS.refresh()
	}
	

//楼盘位置
	$(".house-position-pushperipheral .peripheral-li").tap(function(){
		$(this).addClass("on").siblings().removeClass("on")
	})
	
	$(".pushsection-basicInfo .position").tap(function() {
		$(".house-position-push").css("left", "0")
	})
	
	$(".house-position-pushheader .return").tap(function(){
		$(".house-position-push").css("left", wrapw)
	})
//降价通知
	$(".pushsection-basicInfo .notice").tap(function(){
		$(".list-details-pushMask").addClass("show")
		$(".reducePrice-notice").addClass("show")
	})
	
	$(".list-details-pushMask").tap(function(){
		$(".list-details-pushMask").removeClass("show")
		$(".reducePrice-notice").removeClass("show")
	})
	
	$(".notice-delete-box i").tap(function(){
		$(".list-details-pushMask").removeClass("show")
		$(".reducePrice-notice").removeClass("show")
	})
//input内容改变执行函数
	$(".notice-user input").bind('input propertychange', function() {
		if($(".notice-user input").val()!==""){
			$(".notice-user a").css("display","block")
		}
		else if($(this).val()==""){
			$(".notice-user a").css("display","none")
		}
	});
	
	
	$(".notice-user a").tap(function(){
		$(".notice-user input").val("").focus()
		$(".notice-user a").css("display","none")
	})

//楼盘参数弹框
	$(".peculiarity-content .openMore span").tap(function(){
		if(!$(this).hasClass("click")){
			$(this).text("收起")
			$(this).addClass("click")
			$(".peculiarity-content p").removeClass("open")
			parameterS.refresh()
		}
		else if($(this).hasClass("click")){
			$(this).text("展开更多")
			$(this).removeClass("click")
			$(".peculiarity-content p").addClass("open")
			parameterS.refresh()
		}
	})
	$(".ParameterDetails").tap(function(){
		$(".Property-parameter-push").css("left", "0")
		$(".collection-cancel").css("display","none")
		$(".collection-succeed").css("display","none")
	})
	$(".Property-parameter-pushheader .return").tap(function() {
		$(".Property-parameter-push").css("left", wrapw)
		$(".collection-cancel").css("display","none")
		$(".collection-succeed").css("display","none")
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
		scrollY: false,
		fadeScrollbars: true
	})
	var parameterS = new IScroll('.Property-parameter-pushsection', {
		scrollbars: false
	})
	var houseS = new IScroll('.house-type-pushsection', {
		scrollbars: false
	})
	
	

//楼盘户型
	var screenlisth=$(".screenlist-ul").height()
	$(".house-type-pushfooter span").tap(function(){
		$(".screenlist").css("height",screenlisth)
		$('.house-type-pushMask').addClass("show")
		
		$(".screenlist .screenlist-li").tap(function(){
			var screenlistTxt=$(this).text()
			$(".house-type-pushfooter span").text(screenlistTxt)
			$(".house-type-pushfooter span").addClass("screen")
			$(this).addClass("select").siblings().removeClass("select")
			$(".screenlist").css("height","0")
			$('.house-type-pushMask').removeClass("show")
		})
		
		$(".house-type-pushMask").tap(function(){
			$(".screenlist").css("height","0")
			$('.house-type-pushMask').removeClass("show")
		})
	})
	
	var typeDetailS = new IScroll('.house-typeDetail-pushsection', {
		scrollbars: false
	})
	var prompttime=null;
	$(".house-typeDetail-info .Prompt").tap(function(){
		clearTimeout(prompttime)
		$(".house-typeDetail-Prompt").css("display","block")
		$(".house-typeDetail-Prompt").css("opacity","1")
		prompttime=setTimeout(function(){
			$(".house-typeDetail-Prompt").fadeOut(300)
		}, 1700)
	})

	$(".list-details-pushsection .allstyle").tap(function(){
		$(".house-type-push").css("left","0")
	})
	
	$(".house-type-pushheader .return").tap(function(){
		$(".house-type-push").css("left",wrapw)
	})
	
	$(".house-type-push .pushsection-li").tap(function(){
		$(".house-typeDetail-push").css("left","0")
	})
	
	$(".house-typeDetail-pushheader .return").tap(function(){
		$(".house-typeDetail-push").css("left",wrapw)
	})

	var buildingInfolen=$(".buildingInfo-content-ul li").length
	$(".buildingInfo-title .num").text("（共"+buildingInfolen+"栋）")






})