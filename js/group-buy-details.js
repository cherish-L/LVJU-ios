$(function(){
	var gb_detailsS = new IScroll('.group-buy-details-section', {
		scrollbars: true,
		fadeScrollbars: true,
		shrinkScrollbars: 'clip'
	})
	
	//报名免费看房团
	$(".activity-join .activity-join-btn").tap(function(){
		$(".group-buy-details-Mask").addClass("signal_show")
		$(".sign-up-push").addClass("show")
		$(".sign-up-push .sign-up-btn span").tap(function(){
			if($(".name_ipt").val()!=="" && $(".contact_ipt").val()!==""){
				$(".name_ipt").val("")
				$(".contact_ipt").val("")
				$(".sign-up-push").removeClass("show")
				$(".sign-up-false").addClass("show")
				$(".sign-up-false a").tap(function(){
					$(".sign-up-success").addClass("show")
					$(".sign-up-false").removeClass("show")
					$(".sign-up-push").removeClass("show")
				})
				
			}
		})
		
		$(".sign-up-push .sign-up-del").tap(function(){
			$(".sign-up-push").removeClass("show")
			$(".group-buy-details-Mask").removeClass("signal_show")
		})
		
		$(".group-buy-details-Mask").tap(function(){
			$(".sign-up-success").removeClass("show")
			$(".sign-up-false").removeClass("show")
			$(".sign-up-push").removeClass("show")
			$(".group-buy-details-Mask").removeClass("signal_show")
		})
	})
	
	
})
