$(function(){
	$(".city").tap(function(){
		txt=$(this).text()
		$(".current_location").text("当前: "+txt)
		$(".located .wraps").find(".located_city .cityed").text(txt)
		if(!$(this).hasClass("lick")){
			$(".history_location .wrap").prepend("<li class='city history_city'>"+txt+"</li>")
			$(this).addClass("lick")
		}
		$(".history_city").tap(function(){
			txts=$(this).text()
			$(".current_location").text("当前: "+txts)
			$(".located .wraps").find(".located_city .cityed").text(txts)
		})
		if($(".history_location .wrap").children().length>=2){
			$(".history_location").css("display","block")
		}
	})
	
	
	
})
