$(function() {
	var angle = 0;
	var spin = 0;
	var timer = null;
	var timer1 = null;
	var timer2 = null;
	var timer3 = null;
	var i = 0;
	setInterval(function() {
		angle += 4
		$(".section-loading i").css("transform", "rotate(" + angle + "deg)");
	}, 20)

	setInterval(function() {
		spin += 4
		$(".search-section-waiting i").css("transform", "rotate(" + spin + "deg)");
	}, 20)

	$(".hot-search-title .title-load").tap(function() {
		clearInterval(timer)
		timer = setInterval(function() {
			i += 4
			$(".hot-search-title .title-load").css("transform", "rotate(" + i + "deg)");
		}, 20);
	})

	//输入搜索
	$(".Search-form .Search-inpt").focus(function() {
		clearTimeout(timer1)
		clearTimeout(timer2)
		clearTimeout(timer3)
		$(".Search-inpt-wrapper .delete").css("display", "block")
		$(".search-section-state").addClass("switch").siblings(".page").removeClass("switch")
		stateS.refresh()
	})
	$(".Search-form .Search-inpt").blur(function() {
		$(".Search-inpt-wrapper .delete").css("display", "none")
		stateS.refresh()
	})
	$(".Search-inpt-wrapper .delete").tap(function() {
		$(".Search-form .Search-inpt").val("")
		$(".Search-form .Search-inpt").focus()
		stateS.refresh()
	})

	$(".Search-inpt-wrapper .fdj").tap(function() {
		var inpttxt = $(".Search-form .Search-inpt").val()
		if(!inpttxt == "") {
			var datatxt = "<li class='history-search-li'><span>" + inpttxt + "</span><span>/</span><span>楼盘</span></li>"
			$(".history-search-ul").prepend(datatxt)
			$(".search-section-state").removeClass("switch")
			$(".search-section-waiting").addClass("switch")
			timer1 = setTimeout(function() {
				$(".search-section-waiting").removeClass("switch")
				$(".search-section-fail").addClass("switch")
			}, 1500)
			$(".search-section-fail").tap(function() {
				$(".search-section-waiting").addClass("switch")
				$(".search-section-fail").removeClass("switch")
				timer2 = setTimeout(function() {
					$(".search-section-waiting").removeClass("switch")
					$(".search-section-none").addClass("switch")
				}, 1500)
			})
			$(".search-section-none").tap(function() {
				$(".search-section-waiting").addClass("switch")
				$(".search-section-none").removeClass("switch")
				timer3 = setTimeout(function() {
					$(".search-section-waiting").removeClass("switch")
					$(".search-section-wrapper").addClass("switch")
				}, 1500)

			})

			if($(".history-search-li").length > 0) {
				$(".title-Trash").css("display", "block")
				$(".history-search-no").css("display", "none")
			}
		}
	})

	//历史记录
	$(".title-Trash").tap(function() {
		$(".title-Trash").css("display", "none")
		$(".history-search-no").css("display", "block")
		$(".history-search-li").remove()
		stateS.refresh()
	})

	//点击热门搜索
	$(".hot-search-label span").tap(function() {
		var labeltxt = $(this).text()
		$(".Search-form .Search-inpt").val(labeltxt)
		$(".Search-form .Search-inpt").focus()
		stateS.refresh()
	})

	//搜索页面滚动监听事件
	var searchS = new IScroll('.search-section-wrapper', {
		scrollbars: false,
		probeType: 3
	});
	var stateS = new IScroll('.search-section-state', {
		scrollbars: false
	});

	var upD=null;
	searchS.on('scroll',function(){
		maxY = this.maxScrollY - this.y
		$(".search-section-box").on("touchstart", function(e) {
			if(e.cancelable) {
				if(!e.defaultPrevented) {
					e.preventDefault();
				}
			}
		})
		$(".search-section-box").on("touchmove", function(e) {
			clearTimeout(upD)
			$(".section-load").css("display", "block")
			$(".section-loading").css("display", "none")
			$(".section-loadnone").css("display", "none")
			if(maxY >= 40) {
				$(".section-load").text("松开加载更多...")
				$(".section-load").css("display", "block")
				$(".section-loadnone").css("display", "none")
			}
		})
		$(".search-section-box").on("touchend", function(e) {
			if($(".section-load").text()=="松开加载更多..."){
				$(".section-load").css("display", "none")
				$(".section-load").text("上拉加载更多")
				$(".section-loading").css("display", "block")
			 	upD=setTimeout(function() {
					$(".section-loading").css("display", "none")
					$(".section-loadnone").css("display", "block")
				}, 1500)	
			}
		})
	});
})