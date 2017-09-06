$(function(){
	var angle=0;
	var refresh_T=null;
	$(".current-location .refresh").tap(function(){
		clearInterval(refresh_T)
		refresh_T=setInterval(function() {
			angle += -4
			$(".current-location .refresh").css("transform", "rotate(" + angle + "deg)");
		}, 20)
	})
	
	//字母开头城市为0的时候移除 当前字母title
	$(".city").each(function(){
		var _index=$(this).index()
		var span_len=$(".city").eq(_index).find(".content span").length
		if(span_len==0){
			var this_index=$(this).index()
			$(".city").eq(this_index).remove()
			$(".section-nav .S_nav").eq(this_index).remove()
		}
	})
	
	var c_header=$(".city-position-header").height()
	var Sec_nav_h=$(".section-nav").height()
	var Sec_h=$(".city-position-section").height()
	$(".section-nav").css("top",((Sec_h-Sec_nav_h)/2)+c_header)
	
	
	
})
