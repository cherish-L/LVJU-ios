$(function() {
	
	alert('0')
//Swiper滑动判断导航选择
	//相册标题显示起始页数
	var img_box_num = $(".img-box-ul li").length
	$(".section-wrapper .top-txt-vertical .current-page").text(1 + '/' + img_box_num)
	$(".section-wrapper .top-txt-transverse .current-page").text(1 + '/' + img_box_num)
	//设置导航一个类别被选中状态
	$(".bottom-nav-vertical .bottom-nav-li:first-child").addClass("select")
	var _this_nav = $(".bottom-nav-vertical .bottom-nav-li")
	var _this_nav_len = _this_nav.length //导航分类个数
	
	//遍历出没类别的组图中的张数并显示在页面中
	_this_nav.each(function() {
		var _current = $(this).index() //导航分类个数
		var img_num = _this_nav.eq(_current).find("._this_num img").length
		_this_nav.eq(_current).find(".bottom-nav-li-txt .group_num").text('(' + img_num + ')')
		$(".bottom-nav-transverse .bottom-nav-li").eq(_current).find(".bottom-nav-li-txt .group_num").text('(' + img_num + ')')
		_this_nav.eq(_current).find("._this_num-txt").text(img_num)
	})
	//swiper获取当前滑动的页数  判断到达n页面后导航没选中状态切换
	$(".section-wrapper .img-box").bind("touchend", function() {
		var s_num = 0;
		var p_num = 0;
		var _index = mySwiper.realIndex + 1
		$(".section-wrapper .top-txt-vertical .current-page").text(_index + '/' + img_box_num)
		$(".section-wrapper .top-txt-transverse .current-page").text(_index + '/' + img_box_num)
		//循环  i 与 i-1 之前张数相加之和   判断当i=0的时候也就是  _this_nav.eq(i - 1)的值为0
		for(var i = 0; i < _this_nav_len; i++) {
			var p_txt = _this_nav.eq(i - 1).find("._this_num-txt").text()
			if(i == 0) {
				p_txt=0
			}
			p_num = parseInt(p_num) + parseInt(p_txt)
	
	
			var c_txt = _this_nav.eq(i).find("._this_num-txt").text()
			s_num = parseInt(s_num) + parseInt(c_txt)
			
			//判断对比swiper滑动的当前页数 与 页数范围自动切换选择状态
			if(_index>p_num && _index<=s_num){
				$(".section-wrapper .bottom-nav-vertical li").eq(i).addClass("select").siblings().removeClass("select")
				$(".section-wrapper .bottom-nav-transverse li").eq(i).addClass("select").siblings().removeClass("select")
			}
		}
	})
	
	
	
//点击导航切换到指定页数
	//-------- 竖屏 ---------
	$(".bottom-nav-vertical .bottom-nav-ul li").tap(function(){
		var p_num=0;
		var nav_index = $(this).index()
		$(this).addClass("select").siblings().removeClass("select")
		$(".bottom-nav-transverse .bottom-nav-ul li").eq(nav_index).addClass("select").siblings().removeClass("select")
		//循环  i 与 i-1 之前张数相加之和   判断当i=0的时候也就是  _this_nav.eq(i - 1)的值为0
		for(var i = 0; i < _this_nav_len; i++) {
			var p_txt = _this_nav.eq(i - 1).find("._this_num-txt").text()
			if(i == 0) {
				p_txt=0
			}
			p_num = parseInt(p_num) + parseInt(p_txt)
	
			//判断对比swiper滑动的当前页数 与 页数范围自动切换选择状态
			if(nav_index==i){
				mySwiper.slideTo(p_num,0);
			}
			var _this_realIndex=mySwiper.realIndex+1
			$(".section-wrapper .top-txt-vertical .current-page").text(_this_realIndex+'/'+img_box_num)
			$(".section-wrapper .top-txt-transverse .current-page").text(_this_realIndex+'/'+img_box_num)
		}
		
	})
	
	//-------- 横屏 ---------
	$(".bottom-nav-transverse .bottom-nav-ul li").tap(function(){
		var p_num=0;
		var nav_index = $(this).index()
		$(this).addClass("select").siblings().removeClass("select")
		$(".bottom-nav-vertical .bottom-nav-ul li").eq(nav_index).addClass("select").siblings().removeClass("select")
		//循环  i 与 i-1 之前张数相加之和   判断当i=0的时候也就是  _this_nav.eq(i - 1)的值为0
		for(var i = 0; i < _this_nav_len; i++) {
			var p_txt = _this_nav.eq(i - 1).find("._this_num-txt").text()
			if(i == 0) {
				p_txt=0
			}
			p_num = parseInt(p_num) + parseInt(p_txt)
	
			//判断对比swiper滑动的当前页数 与 页数范围自动切换选择状态
			if(nav_index==i){
				mySwiper.slideTo(p_num,0);
			}
			var _this_realIndex=mySwiper.realIndex+1
			$(".section-wrapper .top-txt-vertical .current-page").text(_this_realIndex+'/'+img_box_num)
			$(".section-wrapper .top-txt-transverse .current-page").text(_this_realIndex+'/'+img_box_num)
		}
		
	})
	
	
	
	
	
	
	var Vtotle_w=0;
	var Ttotle_w=0;
	var vertical_li_len = $(".bottom-nav-vertical .bottom-nav-ul li").length
	for(var i = 0; i < vertical_li_len; i++) {
		var vertical_li_w = $(".bottom-nav-vertical .bottom-nav-ul li").eq(i).width()
		Vtotle_w +=vertical_li_w
		
	}
	$(".bottom-nav-vertical .bottom-nav-ul").width(Vtotle_w + 12)



	var transverse_li_len = $(".bottom-nav-transverse .bottom-nav-ul li").length
	for(var i = 0; i < vertical_li_len; i++) {
		var transverse_li_w = $(".bottom-nav-transverse .bottom-nav-ul li").eq(i).width()
		Ttotle_w +=transverse_li_w
	}
	$(".bottom-nav-transverse").width(Ttotle_w + 12)

	var houseStyleS = new IScroll('.bottom-nav-vertical .bottom-nav-box', {
		scrollbars: false,
		scrollX: true,
		scrollY: false
	})
	
	
})