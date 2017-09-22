function load() {
	
		var lr=$(".loading-record").height()
		var lrw=$(".loading-record-wrapper").height()
		var lr_lrw=lr-lrw
	loadingStep = 0; //加载状态0默认，1显示加载状态，2执行加载数据，只有当为0时才能再次加载，这是防止过快拉动刷新 

	//1. 导航栏--全部的上、下拉刷新数据
	$(".report-record-all .refreshing-record").hide();
	$(".report-record-all .loading-record .loading-record-wrapper").hide();

	var report_allS = new IScroll(".report-record-all", {
		scrollbars: false,
		mouseWheel: false,
		interactiveScrollbars: true,
		shrinkScrollbars: 'scale',
		fadeScrollbars: true,
		scrollY: true,
		probeType: 3,
		bindToWrapper: true,
	})

	report_allS.on('scroll', function() {
		if(loadingStep == 0 && !$(".report-record-all .refreshing-record").hasClass("refresh") && !$(".report-record-all .loading-record").hasClass("refresh")) {
			if(report_allS.y > 70) {
				//下拉刷新操作  
				$(".report-record-all .refresh-record").hide();
				$(".report-record-all .refreshing-record").addClass("refresh")
				$(".report-record-all .refreshing-record").show();
				$(".report-record-all .refreshing-record span").text("松手刷新");
				loadingStep = 1;
				report_allS.refresh();
			}
			if(report_allS.y < (report_allS.maxScrollY - 70)) {
				//上拉加载操作  
				$(".report-record-all .load-record").hide();
				$(".report-record-all .loading-record").addClass("refresh")
				$(".report-record-all .loading-record .loading-record-wrapper").show();
				$(".report-record-all .loading-record span").text("松手加载");
				loadingStep = 1;
				report_allS.refresh();
			}
			if(report_allS.y < (report_allS.maxScrollY - 5)) {
				$(".report-record-all .load-record").css("opacity","1")
			}
			if(report_allS.y > (report_allS.maxScrollY - 5)) {
				$(".report-record-all .load-record").css("opacity","0")
			}
		}
	})

	report_allS.on("scrollEnd", function() {
		if($(".report-record-all .refreshing-record").hasClass("refresh")) { //下拉刷新操作 
			$(".report-record-all .refreshing-record span").text("刷新中...");
			$(".report-record-all .refreshing-record").removeClass("refresh")
			loadingStep = 2;
			all_pullDownAction();
		}
		if($(".report-record-all .loading-record").hasClass("refresh")) { //下拉刷新操作 
			$(".report-record-all .loading-record span").text("努力加载中...");
			$(".report-record-all .loading-record").removeClass("refresh")
			loadingStep = 2;
			all_pullUpAction();
		}
	})

	function all_pullDownAction() {
		var sectionh = 0;
		var allh = 0;
		setTimeout(function() {
			var li, i;
			for(i = 0, li = ""; i < 3; i++) {
				li += "<li class='record-content-li yidaikan'><div class='head-portrait'><img src='img/img.png' /></div><div class='user-name'><p class='name'>刘男士</p><p class='property'>三亚-海豚湾海景房</p></div><div class='user-phone'><p class='phone'>12345678901</p><p class='daikan'><span class='state'>带看确认</span><span class='state-txt'>（保护期剩余30天）</span></p></div></li>";
			}
			$('.report-record-all .record-content').prepend(li);
			$(".report-record-all .refreshing-record").hide();
			report_allS.refresh();
			loadingStep = 0;
			$(".report-record-all .refresh-record").show();

			sectionh = $(".report-record-section").height()
			allh = $(".report-record-all .report-record-wrapper .record-content-wrapper .record-content").height()
			if(allh <= sectionh) {
				report_allS.refresh();
				$(".report-record-all .report-record-wrapper .record-content-wrapper").height(sectionh + 1-lr_lrw)
			}
		 	else if(allh > sectionh) {
				$(".report-record-all .report-record-wrapper .record-content-wrapper").height(allh)
				report_allS.refresh();
			}

		}, 1000);
	}

	function all_pullUpAction() {
		var sectionh = 0;
		var allh = 0;
		setTimeout(function() {
			var li, i;
			for(i = 0, li = ""; i < 3; i++) {
				li += "<li class='record-content-li yidaikan'><div class='head-portrait'><img src='img/img.png' /></div><div class='user-name'><p class='name'>刘男士</p><p class='property'>三亚-海豚湾海景房</p></div><div class='user-phone'><p class='phone'>12345678901</p><p class='daikan'><span class='state'>带看确认</span><span class='state-txt'>（保护期剩余30天）</span></p></div></li>";
			}
			$('.report-record-all .record-content').append(li);
			$(".report-record-all .loading-record .loading-record-wrapper").hide();
			report_allS.refresh();
			loadingStep = 0;
			$(".report-record-all .load-record").show();

			sectionh = $(".report-record-section").height()
			allh = $(".report-record-all .report-record-wrapper .record-content-wrapper .record-content").height()
			if(allh <= sectionh) {
				report_allS.refresh();
				$(".report-record-all .report-record-wrapper .record-content-wrapper").height(sectionh + 1-lr_lrw)
			}
			else if(allh > sectionh) {
				$(".report-record-all .report-record-wrapper .record-content-wrapper").height(allh)
				report_allS.refresh();
			}
		}, 1000);
	}

	//2. 导航栏--已报备的上、下拉刷新数据
	$(".report-record-yibaobei .refreshing-record").hide();
	$(".report-record-yibaobei .loading-record .loading-record-wrapper").hide();

	var report_yibaobeiS = new IScroll(".report-record-yibaobei", {
		scrollbars: false,
		mouseWheel: false,
		interactiveScrollbars: true,
		shrinkScrollbars: 'scale',
		fadeScrollbars: true,
		scrollY: true,
		probeType: 3,
		bindToWrapper: true,
	})

	report_yibaobeiS.on('scroll', function() {
		if(loadingStep == 0 && !$(".report-record-yibaobei .refreshing-record").hasClass("refresh") && !$(".report-record-yibaobei .loading-record").hasClass("refresh")) {
			if(report_yibaobeiS.y > 70) {
				//下拉刷新操作  
				$(".report-record-yibaobei .refresh-record").hide();
				$(".report-record-yibaobei .refreshing-record").addClass("refresh")
				$(".report-record-yibaobei .refreshing-record").show();
				$(".report-record-yibaobei .refreshing-record span").text("松手刷新");
				loadingStep = 1;
				report_yibaobeiS.refresh();
			}
			if(report_yibaobeiS.y < (report_yibaobeiS.maxScrollY - 70)) {
				//上拉加载操作  
				$(".report-record-yibaobei .load-record").hide();
				$(".report-record-yibaobei .loading-record").addClass("refresh")
				$(".report-record-yibaobei .loading-record .loading-record-wrapper").show();
				$(".report-record-yibaobei .loading-record span").text("松手加载");
				loadingStep = 1;
				report_yibaobeiS.refresh();
			}
			if(report_yibaobeiS.y < (report_yibaobeiS.maxScrollY - 5)) {
				$(".report-record-yibaobei .load-record").css("opacity","1")
			}
			if(report_yibaobeiS.y > (report_yibaobeiS.maxScrollY - 5)) {
				$(".report-record-yibaobei .load-record").css("opacity","0")
			}
		}
	})

	report_yibaobeiS.on("scrollEnd", function() {
		if($(".report-record-yibaobei .refreshing-record").hasClass("refresh")) { //下拉刷新操作 
			$(".report-record-yibaobei .refreshing-record span").text("刷新中...");
			$(".report-record-yibaobei .refreshing-record").removeClass("refresh")
			loadingStep = 2;
			yibaobei_pullDownAction();
		}
		if($(".report-record-yibaobei .loading-record").hasClass("refresh")) { //下拉刷新操作 
			$(".report-record-yibaobei .loading-record span").text("努力加载中...");
			$(".report-record-yibaobei .loading-record").removeClass("refresh")
			loadingStep = 2;
			yibaobei_pullUpAction();
		}
	})

	function yibaobei_pullDownAction() {
		var sectionh = 0;
		var yibaobeih = 0;
		setTimeout(function() {
			var li, i;
			for(i = 0, li = ""; i < 3; i++) {
				li += "<li class='record-content-li yibaobei'><div class='head-portrait'><img src='img/img.png' /></div><div class='user-name'><p class='name'>刘男士</p><p class='property'>三亚-海豚湾海景房</p></div><div class='user-phone'><p class='phone'>12345678901</p><p class='queren'><span class='state'>报备确认</span><span class='state-txt'>（报备已过期）</span></p></div></li>";
			}
			$('.report-record-yibaobei .record-content').prepend(li);
			$(".report-record-yibaobei .refreshing-record").hide();
			report_yibaobeiS.refresh();
			loadingStep = 0;
			$(".report-record-yibaobei .refresh-record").show();
			
			sectionh = $(".report-record-section").height()
			yibaobeih = $(".report-record-yibaobei .report-record-wrapper .record-content-wrapper .record-content").height()
			if(yibaobeih <= sectionh) {
				report_yibaobeiS.refresh();
				$(".report-record-yibaobei .report-record-wrapper .record-content-wrapper").height(sectionh + 1-lr_lrw)
			}
		 	else if(yibaobeih > sectionh) {
				$(".report-record-yibaobei .report-record-wrapper .record-content-wrapper").height(yibaobeih)
				report_yibaobeiS.refresh();
			}
		}, 1000);
	}

	function yibaobei_pullUpAction() {
		var sectionh = 0;
		var yibaobeih = 0;
		setTimeout(function() {
			var li, i;
			for(i = 0, li = ""; i < 3; i++) {
				li += "<li class='record-content-li yibaobei'><div class='head-portrait'><img src='img/img.png' /></div><div class='user-name'><p class='name'>刘男士</p><p class='property'>三亚-海豚湾海景房</p></div><div class='user-phone'><p class='phone'>12345678901</p><p class='queren'><span class='state'>报备确认</span><span class='state-txt'>（报备已过期）</span></p></div></li>";
			}
			$('.report-record-yibaobei .record-content').append(li);
			$(".report-record-yibaobei .loading-record .loading-record-wrapper").hide();
			report_yibaobeiS.refresh();
			loadingStep = 0;
			$(".report-record-yibaobei .load-record").show();
			
			sectionh = $(".report-record-section").height()
			yibaobeih = $(".report-record-yibaobei .report-record-wrapper .record-content-wrapper .record-content").height()
			if(yibaobeih <= sectionh) {
				report_yibaobeiS.refresh();
				$(".report-record-yibaobei .report-record-wrapper .record-content-wrapper").height(sectionh + 1-lr_lrw)
			}
		 	else if(yibaobeih > sectionh) {
				$(".report-record-yibaobei .report-record-wrapper .record-content-wrapper").height(yibaobeih)
				report_yibaobeiS.refresh();
			}
		}, 1000);
	}

	//3. 导航栏--已带看的上、下拉刷新数据
	$(".report-record-yidaikan .refreshing-record").hide();
	$(".report-record-yidaikan .loading-record .loading-record-wrapper").hide();

	var report_yidaikanS = new IScroll(".report-record-yidaikan", {
		scrollbars: false,
		mouseWheel: false,
		interactiveScrollbars: true,
		shrinkScrollbars: 'scale',
		fadeScrollbars: true,
		scrollY: true,
		probeType: 3,
		bindToWrapper: true,
	})

	report_yidaikanS.on('scroll', function() {
		if(loadingStep == 0 && !$(".report-record-yidaikan .refreshing-record").hasClass("refresh") && !$(".report-record-yidaikan .loading-record").hasClass("refresh")) {
			if(report_yidaikanS.y > 70) {
				//下拉刷新操作  
				$(".report-record-yidaikan .refresh-record").hide();
				$(".report-record-yidaikan .refreshing-record").addClass("refresh")
				$(".report-record-yidaikan .refreshing-record").show();
				$(".report-record-yidaikan .refreshing-record span").text("松手刷新");
				loadingStep = 1;
				report_yidaikanS.refresh();
			}
			if(report_yidaikanS.y < (report_yidaikanS.maxScrollY - 70)) {
				//上拉加载操作  
				$(".report-record-yidaikan .load-record").hide();
				$(".report-record-yidaikan .loading-record").addClass("refresh")
				$(".report-record-yidaikan .loading-record .loading-record-wrapper").show();
				$(".report-record-yidaikan .loading-record span").text("松手加载");
				loadingStep = 1;
				report_yidaikanS.refresh();
			}
			if(report_yidaikanS.y < (report_yidaikanS.maxScrollY - 5)) {
				$(".report-record-yidaikan .load-record").css("opacity","1")
			}
			if(report_yidaikanS.y > (report_yidaikanS.maxScrollY - 5)) {
				$(".report-record-yidaikan .load-record").css("opacity","0")
			}
		}
	})

	report_yidaikanS.on("scrollEnd", function() {
		if($(".report-record-yidaikan .refreshing-record").hasClass("refresh")) { //下拉刷新操作 
			$(".report-record-yidaikan .refreshing-record span").text("刷新中...");
			$(".report-record-yidaikan .refreshing-record").removeClass("refresh")
			loadingStep = 2;
			yidaikan_pullDownAction();
		}
		if($(".report-record-yidaikan .loading-record").hasClass("refresh")) { //下拉刷新操作 
			$(".report-record-yidaikan .loading-record span").text("努力加载中...");
			$(".report-record-yidaikan .loading-record").removeClass("refresh")
			loadingStep = 2;
			yidaikan_pullUpAction();
		}
	})

	function yidaikan_pullDownAction() {
		var sectionh = 0;
		var yidaikanh = 0;
		setTimeout(function() {
			var li, i;
			for(i = 0, li = ""; i < 3; i++) {
				li += "<li class='record-content-li yidaikan'><div class='head-portrait'><img src='img/img.png' /></div><div class='user-name'><p class='name'>刘男士</p><p class='property'>三亚-海豚湾海景房</p></div><div class='user-phone'><p class='phone'>12345678901</p><p class='daikan'><span class='state'>带看确认</span><span class='state-txt'>（保护期剩余30天）</span></p></div></li>";
			}
			$('.report-record-yidaikan .record-content').prepend(li);
			$(".report-record-yidaikan .refreshing-record").hide();
			report_yidaikanS.refresh();
			loadingStep = 0;
			$(".report-record-yidaikan .refresh-record").show();
			
			sectionh = $(".report-record-section").height()
			yidaikanh = $(".report-record-yidaikan .report-record-wrapper .record-content-wrapper .record-content").height()
			if(yidaikanh <= sectionh) {
				report_yidaikanS.refresh();
				$(".report-record-yidaikan .report-record-wrapper .record-content-wrapper").height(sectionh + 1-lr_lrw)
			}
		 	else if(yidaikanh > sectionh) {
				$(".report-record-yidaikan .report-record-wrapper .record-content-wrapper").height(yidaikanh)
				report_yidaikanS.refresh();
			}
		}, 1000);
	}

	function yidaikan_pullUpAction() {
		var sectionh = 0;
		var yidaikanh = 0;
		setTimeout(function() {
			var li, i;
			for(i = 0, li = ""; i < 3; i++) {
				li += "<li class='record-content-li yidaikan'><div class='head-portrait'><img src='img/img.png' /></div><div class='user-name'><p class='name'>刘男士</p><p class='property'>三亚-海豚湾海景房</p></div><div class='user-phone'><p class='phone'>12345678901</p><p class='daikan'><span class='state'>带看确认</span><span class='state-txt'>（保护期剩余30天）</span></p></div></li>";
			}
			$('.report-record-yidaikan .record-content').append(li);
			$(".report-record-yidaikan .loading-record .loading-record-wrapper").hide();
			report_yidaikanS.refresh();
			loadingStep = 0;
			$(".report-record-yidaikan .load-record").show();
			
			sectionh = $(".report-record-section").height()
			yidaikanh = $(".report-record-yidaikan .report-record-wrapper .record-content-wrapper .record-content").height()
			if(yidaikanh <= sectionh) {
				report_yidaikanS.refresh();
				$(".report-record-yidaikan .report-record-wrapper .record-content-wrapper").height(sectionh + 1-lr_lrw)
			}
		 	else if(yidaikanh > sectionh) {
				$(".report-record-yidaikan .report-record-wrapper .record-content-wrapper").height(yidaikanh)
				report_yidaikanS.refresh();
			}
		}, 1000);
	}

	//4. 导航栏--已成交的上、下拉刷新数据
	$(".report-record-yichengjiao .refreshing-record").hide();
	$(".report-record-yichengjiao .loading-record .loading-record-wrapper").hide();

	var report_yichengjiaoS = new IScroll(".report-record-yichengjiao", {
		scrollbars: false,
		mouseWheel: false,
		interactiveScrollbars: true,
		shrinkScrollbars: 'scale',
		fadeScrollbars: true,
		scrollY: true,
		probeType: 3,
		bindToWrapper: true,
	})

	report_yichengjiaoS.on('scroll', function() {
		if(loadingStep == 0 && !$(".report-record-yichengjiao .refreshing-record").hasClass("refresh") && !$(".report-record-yichengjiao .loading-record").hasClass("refresh")) {
			if(report_yichengjiaoS.y > 70) {
				//下拉刷新操作  
				$(".report-record-yichengjiao .refresh-record").hide();
				$(".report-record-yichengjiao .refreshing-record").addClass("refresh")
				$(".report-record-yichengjiao .refreshing-record").show();
				$(".report-record-yichengjiao .refreshing-record span").text("松手刷新");
				loadingStep = 1;
				report_yichengjiaoS.refresh();
			}
			if(report_yichengjiaoS.y < (report_yichengjiaoS.maxScrollY - 70)) {
				//上拉加载操作  
				$(".report-record-yichengjiao .load-record").hide();
				$(".report-record-yichengjiao .loading-record").addClass("refresh")
				$(".report-record-yichengjiao .loading-record .loading-record-wrapper").show();
				$(".report-record-yichengjiao .loading-record span").text("松手加载");
				loadingStep = 1;
				report_yichengjiaoS.refresh();
			}
			if(report_yichengjiaoS.y < (report_yichengjiaoS.maxScrollY - 5)) {
				$(".report-record-yichengjiao .load-record").css("opacity","1")
			}
			if(report_yichengjiaoS.y > (report_yichengjiaoS.maxScrollY - 5)) {
				$(".report-record-yichengjiao .load-record").css("opacity","0")
			}
		}
	})

	report_yichengjiaoS.on("scrollEnd", function() {
		if($(".report-record-yichengjiao .refreshing-record").hasClass("refresh")) { //下拉刷新操作 
			$(".report-record-yichengjiao .refreshing-record span").text("刷新中...");
			$(".report-record-yichengjiao .refreshing-record").removeClass("refresh")
			loadingStep = 2;
			yichengjiao_pullDownAction();
		}
		if($(".report-record-yichengjiao .loading-record").hasClass("refresh")) { //下拉刷新操作 
			$(".report-record-yichengjiao .loading-record span").text("努力加载中...");
			$(".report-record-yichengjiao .loading-record").removeClass("refresh")
			loadingStep = 2;
			yichengjiao_pullUpAction();
		}
	})

	function yichengjiao_pullDownAction() {
		var sectionh = 0;
		var yichengjiaoh = 0;
		setTimeout(function() {
			var li, i;
			for(i = 0, li = ""; i < 3; i++) {
				li += "<li class='record-content-li yichengjiao'><div class='head-portrait'><img src='img/img.png' /></div><div class='user-name'><p class='name'>刘男士</p><p class='property'>三亚-海豚湾海景房</p></div><div class='user-phone'><p class='phone'>12345678901</p><p class='chengjiao'><span class='state'>成交客户</span><span class='state-txt'></span></p></div></li>";
			}
			$('.report-record-yichengjiao .record-content').prepend(li);
			$(".report-record-yichengjiao .refreshing-record").hide();
			report_yichengjiaoS.refresh();
			loadingStep = 0;
			$(".report-record-yichengjiao .refresh-record").show();
			
			sectionh = $(".report-record-section").height()
			yichengjiaoh = $(".report-record-yichengjiao .report-record-wrapper .record-content-wrapper .record-content").height()
			if(yichengjiaoh <= sectionh) {
				report_yichengjiaoS.refresh();
				$(".report-record-yichengjiao .report-record-wrapper .record-content-wrapper").height(sectionh + 1-lr_lrw)
			}
		 	else if(yichengjiaoh > sectionh) {
				$(".report-record-yichengjiao .report-record-wrapper .record-content-wrapper").height(yichengjiaoh)
				report_yichengjiaoS.refresh();
			}
		}, 1000);
	}

	function yichengjiao_pullUpAction() {
		var sectionh = 0;
		var yichengjiaoh = 0;
		setTimeout(function() {
			var li, i;
			for(i = 0, li = ""; i < 3; i++) {
				li += "<li class='record-content-li yichengjiao'><div class='head-portrait'><img src='img/img.png' /></div><div class='user-name'><p class='name'>刘男士</p><p class='property'>三亚-海豚湾海景房</p></div><div class='user-phone'><p class='phone'>12345678901</p><p class='chengjiao'><span class='state'>成交客户</span><span class='state-txt'></span></p></div></li>";
			}
			$('.report-record-yichengjiao .record-content').append(li);
			$(".report-record-yichengjiao .loading-record .loading-record-wrapper").hide();
			report_yichengjiaoS.refresh();
			loadingStep = 0;
			$(".report-record-yichengjiao .load-record").show();
			
			sectionh = $(".report-record-section").height()
			yichengjiaoh = $(".report-record-yichengjiao .report-record-wrapper .record-content-wrapper .record-content").height()
			if(yichengjiaoh <= sectionh) {
				report_yichengjiaoS.refresh();
				$(".report-record-yichengjiao .report-record-wrapper .record-content-wrapper").height(sectionh + 1-lr_lrw)
			}
		 	else if(yichengjiaoh > sectionh) {
				$(".report-record-yichengjiao .report-record-wrapper .record-content-wrapper").height(yichengjiaoh)
				report_yichengjiaoS.refresh();
			}
		}, 1000);
	}

	//5. 导航栏--无效客户的上、下拉刷新数据
	$(".report-record-wuxiao .refreshing-record").hide();
	$(".report-record-wuxiao .loading-record .loading-record-wrapper").hide();

	var report_wuxiaoS = new IScroll(".report-record-wuxiao", {
		scrollbars: false,
		mouseWheel: false,
		interactiveScrollbars: true,
		shrinkScrollbars: 'scale',
		fadeScrollbars: true,
		scrollY: true,
		probeType: 3,
		bindToWrapper: true,
	})

	report_wuxiaoS.on('scroll', function() {
		if(loadingStep == 0 && !$(".report-record-wuxiao .refreshing-record").hasClass("refresh") && !$(".report-record-wuxiao .loading-record").hasClass("refresh")) {
			if(report_wuxiaoS.y > 70) {
				//下拉刷新操作  
				$(".report-record-wuxiao .refresh-record").hide();
				$(".report-record-wuxiao .refreshing-record").addClass("refresh")
				$(".report-record-wuxiao .refreshing-record").show();
				$(".report-record-wuxiao .refreshing-record span").text("松手刷新");
				loadingStep = 1;
				report_wuxiaoS.refresh();
			}
			if(report_wuxiaoS.y < (report_wuxiaoS.maxScrollY - 70)) {
				//上拉加载操作  
				$(".report-record-wuxiao .load-record").hide();
				$(".report-record-wuxiao .loading-record").addClass("refresh")
				$(".report-record-wuxiao .loading-record .loading-record-wrapper").show();
				$(".report-record-wuxiao .loading-record span").text("松手加载");
				loadingStep = 1;
				report_wuxiaoS.refresh();
			}
			if(report_wuxiaoS.y < (report_wuxiaoS.maxScrollY - 5)) {
				$(".report-record-wuxiao .load-record").css("opacity","1")
			}
			if(report_wuxiaoS.y > (report_wuxiaoS.maxScrollY - 5)) {
				$(".report-record-wuxiao .load-record").css("opacity","0")
			}
		}
	})

	report_wuxiaoS.on("scrollEnd", function() {
		if($(".report-record-wuxiao .refreshing-record").hasClass("refresh")) { //下拉刷新操作 
			$(".report-record-wuxiao .refreshing-record span").text("刷新中...");
			$(".report-record-wuxiao .refreshing-record").removeClass("refresh")
			loadingStep = 2;
			wuxiao_pullDownAction();
		}
		if($(".report-record-wuxiao .loading-record").hasClass("refresh")) { //下拉刷新操作 
			$(".report-record-wuxiao .loading-record span").text("努力加载中...");
			$(".report-record-wuxiao .loading-record").removeClass("refresh")
			loadingStep = 2;
			wuxiao_pullUpAction();
		}
	})

	function wuxiao_pullDownAction() {
		var sectionh = 0;
		var wuxiaoh = 0;
		setTimeout(function() {
			var li, i;
			for(i = 0, li = ""; i < 3; i++) {
				li += "<li class='record-content-li wuxiao'><div class='head-portrait'><img src='img/img.png' /></div><div class='user-name'><p class='name'>刘男士</p><p class='property'>三亚-海豚湾海景房</p></div><div class='user-phone'><p class='phone'>12345678901</p><p class='wuxiao'><span class='state'>无效客户</span><span class='state-txt'></span></p></div></li>";
			}
			$('.report-record-wuxiao .record-content').prepend(li);
			$(".report-record-wuxiao .refreshing-record").hide();
			report_wuxiaoS.refresh();
			loadingStep = 0;
			$(".report-record-wuxiao .refresh-record").show();
			
			sectionh = $(".report-record-section").height()
			wuxiaoh = $(".report-record-wuxiao .report-record-wrapper .record-content-wrapper .record-content").height()
			if(wuxiaoh <= sectionh) {
				report_wuxiaoS.refresh();
				$(".report-record-wuxiao .report-record-wrapper .record-content-wrapper").height(sectionh + 1-lr_lrw)
			}
		 	else if(wuxiaoh > sectionh) {
				$(".report-record-wuxiao .report-record-wrapper .record-content-wrapper").height(wuxiaoh)
				report_wuxiaoS.refresh();
			}
		}, 1000);
	}

	function wuxiao_pullUpAction() {
		var sectionh = 0;
		var wuxiaoh = 0;
		setTimeout(function() {
			var li, i;
			for(i = 0, li = ""; i < 3; i++) {
				li += "<li class='record-content-li wuxiao'><div class='head-portrait'><img src='img/img.png' /></div><div class='user-name'><p class='name'>刘男士</p><p class='property'>三亚-海豚湾海景房</p></div><div class='user-phone'><p class='phone'>12345678901</p><p class='wuxiao'><span class='state'>无效客户</span><span class='state-txt'></span></p></div></li>";
			}
			$('.report-record-wuxiao .record-content').append(li);
			$(".report-record-wuxiao .loading-record .loading-record-wrapper").hide();
			report_wuxiaoS.refresh();
			loadingStep = 0;
			$(".report-record-wuxiao .load-record").show();
			
			sectionh = $(".report-record-section").height()
			wuxiaoh = $(".report-record-wuxiao .report-record-wrapper .record-content-wrapper .record-content").height()
			if(wuxiaoh <= sectionh) {
				report_wuxiaoS.refresh();
				$(".report-record-wuxiao .report-record-wrapper .record-content-wrapper").height(sectionh + 1-lr_lrw)
			}
		 	else if(wuxiaoh > sectionh) {
				$(".report-record-wuxiao .report-record-wrapper .record-content-wrapper").height(wuxiaoh)
				report_wuxiaoS.refresh();
			}
		}, 1000);
	}
	document.addEventListener('touchmove', function(e) {
		e.preventDefault();
	}, false);
}


