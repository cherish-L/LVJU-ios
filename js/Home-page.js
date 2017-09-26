$(function() {
	var homePage_headerh = $(".Home-page-header").height()
	//首页头部滚动监听事件
	var homePage_sectionS = new IScroll('.Home-page-section', {
		scrollbars: false,
		preventDefault: false,
		probeType: 3,
		preventDefault: false,
		preventDefaultException: {
			tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/
		}
	})

	var angle_hp = 0;
	var angle_hp_time = 0;
	var loadingStep = 0;
	//滚动头部透明度变化
	homePage_sectionS.on('scroll', function() {
		if(homePage_sectionS.y < 0) {
			var Scrolly = -(homePage_sectionS.y / 180)
			$(".Home-page-container .Home-page-header").css("opacity", "1")
			$(".Home-page-container .Home-page-header").css("background", "rgba(246, 246, 246," + Scrolly + ")")
			$(".Home-page-container .Home-page-header").css("box-shadow", "0 1px 0 0 rgba(204,204,204," + Scrolly + ")")
			if(homePage_sectionS.y < -116) {
				$(".Home-page-header .current-location").addClass("state")
				$(".Home-page-header .Search-frame").addClass("state")
				$(".Home-page-header .current-map").addClass("state")
			}
			if(homePage_sectionS.y >= -116) {
				$(".Home-page-header .current-location").removeClass("state")
				$(".Home-page-header .Search-frame").removeClass("state")
				$(".Home-page-header .current-map").removeClass("state")
			}
		}
		if(homePage_sectionS.y >= 0) {
			$(".Home-page-container .Home-page-header").css("opacity", (homePage_headerh - homePage_sectionS.y) / homePage_headerh)
			$(".Home-page-container .Home-page-header").css("background", "rgba(246, 246, 246,0)")
			$(".Home-page-container .Home-page-header").css("box-shadow", "0 1px 0 0 rgba(204,204,204,0)")
		}

		if(loadingStep == 0 && !$(".Home-page-section .section-load").hasClass("refresh")) {
			if(homePage_sectionS.y < (homePage_sectionS.maxScrollY - 10) && homePage_sectionS.y > (homePage_sectionS.maxScrollY - 60)) {
				$(".Home-page-section .section-load").text("上拉加载更多...")
			}
			if(homePage_sectionS.y < (homePage_sectionS.maxScrollY - 60)) {
				$(".Home-page-section .section-load").addClass("refresh")
				$(".Home-page-section .section-load").text("松开加载更多...")
				loadingStep = 1;
			}
		}
	})

	homePage_sectionS.on("scrollEnd", function() {
		if($(".Home-page-section .section-load").hasClass("refresh")) { //下拉刷新操作 
			$(".Home-page-section .section-load").removeClass("refresh")
			$(".Home-page-section .section-load").text("上拉加载更多...")
			$(".Home-page-section .section-load").hide()
			$(".Home-page-section .section-loading").show()
			angle_hp_time = setInterval(function() {
				angle_hp += 5
				$(".Home-page-section .section-loading i").css("transform", "rotate(" + angle_hp + "deg)");
			}, 20)
			loadingStep = 2;
			hp_pullUpAction();
		}
	})

	function hp_pullUpAction() {
		setTimeout(function() {

			$(".Home-page-section .section-load").show()
			$(".Home-page-section .section-loading").hide()
			$(".Home-page-section .section-load").text("没有更多内容加载")

			homePage_sectionS.refresh();
			loadingStep = 0;
			clearInterval(angle_hp_time)
		}, 2000);
	}

	//底部点击切换页面
	$(".Home-page-footer .footer-nav-li").tap(function() {
		$(this).addClass("select").siblings().removeClass("select")
	})

	//房价走势头部滚动监听事件
	var trendS = new IScroll('.trend-section', {
		scrollbars: false,
		preventDefault: false,
		preventDefaultException: {
			tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/
		}
	})

	$(".trend-section .loading-fail").tap(function() {
		$(".trend-section .loading-fail").css("display", "none")
		$(".trend-section").css("display", "block")
	})

	//房价走势交互效果
	var trend_h = $(".trend-section").height()
	var tcw_ht = $(".houseprice-trend").width()
	$(".trend-section .loading-fail").height(trend_h)
	$(".historicalprice-title span").tap(function() {
		$(".houseprice-trend").css("left", "0")
	})
	$(".trend-header .return").tap(function() {
		$(".houseprice-trend").css("left", tcw_ht + 5)
	})

	//城市定位----------------------------------------------------------------------
	//字母开头城市为0的时候移除 当前字母title
	$(".classify").each(function() {
		var _index = $(this).index()
		var letter_len = $(".classify").eq(_index).find(".wrap li").length
		if(letter_len == 0) {
			var classify_index = $(this).index()
			$(".classify").eq(classify_index).remove()
			$(".location_list .classification li").eq(classify_index).remove()
		}
	})
	$(".classify .city").tap(function() {
		var txt = $(this).text()
		$(".Home-page-header .Search_bar .current-location").text(txt)
		$(".city-position-header .current_location").text("当前: " + txt)
		$(".located .wraps").find(".located_city .cityed").text(txt)
		if(!$(this).hasClass("lick")) {
			$(".history_location .wrap").prepend("<li class='city history_city'>" + txt + "</li>")
			$(this).addClass("lick")
		}
		$(".history_city").tap(function() {
			var txts_hc = $(this).text()
			$(".Home-page-header .Search_bar .current-location").text(txts_hc)
			$(".current_location").text("当前: " + txts_hc)
			$(".located .wraps").find(".located_city .cityed").text(txts_hc)
		})
		if($(".history_location .wrap").children().length >= 2) {
			$(".history_location").css("display", "block")
		}
	})
	//点击弹出城市定位
	$(".Home-page-header .Search_bar .current-location").tap(function() {
		$(".city-position").css("left", "0")
		$(".city-position-header .title_bar .del").tap(function() {
			$(".city-position").css("left", tcw_ht + 5)
		})
	})

	//地图找房----------------------------------------------------------------------
	$(".Home-page-section .section-nav .map_house").tap(function() {
		$(".map-house").css("left", 0)
		$(".map-house-header .title_bar .return").tap(function() {
			$(".map-house").css("left", tcw_ht + 5)
		})
	})

	$(".map-house-wrapper .section-map-list .map-list-trand").tap(function() {
		if($(this).hasClass("click")) {
			$(this).removeClass("click")
			$(".map-house-wrapper .section-map-list .map-list-tranddata").removeClass("hide")
		} else {
			$(this).addClass("click")
			$(".map-house-wrapper .section-map-list .map-list-tranddata").addClass("hide")
		}
	})

	var map_housew = $(".map-house-wrapper").width()
	var map_house_index = 0;
	$(".map-house-section").tap(function() {
		map_house_index++;
		if(map_house_index % 2 == 1) {
			$(".map-house-wrapper .map-list-btn").addClass("listhide")
			$(".map-house-wrapper .map-list-trand").addClass("trandhide")
			$(".map-house-wrapper .map-list-location").addClass("locationhide")
			$(".map-house-wrapper .map-list-tranddata").addClass("tranddatahide")
			$(".map-house-wrapper .section-map-peripheral").addClass("peripheralhide")
		} else {
			$(".map-house-wrapper .map-list-btn").removeClass("listhide")
			$(".map-house-wrapper .map-list-trand").removeClass("trandhide")
			$(".map-house-wrapper .map-list-location").removeClass("locationhide")
			$(".map-house-wrapper .map-list-tranddata").removeClass("tranddatahide")
			$(".map-house-wrapper .section-map-peripheral").removeClass("peripheralhide")
		}
	})

	//周边列表
	$(".map-house-wrapper .section-map-list .map-list-btn .listli").tap(function() {
		$(".map-house-wrapper .section-map-list").css("left", -0.3 * map_housew)
		$(".map-house-wrapper .section-map-list").css("opacity", "0")
		$(".map-house-wrapper .section-map-peripheral").css("left", "0")
		$(".map-house-wrapper .peripheral-return").css("opacity", "1")
	})
	$(".map-house-wrapper .section-map-peripheral .peripheral-return").tap(function() {
		$(".map-house-wrapper .section-map-list").css("left", "0")
		$(".map-house-wrapper .section-map-list").css("opacity", "1")
		$(".map-house-wrapper .section-map-peripheral").css("left", map_housew)
		$(".map-house-wrapper .peripheral-return").css("opacity", "0")

	})
	$(".peripheral-li").tap(function() {
		$(this).addClass("on").siblings().removeClass("on")
	})

	//区域弹框和筛选弹框
	var htmlh = $("html").height()
	$(".map-house-wrapper .screen-push").css("bottom", -htmlh - 5)
	$(".map-house-wrapper .region-push").css("bottom", -htmlh - 5)
	//筛选弹框
	$(".map-house-wrapper .screen-push .select").tap(function() {
		$(this).addClass("selected")
	})
	$(".screen-push-footer .empty").tap(function() {
		$(".map-house-wrapper .screen-push .select").removeClass("selected")
		$(".section-map-list .map-list-btn .screenli .num").css("opacity", "0")
		screenS.refresh()
	})
	$(".screen-push-footer .determine").tap(function() {
		var len = $(".map-house-wrapper .screen-push .selected").length
		$(".map-house-wrapper .screen-push").css("bottom", -htmlh - 5)
		$(".section-map-list .map-list-btn .screenli .num").css("opacity", "1")
		$(".section-map-list .map-list-btn .screenli .num span").text(len)
		if($(".section-map-list .map-list-btn .screenli .num span").text() == "0") {
			$(".section-map-list .map-list-btn .screenli .num").css("opacity", "0")
		}
	})
	$(".screen-push-header .return").tap(function() {
		$(".map-house-wrapper .screen-push").css("bottom", -htmlh - 5)
	})
	$(".map-house-wrapper .section-map-list .map-list-btn .screenli").tap(function() {
		$(".map-house-wrapper .screen-push").css("bottom", "0")
	})

	//区域弹框
	var regionp = $(".region-push-section").height()
	$(".region-push-section-wrapper .regionlist").css("height", regionp)
	$(".region-push-section-wrapper .municipality").css("height", regionp)
	$(".region-push-section-wrapper .district").css("height", regionp)

	$(".region-push-footer .determine").tap(function() {
		$(".region-push").css("bottom", -htmlh - 5)
	})
	$(".region-push-header .return").tap(function() {
		$(".region-push").css("bottom", -htmlh - 5)
	})
	$(".map-house-wrapper .section-map-list .map-list-btn .regionli").tap(function() {
		$(".region-push").css("bottom", "0")
	})

	//区域分栏
	$(".region-push-section-wrapper .district .district-ul").css("display", "none")

	$(".region-push-section-wrapper .municipality-ul .municipality-li:first-child").addClass("confirmtwo")
	$(".region-push-section-wrapper .district-ul .district-li:first-child").addClass("confirmthree")
	$(".region-push-section-wrapper .regionlist-ul .regionlist-li").tap(function() {
		var index = $(this).index()
		$(".region-push-section-wrapper .regionlist-ul .regionlist-li").eq(index).addClass("confirmone").siblings().removeClass("confirmone")
		if(index == 1) {
			$(".region-push-section-wrapper .district-ul").css("display", "none")
			$(".region-push-section-wrapper .municipality-ul .municipality-li").removeClass("confirmtwo")
			$(".region-push-section-wrapper .district-ul .district-li").removeClass("confirmthree")
			$(".region-push-section-wrapper .municipality-ul .municipality-li:first-child").removeClass("confirmtwo")
		} else {
			$(".region-push-section-wrapper .municipality-ul").css("display", "block")
			$(".region-push-section-wrapper .municipality-ul .municipality-li:first-child").addClass("confirmtwo")
		}
	})

	$(".region-push-section-wrapper .municipality-ul .municipality-li").tap(function() {
		var index = $(this).index()
		var selectclick = $(".region-push-section-wrapper .district-ul").eq(index - 1).find(".district-li")
		selectclick.removeClass("confirmthree")
		$(".region-push-section-wrapper .district-ul").eq(index - 1).css("display", "block").siblings().css("display", "none")
		$(".region-push-section-wrapper .municipality-ul .municipality-li").eq(index).addClass("confirmtwo").siblings().removeClass("confirmtwo")
		$(".region-push-section-wrapper .district-ul").find(".district-li").removeClass("confirmthree")
		selectclick.tap(function() {
			var ind = $(this).index()
			selectclick.eq(ind).addClass("confirmthree")
			if(selectclick.eq(0).hasClass("confirmthree")) {
				$(this).siblings().removeClass("confirmthree")
			} else {
				selectclick.eq(ind).addClass("confirmthree")
			}
		})
	})

	$(".region-push-footer .determine").tap(function() {
		$(".map-house-wrapper .section-map-list .map-list-btn .regionli .num").css("opacity", "1")
		var len = $(".confirmthree").length
		$(".map-house-wrapper .section-map-list .map-list-btn .regionli .num span").text(len)
		if($(".map-house-wrapper .section-map-list .map-list-btn .regionli .num span").text() == "0") {
			$(".map-house-wrapper .section-map-list .map-list-btn .regionli .num").css("opacity", "0")
		}
	})

	$(".region-push-footer .empty").tap(function() {
		$(".map-house-wrapper .screen-push .select").removeClass("selected")
		$(".region-push-section-wrapper .municipality-ul .municipality-li").removeClass("confirmtwo")
		$(".region-push-section-wrapper .district-ul .district-li").removeClass("confirmthree")

	})

	//筛选滚动监听事件
	var screenS = new IScroll('.screen-push-section', {
		scrollbars: false,
		preventDefault: false,
		preventDefaultException: {
			tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/
		}
	})

	//房贷计算器----------------------------------------------------------------------
	//AF与CI版面交互
	$(".AF-money .AF-calculate-select span").tap(function() {
		$(this).addClass("select").siblings().removeClass("select")
	})
	$(".AF-area .AF-calculate-select span").tap(function() {
		$(this).addClass("select").siblings().removeClass("select")
	})
	$(".CL-area .CL-calculate-select span").tap(function() {
		$(this).addClass("select").siblings().removeClass("select")
	})
	$(".CL-money .CL-calculate-select span").tap(function() {
		$(this).addClass("select").siblings().removeClass("select")
	})
	$(".CombinationL .CombinationL-calculate-select span").tap(function() {
		$(this).addClass("select").siblings().removeClass("select")
	})
	$(".R-details .details-calculate-select span").tap(function() {
		$(this).addClass("select").siblings().removeClass("select")
		detailS.refresh()
	})

	//input获得焦点是光标始终在内容后面
	$(".loanHome-calculator-section .name").focus(function() {
		var t = $(this).val();
		$(this).css("color", "#6C7072")
		$(this).val("").focus().val(t);
	})

	//遮罩
	$(".loanHome-calculator-Mask").tap(function() {
		$(this).removeClass("show")
		$(".loanHome-calculator .bomb-wrap .frame").css("height", "0")
	})

	//计算类型弹框
	$(".loanHome-calculator .bomb-wrap .calculation-type li").tap(function() {
		$(".loanHome-calculator .bomb-wrap .calculation-type").css("height", "0")
		$(".loanHome-calculator-Mask").removeClass("show")
	})
	//购房类型
	$(".loanHome-calculator .bomb-wrap .house-type li").tap(function() {
		$(".loanHome-calculator .bomb-wrap .house-type").css("height", "0")
		$(".loanHome-calculator-Mask").removeClass("show")
	})
	//首付比重
	$(".loanHome-calculator .bomb-wrap .down-payments li").tap(function() {
		$(".loanHome-calculator .bomb-wrap .down-payments").css("height", "0")
		$(".loanHome-calculator-Mask").removeClass("show")
	})
	//公积金利率
	$(".loanHome-calculator .bomb-wrap .gong-rate li").tap(function() {
		$(".loanHome-calculator .bomb-wrap .gong-rate").css("height", "0")
		$(".loanHome-calculator-Mask").removeClass("show")
	})
	//贷款年限
	$(".loanHome-calculator .bomb-wrap .loan-term li").tap(function() {
		$(".loanHome-calculator .bomb-wrap .loan-term").css("height", "0")
		$(".loanHome-calculator-Mask").removeClass("show")
	})
	//住宅类型
	$(".loanHome-calculator .bomb-wrap .housing-type li").tap(function() {
		$(".loanHome-calculator .bomb-wrap .housing-type").css("height", "0")
		$(".loanHome-calculator-Mask").removeClass("show")
	})

	//----------------计算类型---------------------------------------------------
	//计算类型弹框
	$(".loanHome-calculator-section .credit .typebox .jisuan").tap(function() {
		var lih = $(".loanHome-calculator .bomb-wrap .calculation-type li").height()
		var lilen = $(".loanHome-calculator .bomb-wrap .calculation-type li").length
		$(".loanHome-calculator .bomb-wrap .calculation-type").css("height", lih * lilen)
		$(".loanHome-calculator-Mask").addClass("show")
		loanHomeS.refresh()
	})
	//计算类型选择
	$(".loanHome-calculator .bomb-wrap .calculation-type li").tap(function() {
		var ct_index = $(this).index()
		var ct_txt = $(this).text()
		if(!$(this).hasClass("select")) {
			$(".bomb-wrap .frame li").removeClass("select")
			$(this).addClass("select").siblings().removeClass("select")
			$(".loanHome-calculator-section .credit").eq(ct_index).css("display", "block").siblings().css("display", "none")
			$(".jisuan .returnright").html(ct_txt)
			$(".loanHome-calculator-section .null").html('')
			$(".loanHome-calculator-section .name").val('')
			$(".loanHome-calculator .bomb-wrap .calculation-type").css("height", "0")
			$(".loanHome-calculator-Mask").removeClass("show")
		}
		loanHomeS.refresh()
	})

	//----------------购房性质---------------------------------------------------
	//购房性质弹框
	$(".loanHome-calculator-section .credit .typebox .goufang").tap(function() {
		var lih = $(".loanHome-calculator .bomb-wrap .house-type li").height()
		var lilen = $(".loanHome-calculator .bomb-wrap .house-type li").length
		$(".loanHome-calculator .bomb-wrap .house-type").css("height", lih * lilen)
		$(".loanHome-calculator-Mask").addClass("show")
	})
	//购房性质选择
	$(".loanHome-calculator .bomb-wrap .house-type li").tap(function() {
		var ht_index = $(this).index()
		var ht_txt = $(this).text()
		$(this).addClass("select").siblings().removeClass("select")
		$(".goufang .returnright").html(ht_txt)
		$(".loanHome-calculator .bomb-wrap .house-type").css("height", "0")
		$(".loanHome-calculator-Mask").removeClass("show")
	})

	//----------------首付-------------------------------------------------
	//首付弹框
	$(".loanHome-calculator-section .credit .typebox .shoufu").tap(function() {
		var lih = $(".loanHome-calculator .bomb-wrap .down-payments li").height()
		var lilen = $(".loanHome-calculator .bomb-wrap .down-payments li").length
		$(".loanHome-calculator .bomb-wrap .down-payments").css("height", lih * lilen)
		$(".loanHome-calculator-Mask").addClass("show")
	})
	//首付选择
	$(".loanHome-calculator .bomb-wrap .down-payments li").tap(function() {
		var dp_index = $(this).index()
		var dp_txt = $(this).text()
		$(this).addClass("select").siblings().removeClass("select")
		$(".shoufu .returnright").html(dp_txt)
		$(".loanHome-calculator .bomb-wrap .down-payments").css("height", "0")
		$(".loanHome-calculator-Mask").removeClass("show")
	})

	//----------------公积金利率--------------------------------------------------
	//公积金利率弹框
	$(".loanHome-calculator-section .credit .typebox .gongjijin").tap(function() {
		var lih = $(".loanHome-calculator .bomb-wrap .gong-rate li").height()
		var lilen = $(".loanHome-calculator .bomb-wrap .gong-rate li").length
		$(".loanHome-calculator .bomb-wrap .gong-rate").css("height", lih * lilen)
		$(".loanHome-calculator-Mask").addClass("show")
	})
	//公积金利率选择
	$(".loanHome-calculator .bomb-wrap .gong-rate li").tap(function() {
		var gr_index = $(this).index()
		var gr_txt = $(this).text()
		$(this).addClass("select").siblings().removeClass("select")
		$(".gongjijin .returnright").html(gr_txt)
		$(".loanHome-calculator .bomb-wrap .gong-rate").css("height", "0")
		$(".loanHome-calculator-Mask").removeClass("show")
	})

	//----------------贷款年限------------------------------------------------
	//贷款年限弹框
	$(".loanHome-calculator-section .credit .typebox .nianxian").tap(function() {
		var lih = $(".loanHome-calculator .bomb-wrap .loan-term li").height()
		var lilen = $(".loanHome-calculator .bomb-wrap .loan-term li").length
		$(".loanHome-calculator .bomb-wrap .loan-term").css("height", lih * lilen)
		$(".loanHome-calculator-Mask").addClass("show")
	})
	//贷款年限选择
	$(".loanHome-calculator .bomb-wrap .loan-term li").tap(function() {
		var lt_index = $(this).index()
		var lt_txt = $(this).text()
		$(this).addClass("select").siblings().removeClass("select")
		$(".nianxian .returnright").html(lt_txt)
		$(".loanHome-calculator .bomb-wrap .loan-term").css("height", "0")
		$(".loanHome-calculator-Mask").removeClass("show")
	})

	//----------------商业贷利率------------------------------------------------
	//商业贷利率弹框
	$(".loanHome-calculator-section .credit .typebox .shanye").tap(function() {
		var lih = $(".loanHome-calculator .bomb-wrap .shan-rate li").height()
		var lilen = $(".loanHome-calculator .bomb-wrap .shan-rate li").length
		$(".loanHome-calculator .bomb-wrap .shan-rate").css("height", lih * lilen)
		$(".loanHome-calculator-Mask").addClass("show")
	})
	//商业贷利率选择
	$(".loanHome-calculator .bomb-wrap .shan-rate li").tap(function() {
		var sr_index = $(this).index()
		var sr_txt = $(this).text()
		$(this).addClass("select").siblings().removeClass("select")
		$(".shanye .returnright").html(sr_txt)
		$(".loanHome-calculator .bomb-wrap .shan-rate").css("height", "0")
		$(".loanHome-calculator-Mask").removeClass("show")
	})

	//----------------住宅类型------------------------------------------------
	//住宅类型弹框
	$(".loanHome-calculator-section .credit .typebox .zhuzhai").tap(function() {
		var lih = $(".loanHome-calculator .bomb-wrap .housing-type li").height()
		var lilen = $(".loanHome-calculator .bomb-wrap .housing-type li").length
		$(".loanHome-calculator .bomb-wrap .housing-type").css("height", lih * lilen)
		$(".loanHome-calculator-Mask").addClass("show")
	})
	//住宅类型选择
	$(".loanHome-calculator .bomb-wrap .housing-type li").tap(function() {
		var ht_index = $(this).index()
		var ht_txt = $(this).text()
		$(this).addClass("select").siblings().removeClass("select")
		$(".zhuzhai .returnright").html(ht_txt)
		$(".loanHome-calculator .bomb-wrap .housing-type").css("height", "0")
		$(".loanHome-calculator-Mask").removeClass("show")
	})

	//还款明细推行框
	var metaw = $("html").width()
	$(".loanHome-calculator-section .push").tap(function() {
		$(this).css("color", "#999999")
		$(".R-details").css("left", "0")
	})

	$(".R-details .return").tap(function() {
		$(".loanHome-calculator-section .push").css("color", "#0099eb")
		$(".R-details").css("left", metaw + 5)
	})

	//房贷计算器推行框
	$(".Home-page-section .section-nav-ul .calculator").tap(function() {
		$(".loanHome-calculator").css("left", "0")
	})

	$(".loanHome-calculator-header .return").tap(function() {
		$(".loanHome-calculator").css("left", metaw + 5)
	})

	var loanHomeS = new IScroll('.loanHome-calculator-section', {
		scrollbars: false,
		preventDefault: false,
		preventDefaultException: {
			tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/
		}
	})
	var R_detailsS = new IScroll('.R-details .details-wrapper-body', {
		scrollbars: false,
		preventDefault: false,
		preventDefaultException: {
			tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/
		}
	})

	//购房需求----------------------------------------------------------------------	
	var housing_demandS = new IScroll('.housing-demand-section', {
		scrollbars: false,
		preventDefault: false,
		preventDefaultException: {
			tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/
		}
	})
	var hd_index = 0;
	var bomb_formula = 0;
	$(".housing-demand-section .information_wrap li").tap(function() {
		hd_index = $(this).index();
		bomb_formula = $(".bomb_wrap .bomb").eq(hd_index);
		var bomb_formulah = bomb_formula.find(".d_content").height();
		bomb_formula.css("height", bomb_formulah);

		if($(this).hasClass("int")) {
			$(".housing-demand-Mask").removeClass("show")
		} else if(!$(this).hasClass("int")) {
			$(".housing-demand-Mask").addClass("show")
		}

		$(".bomb_wrap .bomb .d_content li").tap(function() {
			var ind = $(this).index();
			var txt = $(this).html();
			bomb_formula.css("height", "0");
			bomb_formula.find(".bomb_wrap .bomb .d_content li").eq(ind).addClass("select").siblings().removeClass("select");
			$(".housing-demand-Mask").removeClass("show")
			var ddd = $(".housing-demand-section .information_wrap li").eq(hd_index).find(".selecttxt");
			if(ddd) {
				ddd.remove()
				$(".housing-demand-section .information_wrap li").eq(hd_index).find(".returnright").prepend("<span class='selecttxt'>" + txt + "</span>")
			}
			hd_index = null;
			housing_demandS.refresh()
		})

		$(".bomb_wrap .selectmore span").tap(function() {
			if(!$(this).hasClass("on")) {
				var arr = $(this).text()
				$(this).addClass("on")
				$(".housing-demand-section .information_wrap li").eq(hd_index).find(".returnright .txt_wrap").prepend("<span class='selectwrap'>" + arr + "</span>");
			}
			var hhh = $(".housing-demand-section .information_wrap li").eq(hd_index).find(".returnright .txt_wrap").height()
			$(".housing-demand-section .information_wrap li").eq(hd_index).height(hhh)
			$(".housing-demand-section .information_wrap li").eq(hd_index).find(".returnright i").height(hhh)
			housing_demandS.refresh()
		})

		$(".bomb_wrap .btns .reset").tap(function() {
			$(this).parent().siblings(".selectmore").find("span").removeClass("on")
			$(".housing-demand-section .information_wrap li").eq(hd_index).find(".returnright .txt_wrap").html('')
			$(".housing-demand-section .information_wrap li").eq(hd_index).find(".returnright .txt_wrap").prepend("<div style='clear: both;'></div>");
			var liheight = $(".housing-demand-section .information_wrap li").eq(0).height()
			$(".housing-demand-section .information_wrap li").eq(hd_index).height(liheight)
			housing_demandS.refresh()
		})

		$(".bomb_wrap .btns .determine").tap(function() {
			$(".housing-demand-Mask").removeClass("show")
			bomb_formula.css("height", "0");
			housing_demandS.refresh()
		})

		$(".housing-demand-Mask").tap(function() {
			$(".housing-demand-Mask").removeClass("show")
			bomb_formula.css("height", "0");
			$(".click_sub .fail").removeClass("show")
			$(".click_sub .success").removeClass("show")
			index = null;
			housing_demandS.refresh()
		})
	})

	$(".housing-demand-section .information_wrap .name").focus(function() {
		$(this).css("color", "#6C7072")
		var t = $(this).val();
		$(this).val("").focus().val(t)
	})

	//提交按钮（随时改动）
	$(".housing-demand-footer .submit").tap(function() {
		$(".housing-demand-Mask").addClass("show")
		$(".click_sub .fail").addClass("show")

		$(".click_sub .fail .again").tap(function() {
			$(".housing-demand .click_sub .fail").removeClass("show")
			$(".housing-demand .click_sub .success").addClass("show")
		})

		$(".housing-demand .click_sub .success .know").tap(function() {
			$(".housing-demand .click_sub .success").removeClass("show")
			$(".housing-demand-Mask").removeClass("show")
		})

		$(".housing-demand-Mask").tap(function() {
			$(".housing-demand-Mask").removeClass("show")
			$(".click_sub .fail").removeClass("show")
			$(".click_sub .success").removeClass("show")
		})
	})

	$(".Home-page-section .section-nav-ul .housing_demand").tap(function() {
		$(".housing-demand").css("left", "0")
		$(".housing-demand-header .return").tap(function() {
			$(".housing-demand").css("left", tcw_ht + 5)
		})
	})

	//搜索页面----------------------------------------------------------------------

	var angle = 0;
	var spin = 0;
	var timer = null;
	var timer1 = null;
	var timer2 = null;
	var timer3 = null;
	var i = 0;
	setInterval(function() {
		angle += 4
		$(".search-page .section-loading i").css("transform", "rotate(" + angle + "deg)");
	}, 20)

	setInterval(function() {
		spin += 4
		$(".search-page .search-section-waiting i").css("transform", "rotate(" + spin + "deg)");
	}, 20)

	$(".search-page .hot-search-title .title-load").tap(function() {
		clearInterval(timer)
		timer = setInterval(function() {
			i += 4
			$(".search-page .hot-search-title .title-load").css("transform", "rotate(" + i + "deg)");
		}, 20);
	})

	//输入搜索
	$(".search-page .Search-form .Search-inpt").focus(function() {
		clearTimeout(timer1)
		clearTimeout(timer2)
		clearTimeout(timer3)
		$(".search-page .Search-inpt-wrapper .delete").css("display", "block")
		$(".search-page .search-section-state").addClass("switch").siblings(".page").removeClass("switch")
		stateS.refresh()
	})
	$(".search-page .Search-form .Search-inpt").blur(function() {
		$(".Search-inpt-wrapper .delete").css("display", "none")
		stateS.refresh()
	})
	$(".search-page .Search-inpt-wrapper .delete").tap(function() {
		$(".Search-form .Search-inpt").val("")
		$(".Search-form .Search-inpt").focus()
		stateS.refresh()
	})

	$(".search-page .Search-inpt-wrapper .fdj").tap(function() {
		var inpttxt = $(".search-page .Search-form .Search-inpt").val()
		if(!inpttxt == "") {
			var datatxt = "<li class='history-search-li'><span>" + inpttxt + "</span><span>/</span><span>楼盘</span></li>"
			$(".search-page .history-search-ul").prepend(datatxt)
			$(".search-page .search-section-state").removeClass("switch")
			$(".search-page .search-section-waiting").addClass("switch")
			timer1 = setTimeout(function() {
				$(".search-page .search-section-waiting").removeClass("switch")
				$(".search-page .search-section-fail").addClass("switch")
			}, 1500)
			$(".search-section-fail").tap(function() {
				$(".search-page .search-section-waiting").addClass("switch")
				$(".search-page .search-section-fail").removeClass("switch")
				timer2 = setTimeout(function() {
					$(".search-page .search-section-waiting").removeClass("switch")
					$(".search-page .search-section-none").addClass("switch")
				}, 1500)
			})
			$(".search-page .search-section-none").tap(function() {
				$(".search-page .search-section-waiting").addClass("switch")
				$(".search-page .search-section-none").removeClass("switch")
				timer3 = setTimeout(function() {
					$(".search-page .search-section-waiting").removeClass("switch")
					$(".search-page .search-section-wrapper").addClass("switch")
				}, 1500)

			})

			if($(".search-page .history-search-li").length > 0) {
				$(".search-page .title-Trash").css("display", "block")
				$(".search-page .history-search-no").css("display", "none")
			}
		}
	})

	//历史记录
	$(".search-page .title-Trash").tap(function() {
		$(".search-page .title-Trash").css("display", "none")
		$(".search-page .history-search-no").css("display", "block")
		$(".search-page .history-search-li").remove()
		stateS.refresh()
	})

	//点击热门搜索
	$(".search-page .hot-search-label span").tap(function() {
		var labeltxt = $(this).text()
		$(".search-page .Search-form .Search-inpt").val(labeltxt)
		$(".search-page .Search-form .Search-inpt").focus()
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

	var upD = null;
	searchS.on('scroll', function() {
		maxY = this.maxScrollY - this.y
		$(".search-section-box").on("touchstart", function(e) {
			if(e.cancelable) {
				if(!e.defaultPrevented) {
					e.preventDefault();
				}
			}
		})
		$(".search-page .search-section-box").on("touchmove", function(e) {
			clearTimeout(upD)
			$(".search-page .section-load").css("display", "block")
			$(".search-page .section-loading").css("display", "none")
			$(".search-page .section-loadnone").css("display", "none")
			if(maxY >= 40) {
				$(".search-page .section-load").text("松开加载更多...")
				$(".search-page .section-load").css("display", "block")
				$(".search-page .section-loadnone").css("display", "none")
			}
		})
		$(".search-page .search-section-box").on("touchend", function(e) {
			if($(".search-page .section-load").text() == "松开加载更多...") {
				$(".search-page .section-load").css("display", "none")
				$(".search-page .section-load").text("上拉加载更多")
				$(".search-page .section-loading").css("display", "block")
				upD = setTimeout(function() {
					$(".search-page .section-loading").css("display", "none")
					$(".search-page .section-loadnone").css("display", "block")
				}, 1500)
			}
		})
	});

})