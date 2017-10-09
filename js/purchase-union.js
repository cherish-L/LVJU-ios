$(function() {

	var purchaseS = new IScroll('.purchase-union-section', {
		scrollbars: false
	})
	
	//点击切换服务内容 联盟优势
	$(".purchase-union-list .list-nav li").tap(function() {
		var index = $(this).index()
		$(this).addClass("select").siblings().removeClass("select")
		$(".purchase-union-list .list-content .list-content-li").eq(index).css("display", "block").siblings().css("display", "none")
		purchaseS.refresh()
	})


	//联盟动态
	var dynamicS = new IScroll('.union-dynamic-pushsection', {
		scrollbars: true,
		fadeScrollbars: true,
		shrinkScrollbars: 'clip'
		
	})
	
	var unionW = $(".union-dynamic-push").width()+5
	$(".purchase-union-section .synopsis-link").tap(function() {
		$(".purchase-union-shadow").fadeIn(200)
		$(".union-dynamic-push").css("transform", "translateX(0px)")
		
	})
	
	$(".union-dynamic-pushheader .return").tap(function() {
		$(".purchase-union-shadow").fadeOut(200)
		$(".union-dynamic-push").css("transform", "translateX("+unionW+"px)")
	})
	
	
	//报名
	$(".purchase-union-container .signUp-btn").tap(function() {
		$(".purchase-union-Mask").fadeIn(300)
		$(".purchase-union-signUp .signUp-push").addClass("show")

		$(".purchase-union-Mask").tap(function() {
			$(".purchase-union-Mask").fadeOut(300)
			$(".purchase-union-signUp .signUp-push").removeClass("show")
		})

		$(".purchase-union-signUp .signUp-delete-box i").tap(function() {
			$(".purchase-union-Mask").fadeOut(300)
			$(".purchase-union-signUp .signUp-push").removeClass("show")
		})

		$(".purchase-union-signUp .signUp-button").tap(function() {
			if($(".signUp-username input").val() !== "" && $(".signUp-userphone input").val() !== "" && $(".signUp-message input").val() !== "") {
				$(".signUp-username input").val("")
				$(".signUp-userphone input").val("")
				$(".signUp-message input").val("")
				$(".purchase-union-signUp .signUp-push").removeClass("show")
				$(".purchase-union-signUp .enroll-fail").addClass("show")
				
				$(".enroll-fail .fail-button").tap(function() {
					$(".purchase-union-signUp .enroll-fail").removeClass("show")
					$(".purchase-union-signUp .enroll-success").addClass("show")
					$(".purchase-union-signUp .enroll-success .suc-button").tap(function() {
						$(".purchase-union-signUp .enroll-success").removeClass("show")
						$(".purchase-union-Mask").fadeOut(300)
					})
				})
			}
			else {
				if($(".signUp-username input").val() == "") {
					$(".signUp-username input").addClass("animated shake")
					setTimeout(function() {
						$(".signUp-username input").removeClass("animated shake")
					}, 500)
				}
				if($(".signUp-userphone input").val() == "") {
					$(".signUp-userphone input").addClass("animated shake")
					setTimeout(function() {
						$(".signUp-userphone input").removeClass("animated shake")
					}, 500)
				}
				if($(".signUp-message input").val() == "") {
					$(".signUp-message input").addClass("animated shake")
					setTimeout(function() {
						$(".signUp-message input").removeClass("animated shake")
					}, 500)
				}
			}
		})
	})
	
	
	//实时监听input的变化 获取焦点 logo .3s后消失
	$(".signUp-username input").focus(function() {
		$(".signUp-push .pushBox-img").addClass("hide")
		$(this).blur(function() {
			$(".signUp-push .pushBox-img").removeClass("hide")
		})
	})
	
	$(".signUp-userphone input").focus(function() {
		$(".signUp-push .pushBox-img").addClass("hide")
		$(this).blur(function() {
			$(".signUp-push .pushBox-img").removeClass("hide")
		})
	})
	
	$(".signUp-message input").focus(function() {
		$(".signUp-push .pushBox-img").addClass("hide")
		$(this).blur(function() {
			$(".signUp-push .pushBox-img").removeClass("hide")
		})
	})
		
		
	//联盟优势
	var advantageS = new IScroll('.advantage-push-wrapper', {
		scrollbars: true,
		fadeScrollbars: true,
		shrinkScrollbars: 'clip'
	})
	
	$(".purchase-union-list .advantage-list li").tap(function() {
		$(".purchase-union-Mask").fadeIn(300)
		$(".union-advantage-push").addClass("show")

		$(".purchase-union-Mask").tap(function() {
			$(".purchase-union-Mask").fadeOut(300)
			$(".union-advantage-push").removeClass("show")
		})

		$(".union-advantage-push .advantage-delete-box i").tap(function() {
			$(".purchase-union-Mask").fadeOut(300)
			$(".union-advantage-push").removeClass("show")
		})

	})
	
	
	//联系置业顾问
	$(".customService-data-li").tap(function() {
		$(".purchase-union-Mask").fadeIn(300)
		$(".contact-adviser-push").addClass("show")

		$(".purchase-union-Mask").tap(function() {
			$(".purchase-union-Mask").fadeOut(300)
			$(".contact-adviser-push").removeClass("show")
		})

		$(".contact-adviser-push .cancel").tap(function() {
			$(".purchase-union-Mask").fadeOut(300)
			$(".contact-adviser-push").removeClass("show")
		})

	})
	
	
	
	
})