var lr=$(".loading-record").height()
var lrw=$(".loading-record-wrapper").height()
var lr_lrw=lr-lrw
var section_h = $(".report-record-section").height()
//nav-全部 记录没有一页时 自适应回弹上拉加载。。。。
	var all_h = $(".report-record-all .report-record-wrapper .record-content-wrapper .record-content").height()
	if(all_h <= section_h) {
		$(".report-record-all .report-record-wrapper .record-content-wrapper").height(section_h + 1-lr_lrw)
	}
	else if(all_h > section_h) {
		$(".report-record-all .report-record-wrapper .record-content-wrapper").height(all_h)
		report_allS.refresh();
	}
//nav-已报备 记录没有一页时 自适应回弹上拉加载。。。。
	var yibaobei_h = $(".report-record-yibaobei .report-record-wrapper .record-content-wrapper .record-content").height()
	if(yibaobei_h <= section_h) {
		$(".report-record-yibaobei .report-record-wrapper .record-content-wrapper").height(section_h + 1-lr_lrw)
	}
	else if(yibaobei_h > section_h) {
		$(".report-record-yibaobei .report-record-wrapper .record-content-wrapper").height(yibaobei_h)
		report_yibaobeiS.refresh();
	}
//nav-已带看 记录没有一页时 自适应回弹上拉加载。。。。
	var yidaikan_h = $(".report-record-yidaikan .report-record-wrapper .record-content-wrapper .record-content").height()
	if(yidaikan_h <= section_h) {
		$(".report-record-yidaikan .report-record-wrapper .record-content-wrapper").height(section_h + 1-lr_lrw)
	}
	else if(yidaikan_h > section_h) {
		$(".report-record-yidaikan .report-record-wrapper .record-content-wrapper").height(yidaikan_h)
		report_allS.refresh();
	}
