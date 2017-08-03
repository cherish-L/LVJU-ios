$(function(){
	$(".list-nav-litxt").tap(function(){
		var spans=$(this).find("span")
		if(!spans.hasClass("touch")){
			spans.addClass("touch")
		}
		else{
			spans.removeClass("touch")
		}
	})
	var lilen=$(".houseStyle-content-ul li").length
	var liw=$(".houseStyle-content-ul li").width()+16
	$(".houseStyle-content-ul").width(lilen*liw)
	$(".houseStyle-title .num").text('（'+lilen+'）')
	
	
	//点击弹框
	var wrapw=$(".container").width()
	$(".listhouse-data-li").tap(function(){
		$(".list-details-push").css("left","0")
	})
	$(".list-details-pushheader .return").tap(function(){
		$(".list-details-push").css("left",wrapw)
	})
	
	
	
	
	
//	//楼盘头部滚动监听事件
//	var sectionS = new IScroll('.section', {
//		scrollbars: false
//	});
//	
//	//弹框头部滚动监听事件
//	var pushS = new IScroll('.list-details-pushsection', {
//		scrollbars: false,
//		probeType: 3
//	});
//	var houseStyleS = new IScroll('.houseStyle-content', {
//		scrollbars: false,
//		scrollX: true,
//		scrollY: false
//	});
//	
//	pushS.on('scroll',function(){
//		if(pushS.y < 0){
//			var Scrolly=-(pushS.y/180)
//			$(".list-details-pushheader").css("background-color","rgba(246, 246, 246,"+Scrolly+")")
//			$(".list-details-pushheader").css("box-shadow","0 1px 0 0 rgba(204,204,204,"+Scrolly+")")
//			$(".title_txt").css("color","rgba(57, 64, 67,"+Scrolly+")")
//			if(pushS.y < -160){
//				$(".return").addClass("state")
//				$(".collection").addClass("state")
//				$(".share").addClass("state")
//			}
//			if(pushS.y >= -160){
//				$(".return").removeClass("state")
//				$(".collection").removeClass("state")
//				$(".share").removeClass("state")
//			}
//		}
//		if(pushS.y >= 0){
//			$(".list-details-pushheader").css("background-color","rgba(246, 246, 246,0.0)")
//			$(".list-details-pushheader").css("box-shadow","0 1px 0 0 rgba(204,204,204,0.0)")
//			$(".title_txt").css("color","rgba(57, 64, 67,0.0)")
//		}
//		
//	});
	
	
})
