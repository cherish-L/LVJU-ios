$(function() {
	$(".hide_phone_ipt").css("display", "none")
	//点击添加
	var flag = false;
	var this_ipt = 0;
	var this_ipt_hide = 0;
	var this_chunk = null;
	var this_chunk_hide = null;
	var mphone = null;
	var this_tap = null;
	var time=null
	var time_this=null;
	$(".customer-phone .add-customer").on("tap", function() {
		if(!flag) {
			flag = true;
			$(".customer-phone .customer-phone-wrapper .customer-phone-li:first-child").clone().appendTo(".customer-phone .customer-phone-wrapper")
			$(".customer-phone .customer-phone-li:last-child .name_ipt,.customer-phone .customer-phone-li:last-child .phone_ipt").val("")
			$(".customer-phone .customer-phone-li:last-child .name_ipt,.customer-phone .customer-phone-li:last-child .hide_phone_ipt").val("")
			$(".customer-phone .customer-phone-li:last-child .gender span").removeClass("checked")
			$(".customer-phone .customer-phone-li .clear-box").css("display", "block")
			report_customerS.refresh()
			setTimeout(function() {
				flag = false;
			}, 300);
		}

		//切换手机号码状态
		$(".customer-phone .customer-phone-li .phone a").tap(function() {
			
			if(!flag) {
				clearTimeout(time)
				this_tap = $(this)
				this_chunk = $(this).siblings(".phone_ipt")
				this_chunk_hide = $(this).siblings(".hide_phone_ipt")
				this_ipt = $(this).siblings(".phone_ipt").val()
				this_ipt_hide = $(this).siblings(".hide_phone_ipt").val()
				flag = true;
				if(!$(this).hasClass("hide")) {
					if(!(/^1[3|4|5|8]\d{9}$/.test(this_ipt))) {
						$(".prompt-box").addClass("show")
						$(".prompt-box").fadeIn(1)
						time=setTimeout(function(){
							$(".prompt-box").fadeOut(200)
						},1700)
					} else {
						$(this).addClass("hide")
						mphone = this_ipt.substr(0, 3) + '****' + this_ipt.substr(7);
						this_chunk_hide.val(mphone)
						this_chunk.hide()
						this_chunk_hide.show()
					}
				} else {
					this_tap.removeClass("hide")
					this_chunk.show()
					this_chunk_hide.hide()
					this_chunk.focus()
				}
				setTimeout(function() {
					flag = false;
				}, 300);
			}
		})

		$(".hide_phone_ipt").tap(function() {
			if(!flag) {
				flag = true;
				$(this).siblings("a").removeClass("hide")
				$(this).hide()
				$(this).siblings(".phone_ipt").show()
				setTimeout(function() {
					flag = false;
				}, 300);
			}
		})

		//点击删除
		$(".customer-phone .customer-phone-li .clear-box").tap(function() {
			if(!flag) {
				flag = true;
				$(this).parent().remove()
				report_customerS.refresh()
				var li_len = $(".customer-phone .customer-phone-li").length
				if(li_len == 1) {
					$(".customer-phone .customer-phone-li .clear-box").css("display", "none")
				}
				setTimeout(function() {
					flag = false;
				}, 300);
			}
		})
		
		//点击性别
		$(".customer-phone .gender span").tap(function(){
			$(this).addClass("checked").siblings().removeClass("checked")
		})
	})

	$(".customer-phone .customer-phone-li .phone a").tap(function() {
		if(!flag) {
			clearTimeout(time_this)
			this_tap = $(this)
			this_chunk = $(this).siblings(".phone_ipt")
			this_chunk_hide = $(this).siblings(".hide_phone_ipt")
			this_ipt = $(this).siblings(".phone_ipt").val()
			this_ipt_hide = $(this).siblings(".hide_phone_ipt").val()
			flag = true;
			if(!$(this).hasClass("hide")) {
				if(!(/^1[3|4|5|8]\d{9}$/.test(this_ipt))) {
					$(".prompt-box").addClass("show")
					$(".prompt-box").fadeIn(1)
					time_this=setTimeout(function(){
						$(".prompt-box").fadeOut(200)
					},1700)
				} else {
					$(this).addClass("hide")
					mphone = this_ipt.substr(0, 3) + '****' + this_ipt.substr(7);
					this_chunk_hide.val(mphone)
					this_chunk.hide()
					this_chunk_hide.show()
				}
			} else {
				this_tap.removeClass("hide")
				this_chunk.show()
				this_chunk_hide.hide()
				this_chunk.focus()
			}
			setTimeout(function() {
				flag = false;
			}, 300);
		}
	})
	$(".hide_phone_ipt").tap(function() {
		if(!flag) {
			flag = true;
			$(this).siblings("a").removeClass("hide")
			$(this).hide()
			$(this).siblings(".phone_ipt").show()
			setTimeout(function() {
				flag = false;
			}, 300);
		}
	})
	//点击性别
	$(".customer-phone .gender span").tap(function(){
		$(this).addClass("checked").siblings().removeClass("checked")
	})
	
	
	var tags_box_w = $(".property-info .tags-box .tags-box-ul li").width()
	var tags_box_w_last = $(".property-info .tags-box .tags-box-ul li:last-child").width()
	var tags_box_len = $(".property-info .tags-box .tags-box-ul li").length
	$(".property-info .tags-box .tags-box-ul").width((tags_box_len - 1) * tags_box_w + tags_box_w_last + 2)
	if(tags_box_len <= 0) {
		$(".property-info .tags-box").height("0")
	}

	$(".property-info .tags-box .tags-box-li .delete").tap(function() {
		$(this).parent().remove()
		var tags_box_w_new = $(".property-info .tags-box .tags-box-ul li").width()
		var tags_box_w_last_new = $(".property-info .tags-box .tags-box-ul li:last-child").width()
		var tags_box_len_new = $(".property-info .tags-box .tags-box-ul li").length
		$(".property-info .tags-box .tags-box-ul").width((tags_box_len_new - 1) * tags_box_w_new + tags_box_w_last_new + 2)
		if(tags_box_len_new <= 0) {
			$(".property-info .tags-box").height("0")
		}
		tags_boxS.refresh()
		report_customerS.refresh()
	})

	var tags_boxS = new IScroll('.property-info .tags-box', {
		scrollbars: false,
		scrollX: true,
		scrollY: false
	})

	var report_customerS = new IScroll('.report-customer-section', {
		scrollbars: true,
		fadeScrollbars: true,
		shrinkScrollbars: 'clip'
	})
})