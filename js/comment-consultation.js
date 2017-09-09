$(function(){
	$(".comment-consultation-section").bind("touchstart",function(){
		comment_consultationS.refresh()
	})
	var comment_consultationS = new IScroll('.comment-consultation-section', {
		scrollbars: true,
		fadeScrollbars: true,
		shrinkScrollbars: 'clip'
	})
	
	$(".comment-consultation-textBox .textBox_submit").tap(function(){
		if($(".textBox_textarea").val()!==""){
			$(this).blur()
			$(this).text("正在提交...")
			$(".comment-consultation-Mask").addClass("show")
			$(".submit-false").addClass("show")
			$(".submit-false a").tap(function(){
				$(".submit-false").removeClass("show")
				$(".submit-success").addClass("show")
			})
			$(".comment-consultation-Mask").tap(function(){
				$(".submit-false").removeClass("show")
				$(".submit-success").removeClass("show")
				$(".comment-consultation-Mask").removeClass("show")
				$(".comment-consultation-textBox .textBox_submit").text("提交")
			})
		}
	})
	
	//评论隐藏超出内容
	var head_h=$(".head-portrait").height()
	var max_h=(head_h*48/27)+5
	$(".QA-content-li").each(function(){
		var index=$(this).index()
		var li_index=$(".QA-content-li").eq(index)
		if(li_index.find(".answer").height()>max_h){
			$(this).find(".answer").siblings(".full_text").css("display","block")
			$(this).find(".answer").addClass("showall")
		}
		else if(li_index.find(".answer").height()<max_h){
			$(this).find(".answer").siblings(".full_text").css("display","none")
			$(this).find(".answer").removeClass("showall")
		}
	})
	$(".full_text").tap(function(){
		$(this).css("display","none")
		$(this).siblings(".answer").removeClass("showall")
		property_detailsS.refresh()
	})
})
