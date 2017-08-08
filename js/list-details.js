$(function() {
	var angle=0;
	setInterval(function() {
		angle += 4
		$(".section-loading i").css("transform", "rotate(" + angle + "deg)");
	}, 20)
	
	$(".list-nav-litxt").tap(function() {
		var spans = $(this).find("span")
		if(!spans.hasClass("touch")) {
			spans.addClass("touch")
		} else {
			spans.removeClass("touch")
		}
	})
	var lilen = $(".houseStyle-content-ul li").length
	var liw = $(".houseStyle-content-ul li").width() + 16
	$(".houseStyle-content-ul").width(lilen * liw)
	$(".houseStyle-title .num").text('（' + lilen + '）')

	//点击弹框
	var wrapw = $(".container").width()
	$(".listhouse-data-li").tap(function() {
		$(".list-details-push").css("left", "0")
	})
	$(".list-details-pushheader .return").tap(function() {
		$(".list-details-push").css("left", wrapw)
	})



	//楼盘头部滚动监听事件
	var sectionS = new IScroll('.section', {
		scrollbars: false,
		probeType: 3
	})
	
			
	sectionS.on("scroll", function() {
		maxY = this.maxScrollY - this.y
		if(maxY >= 40) {
			$(".section-wrapper").on("touchstart", function(e) {
				if(e.cancelable) {
					if(!e.defaultPrevented) {
						e.preventDefault();
					}
				}
			})
			$(".section-wrapper").on("touchmove", function(e) {
				if(e.cancelable) {
					if(!e.defaultPrevented) {
						e.preventDefault();
					}
				}
				if(maxY >= 40) {
					$(".section-load").text("松开加载更多...")
					$(".section-load").css("display", "block")
					$(".section-loadnone").css("display", "none")
				}
			})
			$(".section-wrapper").on("touchend", function(e) {
				if(e.cancelable) {
					if(!e.defaultPrevented) {
						e.preventDefault();
					}
				}
				if(maxY >= 40) {
					$(".section-load").css("display", "none")
					$(".section-load").text("上拉加载更多")
					$(".section-loading").css("display", "block")
					setTimeout(function() {
						$(".section-loading").css("display", "none")
						$(".section-loadnone").css("display", "block")
					}, 1500)
				}
			})
		}
//		sectionS.refresh()
	})

	//弹框头部滚动监听事件
	var pushS = new IScroll('.list-details-pushsection', {
		scrollbars: false,
		probeType: 3
	});
	var houseStyleS = new IScroll('.houseStyle-content', {
		scrollbars: false,
		scrollX: true,
		scrollY: false
	});

	pushS.on('scroll', function() {
		if(pushS.y < 0) {
			var Scrolly = -(pushS.y / 180)
			$(".list-details-pushheader").css("background-color", "rgba(246, 246, 246," + Scrolly + ")")
			$(".list-details-pushheader").css("box-shadow", "0 1px 0 0 rgba(204,204,204," + Scrolly + ")")
			$(".title_txt").css("color", "rgba(57, 64, 67," + Scrolly + ")")
			if(pushS.y < -160) {
				$(".return").addClass("state")
				$(".collection").addClass("state")
				$(".share").addClass("state")
			}
			if(pushS.y >= -160) {
				$(".return").removeClass("state")
				$(".collection").removeClass("state")
				$(".share").removeClass("state")
			}
		}
		if(pushS.y >= 0) {
			$(".list-details-pushheader").css("background-color", "rgba(246, 246, 246,0.0)")
			$(".list-details-pushheader").css("box-shadow", "0 1px 0 0 rgba(204,204,204,0.0)")
			$(".title_txt").css("color", "rgba(57, 64, 67,0.0)")
		}

	});

})