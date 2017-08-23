$(function(){
	//用户中心下拉背景放大
	
	var centerH=$(".user-center-section").height()
	$(".user-center-section .section-wrapper").height(centerH+1)
	
	var centerS = new IScroll('.user-center-section', {
		scrollbars: false,
		probeType: 3
	})
	
	var bgh=$(".user-center-Bg img").height()
	var bgw=$(".user-center-Bg img").width()
	centerS.on('scroll', function() {
		var Scrollh=centerS.y
		if(centerS.y > 0){
			var scale= (Scrollh+bgh)/bgh
			$(".user-center-Bg img").css("height",scale*bgh)
			$(".user-center-Bg img").css("width",scale*bgw)
		}
		if(centerS.y < 0){
			$(".user-center-Bg").css("top",centerS.y)
		}
	})
	
	//设置弹框
	var setS = new IScroll('.set-up-pushsection', {
		scrollbars: false
	})
	
	var setw=$(".set-up-push").width()
	
	$(".user-center-header .setUp").tap(function(){
		$(".set-up-push").css("left","0")
		$(".set-up-pushheader .return").tap(function(){
			$(".set-up-push").css("left",setw+5)
		})
	})
	
	//消息管理
	var managementS = new IScroll('.message-management-pushsection', {
		scrollbars: false
	})
	
	$(".set-up-pushsection .message-management").tap(function(){
		$(".message-management-push").css("left","0")
		$(".message-management-pushheader .return").tap(function(){
			$(".message-management-push").css("left",setw+5)
		})
	})
	
	//关于我们
	 
	var aboutS = new IScroll('.about-us-pushsection', {
		scrollbars: false
	})
	
	$(".set-up-pushsection .about-us").tap(function(){
		$(".about-us-push").css("left","0")
		$(".about-us-pushheader .return").tap(function(){
			$(".about-us-push").css("left",setw+5)
		})
	})
	
	//帮助说明
	
	var descriptionS = new IScroll('.help-description-pushsection', {
		scrollbars: false
	})
	
	$(".set-up-pushsection .help-description").tap(function(){
		$(".help-description-push").css("left","0")
		$(".help-description-pushheader .return").tap(function(){
			$(".help-description-push").css("left",setw+5)
		})
	})
	
	//怎么注册成为用户
	
	var registerS = new IScroll('.how-register-pushsection', {
		scrollbars: false
	})
	
	$(".help-description-push .how-register").tap(function(){
		$(".how-register-push").css("left","0")
		$(".how-register-pushheader .return").tap(function(){
			$(".how-register-push").css("left",setw+5)
		})
	})
})
