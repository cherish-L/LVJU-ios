$(function(){
	$(".information_wrap li").tap(function(){
		index=$(this).index();
		bomb=$(".bomb_wrap .bomb").eq(index);
		var hh=bomb.find(".d_content").height();
		bomb.css("height",hh);
		if($(this).hasClass("int")){
			$(".bomb_box").removeClass("show")
		}
		else if(!$(this).hasClass("int")){
			$(".bomb_box").addClass("show")
		}
		$(".d_content li").tap(function(){
			var ind=$(this).index();
			var txt=$(this).html();
			bomb.css("height","0");
			bomb.find(".d_content li").eq(ind).addClass("select").siblings().removeClass("select");
			$(".bomb_box").removeClass("show")
			var ddd=$(".information_wrap li").eq(index).find(".selecttxt");
			if(ddd){
				ddd.remove()
				$(".information_wrap li").eq(index).find(".returnright").prepend("<span class='selecttxt'>"+txt+"</span>")
			}
			index=null;
			sectionS.refresh()
		})
		
		
		$(".selectmore span").tap(function(){
			if(!$(this).hasClass("on")){
				var arr=$(this).text()
				$(this).addClass("on")
				$(".information_wrap li").eq(index).find(".returnright .txt_wrap").prepend("<span class='selectwrap'>"+arr+"</span>");	
			}
			var hhh=$(".information_wrap li").eq(index).find(".returnright .txt_wrap").height()
			$(".information_wrap li").eq(index).height(hhh)
			$(".information_wrap li").eq(index).find(".returnright i").height(hhh)
			sectionS.refresh()
		})
		
		
		$(".reset").tap(function(){
			$(this).parent().siblings(".selectmore").find("span").removeClass("on")
//			$(".bomb_box").css("opacity","0");
//			$(".bomb_box").css("z-index","-1");
			$(".information_wrap li").eq(index).find(".returnright .txt_wrap").html('')
			$(".information_wrap li").eq(index).find(".returnright .txt_wrap").prepend("<div style='clear: both;'></div>");
			var liheight=$(".information_wrap li").eq(0).height()
			$(".information_wrap li").eq(index).height(liheight)
			sectionS.refresh()
		})
		
		$(".determine").tap(function(){
			$(".bomb_box").removeClass("show")
			bomb.css("height","0");
			sectionS.refresh()
		})
		
		
		
		
		
		$(".bomb_box").tap(function(){
			$(".bomb_box").removeClass("show")
			bomb.css("height","0");
			$(".click_sub").children().css("display","none");
			index=null;
			sectionS.refresh()
		})
	})
	
	$(".name").focus(function(){
			$(this).css("color","#6C7072")
			var t=$(this).val(); 
			$(this).val("").focus().val(t); 
			sectionS.refresh()
	})
	
	//提交按钮（随时改动）
	$(".submit").tap(function(){
			$(".bomb_box").addClass("show")
		$(".fail").fadeIn(300)
		$(".again").tap(function(){
			$(".success").fadeIn(300).siblings().fadeOut(300)
		})
		$(".know").tap(function(){
			$(".success").hide()
			$(".bomb_box").removeClass("show")
		})
		sectionS.refresh()
	})
	
	
	var sectionS = new IScroll('.section', {
		scrollbars: false
	});
})

	