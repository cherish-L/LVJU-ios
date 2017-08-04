$(function(){
	//AF与CI版面交互
	$(".AF-money .AF-calculate-select span").tap(function(){
		$(this).addClass("select").siblings().removeClass("select")
	})
	$(".AF-area .AF-calculate-select span").tap(function(){
		$(this).addClass("select").siblings().removeClass("select")
	})
	$(".CL-area .CL-calculate-select span").tap(function(){
		$(this).addClass("select").siblings().removeClass("select")
	})
	$(".CL-money .CL-calculate-select span").tap(function(){
		$(this).addClass("select").siblings().removeClass("select")
	})
	$(".CombinationL .CombinationL-calculate-select span").tap(function(){
		$(this).addClass("select").siblings().removeClass("select")
	})
	$(".R-details .details-calculate-select span").tap(function(){
		$(this).addClass("select").siblings().removeClass("select")
	})
	
	//input获得焦点是光标始终在内容后面
	$(".name").focus(function(){
		var t=$(this).val(); 
		$(this).css("color","#6C7072")
		$(this).val("").focus().val(t); 
	})
	
	//还款明细推行框
	var metaw=$(".container").width()
	$(".push").tap(function(){
		$(".push").css("color","#999999")
		$(".R-details").css("left","0")
	})
	
	$(".R-details .return").tap(function(){
		$(".push").css("color","#0099eb")
		$(".R-details").css("left",metaw)
	})
	
	
	//遮罩
	$(".zhezhao").tap(function(){
		$(".zhezhao").css("z-index","-1")
		$(".zhezhao").css("opacity","0")
		$(".frame").css("height","0")
	})
	
	//计算类型弹框
	$(".calculation-type li").tap(function(){
		$(".calculation-type").css("height","0")
		$(".zhezhao").css("z-index","-1")
		$(".zhezhao").css("opacity","0")
	})
	//购房类型
	$(".house-type li").tap(function(){
		$(".house-type").css("height","0")
		$(".zhezhao").css("z-index","-1")
		$(".zhezhao").css("opacity","0")
	})
	//首付比重
	$(".down-payments li").tap(function(){
		$(".down-payments").css("height","0")
		$(".zhezhao").css("z-index","-1")
		$(".zhezhao").css("opacity","0")
	})
	//公积金利率
	$(".gong-rate li").tap(function(){
		$(".gong-rate").css("height","0")
		$(".zhezhao").css("z-index","-1")
		$(".zhezhao").css("opacity","0")
	})
	//贷款年限
	$(".loan-term li").tap(function(){
		$(".loan-term").css("height","0")
		$(".zhezhao").css("z-index","-1")
		$(".zhezhao").css("opacity","0")
	})
	//住宅类型
	$(".housing-type li").tap(function(){
		$(".housing-type").css("height","0")
		$(".zhezhao").css("z-index","-1")
		$(".zhezhao").css("opacity","0")
	})

	
	
	//----------------计算类型---------------------------------------------------
	//计算类型弹框
	$(".credit .typebox .jisuan").tap(function(){
		var lih=$(".calculation-type li").height()
		var lilen=$(".calculation-type li").length
		$(".calculation-type").css("height",lih*lilen)
		$(".zhezhao").css("z-index","10")
		$(".zhezhao").css("opacity","1")
	})
	//计算类型选择
	$(".section .credit").eq(0).show().siblings().hide()
	$(".calculation-type li").tap(function(){
		var ct_index=$(this).index()
		var ct_txt=$(".calculation-type li").eq(ct_index).text()
		if(!$(this).hasClass("select")){
			$(".frame li").removeClass("select")
			$(".calculation-type li").eq(ct_index).addClass("select").siblings().removeClass("select")
			$(".section .credit").eq(ct_index).css("display","block").siblings().css("display","none")
			$(".jisuan .returnright").html(ct_txt)
			$(".null").html('')
			$(".name").val('')
			$(".calculation-type").css("height","0")
			$(".zhezhao").css("z-index","-1")
			$(".zhezhao").css("opacity","0")
		}
	})
	
	
	//----------------购房性质---------------------------------------------------
	//购房性质弹框
	$(".credit .typebox .goufang").tap(function(){
		var lih=$(".house-type li").height()
		var lilen=$(".house-type li").length
		$(".house-type").css("height",lih*lilen)
		$(".zhezhao").css("z-index","10")
		$(".zhezhao").css("opacity","1")
	})
	//购房性质选择
	$(".house-type li").tap(function(){
		var ht_index=$(this).index()
		var ht_txt=$(".house-type li").eq(ht_index).text()
		$(".house-type li").eq(ht_index).addClass("select").siblings().removeClass("select")
		$(".goufang .returnright").html(ht_txt)
		$(".house-type").css("height","0")
		$(".zhezhao").css("z-index","-1")
		$(".zhezhao").css("opacity","0")
	})
	
	
	//----------------首付-------------------------------------------------
	//首付弹框
	$(".credit .typebox .shoufu").tap(function(){
		var lih=$(".down-payments li").height()
		var lilen=$(".down-payments li").length
		$(".down-payments").css("height",lih*lilen)
		$(".zhezhao").css("z-index","10")
		$(".zhezhao").css("opacity","1")
	})
	//首付选择
	$(".down-payments li").tap(function(){
		var dp_index=$(this).index()
		var dp_txt=$(".down-payments li").eq(dp_index).text()
		$(".down-payments li").eq(dp_index).addClass("select").siblings().removeClass("select")
		$(".shoufu .returnright").html(dp_txt)
		$(".down-payments").css("height","0")
		$(".zhezhao").css("z-index","-1")
		$(".zhezhao").css("opacity","0")
	})
	
	
	//----------------公积金利率--------------------------------------------------
	//公积金利率弹框
	$(".credit .typebox .gongjijin").tap(function(){
		var lih=$(".gong-rate li").height()
		var lilen=$(".gong-rate li").length
		$(".gong-rate").css("height",lih*lilen)
		$(".zhezhao").css("z-index","10")
		$(".zhezhao").css("opacity","1")
	})
	//公积金利率选择
	$(".gong-rate li").tap(function(){
		var gr_index=$(this).index()
		var gr_txt=$(".gong-rate li").eq(gr_index).text()
		$(".gong-rate li").eq(gr_index).addClass("select").siblings().removeClass("select")
		$(".gongjijin .returnright").html(gr_txt)
		$(".gong-rate").css("height","0")
		$(".zhezhao").css("z-index","-1")
		$(".zhezhao").css("opacity","0")
	})
	
	
	//----------------贷款年限------------------------------------------------
	//贷款年限弹框
	$(".credit .typebox .nianxian").tap(function(){
		var lih=$(".loan-term li").height()
		var lilen=$(".loan-term li").length
		$(".loan-term").css("height",lih*lilen)
		$(".zhezhao").css("z-index","10")
		$(".zhezhao").css("opacity","1")
	})
	//贷款年限选择
	$(".loan-term li").tap(function(){
		var lt_index=$(this).index()
		var lt_txt=$(".loan-term li").eq(lt_index).text()
		$(".loan-term li").eq(lt_index).addClass("select").siblings().removeClass("select")
		$(".nianxian .returnright").html(lt_txt)
		$(".loan-term").css("height","0")
		$(".zhezhao").css("z-index","-1")
		$(".zhezhao").css("opacity","0")
	})
	
	
	//----------------商业贷利率------------------------------------------------
	//商业贷利率弹框
	$(".credit .typebox .shanye").tap(function(){
		var lih=$(".shan-rate li").height()
		var lilen=$(".shan-rate li").length
		$(".shan-rate").css("height",lih*lilen)
		$(".zhezhao").css("z-index","10")
		$(".zhezhao").css("opacity","1")
	})
	//商业贷利率选择
	$(".shan-rate li").tap(function(){
		var sr_index=$(this).index()
		var sr_txt=$(".shan-rate li").eq(sr_index).text()
		$(".shan-rate li").eq(sr_index).addClass("select").siblings().removeClass("select")
		$(".shanye .returnright").html(sr_txt)
		$(".shan-rate").css("height","0")
		$(".zhezhao").css("z-index","-1")
		$(".zhezhao").css("opacity","0")
	})
	
	
	//----------------住宅类型------------------------------------------------
	//住宅类型弹框
	$(".credit .typebox .zhuzhai").tap(function(){
		var lih=$(".housing-type li").height()
		var lilen=$(".housing-type li").length
		$(".housing-type").css("height",lih*lilen)
		$(".zhezhao").css("z-index","10")
		$(".zhezhao").css("opacity","1")
	})
	//住宅类型选择
	$(".housing-type li").tap(function(){
		var ht_index=$(this).index()
		var ht_txt=$(".housing-type li").eq(ht_index).text()
		$(".housing-type li").eq(ht_index).addClass("select").siblings().removeClass("select")
		$(".zhuzhai .returnright").html(ht_txt)
		$(".housing-type").css("height","0")
		$(".zhezhao").css("z-index","-1")
		$(".zhezhao").css("opacity","0")
	})
	
	var sectionS = new IScroll('.section', {
		scrollbars: false
	});
	var detailS = new IScroll('.details-wrapper-body', {
		scrollbars: false
	});
	
})