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
		$(".search-page-container .section-loading i").css("transform", "rotate(" + angle + "deg)");
	}, 20)

	setInterval(function() {
		spin += 4
		$(".search-page-container .search-section-waiting i").css("transform", "rotate(" + spin + "deg)");
	}, 20)

	$(".search-page-container .hot-search-title .title-load").tap(function() {
		clearInterval(timer)
		timer = setInterval(function() {
			i += 4
			$(".search-page-container .hot-search-title .title-load").css("transform", "rotate(" + i + "deg)");
		}, 20);
	})

	//输入搜索
	$(".search-page-container .Search-form .Search-inpt").focus(function() {
		clearTimeout(timer1)
		clearTimeout(timer2)
		clearTimeout(timer3)
		$(".search-page-container .Search-inpt-wrapper .delete").css("display", "block")
		$(".search-page-container .search-section-state").addClass("switch").siblings(".page").removeClass("switch")
		stateS.refresh()
	})
	$(".search-page-container .Search-form .Search-inpt").blur(function() {
		$(".Search-inpt-wrapper .delete").css("display", "none")
		stateS.refresh()
	})
	$(".search-page-container .Search-inpt-wrapper .delete").tap(function() {
		$(".Search-form .Search-inpt").val("")
		$(".Search-form .Search-inpt").focus()
		stateS.refresh()
	})

	$(".search-page-container .Search-inpt-wrapper .fdj").tap(function() {
		var inpttxt = $(".search-page-container .Search-form .Search-inpt").val()
		if(!inpttxt == "") {
			var datatxt = "<li class='history-search-li'><span>" + inpttxt + "</span><span>/</span><span>楼盘</span></li>"
			$(".search-page-container .history-search-ul").prepend(datatxt)
			$(".search-page-container .search-section-state").removeClass("switch")
			$(".search-page-container .search-section-waiting").addClass("switch")
			timer1 = setTimeout(function() {
				$(".search-page-container .search-section-waiting").removeClass("switch")
				$(".search-page-container .search-section-fail").addClass("switch")
			}, 1500)
			$(".search-section-fail").tap(function() {
				$(".search-page-container .search-section-waiting").addClass("switch")
				$(".search-page-container .search-section-fail").removeClass("switch")
				timer2 = setTimeout(function() {
					$(".search-page-container .search-section-waiting").removeClass("switch")
					$(".search-page-container .search-section-none").addClass("switch")
				}, 1500)
			})
			$(".search-page-container .search-section-none").tap(function() {
				$(".search-page-container .search-section-waiting").addClass("switch")
				$(".search-page-container .search-section-none").removeClass("switch")
				timer3 = setTimeout(function() {
					$(".search-page-container .search-section-waiting").removeClass("switch")
					$(".search-page-container .search-section-wrapper").addClass("switch")
				}, 1500)

			})

			if($(".search-page-container .history-search-li").length > 0) {
				$(".search-page-container .title-Trash").css("display", "block")
				$(".search-page-container .history-search-no").css("display", "none")
			}
		}
	})

	//历史记录
	$(".search-page-container .title-Trash").tap(function() {
		$(".search-page-container .title-Trash").css("display", "none")
		$(".search-page-container .history-search-no").css("display", "block")
		$(".search-page-container .history-search-li").remove()
		stateS.refresh()
	})

	//点击热门搜索
	$(".search-page-container .hot-search-label span").tap(function() {
		var labeltxt = $(this).text()
		$(".search-page-container .Search-form .Search-inpt").val(labeltxt)
		$(".search-page-container .Search-form .Search-inpt").focus()
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
		$(".search-page-container .search-section-box").on("touchmove", function(e) {
			clearTimeout(upD)
			$(".search-page-container .section-load").css("display", "block")
			$(".search-page-container .section-loading").css("display", "none")
			$(".search-page-container .section-loadnone").css("display", "none")
			if(maxY >= 40) {
				$(".search-page-container .section-load").text("松开加载更多...")
				$(".search-page-container .section-load").css("display", "block")
				$(".search-page-container .section-loadnone").css("display", "none")
			}
		})
		$(".search-page-container .search-section-box").on("touchend", function(e) {
			if($(".search-page-container .section-load").text()=="松开加载更多..."){
				$(".search-page-container .section-load").css("display", "none")
				$(".search-page-container .section-load").text("上拉加载更多")
				$(".search-page-container .section-loading").css("display", "block")
			 	upD=setTimeout(function() {
					$(".search-page-container .section-loading").css("display", "none")
					$(".search-page-container .section-loadnone").css("display", "block")
				}, 1500)	
			}
		})
	});
})