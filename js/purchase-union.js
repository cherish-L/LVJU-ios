$(function(){
	//点击切换服务内容 联盟优势
	$(".purchase-union-list .list-nav li").tap(function(){
		var index=$(this).index()
		$(this).addClass("select").siblings().removeClass("select")
		$(".purchase-union-list .list-content .list-content-li").eq(index).css("display","block").siblings().css("display","none")
		purchaseS.refresh()
	})
	
	
	
	
	
	
	var purchaseS = new IScroll('.purchase-union-section', {
		scrollbars: false
	})
})
