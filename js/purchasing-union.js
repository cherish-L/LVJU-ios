$(function(){
	$(".purchasing-union-section").bind("touchstart",function(){
		purchasing_unionS.refresh()
	})
	var purchasing_unionS = new IScroll('.purchasing-union-section', {
		scrollbars: true,
		fadeScrollbars: true,
		shrinkScrollbars: 'clip'
	})
	
	
	var head_h=$(".head-portrait").height()
	var max_h=(head_h*48/27)+5
	$(".QA-content-li").each(function(){
		var index=$(this).index()
		var li_index=$(".QA-content-li").eq(index)
		if(li_index.find(".answer").height()>max_h){
			$(this).find(".answer").siblings(".full_text").css("display","block")
			$(this).find(".answer").addClass("showall")
		}
		else if(li_index.find(".answer").height()<max_h){
			$(this).find(".answer").siblings(".full_text").css("display","none")
			$(this).find(".answer").removeClass("showall")
		}
	})
	$(".full_text").tap(function(){
		$(this).css("display","none")
		$(this).siblings(".answer").removeClass("showall")
		purchasing_unionS.refresh()
	})
	
	//楼盘推荐 无lable 隐藏span
	$(".purchasing-union-recommend .recommend-content-li").each(function(){
		var val_r=$(this).find(".recommend-content-li-img span").text()
		if(val_r==""){
			var index=$(this).index()
			$(".purchasing-union-recommend .recommend-content-li").eq(index).find(".recommend-content-li-img span").remove()
		}
	})
	
	//报名参与联盟购房
	$(".purchasing-union-info .purchasing-union-nav .nav-btn").tap(function(){
		$(".purchasing-union-Mask").addClass("signal_show")
		$(".sign-up-push").addClass("show")
		$(".sign-up-push .sign-up-btn span").tap(function(){
			if($(".name_ipt").val()!=="" && $(".contact_ipt").val()!==""){
				$(".name_ipt").val("")
				$(".contact_ipt").val("")
				$(".sign-up-push").removeClass("show")
				$(".sign-up-false").addClass("show")
				$(".sign-up-false a").tap(function(){
					$(".sign-up-success").addClass("show")
					$(".sign-up-false").removeClass("show")
					$(".sign-up-push").removeClass("show")
				})
				
			}
		})
		
		$(".sign-up-push .sign-up-del").tap(function(){
			$(".sign-up-push").removeClass("show")
			$(".purchasing-union-Mask").removeClass("signal_show")
		})
		
		$(".purchasing-union-Mask").tap(function(){
			$(".sign-up-success").removeClass("show")
			$(".sign-up-false").removeClass("show")
			$(".sign-up-push").removeClass("show")
			$(".purchasing-union-Mask").removeClass("signal_show")
		})
	})
	
	
	
	
	
})
