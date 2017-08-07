$(function(){
	var angle = 0;
	var spin = 0;
	var timer=null;
	var timer1=null;
	var timer2=null;
	var timer3=null;
	var i = 0;
    setInterval(function () {
        angle += 4
        $(".section-loading i").css("transform","rotate("+angle+"deg)");
    }, 20)
    
    setInterval(function () {
        spin += 4
        $(".search-section-waiting i").css("transform","rotate("+spin+"deg)");
    }, 20)
    

    
	$(".hot-search-title .title-load").tap(function(){
		clearInterval(timer)
		timer=setInterval(function () {
	        i += 4
	        $(".hot-search-title .title-load").css("transform","rotate("+i+"deg)");
	    }, 20);
	})
	

//输入搜索
	$(".Search-form .Search-inpt").focus(function(){
		clearTimeout(timer1)
		clearTimeout(timer2)
		clearTimeout(timer3)
		$(".Search-inpt-wrapper .delect").css("display","block")
		$(".search-section-state").css("display","block").siblings().css("display","none")
		
	})
	$(".Search-form .Search-inpt").blur(function(){
		$(".Search-inpt-wrapper .delect").css("display","none")
		
	})
	$(".Search-inpt-wrapper .delect").tap(function(){
		$(".Search-form .Search-inpt").val("")
		$(".Search-form .Search-inpt").focus()
	})
	
	
	$(".Search-inpt-wrapper .fdj").tap(function(){
		var inpttxt=$(".Search-form .Search-inpt").val()
		if(!inpttxt==""){
			var datatxt="<li class='history-search-li'><span>"+inpttxt+"</span><span>/</span><span>楼盘</span></li>"
			$(".history-search-ul").prepend(datatxt)
			$(".search-section-state").css("display","none")
			$(".search-section-waiting").css("display","block")
			timer1=setTimeout(function () {
				$(".search-section-waiting").css("display","none")
				$(".search-section-fail").css("display","block")
			}, 1500)
			$(".search-section-fail").tap(function(){
				$(".search-section-waiting").css("display","block")
				$(".search-section-fail").css("display","none")
				timer2=setTimeout(function () {
					$(".search-section-waiting").css("display","none")
					$(".search-section-none").css("display","block")
				}, 1500)
			})
			$(".search-section-none").tap(function(){
				$(".search-section-waiting").css("display","block")
				$(".search-section-none").css("display","none")
				timer3=setTimeout(function () {
					$(".search-section-waiting").css("display","none")
					$(".search-section-wrapper").css("display","block")
				}, 1500)
				
			})
			
			if($(".history-search-li").length>0){
				$(".title-Trash").css("display","block")
				$(".history-search-no").css("display","none")
			}
		}
				
	})
	
	
	
//历史记录
	$(".title-Trash").tap(function(){
		$(".title-Trash").css("display","none")
		$(".history-search-no").css("display","block")
		$(".history-search-li").remove()
	})

//点击热门搜索
	$(".hot-search-label span").tap(function(){
		var labeltxt=$(this).text()
		$(".Search-form .Search-inpt").val(labeltxt)
		$(".Search-form .Search-inpt").focus()
	})
	
	var widh=$(window).height()
	var headerh=$(".header").height()
	$(".search-section-waiting").height(widh-headerh)
	$(".search-section-fail").height(widh-headerh)
	$(".search-section-none").height(widh-headerh)
	
	
	//搜索页面滚动监听事件
	var searchS = new IScroll('.search-section-wrapper', {
		scrollbars: false
	});
	
	
})
