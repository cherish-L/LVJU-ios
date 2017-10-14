$(function() {
	
	
	var vertical_li_len=$(".bottom-nav-vertical .bottom-nav-ul li").length
	var vertical_li_w=$(".bottom-nav-vertical .bottom-nav-ul li").width()
	$(".bottom-nav-vertical .bottom-nav-ul").width(vertical_li_len*vertical_li_w+12)
	
	
	var transverse_li_len=$(".bottom-nav-transverse .bottom-nav-ul li").length
	var transverse_li_w=$(".bottom-nav-transverse .bottom-nav-ul li").width()
	$(".bottom-nav-transverse").width(transverse_li_len*transverse_li_w+12)
	
	//点击导航跳转到对应图片的第一张
			var img_li_len=$(".img-box .img-box-ul li").length
			//获取效果图length
				var effect_len=$(".img-box .img-box-ul .effect-pic").length
				$(".section-wrapper .bottom-nav-vertical li").eq(0).text('效果图('+effect_len+')')
				$(".section-wrapper .bottom-nav-transverse li").eq(0).text('效果图('+effect_len+')')
			//获取户型图length
				var houseTyle_len=$(".img-box .img-box-ul .houseTyle-pic").length
				$(".section-wrapper .bottom-nav-vertical li").eq(1).text('户型图('+houseTyle_len+')')
				$(".section-wrapper .bottom-nav-transverse li").eq(1).text('户型图('+houseTyle_len+')')
			//获取样板图length
				var model_len=$(".img-box .img-box-ul .model-pic").length
				$(".section-wrapper .bottom-nav-vertical li").eq(2).text('样板图('+model_len+')')
				$(".section-wrapper .bottom-nav-transverse li").eq(2).text('样板图('+model_len+')')
			//获取区位图length
				var locations_len=$(".img-box .img-box-ul .locations-pic").length
				$(".section-wrapper .bottom-nav-vertical li").eq(3).text('区位图('+locations_len+')')
				$(".section-wrapper .bottom-nav-transverse li").eq(3).text('区位图('+locations_len+')')
			//获取实景视频length
				var liveVideo_len=$(".img-box .img-box-ul .liveVideo-pic").length
				$(".section-wrapper .bottom-nav-vertical li").eq(4).text('实景视频('+liveVideo_len+')')
				$(".section-wrapper .bottom-nav-transverse li").eq(4).text('实景视频('+liveVideo_len+')')
	
	
	$(".section-wrapper .top-txt-vertical .current-page").text(1+'/'+img_li_len)
	$(".section-wrapper .top-txt-transverse .current-page").text(1+'/'+img_li_len)
	
	//滑动切换页数
	$(".section-wrapper .img-box").bind("touchend", function() {
		var index=mySwiper.realIndex+1
		$(".section-wrapper .top-txt-vertical .current-page").text(index+'/'+img_li_len)
		$(".section-wrapper .top-txt-transverse .current-page").text(index+'/'+img_li_len)
		if(index>=0 && index<=effect_len){
			$(".section-wrapper .bottom-nav-vertical li").eq(0).addClass("select").siblings().removeClass("select")
			$(".section-wrapper .bottom-nav-transverse li").eq(0).addClass("select").siblings().removeClass("select")
		}
		if(index>effect_len && index<=houseTyle_len+effect_len){
			$(".section-wrapper .bottom-nav-vertical li").eq(1).addClass("select").siblings().removeClass("select")
			$(".section-wrapper .bottom-nav-transverse li").eq(1).addClass("select").siblings().removeClass("select")
		}
		if(index>houseTyle_len+effect_len && index<=houseTyle_len+effect_len+model_len){
			$(".section-wrapper .bottom-nav-vertical li").eq(2).addClass("select").siblings().removeClass("select")
			$(".section-wrapper .bottom-nav-transverse li").eq(2).addClass("select").siblings().removeClass("select")
		}
		if(index>houseTyle_len+effect_len+model_len && index<=houseTyle_len+effect_len+model_len+locations_len){
			$(".section-wrapper .bottom-nav-vertical li").eq(3).addClass("select").siblings().removeClass("select")
			$(".section-wrapper .bottom-nav-transverse li").eq(3).addClass("select").siblings().removeClass("select")
		}
		if(index>houseTyle_len+effect_len+model_len+locations_len && index<=img_li_len){
			$(".section-wrapper .bottom-nav-vertical li").eq(4).addClass("select").siblings().removeClass("select")
			$(".section-wrapper .bottom-nav-transverse li").eq(4).addClass("select").siblings().removeClass("select")
		}
	})
	
	
	
	//------  横屏_nav  ------
	$(".bottom-nav-vertical .bottom-nav-ul li").tap(function(){
		var index = $(this).index()
		$(this).addClass("select").siblings().removeClass("select")
		$(".bottom-nav-transverse .bottom-nav-ul li").eq(index).addClass("select").siblings().removeClass("select")
		if(index==0){
			mySwiper.slideTo(0,0);
		}
		if(index==1){
			mySwiper.slideTo(effect_len,0);
		}
		if(index==2){
			mySwiper.slideTo(effect_len+houseTyle_len,0);
		}
		if(index==3){
			mySwiper.slideTo(effect_len+houseTyle_len+model_len,0);
		}
		if(index==4){
			mySwiper.slideTo(effect_len+houseTyle_len+model_len+liveVideo_len+1,0);
		}
		
		var _this_realIndex=mySwiper.realIndex+1
		$(".section-wrapper .top-txt-vertical .current-page").text(_this_realIndex+'/'+img_li_len)
		$(".section-wrapper .top-txt-transverse .current-page").text(_this_realIndex+'/'+img_li_len)
	})
	
	//------  竖屏_nav  ------
	$(".bottom-nav-transverse .bottom-nav-ul li").tap(function(){
		var index = $(this).index()
		$(this).addClass("select").siblings().removeClass("select")
		$(".bottom-nav-vertical .bottom-nav-ul li").eq(index).addClass("select").siblings().removeClass("select")
		if(index==0){
			mySwiper.slideTo(0,0);
		}
		if(index==1){
			mySwiper.slideTo(effect_len,0);
		}
		if(index==2){
			mySwiper.slideTo(effect_len+houseTyle_len,0);
		}
		if(index==3){
			mySwiper.slideTo(effect_len+houseTyle_len+model_len,0);
		}
		if(index==4){
			mySwiper.slideTo(effect_len+houseTyle_len+model_len+liveVideo_len+1,0);
		}
		
		var _this_realIndex=mySwiper.realIndex+1
		$(".section-wrapper .top-txt-vertical .current-page").text(_this_realIndex+'/'+img_li_len)
		$(".section-wrapper .top-txt-transverse .current-page").text(_this_realIndex+'/'+img_li_len)
	})
	
	
	
	var houseStyleS = new IScroll('.bottom-nav-vertical .bottom-nav-box', {
		scrollbars: false,
		scrollX: true,
		scrollY: false
	})
})