$(function(){
	$(".housing-demand-section").bind("touchstart",function(){
		housing_demandS.refresh()
	})
	var housing_demandS = new IScroll('.housing-demand-section', {
		scrollbars: true,
		fadeScrollbars: true,
		shrinkScrollbars: 'clip'
	})
	
	//选择意向城市
	$(".intentional-city-ul li label").tap(function(){
		if($(this).hasClass("select")){
			$(this).removeClass("select")
			$(this).siblings("input").removeAttr("checked",true)
		}
		else if(!$(this).hasClass("select")){
			$(this).addClass("select")
			$(this).siblings("input").attr("checked",true)
		}
	})
	
	//选择房屋类型
	$(".house-style-ul li label").tap(function(){
		if($(this).hasClass("select")){
			$(this).removeClass("select")
			$(this).siblings("input").removeAttr("checked",true)
		}
		else if(!$(this).hasClass("select")){
			$(this).addClass("select")
			$(this).siblings("input").attr("checked",true)
		}
	})
	
	//选择意向户型
	$(".intentional-layout-ul li label").tap(function(){
		if($(this).hasClass("select")){
			$(this).removeClass("select")
			$(this).siblings("input").removeAttr("checked",true)
		}
		else if(!$(this).hasClass("select")){
			$(this).addClass("select")
			$(this).parent().siblings().find("label").removeClass("select")
			$(this).siblings("input").attr("checked",true)
			$(this).parent().siblings().find("input").removeAttr("checked",true)
		}
	})
	
	//选择置业面积
	$(".home-area-ul li label").tap(function(){
		if($(this).hasClass("select")){
			$(this).removeClass("select")
			$(this).siblings("input").removeAttr("checked",true)
		}
		else if(!$(this).hasClass("select")){
			$(this).addClass("select")
			$(this).parent().siblings().find("label").removeClass("select")
			$(this).siblings("input").attr("checked",true)
			$(this).parent().siblings().find("input").removeAttr("checked",true)
		}
	})
	
	//选择预算价位
	$(".budget-price-ul li label").tap(function(){
		if($(this).hasClass("select")){
			$(this).removeClass("select")
			$(this).siblings("input").removeAttr("checked",true)
		}
		else if(!$(this).hasClass("select")){
			$(this).addClass("select")
			$(this).parent().siblings().find("label").removeClass("select")
			$(this).siblings("input").attr("checked",true)
			$(this).parent().siblings().find("input").removeAttr("checked",true)
		}
	})
	
	//选择装修要求
	$(".renovation-request-ul li label").tap(function(){
		if($(this).hasClass("select")){
			$(this).removeClass("select")
			$(this).siblings("input").removeAttr("checked",true)
		}
		else if(!$(this).hasClass("select")){
			$(this).addClass("select")
			$(this).parent().siblings().find("label").removeClass("select")
			$(this).siblings("input").attr("checked",true)
			$(this).parent().siblings().find("input").removeAttr("checked",true)
		}
	})
	
	//先生与女士
	$(".pc-info-callName .radio label").tap(function(){
		if($(this).hasClass("select")){
			$(this).removeClass("select")
			$(this).siblings("input").removeAttr("checked",true)
		}
		else if(!$(this).hasClass("select")){
			$(this).addClass("select")
			$(this).parent().siblings(".radio").find("label").removeClass("select")
			$(this).siblings("input").attr("checked",true)
			$(this).parent().siblings(".radio").find("input").removeAttr("checked",true)
		}
	})
	
	var callName_w=$(".pc-info-callName").width()
	var txt_w=$(".pc-info-callName .txt").width()
	var radio_gentleman_w=$(".radio-gentleman").width()
	var radio_lady_w=$(".radio-lady").width()
	$(".name_ipt").width(callName_w-txt_w-radio_gentleman_w-radio_lady_w)
	
	
	//点击提交弹框
	$(".pc-info .submit-box .submit").tap(function(){
		$(".housing-demand-Mask").addClass("show")
		$(".sign-up-false").addClass("show")
		
		$(".sign-up-false a").tap(function(){
			$(".sign-up-success").addClass("show")
			$(".sign-up-false").removeClass("show")
		})
		
		$(".housing-demand-Mask").tap(function(){
			$(".sign-up-success").removeClass("show")
			$(".sign-up-false").removeClass("show")
			$(".housing-demand-Mask").removeClass("show")
		})
	})
	
	
	
	
})
