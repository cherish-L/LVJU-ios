$(function() {

//楼盘页面--楼盘详情 相册弹框
	$('.picture-detail-push').fadeOut(0)
	//相册弹框---相册详图弹框
	$('.property-album-pushsection .album-pic-items li').on("click",function(){
		setTimeout(function(){
			$('.picture-detail-push').fadeIn(100)
		},100)
	})
	
	$('.picture-detail-pushsection').on("click",function(){
		setTimeout(function(){
			$('.picture-detail-push').fadeOut(100)
		},100)
	})
	

	var pushheader_nav_ulh = $('.pushheader-nav-ul').height()//相册导航水平滚动wrapper的高度

	var pic_wrapS = new IScroll('.property-album-pushsection .picture-wrapper', { // iscroll 设置 picture-wrapper 的上下边界回弹的滚动
		scrollbars: true,
		fadeScrollbars: true,
		shrinkScrollbars: 'clip',
		
	})

	var vid_wrapS = new IScroll('.property-album-pushsection .video-wrapper', { // iscroll 设置 video-wrapper 的上下边界回弹的滚动
		scrollbars: true,
		fadeScrollbars: true,
		shrinkScrollbars: 'clip'
	})
	
	$(".property-album-pushsection").bind("touchstart", function() { pic_wrapS.refresh(); })//触屏的开始就刷新 iscroll 的滚动区域
	$(".property-album-pushsection").bind("touchstart", function() { vid_wrapS.refresh(); })//触屏的开始就刷新 iscroll 的滚动区域
	
	//实景视频的内容刷新
	var whole_video_h, album_video_h
	$('.property-album-pushheader .album-btn').on("tap", "span", function() {
		var whole_video_h = $('.video-wrapper-whole').height()
		var album_video_h = $('.property-album-pushsection .video-wrapper').height()
		
		if(whole_video_h <= album_video_h) {
			$('.video-wrapper-scroll').height(album_video_h + 1)
		} else if(whole_video_h > album_video_h) {
			$('.video-wrapper-scroll').height(whole_video_h)
		}
		vid_wrapS.refresh()
		
	})
	
	//iscroll内容不超过一屏是实现回弹的（用户体验）
	var whole_h = $('.picture-wrapper-whole').height()
	var album_h = $('.property-album-pushsection .picture-wrapper').height()
	if(whole_h <= album_h) {
		$('.picture-wrapper-scroll').height(album_h + 1)
	} else if(whole_h > album_h) {
		$('.picture-wrapper-scroll').height(whole_h)
	}
	
	//点击切换图片类型的导航 与 图片内容的 picture-wrapper-title 的隐藏和出现
	$(".property-album-push .pushheader-nav .pushheader-nav-li").on("tap", function() {
		//切换图片类型
		var this_index = $(this).index()
		if(this_index == 0) {
			$('.property-album-pushsection .picture-wrapper-whole .album-pic-items').show()
			$('.property-album-pushsection .picture-wrapper-whole .album-pic-items .picture-wrapper-title').show()
		} else if(this_index !== 0) {
			$('.property-album-pushsection .picture-wrapper-whole .album-pic-items').eq(this_index - 1).show().siblings().hide()
			$('.property-album-pushsection .picture-wrapper-whole .album-pic-items .picture-wrapper-title').hide()
		}

		//滑块中的内容小于盒子高度是自动填充滑块高度，使其有回弹效果
		var whole_h = $('.picture-wrapper-whole').height()
		var album_h = $('.property-album-pushsection .picture-wrapper').height()
		if(whole_h <= album_h) {
			$('.picture-wrapper-scroll').height(album_h + 1)
		} else if(whole_h > album_h) {
			$('.picture-wrapper-scroll').height(whole_h)
		}
		pic_wrapS.refresh()

	})
	
	//惯性滑动过程中  切换图片类型  重置滑块速度 与 滑块起始位置
	$(".property-album-push .pushheader-nav").bind("touchend", function() {
		$('.picture-wrapper-scroll').css("transform", "translate(0px, 0px)")
		$('.picture-wrapper-scroll').css("transition-duration", "0ms")
		pic_wrapS.refresh()
	})

	//点击切换 楼盘相册 与 实景视频的交互
	$('.property-album-pushheader .album-btn span').on("tap", function() {
		var thisIndex = $(this).index()
		$(this).addClass("selected").siblings().removeClass("selected")
		if(thisIndex == 0) {
			$('.pushheader-nav').height(pushheader_nav_ulh)
			$('.property-album-pushsection .picture-wrapper').css("display", "block").siblings().css("display", "none")
		} else {
			$('.pushheader-nav').height("0")
			$('.property-album-pushsection .video-wrapper').css("display", "block").siblings().css("display", "none")
		}

	})



//相册详图
	$('.picture-detail-pushheader .picture-detail-title li:first-child').addClass("show")
	
	var items_li_len,album_s,p_index,double_p_index,items_li_num,li_show_index,items_li_index
	var items_len=$('.picture-wrapper .album-pic-items').length
	var pic_navThis = $('.property-album-pushsection .picture-wrapper-whole li')
	
	//主1.点击照片进入详图框内
	pic_navThis.on("tap", function() {
		//获取需要的变量
		album_s = 0; //点击当前照片之前的图片总和
		double_p_index = $(this).parent().parent().index(); //点击当前照片的 ( 父级-父级 ) 的对于父级兄弟的index
		p_index = $(this).index() + 1 //点击当前照片的 ( 父级 ) 的对于父级兄弟的index
		items_li_num=$('.picture-wrapper .album-pic-items').eq(double_p_index).find("li").length //点击当前照片的 ( 父级-父级 ) 的对于父级兄弟的index下子元素的个数
		
		$('.picture-detail-pushheader .picture-detail-title li').eq(double_p_index).find(".picTitle_num").text(" ("+p_index+"/"+items_li_num+")") 
		$('.picture-detail-pushheader .picture-detail-title li').eq(double_p_index).addClass("show").siblings().removeClass("show")
		
		//循环点击盒子的当前index，累加之前index为0-i的所有图片
		for(var i = 0; i < double_p_index; i++) {
			
			items_li_len = $('.picture-wrapper .album-pic-items').eq(i).find("li").length
			album_s = album_s+items_li_len
			
		}
		picture_d.slideTo(album_s+p_index-1,0);
		
	})

	
	
	//主2.下一组按钮
		$('.picture-detail-pushheader .next_btn').on("tap",function(){
			album_s = 0
			li_show_index=$('.picture-detail-pushheader .picture-detail-title li.show').index()
			
			if(li_show_index+1 == items_len){
				li_show_index = -1
			}
			items_li_index=$('.picture-wrapper .album-pic-items').eq(li_show_index+1).find("li").length
			
			$('.picture-detail-pushheader .picture-detail-title li').eq(li_show_index+1).find(".picTitle_num").text("(1/"+items_li_index+")")
			$('.picture-detail-pushheader .picture-detail-title li').eq(li_show_index+1).addClass("show").siblings().removeClass("show")
			
			for(var i = 0; i < li_show_index+1; i++) {
			
				items_li_len = $('.picture-wrapper .album-pic-items').eq(i).find("li").length
				album_s = album_s+items_li_len
			}
			
			console.log(album_s,items_li_len)
			picture_d.slideTo(album_s,0);
		})
		
		
		
	//主3.上一组按钮
		$('.picture-detail-pushheader .pre_btn').on("tap",function(){
			album_s = 0
			li_show_index=$('.picture-detail-pushheader .picture-detail-title li.show').index()
			
			if(li_show_index == 0){
				li_show_index = items_len
			}
			items_li_index=$('.picture-wrapper .album-pic-items').eq(li_show_index-1).find("li").length
			
			
			$('.picture-detail-pushheader .picture-detail-title li').eq(li_show_index-1).find(".picTitle_num").text("(1/"+items_li_index+")")
			$('.picture-detail-pushheader .picture-detail-title li').eq(li_show_index-1).addClass("show").siblings().removeClass("show")
			
			for(var i = 0; i < li_show_index-1; i++) {
			
				items_li_len = $('.picture-wrapper .album-pic-items').eq(i).find("li").length
				album_s = album_s+items_li_len
				
			}
			picture_d.slideTo(album_s,0);
			
		})
	
	
	//主4.swiper滑动联动title 的变化 
		//swiper获取当前滑动的页数  判断到达n页面后头部标题类别的切换
	var p_realIndex;
	
	$(".picture-detail-pushsection .detail-swiper-wrapper").bind("touchend", function() {
		var album_s_p=0;
		var album_s_n=0;
		p_realIndex = picture_d.realIndex + 1
		
		//循环  i 与 i-1 之前张数相加之和之间的范围好判断p_realIndex在第$(".picture-detail-pushheader .picture-detail-title li").eq(i)个出现，判断当i=0的时候也就是  $('.picture-wrapper .album-pic-items').eq(i-1).find("li").length的值为0  
		for(var i = 0; i < items_len+1; i++) {
			
			//第 ( i-1 ) 之前图片的的张数  因为当i=0是  $('.picture-wrapper .album-pic-items').eq(i-1)为倒数第一个的元素
			var items_li_len_p = $('.picture-wrapper .album-pic-items').eq(i-1).find("li").length
			if(i==0){
				items_li_len_p=0
			}
			album_s_p = album_s_p+items_li_len_p
			
			//第 i 之前图片的的张数
			var items_li_len_n = $('.picture-wrapper .album-pic-items').eq(i).find("li").length
			album_s_n = album_s_n+items_li_len_n
			
			
			//判断p_realIndex的范围，确实头部标题第i个出现
			if(p_realIndex>album_s_p && p_realIndex<=album_s_n){
				
				$(".picture-detail-pushheader .picture-detail-title li").eq(i).addClass("show").siblings().removeClass("show")
				$(".picture-detail-pushheader .picture-detail-title li").eq(i).find(".picTitle_num").text("("+(p_realIndex-album_s_p)+"/"+(album_s_n-album_s_p)+")")
				
			}
		}
	})



//底部点击切换页面
	$(".list-details-footer .footer-nav-li").on("tap", function() {
		$(this).addClass("select").siblings().removeClass("select")
	})

	//筛选区域三联动
	var l1 = 0,
		l2 = 0,
		rm, rm_ul, rd, rd_ul

	//填充一级地址
	$('.region-body-box div ul').html('')
	fillData();
	fillData(0);

	//点击一级填充二级
	$('.regionlist ul').on('tap', 'li', function() {

		var _this = $(this).index()
		$(this).addClass('selected').siblings().removeClass('selected');
		$(this).attr("data-select", "true").siblings().removeAttr("data-select");

		//联动第三级隐藏
		$('.district ul').html('');
		fillData(_this);
		$('.municipality ul li:first-child').addClass("selected")
		$('.municipality ul li:first-child').attr("data-select", "true")
		municipalityS.refresh()

	});

	//点击二级填充三级
	$('.municipality ul').on('tap', 'li', function() {

		var _this = $(this).index()
		$(this).addClass('selected').siblings().removeClass('selected');
		$(this).attr("data-select", "true").siblings().removeAttr("data-select");
		fillData(l1, _this);
		$('.district ul li:first-child').addClass("selected")
		$('.district ul li:first-child').attr("data-select", "true")
		districtS.refresh()

	});

	//点击三级选择
	$('.district ul').on('tap', 'li', function() {
		var d_this = $(this).index()
		if(d_this == 0) {
			$(this).addClass('selected').siblings().removeClass('selected')
			$(this).attr("data-select", "true").siblings().removeAttr("data-select");
		} else {
			$('.district ul li').eq(0).removeClass('selected')
			if(!$(this).hasClass('selected')) {
				$(this).addClass('selected')
				$(this).attr("data-select", "true")
			} else {
				$(this).removeClass('selected')
				$(this).removeAttr("data-select")
			}
		}

	});

	//区域 点击重置
	$('.list-nav-pushul .region .empty').on("tap", function() {

		$('.region-body-box div ul').html('')
		fillData();
		fillData(0);
		$('.regionlist ul li:first-child').addClass("selected")
		$('.regionlist ul li:first-child').attr("data-select", "true")
		$('.municipality ul li:first-child').addClass("selected")
		$('.municipality ul li:first-child').attr("data-select", "true")

	})

	//区域 点击开始
	var municipality_txt, district_len, district_this, district_txt, district_val

	$('.list-nav-pushul .region .determine').on("tap", function() {

		$('.district_tags').remove()
		municipality_txt = $('.municipality .municipality-li.selected').text()
		district_len = $('.district .district-li').length

		//循环第三联动级选中的需求后添加到需求滚动框中
		for(var i = 0; i < district_len; i++) {
			if($('.district .district-li').eq(i).hasClass("selected")) {

				district_txt = $('.district .district-li').eq(i).text()
				if(district_txt == "不限") {
					$('.demand-condition-wrapper').append("<li class='district_tags'><span>" + municipality_txt + "</span><i></i></li>")
				} else {
					$('.demand-condition-wrapper').append("<li class='district_tags'><span>" + district_txt + "</span><i></i></li>")
				}
				$(this).dynamic()

			}
		}

		//收起
		$(".list-details-header .list-nav-ul li").removeClass("touch")
		$(".list-nav-pushul .list-nav-pushli").height("0")
		$(".list-details-Mask").removeClass("show")
		$(this).dynamic()

		//点击 X 删除当前tags
		$(".demand-condition-wrapper li i").on("tap", function() {
			$(this).parent().remove()
			$(this).dynamic()
		})
	})

//填充级联数据
	function fillData(l1, l2) {
		var temp_html = "";
		if(arguments.length == 0) {
			$.each(dataJson.option, function(i, pro) {
				temp_html += '<li class="regionlist-li" val="' + pro.id + '" id="' + pro.id + '">' + pro.name + '</li>';
			});
		} else if(arguments.length == 1) {
			$.each(dataJson.option[l1].child, function(i, pro) {
				temp_html += '<li class="municipality-li" val="' + pro.id + '" id="' + pro.id + '">' + pro.name + '</li>';
			});
		} else if(arguments.length == 2) {
			$.each(dataJson.option[l1].child[l2].child, function(i, pro) {

				temp_html += '<li class="district-li" val="' + pro.id + '" id="' + pro.id + '">' + pro.name + '<span class="check"></span></li>';
			});
		}
		$('.region-body-box div').eq(arguments.length).find("ul").html(temp_html);
	}

//筛选均价单选
	$('.averagePrice ul li:first-child').addClass("selected")
	$('.averagePrice ul li:first-child').attr("data-select", "true")

	//点击单选收回
	var averagePrice_txt, averagePrice_index

	$('.averagePrice ul').on("tap", "li", function() {
		$('.averagePrice_tags').remove()
		averagePrice_txt = $(this).text()
		averagePrice_index = $(this).index()
		if(averagePrice_index == 0) {
			averagePrice_txt = ""
		} else {
			$('.demand-condition-wrapper').append("<li class='averagePrice_tags'><span>" + averagePrice_txt + "</span><i></i></li>")
		}
		$(this).dynamic()
		$(this).addClass("selected").siblings().removeClass("selected")
		$(this).attr("data-select", "true").siblings().removeAttr("data-select")
		$(".list-details-header .list-nav-ul li").removeClass("touch")
		$(".list-nav-pushul .list-nav-pushli").height("0")
		$(".list-details-Mask").removeClass("show")

		//点击 X 删除当前tags
		$(".demand-condition-wrapper li i").on("tap", function() {
			$(this).parent().remove()
			$(".demand-condition-wrapper li i").dynamic()
			$('.averagePrice ul li:first-child').addClass("selected").siblings().removeClass("selected")
			$('.averagePrice ul li:first-child').attr("data-select", "true").siblings().removeAttr("data-select")

		})
	})

	//输入价格点击确定
	var min_p, max_p
	$('.averagePrice .averagePrice-footer .determine').on("tap", function() {

		$('.averagePrice_tags').remove()
		min_p = parseInt($('#minprice').val())
		max_p = parseInt($('#maxprice').val())

		if(!$('#minprice').val() == '' && !$('#maxprice').val() == '' && min_p <= max_p) {

			$('.demand-condition-wrapper').append("<li class='averagePrice_tags'><span>" + min_p + "-" + max_p + "万</span><i></i></li>")
			$(this).dynamic()
			$(".list-details-header .list-nav-ul li").removeClass("touch")
			$(".list-nav-pushul .list-nav-pushli").height("0")
			$(".list-details-Mask").removeClass("show")
			$('.averagePrice ul li').removeClass("selected")
			$('.averagePrice ul li').removeAttr("data-select")
			$('#minprice').val("")
			$('#maxprice').val("")
		}

		//点击 X 删除当前tags
		$(".demand-condition-wrapper li i").on("tap", function() {
			$(this).parent().remove()
			$(".demand-condition-wrapper li i").dynamic()
			$('.averagePrice ul li:first-child').addClass("selected").siblings().removeClass("selected")
			$('.averagePrice ul li:first-child').attr("data-select", "true").siblings().removeAttr("data-select")

		})
	})

//筛选户型多选
	$('.houseType ul li:first-child').addClass("selected")
	$('.houseType ul li:first-child').attr("data-select", "true")

	//点击多选
	$('.houseType ul').on("tap", "li", function() {
		if($(this).index() == 0) {
			if(!$(this).hasClass("selected")) {
				$(this).addClass("selected").siblings().removeClass("selected")
				$(this).attr("data-select", "true").siblings().removeAttr("data-select")
			} else if($(this).hasClass("selected")) {
				$(this).removeClass("selected")
				$('.houseType ul li').attr("data-select", "true").siblings().removeAttr("data-select")
			}
		} else {
			$('.houseType ul li:first-child').removeClass("selected")
			$('.houseType ul li:first-child').removeAttr("data-select")
			if(!$(this).hasClass("selected")) {
				$(this).addClass("selected")
				$(this).attr("data-select", "true")
			} else if($(this).hasClass("selected")) {
				$(this).removeClass("selected")
				$(this).removeAttr("data-select")
			}
		}
	})

	//点击重置
	$('.houseType .houseType-footer .empty').on("tap", function() {
		$('.houseType ul li:first-child').addClass("selected").siblings().removeClass("selected")
		$('.houseType ul li:first-child').attr("data-select", "true").siblings().removeAttr("data-select")
	})

	//点击确定
	var houseType_len, houseType_this, houseType_txt, houseType_val

	$('.houseType .houseType-footer .determine').on("tap", function() {

		$('.houseType_tags').remove()
		houseType_len = $('.houseType .houseType-body-ul li').length

		//循环第三联动级选中的需求后添加到需求滚动框中
		for(var i = 0; i < houseType_len; i++) {
			if($('.houseType .houseType-body-ul li').eq(i).hasClass("selected")) {

				houseType_txt = $('.houseType .houseType-body-ul li').eq(i).text()

				if(i == 0) {
					houseType_txt = ""
				} else {
					$('.demand-condition-wrapper').append("<li class='houseType_tags'><span>" + houseType_txt + "</span><i></i></li>")
				}
				$(this).dynamic()
			}
		}

		//收起
		$(".list-details-header .list-nav-ul li").removeClass("touch")
		$(".list-nav-pushul .list-nav-pushli").height("0")
		$(".list-details-Mask").removeClass("show")
		$(this).dynamic()

		//点击 X 删除当前tags
		$(".demand-condition-wrapper li i").on("tap", function() {
			$(this).parent().remove()
			$(this).dynamic()
		})

	})

//筛选更多 多选
	$('.list-nav-pushli.more ul').on("tap", "li", function() {
		if(!$(this).hasClass("selected")) {
			$(this).addClass("selected")
			$(this).attr("data-select", "true")
		} else if($(this).hasClass("selected")) {
			$(this).removeClass("selected")
			$(this).removeAttr("data-select")
		}
	})

	//点击重置
	$('.list-nav-pushli.more .more-footer .empty').on("tap", function() {
		$('.list-nav-pushli.more ul li').removeAttr("data-select")
		$('.list-nav-pushli.more ul li').removeClass("selected")
	})

	//点击确定
	var more_len, more_this, more_txt, more_val

	$('.list-nav-pushli.more .more-footer .determine').on("tap", function() {

		$('.more_tags').remove()
		more_len = $('.list-nav-pushli.more li').length

		//循环第三联动级选中的需求后添加到需求滚动框中
		for(var i = 0; i < more_len; i++) {
			if($('.list-nav-pushli.more li').eq(i).hasClass("selected")) {

				more_txt = $('.list-nav-pushli.more li').eq(i).text()

				$('.demand-condition-wrapper').append("<li class='more_tags'><span>" + more_txt + "</span><i></i></li>")

				$(this).dynamic()
			}
		}

		//收起
		$(".list-details-header .list-nav-ul li").removeClass("touch")
		$(".list-nav-pushul .list-nav-pushli").height("0")
		$(".list-details-Mask").removeClass("show")
		$(this).dynamic()

		//点击 X 删除当前tags
		$(".demand-condition-wrapper li i").on("tap", function() {
			$(this).parent().remove()
			$(this).dynamic()
		})
	})

//筛选排序 单选
	$(".screen .screen-body-ul").on("tap", "li", function() {
		$(this).addClass("selected").siblings().removeClass("selected")
		$(this).attr("data-select", "true").siblings().removeAttr("data-select")
		$(".list-details-header .list-nav-ul li").removeClass("touch")
		$(".list-nav-pushul .list-nav-pushli").height("0")
		$(".list-details-Mask").removeClass("show")
	})


//楼盘页面  头部导航点击效果
	$(".list-details-container .list-nav-litxt").on("tap", function() {
		if($(this).hasClass("touch")) {
			$(this).removeClass("touch")
		} else if(!$(this).hasClass("touch")) {
			$(this).addClass("touch").siblings().removeClass("touch")
		}
	})
	$(".list-details-container .list-nav-liimg").on("tap", function() {
		if($(this).hasClass("touch")) {
			$(this).removeClass("touch")
		} else if(!$(this).hasClass("touch")) {
			$(this).addClass("touch")
			$(".list-details-container .list-nav-litxt").removeClass("touch")
		}
	})


//筛选主要功能
	var num_this = 0;
	var pushlih = 0;
	$(".list-nav-ul li").tap(function() {
		num_this = $(this).index()
		pushlih = $(".list-nav-pushul .list-nav-pushli").eq(num_this).find(".list-nav-pushli-wrapper").height()
		$(".list-nav-pushul .list-nav-pushli").eq(num_this).css("transition", "all .3s").siblings().css("transition", "none")
		$(".list-nav-pushul .list-nav-pushli").eq(num_this).siblings().height("0")
		$(".list-nav-pushul .list-nav-pushli").eq(num_this).height(pushlih)
		$(".list-details-header .form-ipt").tap(function() {
			if($(this).focus()) {
				$(".list-nav-pushul .list-nav-pushli").height("0")
				$(".list-details-Mask").removeClass("show")
				$(".list-nav-ul li").removeClass("touch")
			}
		})
		if($(this).hasClass("touch")) {
			$(".list-nav-pushul .list-nav-pushli").eq(num_this).css("transition", "all .3s")
			$(".list-nav-pushul .list-nav-pushli").eq(num_this).height(pushlih)
			$(".list-details-Mask").addClass("show")
			moreS.refresh()
		} else if(!$(this).hasClass("touch")) {
			$(".list-nav-pushul .list-nav-pushli").eq(num_this).css("transition", "none")
			$(".list-nav-pushul .list-nav-pushli").eq(num_this).height("0")
			$(".list-details-Mask").removeClass("show")
			moreS.refresh()
		}
		$(".list-details-Mask").tap(function() {
			$(".list-nav-pushul .list-nav-pushli").css("transition", "none")
			$(".list-nav-pushul .list-nav-pushli").height("0")
			$(".list-details-Mask").removeClass("show")
			$(".list-nav-ul li").removeClass("touch")
			moreS.refresh()
		})
		$('.region-body-box div ul').html('')
		fillData();
		fillData(0);
		municipalityS.scrollToElement(".municipality-li:first-child", 0)
		averagePriceS.scrollToElement(".averagePrice-body-ul li:first-child", 0)
		houseTypeS.scrollToElement(".houseType-body-ul li:first-child", 0)
		moreS.scrollToElement(".more-body-wrapper .open-time", 0)

		$(".list-nav-pushli.more ul li").removeClass("selected")
		$(".list-nav-pushli.more ul li").removeAttr("data-select")
		$('.regionlist ul li:first-child').addClass("selected")
		$('.municipality ul li:first-child').addClass("selected")
		$('.houseType ul li:first-child').addClass("selected").siblings().removeClass("selected")
		$('.houseType ul li:first-child').attr("data-select", "true").siblings().removeAttr("data-select")
		$(this).dynamic()
	})

	//删除单个需求，刷新demand-condition-wrapper盒子的宽度
	$(".demand-condition-wrapper li i").on("tap", function() {
		$(this).parent().remove()
		$(".demand-condition-wrapper li i").dynamic()
	})

	//资讯评论
	var userh = 0;
	$(".propertyReview-li").each(function() {
		userh = $(this).find(".user-say").height()
		if(userh >= 78) {
			$(this).find(".user-say").addClass("showmore")
			$(this).find(".showall").css("display", "block")
			$(".propertyReview-li .showall-wrapper").tap(function() {
				var Pindex = $(this).parents(".propertyReview-li").index()
				$(".propertyReview-li").eq(Pindex).find(".user-say").removeClass("showmore")
				$(".propertyReview-li").eq(Pindex).find(".showall").css("display", "none")
				pushS.refresh()
			})
		}
	})
	//资讯评论弹框
	var infoh = 0;
	$(".info-review-li").each(function() {
		infoh = $(this).find(".user-say").height()
		if(infoh >= 78) {
			$(this).find(".user-say").addClass("showmore")
			$(this).find(".showall").css("display", "block")
			$(".info-review-li .showall-wrapper").tap(function() {
				var Iindex = $(this).parents(".info-review-li").index()
				$(".info-review-li").eq(Iindex).find(".user-say").removeClass("showmore")
				$(".info-review-li").eq(Iindex).find(".showall").css("display", "none")
				reviewS.refresh()
			})
		}
	})

	//楼盘页面 头部需求栏目水平滚动栏
	//遍历当前以后的需求
	var s = 0;
	var demandh = $(".demand-condition-wrapper").height()
	var demandlen = $(".demand-condition-wrapper li").length
	for(var i = 0; i < demandlen; i++) {
		var liw = $(".demand-condition-wrapper li").eq(i).width() + 12
		s = s + liw
	}

	if($(".demand-condition-wrapper li").length <= 3) {
		$(".demand-condition-wrapper").width("100%")
	} else if($(".demand-condition-wrapper li").length > 3) {
		$(".demand-condition-wrapper").width(sNew + 20)
	}

	//楼盘页面 头部需求栏目水平滚动栏宽度的设定
	$.fn.dynamic = function() {
		var sNew = 0;
		var demandlenNew = $(".demand-condition-wrapper li").length
		for(var iNew = 0; iNew < demandlenNew; iNew++) {
			var liwNew = $(".demand-condition-wrapper li").eq(iNew).width() + 12
			sNew = sNew + liwNew
		}
		if($(".demand-condition-wrapper li").length <= 3) {
			$(".demand-condition-wrapper").width("100%")
		} else if($(".demand-condition-wrapper li").length > 3) {
			$(".demand-condition-wrapper").width(sNew + 20)
		}
		if($(".demand-condition-wrapper li").length == 0) {
			$(".demand-condition").css("height", "0")
			list_detailsS.refresh()
		} else if(!$(".demand-condition-wrapper li").length == 0) {
			$(".demand-condition").css("height", demandh)
		}
		list_detailsS.refresh()
		demandS.refresh()
	}

	//楼盘页面 底部上拉加载滚动监听事件
	var list_detailsS = new IScroll('.list-details-section', {
		scrollbars: false,
		probeType: 3
	})

	var angle_ld = 0;
	var angle_ld_time = 0;
	var loadingStep = 0;

	//滚动头部透明度变化
	list_detailsS.on('scroll', function() {
		if(loadingStep == 0 && !$(".list-details-section .section-load").hasClass("refresh")) {
			if(list_detailsS.y < (list_detailsS.maxScrollY - 10) && list_detailsS.y > (list_detailsS.maxScrollY - 60)) {
				$(".list-details-section .section-load").text("上拉加载更多...")
			}
			if(list_detailsS.y < (list_detailsS.maxScrollY - 60)) {
				$(".list-details-section .section-load").addClass("refresh")
				$(".list-details-section .section-load").text("松开加载更多...")
				loadingStep = 1;
			}
		}
	})
	list_detailsS.on("scrollEnd", function() {
		if($(".list-details-section .section-load").hasClass("refresh")) { //下拉刷新操作 
			$(".list-details-section .section-load").removeClass("refresh")
			$(".list-details-section .section-load").text("上拉加载更多...")
			$(".list-details-section .section-load").hide()
			$(".list-details-section .section-loading").show()
			angle_ld_time = setInterval(function() {
				angle_ld += 5
				$(".list-details-section .section-loading i").css("transform", "rotate(" + angle_ld + "deg)");
			}, 20)
			loadingStep = 2;
			ld_pullUpAction();
		}
	})

	function ld_pullUpAction() {
		setTimeout(function() {
			$(".list-details-section .section-load").show()
			$(".list-details-section .section-loading").hide()
			$(".list-details-section .section-load").text("没有更多内容加载")

			list_detailsS.refresh();
			loadingStep = 0;
			clearInterval(angle_ld_time)
		}, 2000);
	}

	//楼盘页面--楼盘详情 点击左滑弹框效果
	var wrapw = $(".list-details-container").width() + 5
	$(".listhouse-data-li").tap(function() {
		pushS.scrollToElement(".pushsection-banner", 0)
		$(".list-details-pushheader").css("background-color", "rgba(246, 246, 246,0.0)")
		$(".list-details-pushheader").css("box-shadow", "0 1px 0 0 rgba(204,204,204,0.0)")
		$(".title_txt").css("color", "rgba(57, 64, 67,0.0)")
		$(".return").removeClass("state")
		$(".collection").removeClass("state")
		$(".share").removeClass("state")

		$(".list-details-push").css("transform", "translateX(0px)")
		$(".list-details-shadow").fadeIn(250)
	})

	$(".list-details-pushheader .return").tap(function() {
		$(".list-details-push").css("transform", "translateX(" + wrapw + "px)")
		$(".list-details-shadow").fadeOut(250)
	})

	//楼盘页面--楼盘详情 主力户型左右滑动列表宽度
	var lilen = $(".houseStyle-content-ul li").length
	var liw = $(".houseStyle-content-ul li").width() + 16
	$(".houseStyle-content-ul").width(lilen * liw)
	$(".houseStyle-title .num").text('（' + lilen + '）')

	var houseStyleS = new IScroll('.houseStyle-content', {
		scrollbars: false,
		scrollX: true,
		scrollY: false
	});

	//楼盘页面--楼盘详情 头部滚动透明度渐变监听事件
	var pushS = new IScroll('.list-details-pushsection', {
		scrollbars: false,
		probeType: 3
	});

	pushS.on('scroll', function() {
		if(pushS.y < 0) {
			$(".list-details-pushheader").css("opacity", "1")
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

			$(".list-details-pushheader").css("opacity", (50 - pushS.y) / 50)
			$(".list-details-pushheader").css("background-color", "rgba(246, 246, 246,0.0)")
			$(".list-details-pushheader").css("box-shadow", "0 1px 0 0 rgba(204,204,204,0.0)")
			$(".title_txt").css("color", "rgba(57, 64, 67,0.0)")
		}

	});

	//楼盘页面--楼盘详情 头部点击 收藏成功、取消收藏弹框代码
	var Suctime = null;
	var canceltime = null;
	$('.collection').tap(function() {
		$(this).collection()
	})

	$.fn.collection = function() {
		if(!$('.collection').hasClass("collectionState")) {
			$('.collection').addClass("collectionState")
			clearTimeout(canceltime)
			$(".collection-cancel").css("display", "none")
			$(".collection-succeed").css("display", "block")
			$(".collection-succeed").css("opacity", "1")
			Suctime = setTimeout(function() {
				$(".collection-succeed").fadeOut(300)
			}, 1700)
		} else if($('.collection').hasClass("collectionState")) {
			$('.collection').removeClass("collectionState")
			clearTimeout(Suctime)
			$(".collection-succeed").css("display", "none")
			$(".collection-cancel").css("display", "block")
			$(".collection-cancel").css("opacity", "1")
			canceltime = setTimeout(function() {
				$(".collection-cancel").fadeOut(300)
			}, 1700)
		}
	}

	//楼盘页面--楼盘详情--楼盘位置弹框
	$(".house-position-pushperipheral .peripheral-li").tap(function() {
		$(this).addClass("on").siblings().removeClass("on")
	})

	$(".pushsection-basicInfo .position").tap(function() {
		$(".house-position-push").css("transform", "translateX(0px)")
		$(".list-push-shadow").fadeIn(250)
	})

	$(".house-position-pushheader .return").tap(function() {
		$(".house-position-push").css("transform", "translateX(" + wrapw + "px)")
		$(".list-push-shadow").fadeOut(250)
	})

	//楼盘页面--楼盘详情--降价通知弹框
	$(".pushsection-basicInfo .notice").tap(function() {
		$(".list-details-pushMask").addClass("show")
		$(".reducePrice-notice").addClass("show")
	})

	$(".list-details-pushMask").tap(function() {
		$(".list-details-pushMask").removeClass("show")
		$(".reducePrice-notice").removeClass("show")
	})

	$(".notice-delete-box i").tap(function() {
		$(".list-details-pushMask").removeClass("show")
		$(".reducePrice-notice").removeClass("show")
	})

	//楼盘页面--楼盘详情--降价通知弹框  input号码输入框内容改变监听事件 执行函数
	$(".notice-user input").bind('input propertychange', function() {
		if($(".notice-user input").val() !== "") {
			$(".notice-user a").css("display", "block")
		} else if($(this).val() == "") {
			$(".notice-user a").css("display", "none")
		}
	})

	$(".reducePrice-notice .notice-user a").tap(function() {
		$(".notice-user input").val("").focus()
		$(".notice-user a").css("display", "none")
	})

	$(".reducePrice-notice .notice-button").tap(function() {

		if($(".notice-user input").val() !== "") {
			$(".list-details-pushMask").removeClass("show")
			$(".reducePrice-notice").removeClass("show")
			$(".notice-user input").val("")
			$(".notice-user a").css("display", "none")
		} else {
			$(".notice-user input").addClass("animated shake")
			setTimeout(function() {
				$(".notice-user input").removeClass("animated shake")
			}, 500)
		}
	})

	//楼盘页面--楼盘详情--楼盘参数弹框
	$(".peculiarity-content .openMore span").tap(function() {
		if(!$(this).hasClass("click")) {
			$(this).text("收起")
			$(this).addClass("click")
			$(".peculiarity-content p").removeClass("open")
			parameterS.refresh()
		} else if($(this).hasClass("click")) {
			$(this).text("展开更多")
			$(this).removeClass("click")
			$(".peculiarity-content p").addClass("open")
			parameterS.refresh()
		}
	})
	$(".ParameterDetails").tap(function() {
		parameterS.scrollToElement(".Property-parameter-pushsection .pushsection-basicInfo", 0)
		$(".Property-parameter-push").css("transform", "translateX(0px)")
		$(".list-push-shadow").fadeIn(250)
		$(".collection-cancel").css("display", "none")
		$(".collection-succeed").css("display", "none")
	})
	$(".Property-parameter-pushheader .return").tap(function() {
		$(".Property-parameter-push").css("transform", "translateX(" + wrapw + "px)")
		$(".list-push-shadow").fadeOut(250)
		$(".collection-cancel").css("display", "none")
		$(".collection-succeed").css("display", "none")
	})

	//楼盘页面--楼盘详情--楼盘户型弹框
	var screenlisth = $(".screenlist-ul").height()
	$(".house-type-pushfooter").tap(function() {
		$(".screenlist").css("height", screenlisth)
		$('.house-type-pushMask').addClass("show")

		$(".screenlist .screenlist-li").tap(function() {
			var screenlistTxt = $(this).text()
			$(".house-type-pushfooter span").text(screenlistTxt)
			$(".house-type-pushfooter span").addClass("screen")
			$(this).addClass("select").siblings().removeClass("select")
			$(".screenlist").css("height", "0")
			$('.house-type-pushMask').removeClass("show")
		})

		$(".house-type-pushMask").tap(function() {
			$(".screenlist").css("height", "0")
			$('.house-type-pushMask').removeClass("show")
		})
	})

	var typeDetailS = new IScroll('.house-typeDetail-pushsection', {
		scrollbars: false
	})
	var type_detailS = new IScroll('.house-type-detail-pushsection', {
		scrollbars: false
	})
	var prompttime = null;
	$(".house-typeDetail-info .Prompt").tap(function() {
		clearTimeout(prompttime)
		$(".house-typeDetail-Prompt").css("display", "block")
		$(".house-typeDetail-Prompt").css("opacity", "1")
		prompttime = setTimeout(function() {
			$(".house-typeDetail-Prompt").fadeOut(300)
		}, 1700)
	})

	var prompt_time = null;
	$(".house-type-detail-info .Prompt").tap(function() {
		clearTimeout(prompt_time)
		$(".house-type-detail-Prompt").css("display", "block")
		$(".house-type-detail-Prompt").css("opacity", "1")
		prompt_time = setTimeout(function() {
			$(".house-type-detail-Prompt").fadeOut(300)
		}, 1700)
	})

	$(".list-details-pushsection .allstyle").tap(function() {
		$(".house-type-push").css("transform", "translateX(0px)")
		$(".list-push-shadow").fadeIn(250)
	})

	$(".house-type-pushheader .return").tap(function() {
		$(".house-type-push").css("transform", "translateX(" + wrapw + "px)")
		$(".list-push-shadow").fadeOut(250)
	})

	$(".house-type-push .pushsection-li").tap(function() {
		$(".house-typeDetail-push").css("transform", "translateX(0px)")
		$(".house-type-shadow").fadeIn(250)
		typeDetailS.scrollToElement(".house-typeDetail-pushsection .house-typeDetail-banner", 0)
	})

	$(".house-typeDetail-pushheader .return").tap(function() {
		$(".house-typeDetail-push").css("transform", "translateX(" + wrapw + "px)")
		$(".house-type-shadow").fadeOut(250)
	})

	$(".pushsection-houseStyle .houseStyle-content-ul li").tap(function() {
		$(".house-type-detail-push").css("transform", "translateX(0px)")
		$(".list-push-shadow").fadeIn(250)
		type_detailS.scrollToElement(".house-type-detail-pushsection .house-type-detail-banner", 0)
	})
	//
	$(".house-type-detail-pushheader .return").tap(function() {
		$(".house-type-detail-push").css("transform", "translateX(" + wrapw + "px)")
		$(".list-push-shadow").fadeOut(250)
	})

	//楼盘页面--楼盘详情--楼栋信息弹框
	var buildingInfolen = $(".buildingInfo-content-ul li").length
	$(".buildingInfo-title .num").text("（共" + buildingInfolen + "栋）")

	$(".building-info-switch").bind("touchend", function() {
		var index = building.realIndex
		$(".building-info-pushsection .buildingInfo-content-ul li").eq(index).addClass("switch").siblings().removeClass("switch")
	})

	$(".list-details-pushsection .pushsection-buildingInfo .details").tap(function() {
		$(".building-info-push").css("transform", "translateX(0px)")
		$(".list-push-shadow").fadeIn(250)
	})

	$(".building-info-pushheader .return").tap(function() {
		$(".building-info-push").css("transform", "translateX(" + wrapw + "px)")
		$(".list-push-shadow").fadeOut(250)
	})

	//楼盘页面--楼盘详情--优惠信息弹框
	$(".pushsection-discountActivity .partakeBox").tap(function() {
		$(".list-details-pushMask").addClass("show")
		$(".discount-info").addClass("show")
	})

	$(".list-details-pushfooter .signUp").tap(function() {
		$(".list-details-pushMask").addClass("show")
		$(".discount-info").addClass("show")
	})

	$(".list-details-pushMask").tap(function() {
		$(".list-details-pushMask").removeClass("show")
		$(".discount-info").removeClass("show")
		$(".enroll-success").removeClass("show")
		$(".enroll-fail").removeClass("show")
	})

	$(".discount-delete-box i").tap(function() {
		$(".list-details-pushMask").removeClass("show")
		$(".discount-info").removeClass("show")
	})

	//楼盘页面--楼盘详情--优惠信息弹框  input姓名输入框内容改变监听事件 执行函数
	$(".discount-username input").bind('input propertychange', function() {
		if($(".discount-username input").val() !== "") {
			$(".discount-username a").css("display", "block")
		} else if($(this).val() == "") {
			$(".discount-username a").css("display", "none")
		}
	})

	$(".discount-username a").tap(function() {
		$(".discount-username input").val("").focus()
		$(".discount-username a").css("display", "none")
	})

	//楼盘页面--楼盘详情--优惠信息弹框  input号码输入框内容改变监听事件 执行函数
	$(".discount-userphone input").bind('input propertychange', function() {
		if($(".discount-userphone input").val() !== "") {
			$(".discount-userphone a").css("display", "block")
		} else if($(this).val() == "") {
			$(".discount-userphone a").css("display", "none")
		}
	})

	$(".discount-userphone a").tap(function() {
		$(".discount-userphone input").val("").focus()
		$(".discount-userphone a").css("display", "none")
	})

	$(".discount-info .discount-button").tap(function() {
		if($(".discount-username input").val() !== "" && $(".discount-userphone input").val() !== "") {
			$(".discount-info").removeClass("show")
			$(".discount-username input").val("")
			$(".discount-username a").css("display", "none")
			$(".discount-userphone input").val("")
			$(".discount-userphone a").css("display", "none")
			$(".enroll-fail").addClass("show")
			$(".enroll-fail .fail-button").tap(function() {
				$(".enroll-fail").removeClass("show")
				$(".enroll-success").addClass("show")
				$(".enroll-success .suc-button").tap(function() {
					$(".enroll-success").removeClass("show")
					$(".list-details-pushMask").removeClass("show")
				})
			})
		} else {
			if($(".discount-username input").val() == "") {
				$(".discount-username input").addClass("animated shake")
				setTimeout(function() {
					$(".discount-username input").removeClass("animated shake")
				}, 500)
			}
			if($(".discount-userphone input").val() == "") {
				$(".discount-userphone input").addClass("animated shake")
				setTimeout(function() {
					$(".discount-userphone input").removeClass("animated shake")
				}, 500)
			}
		}
	})

	//楼盘页面--楼盘详情--历史价格弹框
	$(".historicalPrice-content").tap(function() {
		$(".historical-price-push").css("transform", "translateX(0px)")
		$(".list-push-shadow").fadeIn(250)
	})
	$(".historical-price-pushheader .return").tap(function() {
		$(".historical-price-push").css("transform", "translateX(" + wrapw + "px)")
		$(".list-push-shadow").fadeOut(250)
	})

	//楼盘页面--楼盘详情--历史价格弹框 降价通知弹框  input号码输入框内容改变监听事件 执行函数
	$(".historical-price-pushfooter").tap(function() {
		$(".list-details-pushMask").addClass("show")
		$(".reducePrice-notice").addClass("show")
	})

	$(".list-details-pushMask").tap(function() {
		$(".list-details-pushMask").removeClass("show")
		$(".reducePrice-notice").removeClass("show")
	})

	$(".notice-delete-box i").tap(function() {
		$(".list-details-pushMask").removeClass("show")
		$(".reducePrice-notice").removeClass("show")
	})

	//楼盘页面--楼盘详情--联系置业顾问弹框
	$(".list-details-pushfooter .contact").tap(function() {
		$(".list-details-pushMask").addClass("show")
		$(".contact-adviser").addClass("show")
	})

	$(".list-details-pushMask").tap(function() {
		$(".list-details-pushMask").removeClass("show")
		$(".contact-adviser").removeClass("show")
	})

	$(".contact-adviser .close-box span").tap(function() {
		$(".list-details-pushMask").removeClass("show")
		$(".contact-adviser").removeClass("show")
	})

	//楼盘页面--楼盘详情--资讯评论弹框
	$(".list-details-pushsection .pushsection-propertyReview .view-all").tap(function() {
		$(".info-review-push").css("transform", "translateX(0px)")
		$(".list-push-shadow").fadeIn(250)
	})

	$(".info-review-pushheader .return").tap(function() {
		$(".info-review-push").css("transform", "translateX(" + wrapw + "px)")
		$(".list-push-shadow").fadeOut(250)
	})

	//input文本框
	var panelw = $(".writing-panel").height()
	$(".info-review-pushfooter .pushfooter-wrapper").tap(function() {
		$(".info-review-push .text-box").focus()
		$(".info-review-pushMask").addClass("show")
		$(".info-review-writing").css("bottom", "0")
	})
	$('.info-review-pushMask').bind("touchstart", function(event) {
		$(".info-review-push .text-box").blur()
		$(".info-review-pushMask").removeClass("show")
		$(".info-review-writing").css("bottom", -panelw)
	})

	$(".info-review-writing .cancel").tap(function() {
		$(".info-review-push .text-box").blur()
		$(".info-review-pushMask").removeClass("show")
		$(".info-review-writing").css("bottom", -panelw)
	})

	$(".info-review-writing .send").tap(function() {
		if($(".info-review-push .text-box").val() !== "") {
			$(".info-review-push .text-box").blur()
			$(".info-review-pushMask").removeClass("show")
			$(".info-review-writing").css("bottom", -panelw)
			$(".text-box").val("")
			$(".info-review-push .comment-success").css("display", "none")
			$(".info-review-push .comment-failed").css("display", "block")
			$(".info-review-push .comment-failed").css("opacity", "1")
			setTimeout(function() {
				$(".info-review-push .comment-failed").fadeOut(300)
			}, 1700)
			setTimeout(function() {
				$(".info-review-push .comment-success").css("display", "block")
				$(".info-review-push .comment-success").css("opacity", "1")
				setTimeout(function() {
					$(".info-review-push .comment-success").fadeOut(300)
				}, 1700)
			}, 2000)
		} else {
			alert("发送内容不能为空")
			$(".info-review-push .text-box").focus()
		}
	})

	function fixedWatch(el) {
		if(document.activeElement.nodeName == 'INPUT') {
			el.css('position', 'static');
		} else {
			el.css('position', 'fixed');
		}
	}

	setInterval(function() {
		fixedWatch($('.info-review-writing'));
	}, 500);

	//楼盘页面 楼盘详情 楼盘资讯--筛选框
	var Pscreenh = $(".Property-info-screenlist-ul").height()
	$(".Property-info-pushfooter").tap(function() {
		$(".Property-info-screenlist").css("height", Pscreenh)
		$('.Property-info-pushMask').addClass("show")

		$(".Property-info-screenlist .screenlist-li").tap(function() {
			var screenlistTxt = $(this).text()
			$(".Property-info-pushfooter span").text(screenlistTxt)
			$(".Property-info-pushfooter span").addClass("screen")
			$(this).addClass("select").siblings().removeClass("select")
			$(".Property-info-screenlist").css("height", "0")
			$('.Property-info-pushMask').removeClass("show")
		})

		$(".Property-info-pushMask").tap(function() {
			$(".Property-info-screenlist").css("height", "0")
			$('.Property-info-pushMask').removeClass("show")
		})
	})

	$(".pushsection-propertyInfo .enter").tap(function() {
		$(".Property-info-push").css("transform", "translateX(0px)")
		$(".list-push-shadow").fadeIn(250)
	})

	$(".Property-info-pushheader .return").tap(function() {
		$(".Property-info-push").css("transform", "translateX(" + wrapw + "px)")
		$(".list-push-shadow").fadeOut(250)
	})

	//楼盘页面 楼盘详情 历史优惠活动弹框
	var ulboxh = $(".historical-discount-content").height()
	var ulbox_lih = $(".historical-discount-content li:last-child").height()
	$(".historical-discount-timeAxis .line").height(ulboxh - ulbox_lih)

	//导航滑动
	var _thisnav = $(".pushheader-nav")
	var _thisnav_w = $(".pushheader-nav").width()
	var _thisul = $(".pushheader-nav .nav-list")
	var _thisli = $(".pushheader-nav .nav-list li")
	if(_thisli.length == 3) {
		_thisul.css("width", _thisnav_w)
		_thisli.css("width", "33.33%")
	}
	if(_thisli.length <= 2 && _thisli.length > 0) {
		_thisul.css("width", _thisnav_w)
		_thisli.css("width", "50%")
	}

	var testh = $(".historical-discount-pushsection").height()
	$(".historical-discount-li").height(testh)

	$(".historical-discount-push").css("transform", "translateX(" + wrapw + "px)")

	$(".pushsection-dynamic .dynamic-btn").tap(function() {
		$(".historical-discount-push").css("z-index", "40")
		$(".historical-discount-push").css("transition", "all .3s")
		$(".historical-discount-push").css("transform", "translateX(0px)")
		$(".list-push-shadow").fadeIn(250)
	})

	$(".historical-discount-pushheader .return").tap(function() {
		$(".historical-discount-push").css("transition", "all .3s")
		$(".historical-discount-push").css("transform", "translateX(" + wrapw + "px)")
		$(".list-push-shadow").fadeOut(250)
	})

	setTimeout(function() {
		$(".historical-discount-push").css("z-index", "20")
	}, 0)
	//iscroll.js各各滚动回弹效果
	var municipalityS = new IScroll('.municipality', {
		scrollbars: false
	})
	var districtS = new IScroll('.district', {
		scrollbars: false
	})
	var averagePriceS = new IScroll('.averagePrice-body', {
		scrollbars: false
	})
	var houseTypeS = new IScroll('.houseType-body', {
		scrollbars: false
	})
	var moreS = new IScroll('.more-body', {
		scrollbars: false
	})
	var screenS = new IScroll('.screen-body', {
		scrollbars: false
	})
	var demandS = new IScroll('.demand-condition', {
		scrollbars: true,
		scrollX: true,
		scrollY: false,
		fadeScrollbars: true,
		shrinkScrollbars: 'clip'
	})
	var parameterS = new IScroll('.Property-parameter-pushsection', {
		scrollbars: false
	})
	var houseS = new IScroll('.house-type-pushsection', {
		scrollbars: false
	})
	var historicalS = new IScroll('.historical-price-pushsection', {
		scrollbars: false
	})
	var reviewS = new IScroll('.info-review-pushsection', {
		scrollbars: false
	})
	var PropertyinfoS = new IScroll('.Property-info-pushsection', {
		scrollbars: false
	})
	//历史优惠
	document.addEventListener('touchmove', function(e) {
		e.preventDefault();
	}, false)
})