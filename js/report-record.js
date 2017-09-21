$(function() {

})

function load() {
	loadingStep = 0; //加载状态0默认，1显示加载状态，2执行加载数据，只有当为0时才能再次加载，这是防止过快拉动刷新 
	
//1. 导航栏--全部的上、下拉刷新数据
	$(".refreshing-record").hide();
	$(".loading-record").hide();
	
	var report_recordS = new IScroll(".report-record-section", {
		scrollbars: true,
		mouseWheel: false,
		interactiveScrollbars: true,
		shrinkScrollbars: 'scale',
		fadeScrollbars: true,
		scrollY: true,
		probeType: 3,
		bindToWrapper: true,
	})

	report_recordS.on('scroll', function() {
		if(report_recordS.y >= 0 && report_recordS.y <= 10) {
			$('.refresh-record-wrapper span').text("")
		}
		if(report_recordS.y > 10 && report_recordS.y <= 25) {
			$('.refresh-record-wrapper span').text("下")
		}
		if(report_recordS.y > 25 && report_recordS.y <= 40) {
			$('.refresh-record-wrapper span').text("下拉")
		}
		if(report_recordS.y > 40 && report_recordS.y <= 55) {
			$('.refresh-record-wrapper span').text("下拉刷")
		}
		if(report_recordS.y > 55 && report_recordS.y <= 70) {
			$('.refresh-record-wrapper span').text("下拉刷新")
		}
		if(loadingStep == 0 && !$(".refreshing-record").hasClass("refresh") && !$(".loading-record").hasClass("refresh")) {
			if(report_recordS.y > 70) {
				//下拉刷新操作  
				$(".refresh-record").hide();
				$(".refreshing-record").addClass("refresh")
				$(".refreshing-record").show();
				$(".refreshing-record span").text("松手刷新");
				loadingStep = 1;
				report_recordS.refresh();
			}
			if(report_recordS.y < (report_recordS.maxScrollY - 80)) {
				//上拉加载操作  
				$(".load-record").hide();
				$(".loading-record").addClass("refresh")
				$(".loading-record").show();
				$(".loading-record span").text("松手加载");
				loadingStep = 1;
				report_recordS.refresh();
			}
		}
	})

	report_recordS.on("scrollEnd", function() {
		if($(".refreshing-record").hasClass("refresh")) { //下拉刷新操作 
			$(".refreshing-record span").text("刷新中...");
			$(".refreshing-record").removeClass("refresh")
			loadingStep = 2;
			pullDownAction();
		}
		if($(".loading-record").hasClass("refresh")) { //下拉刷新操作 
			$(".loading-record span").text("努力加载中...");
			$(".loading-record").removeClass("refresh")
			loadingStep = 2;
			pullUpAction();
		}
	})

	function pullDownAction() {
		setTimeout(function() {
			var li, i;
			for(i = 0, li = ""; i < 3; i++) {
				li += "<li class='record-content-li'><div class='head-portrait'><img src='img/img.png' /></div><div class='user-name'><p class='name'>刘男士</p><p class='property'>三亚-海豚湾海景房</p></div><div class='user-phone'><p class='phone'>12345678901</p><p class='daikan'><span class='state'>带看确认</span><span class='state-txt'>（保护期剩余30天）</span></p></div></li>";
			}
			$('.record-content').prepend(li);
			$(".refreshing-record").hide();
			report_recordS.refresh();
			loadingStep = 0;
			$(".refresh-record").show();
		}, 1000);
	}
	function pullUpAction() {
		setTimeout(function() {
			var li, i;
			for(i = 0, li = ""; i < 3; i++) {
				li += "<li class='record-content-li'><div class='head-portrait'><img src='img/img.png' /></div><div class='user-name'><p class='name'>刘男士</p><p class='property'>三亚-海豚湾海景房</p></div><div class='user-phone'><p class='phone'>12345678901</p><p class='daikan'><span class='state'>带看确认</span><span class='state-txt'>（保护期剩余30天）</span></p></div></li>";
			}
			$('.record-content').append(li);
			$(".loading-record").hide();
			report_recordS.refresh();
			loadingStep = 0;
			$(".load-record").show();
		}, 1000);
	}
	document.addEventListener('touchmove', function(e) {
		e.preventDefault();
	}, false);
}