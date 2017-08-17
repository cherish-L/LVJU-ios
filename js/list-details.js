$(function() {
	
//楼盘页面  正在加载中...（无限自动转动）
	var angle=0;
	setInterval(function() {
		angle += 4
		$(".section-loading i").css("transform", "rotate(" + angle + "deg)");
	}, 20)
	
//楼盘页面  头部导航点击效果
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
	
//楼盘页面 头部导航（区域功能明细）
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
	


//楼盘页面 头部导航（均价功能明细）
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
	
	
//楼盘页面 头部导航（户型功能明细）
	var houseTypeTxt=0;
	$(".houseType-body-ul li").tap(function(){
		$(".demand-condition-wrapper .houseTypebox").remove()
		//户型添加需求并显示在需求项目栏中
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
	
//楼盘页面 头部导航（更多功能明细）
	var opentimeTxt=0;
	var conditionh=$(".demand-condition").height()
	var sectionh=$(".section").height()
	var footerh=$(".footer").height()
	$(".more .list-nav-pushli-wrapper").height(sectionh+footerh+conditionh)
	
	//开盘时间
	$(".open-time-content span").tap(function(){
		$(".demand-condition-wrapper .opentimebox").remove()
		//更多添加需求并显示在需求项目栏中
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
	
	//楼盘页面 头部导航（特色功能明细）
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
	
//楼盘页面 头部排序功能明细
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
		$(".header .form-ipt").tap(function(){
			if($(this).focus()){
				$(".list-nav-pushul .list-nav-pushli").height("0")
				$(".Mask").removeClass("show")
				$(".list-nav-ul li").removeClass("touch")
			}
		})
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

//楼盘页面 头部需求栏目水平滚动栏
	//遍历当前以后的需求
	var s=0;
	var demandh=$(".demand-condition-wrapper").height()
	var demandlen=$(".demand-condition-wrapper li").length
	for(var i=0;i<demandlen;i++){
		var liw=$(".demand-condition-wrapper li").eq(i).width()+12
		s=s+liw
	}

	if($(".demand-condition-wrapper li").length<=3){
		$(".demand-condition-wrapper").width("100%")
	}
	else if($(".demand-condition-wrapper li").length>3){
		$(".demand-condition-wrapper").width(sNew+20)
	}
	
	//删除单个需求，刷新demand-condition-wrapper盒子的宽度
	$(".demand-condition-wrapper li i").tap(function(){
		$(this).parent().remove()
		$(".demand-condition-wrapper li i").dynamic()
	})
	


//楼盘页面 头部需求栏目水平滚动栏宽度的设定
	$.fn.dynamic = function () {
		var sNew=0;
		var demandlenNew=$(".demand-condition-wrapper li").length
		for(var iNew=0;iNew<demandlenNew;iNew++){
			var liwNew=$(".demand-condition-wrapper li").eq(iNew).width()+12
			sNew=sNew+liwNew
		}
		if($(".demand-condition-wrapper li").length<=3){
			$(".demand-condition-wrapper").width("100%")
		}
		else if($(".demand-condition-wrapper li").length>3){
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
	

//楼盘页面 底部上拉加载滚动监听事件
	var sectionS = new IScroll('.section', {
		scrollbars: false,
		probeType: 3
	})
	
	var updated=null;
	sectionS.on("scroll", function() {
		maxY = this.maxScrollY - this.y
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
			if($(".section-load").text()=="松开加载更多..."){
				$(".section-load").css("display", "none")
				$(".section-load").text("上拉加载更多")
				$(".section-loading").css("display", "block")
			 	updated=setTimeout(function() {
					$(".section-loading").css("display", "none")
					$(".section-loadnone").css("display", "block")
				}, 1500)	
			}
		})
	})
	
	
//楼盘页面--楼盘详情 点击左滑弹框效果
	var wrapw = $(".container").width()+5
	$(".listhouse-data-li").tap(function() {
		$(".list-details-push").css("left", "0")
	})
	$(".list-details-pushheader .return").tap(function() {
		$(".list-details-push").css("left", wrapw)
	})
	
	//楼盘页面--楼盘详情 主力户型左右滑动列表宽度
	var lilen = $(".houseStyle-content-ul li").length
	var liw = $(".houseStyle-content-ul li").width() + 16
	$(".houseStyle-content-ul").width(lilen * liw)
	$(".houseStyle-title .num").text('（' + lilen + '）')
	
	
	var houseStyleS = new IScroll('.houseStyle-content', {
		scrollbars: false,
		scrollX: true,
		scrollY: false
	});

	//楼盘页面--楼盘详情 头部滚动透明度渐变监听事件
	var pushS = new IScroll('.list-details-pushsection', {
		scrollbars: false,
		probeType: 3
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
	
	//楼盘页面--楼盘详情 头部点击 收藏成功、取消收藏弹框代码
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
	
//楼盘页面--楼盘详情--楼盘位置弹框
	$(".house-position-pushperipheral .peripheral-li").tap(function(){
		$(this).addClass("on").siblings().removeClass("on")
	})
	
	$(".pushsection-basicInfo .position").tap(function() {
		$(".house-position-push").css("left", "0")
	})
	
	$(".house-position-pushheader .return").tap(function(){
		$(".house-position-push").css("left", wrapw)
	})
//楼盘页面--楼盘详情--降价通知弹框
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
	
	//楼盘页面--楼盘详情--降价通知弹框  input号码输入框内容改变监听事件 执行函数
	$(".notice-user input").bind('input propertychange', function() {
		if($(".notice-user input").val()!==""){
			$(".notice-user a").css("display","block")
		}
		else if($(this).val()==""){
			$(".notice-user a").css("display","none")
		}
	})
	
	$(".reducePrice-notice .notice-user a").tap(function(){
		$(".notice-user input").val("").focus()
		$(".notice-user a").css("display","none")
	})
	
	$(".reducePrice-notice .notice-button").tap(function(){
		
		if($(".notice-user input").val()!==""){
			$(".list-details-pushMask").removeClass("show")
			$(".reducePrice-notice").removeClass("show")
			$(".notice-user input").val("")
			$(".notice-user a").css("display","none")
		}
		else{
			$(".notice-user input").addClass("animated shake")
			setTimeout(function(){
				$(".notice-user input").removeClass("animated shake")
			}, 500)
		}
	})

//楼盘页面--楼盘详情--楼盘参数弹框
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



//楼盘页面--楼盘详情--楼盘户型弹框
	var screenlisth=$(".screenlist-ul").height()
	$(".house-type-pushfooter").tap(function(){
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

	$(".pushsection-houseStyle .houseStyle-content-ul li").tap(function(){
		$(".house-typeDetail-push").css("left","0")
	})
	
	$(".house-typeDetail-pushheader .return").tap(function(){
		$(".house-typeDetail-push").css("left",wrapw)
	})
	
	
//楼盘页面--楼盘详情--楼栋信息弹框
	var buildingInfolen=$(".buildingInfo-content-ul li").length
	$(".buildingInfo-title .num").text("（共"+buildingInfolen+"栋）")


	var buildingS = new IScroll('.building-info-pushsection', {
		scrollbars: false
	})

	$(".building-info-switch").bind("touchend",function(){
		var index=building.realIndex
		$(".building-info-pushsection .buildingInfo-content-ul li").eq(index).addClass("switch").siblings().removeClass("switch")
	})
	
	$(".list-details-pushsection .pushsection-buildingInfo .details").tap(function(){
		$(".building-info-push").css("left","0")
	})
	
	$(".building-info-pushheader .return").tap(function(){
		$(".building-info-push").css("left",wrapw)
	})
	
//楼盘页面--楼盘详情--优惠信息弹框
	$(".pushsection-discountActivity .partakeBox").tap(function(){
		$(".list-details-pushMask").addClass("show")
		$(".discount-info").addClass("show")
	})
	
	$(".list-details-pushMask").tap(function(){
		$(".list-details-pushMask").removeClass("show")
		$(".discount-info").removeClass("show")
		$(".enroll-success").removeClass("show")
		$(".enroll-fail").removeClass("show")
	})
	
	$(".discount-delete-box i").tap(function(){
		$(".list-details-pushMask").removeClass("show")
		$(".discount-info").removeClass("show")
	})
	
	//楼盘页面--楼盘详情--优惠信息弹框  input姓名输入框内容改变监听事件 执行函数
	$(".discount-username input").bind('input propertychange', function() {
		if($(".discount-username input").val()!==""){
			$(".discount-username a").css("display","block")
		}
		else if($(this).val()==""){
			$(".discount-username a").css("display","none")
		}
	})
	
	$(".discount-username a").tap(function(){
		$(".discount-username input").val("").focus()
		$(".discount-username a").css("display","none")
	})

	//楼盘页面--楼盘详情--优惠信息弹框  input号码输入框内容改变监听事件 执行函数
	$(".discount-userphone input").bind('input propertychange', function() {
		if($(".discount-userphone input").val()!==""){
			$(".discount-userphone a").css("display","block")
		}
		else if($(this).val()==""){
			$(".discount-userphone a").css("display","none")
		}
	})
	
	$(".discount-userphone a").tap(function(){
		$(".discount-userphone input").val("").focus()
		$(".discount-userphone a").css("display","none")
	})
	
	$(".discount-info .discount-button").tap(function(){
		if($(".discount-username input").val()!=="" && $(".discount-userphone input").val()!==""){
			$(".discount-info").removeClass("show")
			$(".discount-username input").val("")
			$(".discount-username a").css("display","none")
			$(".discount-userphone input").val("")
			$(".discount-userphone a").css("display","none")
			$(".enroll-fail").addClass("show")
			$(".enroll-fail .fail-button").tap(function(){
				$(".enroll-fail").removeClass("show")
				$(".enroll-success").addClass("show")
				$(".enroll-success .suc-button").tap(function(){
					$(".enroll-success").removeClass("show")
					$(".list-details-pushMask").removeClass("show")
				})
			})
		}
		else{
			if($(".discount-username input").val()=="" ){
				$(".discount-username input").addClass("animated shake")
				setTimeout(function(){
					$(".discount-username input").removeClass("animated shake")
				}, 500)
			}
			if($(".discount-userphone input").val()=="" ){
				$(".discount-userphone input").addClass("animated shake")
				setTimeout(function(){
					$(".discount-userphone input").removeClass("animated shake")
				}, 500)
			}
		}
	})
	
//楼盘页面--楼盘详情--历史价格弹框
	$(".historicalPrice-content").tap(function(){
		$(".historical-price-push").css("left","0")
	})
	$(".historical-price-pushheader .return").tap(function(){
		$(".historical-price-push").css("left",wrapw)
	})
	
//楼盘页面--楼盘详情--历史价格弹框 降价通知弹框  input号码输入框内容改变监听事件 执行函数
	$(".historical-price-pushfooter").tap(function(){
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

//楼盘页面--楼盘详情--联系置业顾问弹框
	$(".list-details-pushfooter .contact").tap(function(){
		$(".list-details-pushMask").addClass("show")
		$(".contact-adviser").addClass("show")
	})
	
	$(".list-details-pushMask").tap(function(){
		$(".list-details-pushMask").removeClass("show")
		$(".contact-adviser").removeClass("show")
	})
	
	$(".contact-adviser .close-box span").tap(function(){
		$(".list-details-pushMask").removeClass("show")
		$(".contact-adviser").removeClass("show")
	})


//楼盘页面--楼盘详情--资讯评论弹框
	$(".list-details-pushsection .pushsection-propertyReview .view-all").tap(function(){
		$(".info-review-push").css("left","0")
	})
	
	$(".info-review-pushheader .return").tap(function(){
		$(".info-review-push").css("left",wrapw)
	})
	
	//input文本框
	var panelw=$(".writing-panel").height()
	$(".info-review-pushfooter .pushfooter-wrapper").tap(function(){
		$(".info-review-push .text-box").focus()
		$(".info-review-pushMask").addClass("show")
		$(".info-review-writing").css("bottom","0")
		
	})
	
	$('.info-review-pushMask').bind("touchstart",function(event){
		$(".info-review-push .text-box").blur()
		$(".info-review-pushMask").removeClass("show")
		$(".info-review-writing").css("bottom",-panelw)
  	})
	
	$(".info-review-writing .cancel").tap(function(){
		$(".info-review-push .text-box").blur()
		$(".info-review-pushMask").removeClass("show")
		$(".info-review-writing").css("bottom",-panelw)
	})
	
	$(".info-review-writing .send").tap(function(){
		if($(".info-review-push .text-box").val()!==""){
			$(".info-review-push .text-box").blur()
			$(".info-review-pushMask").removeClass("show")
			$(".info-review-writing").css("bottom",-panelw)
			$(".text-box").val("")
			$(".info-review-push .comment-success").css("display","none")
			$(".info-review-push .comment-failed").css("display","block")
			$(".info-review-push .comment-failed").css("opacity","1")
			setTimeout(function(){
				$(".info-review-push .comment-failed").fadeOut(500)
			}, 1500)
			setTimeout(function(){
				$(".info-review-push .comment-success").css("display","block")
				$(".info-review-push .comment-success").css("opacity","1")
				setTimeout(function(){
					$(".info-review-push .comment-success").fadeOut(500)
				}, 1500)
			}, 2000)
		}
		else{
			alert("发送内容不能为空")
			$(".info-review-push .text-box").focus()
		}
	})
	
	$(".showall-wrapper").tap(function(){
		$(".user-say").removeClass("showmore")
		$(".showall").css("display","none")
		atPushS.refresh()
	})
	
	function fixedWatch(el) {
  		if(document.activeElement.nodeName == 'INPUT'){
    			el.css('position', 'static');
  		} else {
    			el.css('position', 'fixed');
  		}
	}
 
	setInterval(function () {
  		fixedWatch($('.info-review-writing'));
	}, 500);
	
//楼盘页面 楼盘详情 楼盘资讯--筛选框
	var Pscreenh=$(".Property-info-screenlist-ul").height()
	$(".Property-info-pushfooter").tap(function(){
		$(".Property-info-screenlist").css("height",Pscreenh)
		$('.Property-info-pushMask').addClass("show")
		
		$(".Property-info-screenlist .screenlist-li").tap(function(){
			var screenlistTxt=$(this).text()
			$(".Property-info-pushfooter span").text(screenlistTxt)
			$(".Property-info-pushfooter span").addClass("screen")
			$(this).addClass("select").siblings().removeClass("select")
			$(".Property-info-screenlist").css("height","0")
			$('.Property-info-pushMask').removeClass("show")
		})
		
		$(".Property-info-pushMask").tap(function(){
			$(".Property-info-screenlist").css("height","0")
			$('.Property-info-pushMask').removeClass("show")
		})
	})
	
	$(".pushsection-propertyInfo .enter").tap(function(){
		$(".Property-info-push").css("left","0")
	})
	
	$(".Property-info-pushheader .return").tap(function(){
		$(".Property-info-push").css("left",wrapw)
	})
	
//楼盘页面 楼盘详情 历史优惠活动弹框
	var ulboxh=$(".historical-discount-content").height()
	var ulbox_lih=$(".historical-discount-content li:last-child").height()
	$(".historical-discount-timeAxis .line").height(ulboxh-ulbox_lih)
	
	//导航滑动
	var _thisnav=$(".pushheader-nav")
	var _thisnav_w=$(".pushheader-nav").width()
	var _thisul=$(".pushheader-nav .nav-list")
	var _thisli=$(".pushheader-nav .nav-list li")
	if(_thisli.length==3){
		_thisul.css("width",_thisnav_w)
		_thisli.css("width","33.33%")
	}
	if(_thisli.length<=2 && _thisli.length>0){
		_thisul.css("width",_thisnav_w)
		_thisli.css("width","50%")
	}
	
	
	
	
//          $(".historical-discount-pushsection").bind("touchend",function(){
//				var index=discount.activeIndex
//				$(".pushheader-nav .nav-list li").eq(index).addClass("select").siblings().removeClass("select")
//			})
	
	
	
	
	
	//iscroll.js各各滚动回弹效果
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
	var historicalS = new IScroll('.historical-price-pushsection', {
		scrollbars: false
	})
	var reviewS = new IScroll('.info-review-pushsection', {
		scrollbars: false
	})
	var PropertyinfoS = new IScroll('.Property-info-pushsection', {
		scrollbars: false
	})
//	var firstPageS = new IScroll('.firstPage', {
//		scrollbars: false
//	})
//	var secondPageS = new IScroll('.secondPage', {
//		scrollbars: false
//	})
//	var thirdPageS = new IScroll('.thirdPage', {
//		scrollbars: false
//	})
//	var fourthPageS = new IScroll('.fourthPage', {
//		scrollbars: false
//	})
//	var fifthPageS = new IScroll('.fifthPage', {
//		scrollbars: false
//	})
//	var sixthPageS = new IScroll('.sixthPage', {
//		scrollbars: false
//	})
//	var seventhPageS = new IScroll('.seventhPage', {
//		scrollbars: false
//	})
})
