$(function(){
	var report_customerS = new IScroll('.report-customer-section', {
		scrollbars: true,
		fadeScrollbars: true,
		shrinkScrollbars: 'clip'
	})
	
	
	//点击添加
	$(".customer-phone .customer-phone-li:first-child .add-btn").tap(function(){
		$(".customer-phone .customer-phone-wrapper").append("<li class='customer-phone-li'><ul class='customer-phone-li-box'><li class='name'><input class='name_ipt' type='text' name='' id='' placeholder='客户姓名'/><a href='javascript:;'></a></li><li class='phone'><input class='phone_ipt' type='text' name='' id='' placeholder='客户电话'/></li></ul><div class='del-btn'><span>删除</span></div></li>")
		report_customerS.refresh()
		//点击删除
		$(".customer-phone .customer-phone-li .del-btn").tap(function(){
			$(this).parent().remove()
			report_customerS.refresh()
		})
	})
	
	
	var tags_box_w=$(".property-info .tags-box .tags-box-ul li").width()
	var tags_box_w_last=$(".property-info .tags-box .tags-box-ul li:last-child").width()
	var tags_box_len=$(".property-info .tags-box .tags-box-ul li").length
	$(".property-info .tags-box .tags-box-ul").width((tags_box_len-1)*tags_box_w+tags_box_w_last+2)
	if(tags_box_len<=0){
		$(".property-info .tags-box").height("0")
	}
	
	$(".property-info .tags-box .tags-box-li .delete").tap(function(){
		$(this).parent().remove()
		var tags_box_w_new=$(".property-info .tags-box .tags-box-ul li").width()
		var tags_box_w_last_new=$(".property-info .tags-box .tags-box-ul li:last-child").width()
		var tags_box_len_new=$(".property-info .tags-box .tags-box-ul li").length
		$(".property-info .tags-box .tags-box-ul").width((tags_box_len_new-1)*tags_box_w_new+tags_box_w_last_new+2)
		if(tags_box_len_new<=0){
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
	
})
	