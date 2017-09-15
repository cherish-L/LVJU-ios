$(function() {
	
	var c=0;
	var s=0;
	var li_len=$(".album-page-section .section-wrapper-vertical .bottom-nav-ul li").length
	var album_h = $(".album-page-section").height()
	var img_box = $(".album-page-section .section-wrapper-vertical .img-box").height()
	$(".album-page-section .section-wrapper-vertical .top-txt").height((album_h - img_box) * 0.35)
	$(".album-page-section .section-wrapper-vertical .img-box").height(album_h-(album_h - img_box) * 0.35)
	for(var i=0;i<li_len;i++){
		c=$(".album-page-section .section-wrapper-vertical .bottom-nav-ul li").eq(i).width()
		s=s+c
	}
	$(".album-page-section .section-wrapper-vertical .bottom-nav-ul").width(s+5)
	
	
	var sale_w = $(".section-wrapper-transverse .sale-name").width()
	var current_w = $(".section-wrapper-transverse .current-page").width()
	$(".section-wrapper-transverse .top-txt").width(sale_w+current_w+30)
	
	var li_w=0;
	var li_total_w=0;
	for(var i=0;i<li_len;i++){
		li_w=$(".album-page-section .section-wrapper-transverse .bottom-nav-ul li").eq(i).width()
		li_total_w=li_total_w+li_w
	}
	$(".album-page-section .section-wrapper-transverse .bottom-nav-ul").width(li_total_w+5)
	
	
	var verticalS = new IScroll('.section-wrapper-vertical .bottom-nav .bottom-nav-box', {
		scrollbars: false,
		scrollX: true,
		scrollY: false
	})
	
	
	
	
	var T_discount_max=0;
	var T_discount_min=0;
	var T_discounth=$("html").height()
	var T_discountw=$("html").width()
	if(T_discounth > T_discountw){
		T_discount_max=T_discounth
		T_discount_min=T_discountw
	}
	if(T_discounth < T_discountw){
		T_discount_max=T_discountw
		T_discount_min=T_discounth
	}
//------------------------------------------  竖屏图片切换  ------------------------------------------
	var verticalli_len=$(".section-wrapper-vertical .img-box .img-box-ul li").length
	$(".section-wrapper-vertical .top-txt .current-page").text('1/'+verticalli_len)
	$(".section-wrapper-transverse .top-txt .current-page").text('1/'+verticalli_len)
	
	//获取效果图length
	var effect_len=$(".section-wrapper-vertical .img-box .img-box-ul .effect-pic").length
	//获取户型图length
	var houseTyle_len=$(".section-wrapper-vertical .img-box .img-box-ul .houseTyle-pic").length
	//获取样板图length
	var model_len=$(".section-wrapper-vertical .img-box .img-box-ul .model-pic").length
	//获取区位图length
	var location_len=$(".section-wrapper-vertical .img-box .img-box-ul .location-pic").length
	//获取实景视频length
	var liveVideo_len=$(".section-wrapper-vertical .img-box .img-box-ul .liveVideo-pic").length
	
	//点击相册导航 图片定位到当前nav-li的第一张图片上
	$(".album-page-section .section-wrapper-vertical .bottom-nav-ul li").tap(function(){
		var _this_index=$(this).index()
		$(this).addClass("select").siblings().removeClass("select")
		$(".album-page-section .section-wrapper-transverse .bottom-nav-ul li").eq(_this_index).addClass("select").siblings().removeClass("select")
		if(_this_index==0)var objindex=0+1
		if(_this_index==1)var objindex=effect_len+1
		if(_this_index==2)var objindex=effect_len+houseTyle_len+1
		if(_this_index==3)var objindex=effect_len+houseTyle_len+model_len+1
		if(_this_index==4)var objindex=effect_len+houseTyle_len+model_len+location_len+1
		
		$(".section-wrapper-vertical .top-txt .current-page").text(objindex+'/'+verticalli_len)
		$(".section-wrapper-transverse .top-txt .current-page").text(objindex+'/'+verticalli_len)
		
		$(".section-wrapper-vertical .img-box .img-box-ul").css("transform","translate3d(-"+T_discount_min*(objindex-1)+"px, 0px, 0px)")
		$(".section-wrapper-transverse .img-box .img-box-ul").css("transform","translate3d(-"+T_discount_max*(objindex-1)+"px, 0px, 0px)")
		verticalSwiper.realIndex=objindex
	})
	//滑动获取当前图片的realIndex 改变导航的样式
	$(".section-wrapper-vertical .img-box").bind("touchend", function() {
		var index = verticalSwiper.realIndex+1
		$(".section-wrapper-vertical .top-txt .current-page").text(index+'/'+verticalli_len)
		$(".section-wrapper-transverse .top-txt .current-page").text(index+'/'+verticalli_len)
		$(".section-wrapper-transverse .img-box .img-box-ul").css("transform","translate3d(-"+T_discount_max*index+"px, 0px, 0px)")
		if(index>=0 && index<=effect_len){
			$(".section-wrapper-vertical .bottom-nav li").eq(0).addClass("select").siblings().removeClass("select")
			$(".section-wrapper-transverse .bottom-nav li").eq(0).addClass("select").siblings().removeClass("select")
		}
		if(index>effect_len && index<=houseTyle_len+effect_len){
			$(".section-wrapper-vertical .bottom-nav li").eq(1).addClass("select").siblings().removeClass("select")
			$(".section-wrapper-transverse .bottom-nav li").eq(1).addClass("select").siblings().removeClass("select")
		}
		if(index>houseTyle_len+effect_len && index<=houseTyle_len+effect_len+model_len){
			$(".section-wrapper-vertical .bottom-nav li").eq(2).addClass("select").siblings().removeClass("select")
			$(".section-wrapper-transverse .bottom-nav li").eq(2).addClass("select").siblings().removeClass("select")
		}
		if(index>houseTyle_len+effect_len+model_len && index<=houseTyle_len+effect_len+model_len+location_len){
			$(".section-wrapper-vertical .bottom-nav li").eq(3).addClass("select").siblings().removeClass("select")
			$(".section-wrapper-transverse .bottom-nav li").eq(3).addClass("select").siblings().removeClass("select")
		}
		if(index>houseTyle_len+effect_len+model_len+location_len && index<=verticalli_len){
			$(".section-wrapper-vertical .bottom-nav li").eq(4).addClass("select").siblings().removeClass("select")
			$(".section-wrapper-transverse .bottom-nav li").eq(4).addClass("select").siblings().removeClass("select")
		}
	})
	
	
	
	
	
	
//------------------------------------------  横屏图片切换  ------------------------------------------
	var transverse_len=$(".section-wrapper-transverse .img-box .img-box-ul li").length
	$(".section-wrapper-vertical .top-txt .current-page").text('1/'+transverse_len)
	$(".section-wrapper-transverse .top-txt .current-page").text('1/'+transverse_len)
	
	//获取效果图length
	var T_effect_len=$(".section-wrapper-transverse .img-box .img-box-ul .effect-pic").length
	//获取户型图length
	var T_houseTyle_len=$(".section-wrapper-transverse .img-box .img-box-ul .houseTyle-pic").length
	//获取样板图length
	var T_model_len=$(".section-wrapper-transverse .img-box .img-box-ul .model-pic").length
	//获取区位图length
	var T_location_len=$(".section-wrapper-transverse .img-box .img-box-ul .location-pic").length
	//获取实景视频length
	var T_liveVideo_len=$(".section-wrapper-transverse .img-box .img-box-ul .liveVideo-pic").length
	
	
	//点击相册导航 图片定位到当前nav-li的第一张图片上
	
	
	$(".album-page-section .section-wrapper-transverse .bottom-nav-ul li").tap(function(){
		var _this_index=$(this).index()
		$(this).addClass("select").siblings().removeClass("select")
		$(".album-page-section .section-wrapper-vertical .bottom-nav-ul li").eq(_this_index).addClass("select").siblings().removeClass("select")
		if(_this_index==0)var objindex=0+1
		if(_this_index==1)var objindex=T_effect_len+1
		if(_this_index==2)var objindex=T_effect_len+T_houseTyle_len+1
		if(_this_index==3)var objindex=T_effect_len+T_houseTyle_len+T_model_len+1
		if(_this_index==4)var objindex=T_effect_len+T_houseTyle_len+T_model_len+T_location_len+1
		
		$(".section-wrapper-transverse .top-txt .current-page").text(objindex+'/'+verticalli_len)
		$(".section-wrapper-vertical .top-txt .current-page").text(objindex+'/'+verticalli_len)
		$(".section-wrapper-transverse .img-box .img-box-ul").css("transform","translate3d(-"+T_discount_max*(objindex-1)+"px, 0px, 0px)")
		$(".section-wrapper-vertical .img-box .img-box-ul").css("transform","translate3d(-"+T_discount_min*(objindex-1)+"px, 0px, 0px)")
		transverseSwiper.realIndex=objindex
	})
	//滑动获取当前图片的realIndex 改变导航的样式
	$(".section-wrapper-transverse .img-box").bind("touchend", function() {
		var index = transverseSwiper.realIndex+1
		$(".section-wrapper-vertical .top-txt .current-page").text(index+'/'+verticalli_len)
		$(".section-wrapper-transverse .top-txt .current-page").text(index+'/'+verticalli_len)
		$(".section-wrapper-vertical .img-box .img-box-ul").css("transform","translate3d(-"+T_discount_min*index+"px, 0px, 0px)")
		if(index>=0 && index<=T_effect_len){
			$(".section-wrapper-vertical .bottom-nav li").eq(0).addClass("select").siblings().removeClass("select")
			$(".section-wrapper-transverse .bottom-nav li").eq(0).addClass("select").siblings().removeClass("select")
		}
		if(index>T_effect_len && index<=T_houseTyle_len+T_effect_len){
			$(".section-wrapper-vertical .bottom-nav li").eq(1).addClass("select").siblings().removeClass("select")
			$(".section-wrapper-transverse .bottom-nav li").eq(1).addClass("select").siblings().removeClass("select")
		}
		if(index>T_houseTyle_len+T_effect_len && index<=T_houseTyle_len+T_effect_len+T_model_len){
			$(".section-wrapper-vertical .bottom-nav li").eq(2).addClass("select").siblings().removeClass("select")
			$(".section-wrapper-transverse .bottom-nav li").eq(2).addClass("select").siblings().removeClass("select")
		}
		if(index>T_houseTyle_len+T_effect_len+T_model_len && index<=T_houseTyle_len+T_effect_len+T_model_len+T_location_len){
			$(".section-wrapper-vertical .bottom-nav li").eq(3).addClass("select").siblings().removeClass("select")
			$(".section-wrapper-transverse .bottom-nav li").eq(3).addClass("select").siblings().removeClass("select")
		}
		if(index>T_houseTyle_len+T_effect_len+T_model_len+T_location_len && index<=verticalli_len){
			$(".section-wrapper-vertical .bottom-nav li").eq(4).addClass("select").siblings().removeClass("select")
			$(".section-wrapper-transverse .bottom-nav li").eq(4).addClass("select").siblings().removeClass("select")
		}
	})
	
})