//nav-已成交 记录没有一页时 自适应回弹上拉加载。。。。
	var yichengjiao_h = $(".report-record-yichengjiao .report-record-wrapper .record-content-wrapper .record-content").height()
	if(yichengjiao_h <= section_h) {
		$(".report-record-yichengjiao .report-record-wrapper .record-content-wrapper").height(section_h + 1-lr_lrw)
	}
	else if(yichengjiao_h > section_h) {
		$(".report-record-yichengjiao .report-record-wrapper .record-content-wrapper").height(yichengjiao_h)
		report_allS.refresh();
	}
//nav-无效客户 记录没有一页时 自适应回弹上拉加载。。。。
	var wuxiao_h = $(".report-record-wuxiao .report-record-wrapper .record-content-wrapper .record-content").height()
	if(wuxiao_h <= section_h) {
		$(".report-record-wuxiao .report-record-wrapper .record-content-wrapper").height(section_h + 1-lr_lrw)
	}
	else if(wuxiao_h > section_h) {
		$(".report-record-wuxiao .report-record-wrapper .record-content-wrapper").height(wuxiao_h)
		report_allS.refresh();
	}

$(function() {
	$(".report-record-section").bind("touchend", function() {
		var index = reportSwiper.realIndex
		$(".report-record-nav li").eq(index).addClass("select").siblings().removeClass("select")
	})

	$(".report-record-nav li").tap(function() {
		var index = $(this).index()
		reportSwiper.slideTo(index, 300, false)
		$(this).addClass("select").siblings().removeClass("select")
	})
	

	var all_li=$(".report-record-all .record-content li").length
	if(all_li==0){
		$(".report-record-section").css("display","none")
		$(".report-record-nav").css("display","none")
		$(".report-record-load-failed").css("display","none")
		$(".no-record").css("display","block")
	}
	
	
})