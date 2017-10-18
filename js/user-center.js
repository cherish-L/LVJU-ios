$(function() {
	//用户中心 下拉背景放大效果
	var centerH = $(".user-center-section").height()
	$(".user-center-section .section-wrapper").height(centerH + 1)

	var centerS = new IScroll('.user-center-section', {
		scrollbars: false,
		probeType: 3
	})

	var bgh = $(".user-center-Bg img").height()
	var bgw = $(".user-center-Bg img").width()
	centerS.on('scroll', function() {
		var Scrollh = centerS.y
		if(centerS.y > 0) {
			var scale = (Scrollh + bgh) / bgh
			$(".user-center-Bg img").css("height", scale * bgh)
			$(".user-center-Bg img").css("width", scale * bgw)
		}
		if(centerS.y < 0) {
			$(".user-center-Bg").css("top", centerS.y)
		}
	})

	//用户中心--消息未读状态
	if($(".message-prompt").text()==0){
		$(".user-center-container .message-prompt").css("display","none")
	}
	
	//登录状态才能查询信息
	var please_login=null;
	
		//我的收藏弹框
		$(".user-center-section .collection").tap(function(){
			if($(".user-center-container .Not-logged").hasClass("show")){
				clearTimeout(please_login)
				$(".user-center-container .message-prompt").css("display","none")
				$(".set-up-pushsection .login-box").css("display","none")
				$(".please-login-account").show()
				please_login=setTimeout(function(){
					$(".please-login-account").fadeOut(250)
				},1800)
			}
			if(!$(".user-center-container .Not-logged").hasClass("show")){
				$(".user-center-container .message-prompt").css("display","block")
				$(".set-up-push .login-status .login-box").css("display","block")
				$(".set-up-pushsection .login-box").css("display","block")
				$(".personal-collection-push").css("transform", "translateX(0px)")
				$(".user-center-shadow").fadeIn(250)
			}
		})
		$(".personal-collection-pushheader .return").tap(function(){
			$(".personal-collection-push").css("transform", "translateX("+setw+"px)")
			$(".user-center-shadow").fadeOut(250)
		})
		
		//我的足迹弹框
		$(".user-center-section .footprint").tap(function(){
			if($(".user-center-container .Not-logged").hasClass("show")){
				clearTimeout(please_login)
				$(".user-center-container .message-prompt").css("display","none")
				$(".set-up-pushsection .login-box").css("display","none")
				$(".please-login-account").show()
				please_login=setTimeout(function(){
					$(".please-login-account").fadeOut(250)
				},1800)
			}
			if(!$(".user-center-container .Not-logged").hasClass("show")){
				$(".user-center-container .message-prompt").css("display","block")
				$(".set-up-pushsection .login-box").css("display","block")
				$(".personal-footprint-push").css("transform", "translateX(0px)")
				$(".user-center-shadow").fadeIn(250)
			}
		})
		$(".personal-footprint-pushheader .return").tap(function(){
			$(".personal-footprint-push").css("transform", "translateX("+setw+"px)")
			$(".user-center-shadow").fadeOut(250)
		})
		
		//我的消息弹框
		$(".user-center-section .news").tap(function(){
			if($(".user-center-container .Not-logged").hasClass("show")){
				clearTimeout(please_login)
				$(".user-center-container .message-prompt").css("display","none")
				$(".set-up-pushsection .login-box").css("display","none")
				$(".please-login-account").show()
				please_login=setTimeout(function(){
					$(".please-login-account").fadeOut(250)
				},1800)
			}
			if(!$(".user-center-container .Not-logged").hasClass("show")){
				$(".user-center-container .message-prompt").css("display","block")
				$(".set-up-pushsection .login-box").css("display","block")
				$(".personal-news-push").css("transform", "translateX(0px)")
				$(".user-center-shadow").fadeIn(250)
			}
		})
		$(".personal-news-pushheader .return").tap(function(){
			$(".personal-news-push").css("transform", "translateX("+setw+"px)")
			$(".user-center-shadow").fadeOut(250)
		})
		
		//我的优惠券弹框
		$(".user-center-section .Coupon").tap(function(){
			if($(".user-center-container .Not-logged").hasClass("show")){
				clearTimeout(please_login)
				$(".user-center-container .message-prompt").css("display","none")
				$(".set-up-pushsection .login-box").css("display","none")
				$(".please-login-account").show()
				please_login=setTimeout(function(){
					$(".please-login-account").fadeOut(200)
				},1800)
			}
			if(!$(".user-center-container .Not-logged").hasClass("show")){
				$(".user-center-container .message-prompt").css("display","block")
				$(".set-up-pushsection .login-box").css("display","block")
				$(".personal-coupon-push").css("transform", "translateX(0px)")
				$(".user-center-shadow").fadeIn(250)
			}
		})
		$(".personal-coupon-pushheader .return").tap(function(){
			$(".personal-coupon-push").css("transform", "translateX("+setw+"px)")
			$(".user-center-shadow").fadeOut(250)
		})
	
	

	//用户中心--设置弹框
	var setH = $(".set-up-pushsection").height()
	$(".set-up-pushsection .pushsection-wrapper").height(setH + 1)

	var setS = new IScroll('.set-up-pushsection', {
		scrollbars: false
	})

	var setw = $(".set-up-push").width()+5
	$(".user-center-header .setUp").tap(function() {
		$(".set-up-push").css("transform", "translateX(0px)")
		$(".user-center-shadow").fadeIn(250)
		if($(".user-center-container .Not-logged").hasClass("show")){
		$(".set-up-pushsection .login-box").css("display","none")
		}
		if(!$(".user-center-container .Not-logged").hasClass("show")){
			$(".set-up-pushsection .login-box").css("display","block")
		}
	})
	$(".set-up-pushheader .return").tap(function() {
		$(".set-up-push").css("transform", "translateX("+setw+"px)")
		$(".user-center-shadow").fadeOut(250)
	})
	
	
	//用户中心--设置弹框--消息管理
	var managementH = $(".message-management-pushsection").height()
	$(".message-management-pushsection .pushsection-wrapper").height(managementH + 1)

	var managementS = new IScroll('.message-management-pushsection', {
		scrollbars: false
	})

	$(".set-up-pushsection .message-management").tap(function() {
		$(".message-management-push").css("transform", "translateX(0px)")
		$(".set-up-shadow").fadeIn(250)
	})
	
	$(".message-management-pushheader .return").tap(function() {
		$(".message-management-push").css("transform", "translateX("+setw+"px)")
		$(".set-up-shadow").fadeOut(250)
	})
	
	//用户中心--设置弹框--关于我们
	var abouth = $(".about-us-pushsection").height()
	var about_wh = $(".about-us-pushsection .pushsection-wrapper").height()
	
	if(about_wh<=abouth){
		$(".about-us-pushsection .pushsection-wrapper").height(abouth+1)
	}
	
	var aboutS = new IScroll('.about-us-pushsection', {
		scrollbars: false
	})

	$(".set-up-pushsection .about-us").tap(function() {
		$(".about-us-push").css("transform", "translateX(0px)")
		$(".set-up-shadow").fadeIn(250)
	})
	$(".about-us-pushheader .return").tap(function() {
		$(".about-us-push").css("transform", "translateX("+setw+"px)")
		$(".set-up-shadow").fadeOut(250)
	})
	
	
	//用户中心--设置弹框--帮助说明
	var descriptionH = $(".help-description-pushsection").height()
	$(".help-description-pushsection .pushsection-wrapper").height(descriptionH + 1)

	var descriptionS = new IScroll('.help-description-pushsection', {
		scrollbars: false
	})

	$(".set-up-pushsection .help-description").tap(function() {
		$(".help-description-push").css("transform", "translateX(0px)")
		$(".set-up-shadow").fadeIn(250)
	})
	$(".help-description-pushheader .return").tap(function() {
		$(".help-description-push").css("transform", "translateX("+setw+"px)")
		$(".set-up-shadow").fadeOut(250)
	})
	
	
	//用户中心--设置弹框--帮助说明--怎么注册成为用户
	var registerH = $(".how-register-pushsection").height()
	$(".how-register-pushsection .pushsection-wrapper").height(registerH + 1)

	var registerS = new IScroll('.how-register-pushsection', {
		scrollbars: false
	})

	$(".help-description-push .how-register").tap(function() {
		$(".how-register-push").css("transform", "translateX(0px)")
		$(".help-description-shadow").fadeIn(250)
	})
	
	$(".how-register-pushheader .return").tap(function() {
		$(".how-register-push").css("transform", "translateX("+setw+"px)")
		$(".help-description-shadow").fadeOut(250)
	})

	//用户中心--设置弹框--意见反馈
	var feedbackH = $(".feedback-pushsection").height()
	$(".feedback-pushsection .pushsection-wrapper").height(feedbackH + 1)

	$(".set-up-push .feedback").tap(function() {
		$(".feedback-push").css("transform", "translateX(0px)")
		$(".set-up-shadow").fadeIn(250)
	})
	
	$(".feedback-pushheader .return").tap(function() {
		$(".feedback-push").css("transform", "translateX("+setw+"px)")
		$(".set-up-shadow").fadeOut(250)
	})
	var Tarealen = $(".textarea").val().length
	$(".Surplus-character").text(200 - Tarealen + "字")
	
	
	
	//用户中心--登录界面
	var loginH = $(".login-page-pushsection").height()
	$(".login-page-pushsection .pushsection-wrapper").height(loginH + 1)
	
	var loginS = new IScroll('.login-page-pushsection', {
		scrollbars: false,
		preventDefault: true
	})


	//登录点击显示密码
	$(".login-page-pushsection .login-page-Password .showPassword").tap(function(){
		if(!$(this).hasClass("show") && $("#l-Password").attr("type") == "password"){
			$(this).addClass("show")
            $("#l-Password").attr("type", "text")
		}
		else{
			$(this).removeClass("show")
			$("#l-Password").attr("type", "password")
		}
	})
	
	//注册点击显示密码
	$(".login-page-pushsection .registered-Password .showPassword").tap(function(){
		if(!$(this).hasClass("show") && $("#r-Password").attr("type") == "password"){
			$(this).addClass("show")
            $("#r-Password").attr("type", "text")
		}
		else{
			$(this).removeClass("show")
			$("#r-Password").attr("type", "password")
		}
	})
	
	//找回密码 点击显示密码
	var retrieveh = $(".retrieve-password-pushsection").height()
	$(".retrieve-password-pushsection .pushsection-wrapper").height(loginH + 1)
	
	var retrieveS = new IScroll('.retrieve-password-pushsection', {
		scrollbars: false,
		preventDefault: true
	})
	
	$(".retrieve-password-push .retrieve-new a").tap(function(){
		if(!$(this).hasClass("show") && $("#retrieve-n").attr("type") == "password"){
			$(this).addClass("show")
            $("#retrieve-n").attr("type", "text")
		}
		else{
			$(this).removeClass("show")
			$("#retrieve-n").attr("type", "password")
		}
	})
	
	//找回密码获取验证
	var this_ipt_retrieve=0;
	var setTime_retrieve=null;
	$(".retrieve-password-pushsection .retrieve-p").bind('input propertychange', function() {
		this_ipt_retrieve = $(this).val()
		if((/^1[3|4|5|8]\d{9}$/.test(this_ipt_retrieve))){
			$(".retrieve-password-pushsection .Verificationbtn").addClass("light")
			if($(".retrieve-password-pushsection .Verificationbtn").hasClass("light")){
				$(".retrieve-password-pushsection .Verificationbtn").tap(function(){
					$(".retrieve-password-pushsection .Verificationbtn-box-wrapper .click").css("display","block")
					$(".retrieve-password-pushsection .Verificationbtn").removeClass("light")
			        $(document).ready(function(){
			            var time=60;
			            setTime_retrieve=setInterval(function(){
			                if(time<=0){
			                    clearInterval(setTime_retrieve);
			            			$(".retrieve-password-pushsection .Verificationbtn").addClass("light")
			            			$(".retrieve-password-pushsection .Verificationbtn").text("重新获取");
			            			$(".retrieve-password-pushsection .Verificationbtn-box-wrapper .click").css("display","none")
			                }
			                if(time>0){
			                		$(".retrieve-password-pushsection .Verificationbtn").text("("+time+")"+"重新获取");
			            			$(".retrieve-password-pushsection .Verificationbtn-box-wrapper .click").css("display","block")
			                }
			                time--;
			            },1000)
			        })
				})
			}
		}
		else if(!(/^1[3|4|5|8]\d{9}$/.test(this_ipt_retrieve))){
			$(".retrieve-password-pushsection .Verificationbtn").removeClass("light")
		}
	})
	
	//修改密码失败
	var retrievenum=0;
	$(".retrieve-password-pushsection .retrieve-btn").tap(function(){
		if(   (/^1[3|4|5|8]\d{9}$/.test($(".retrieve-password-pushsection .retrieve-p").val())) && $(".retrieve-password-pushsection .retrieve_v").val()!=="" && $(".retrieve-password-pushsection .retrieve-n").val()!==""){
			if(retrievenum%2==0){
				clearInterval(setTime_retrieve);
				$(".retrieve-password-pushsection .Verificationbtn").addClass("light")
				$(".retrieve-password-pushsection .Verificationbtn").text("获取验证码");
				$(".retrieve-password-pushsection .Verificationbtn-box-wrapper .click").css("display","none")
				$(".retrieve-password-push .retrieve-failed").show()
				setTimeout(function(){
					$(".retrieve-password-push .retrieve-failed").fadeOut(300)
				},1700)
			}
			else{
				clearInterval(setTime_retrieve);
				$(".retrieve-password-pushsection .Verificationbtn").removeClass("light")
				$(".retrieve-password-pushsection .Verificationbtn").text("获取验证码");
				$(".retrieve-password-pushsection .Verificationbtn-box-wrapper .click").css("display","none")
				
				$(".retrieve-password-push").css("transform", "translateX("+setw+"px)")
				$(".login-page-shadow").fadeOut(250)
				
				setTimeout(function(){
					$(".login-page-push .retrieve-success").show()
					$("#retrieve-p").val("").blur()
					$("#retrieve_v").val("").blur()
					$("#retrieve-n").val("").blur()
					setTimeout(function(){
						$(".login-page-push .retrieve-success").fadeOut(300)
					},1700)
				},300)
			}
			retrievenum++
		}
	})
	
	//点击忘记密码
	$(".login-page-pushsection .login-page-way .forgot-password").tap(function(){
		$(".retrieve-password-push").css("transform", "translateX(0px)")
		$(".login-page-shadow").fadeIn(250)
	})
	$(".retrieve-password-pushheader .return").tap(function() {
		$(".retrieve-password-push").css("transform", "translateX("+setw+"px)")
		$(".login-page-shadow").fadeOut(250)
	})
	
	//点击登录账号
	$(".login-page-pushsection .account-login .login-page-btn").tap(function(){
		if($(".login-page-pushsection .account-login .login-page-Username .Username").val()!=="" && $(".login-page-pushsection .account-login .login-page-Password .Password").val()!==""){
			$(".login-page-pushsection .account-login .login-page-Username .Username").val("").blur()
			$(".login-page-pushsection .account-login .login-page-Password .Password").val("").blur()
			$(".login-page-push").css("transform", "translateX("+setw+"px)")
			$(".user-center-shadow").fadeOut(250)
			$(".user-center-section .Not-logged").removeClass("show")
			$(".user-center-section .Logged-in").addClass("show")
			$(".message-prompt").css("display","block")
		}
	})
	
	

	//用户中心--登录界面  input获取焦点页面状态改变
	var this_ipt=0;
	var setTime_login=null;
	$(".login-page-phone .Userphone").bind('input propertychange', function() {
		this_ipt = $(this).val()
		if((/^1[3|4|5|8]\d{9}$/.test(this_ipt))){
			$(".login-page-phone .Verificationbtn").addClass("light")
			$(".login-page-phone .Verificationbtn").tap(function(){
				if($(this).hasClass("light") && (/^1[3|4|5|8]\d{9}$/.test(this_ipt))){
					$(".login-page-phone .Verificationbtn-box-wrapper .click").css("display","block")
					$(".login-page-phone .Verificationbtn").removeClass("light")
				    $(document).ready(function(){
				        var time=60;
				        setTime_login=setInterval(function(){
				            if(time<=0){
				                clearInterval(setTime_login);
				           		$(".login-page-phone .Verificationbtn").addClass("light")
				            		$(".login-page-phone .Verificationbtn").text("获取验证码");
				            		$(".login-page-phone .Verificationbtn-box-wrapper .click").css("display","none")
				            }
				            if(time>0){
				                $(".login-page-phone .Verificationbtn").text("("+time+")"+"重新获取");
				            	    $(".login-page-phone .Verificationbtn-box-wrapper .click").css("display","block")
				            }
				            time--;
				        },1000)
				    })
				}
			})
		}
		else if(!(/^1[3|4|5|8]\d{9}$/.test(this_ipt))){
			$(".login-page-phone .Verificationbtn").removeClass("light")
		}
	})
	
	
	$(".login-page-Username input").focus(function() {
		$(".login-page-logo").addClass("hide")
		$(".login-page-logo .login-logo").addClass("hide")
		$(".login-page-pushheader .title_txt").addClass("show")
		$(this).blur(function() {
			$(".login-page-logo").removeClass("hide")
			$(".login-page-logo .login-logo").removeClass("hide")
			$(".login-page-pushheader .title_txt").removeClass("show")
		})
	})
	$(".login-page-Password input").focus(function() {
		$(".login-page-logo").addClass("hide")
		$(".login-page-logo .login-logo").addClass("hide")
		$(".login-page-pushheader .title_txt").addClass("show")
		$(this).blur(function() {
			$(".login-page-logo").removeClass("hide")
			$(".login-page-logo .login-logo").removeClass("hide")
			$(".login-page-pushheader .title_txt").removeClass("show")
		})
	})
	
	$(".account-login .dynamic-login").tap(function(){
		$(".phone-dynamic-login").fadeIn()
		$(".account-login").fadeOut(0)
		$(".registered-account").fadeOut(0)
		$(".login-page-pushheader .title_txt").addClass("show")
	})
	$(".phone-dynamic-login .dynamic-login").tap(function(){
		$(".account-login").fadeIn()
		$(".phone-dynamic-login").fadeOut(0)
		$(".registered-account").fadeOut(0)
		$(".login-page-pushheader .title_txt").removeClass("show")
	})
	
	$(".login-page-pushheader .register").tap(function(){
		$(".login-page-pushheader .register").css("display","none")
		$(".login-page-pushheader .login").css("display","block")
		$(".registered-account").fadeIn()
		$(".phone-dynamic-login").fadeOut(0)
		$(".account-login").fadeOut(0)
		$(".login-page-pushheader .title_txt").removeClass("show")
	})
	
	$(".login-page-pushheader .login").tap(function(){
		$(".login-page-pushheader .register").css("display","block")
		$(".login-page-pushheader .login").css("display","none")
		$(".account-login").fadeIn()
		$(".phone-dynamic-login").fadeOut(0)
		$(".registered-account").fadeOut(0)
		$(".login-page-pushheader .title_txt").removeClass("show")
	})
	
	var settime=null;
	$('.phone-dynamic-login .login-page-btn').tap(function() {
		if($(".phone-dynamic-login .Userphone").val()!=="" && $(".phone-dynamic-login .Verification").val()!==""){
			$(".login-page-VerifyCodeError").css("display", "none")
			$(".login-page-LogonFailure").css("display", "block")
			$(".login-page-LogonFailure").css("opacity", "1")
			settime = setTimeout(function() {
				$(".login-page-LogonFailure").fadeOut(500)
			}, 1500)
			setTimeout(function() {
				$(".login-page-VerifyCodeError").css("display", "block")
				$(".login-page-VerifyCodeError").css("opacity", "1")
				setTimeout(function() {
					$(".login-page-VerifyCodeError").fadeOut(500)
				}, 1500)
			}, 2000)
		}
	})

	$(".user-center-section .Not-logged").tap(function(){
		$(".login-page-push").css("transform", "translateX(0px)")
		$(".user-center-shadow").fadeIn(250)
	})
	
	$(".login-page-pushheader .return").tap(function(){
		$(".login-page-push").css("transform", "translateX("+setw+"px)")
		$(".user-center-shadow").fadeOut(250)
		
		$(".login-page-pushheader .register").css("display","block")
		$(".login-page-pushheader .login").css("display","none")
		$(".account-login").fadeIn()
		$(".phone-dynamic-login").fadeOut(0)
		$(".registered-account").fadeOut(0)
		$(".login-page-pushheader .title_txt").removeClass("show")
	})
	
	//用户中心--注册页面
	var this_ipt_register=0;
	var setTime_registered=null;
	$(".registered-phone .Userphone").bind('input propertychange', function() {
		this_ipt_register = $(this).val()
		if((/^1[3|4|5|8]\d{9}$/.test(this_ipt_register))){
			$(".registered-phone .Verificationbtn").addClass("light")
			$(".registered-phone .Verificationbtn").tap(function(){
				if($(".registered-phone .Verificationbtn").hasClass("light")){
					$(".registered-phone .Userphone").blur()
					$(".registered-phone .Verificationbtn-box-wrapper .click").css("display","block")
					$(".registered-phone .Verificationbtn").removeClass("light")
			        $(document).ready(function(){
			            var time=60;
			            setTime_registered=setInterval(function(){
			                if(time<=0){
			                    clearInterval(setTime_registered);
			            			$(".registered-phone .Verificationbtn").addClass("light")
			            			$(".registered-phone .Verificationbtn").text("获取验证码");
			            			$(".Verificationbtn-box-wrapper .click").css("display","none")
			                }
			                if(time>0){
			                		$(".registered-phone .Verificationbtn").text("("+time+")"+"重新获取");
			            			$(".registered-phone .Verificationbtn-box-wrapper .click").css("display","block")
			                }
			                time--;
			            },1000)
			        })
				}
			})
		}
		else if(!(/^1[3|4|5|8]\d{9}$/.test(this_ipt_register))){
			$(".registered-phone .Verificationbtn").removeClass("light")
		}
	})
			
	//用户中心--注册页面  注册成功弹框
	
	var registerstateH = $(".register-state-pushsection").height()
	$(".register-state-pushsection .pushsection-wrapper").height(registerstateH + 1)
	
	var registerstateS = new IScroll('.register-state-pushsection', {
		scrollbars: false
	})
	
	
	var inputU=$(".registered-account .Userphone")
	var inputV=$(".registered-account .Verification")
	var inputP=$(".registered-account .Password")
	
	
			
			
		$(".registered-account input").bind('input propertychange', function() {
			$(".registered-account .registered-btn").tap(function(){
				if((/^1[3|4|5|8]\d{9}$/.test(inputU.val())) && inputV.val()!=="" && inputP.val()!=="" ){
					$(".register-state-push").css("transform", "translateX(0px)")
					$(".login-page-shadow").fadeIn(250)
					$(".register-fail-box").css("display","block")
					$(".register-success-box").css("display","none")
					inputU.val("")
					inputV.val("")
					inputP.val("")
					
				    clearInterval(setTime_registered);
				    $(".registered-phone .Verificationbtn").removeClass("light")
				    $(".registered-phone .Verificationbtn").text("获取验证码");
				    $(".Verificationbtn-box-wrapper .click").css("display","none")
				    
					$(".registered-account .registered-phone .Verificationbtn").removeClass("light")
					$(".register-state-pushheader .return").tap(function(){
						$(".register-state-push").css("transform", "translateX("+setw+"px)")
						$(".login-page-shadow").fadeOut(250)
					})
								
					$(".register-fail-box .Re-registration").tap(function(){
						$(".register-fail-box").css("display","none")
						$(".register-success-box").css("display","block")
					})
				}
			})
		})
			
			
			
			
		
	
				
	
	//用户中心--个人资料设置
	
	var personalS = new IScroll('.personal-data-pushsection', {
		scrollbars: false
	})
	$(".user-center-section .Logged-in").tap(function(){
		$(".personal-data-push").css("transform", "translateX(0px)")
		$(".user-center-shadow").fadeIn(250)
	})
	$(".personal-data-pushheader .return").tap(function(){
		$(".personal-data-push").css("transform", "translateX("+setw+"px)")
		$(".user-center-shadow").fadeOut(250)
	})
	
	//用户中心--个人资料设置--修改用户名弹框
	var accountH = $(".account-name-pushsection").height()
	$(".account-name-pushsection .pushsection-wrapper").height(accountH + 1)
	
	var accountS = new IScroll('.account-name-pushsection', {
		scrollbars: false
	})
	
	//用户中心--个人资料设置--修改用户名弹框  修改用户名返回键与保存键
	$(".personal-data-pushsection .account-name").tap(function(){
		var Aname=$(".personal-data-pushsection .account-name .li-wrapper-info").text()
		$(".account-name-push").css("transform", "translateX(0px)")
		$(".personal-data-shadow").fadeIn(250)
		$(".account-name-pushsection .accountName").val(Aname)
		
		if($(".account-name-pushsection .accountName").val()!==""){
			$(".account-name-pushsection .delete").css("display","block")
		}
		if($(".account-name-pushsection .accountName").val()==""){
			$(".account-name-pushsection .delete").css("display","none")
		}
		
		$(".account-name-pushheader .return").tap(function(){
			$(".account-name-push").css("transform", "translateX("+setw+"px)")
			$(".personal-data-shadow").fadeOut(250)
			$(".account-name-pushsection .accountName").val(Aname)
		})
		
		$(".account-name-pushheader .save").tap(function(){
			var inputtxt=$(".account-name-pushsection .accountName").val()
			if($(".account-name-pushsection .accountName").val()!==""){
				$(".account-name-push").css("transform", "translateX("+setw+"px)")
				$(".personal-data-shadow").fadeOut(250)
				$(".personal-data-pushsection .account-name .li-wrapper-info").text(inputtxt)
			}
		})
	})
	
	//用户中心--个人资料设置--修改用户名弹框  监听input中的val
	$(".account-name-pushsection .accountName").bind('input propertychange', function() {
		if($(".account-name-pushsection .accountName").val()!==""){
			$(".account-name-pushsection .delete").css("display","block")
		}
		if($(".account-name-pushsection .accountName").val()==""){
			$(".account-name-pushsection .delete").css("display","none")
		}
	})
	
	//用户中心--个人资料设置--修改用户名弹框  清空键
	$(".account-name-pushsection .delete").tap(function(){
		$(".account-name-pushsection .accountName").val("")
		$(".account-name-pushsection .accountName").focus()
		$(".account-name-pushsection .delete").css("display","none")
	})
	
	//用户中心--个人资料设置--修改昵称弹框
	var nicknameH = $(".nickname-pushsection").height()
	$(".nickname-pushsection .pushsection-wrapper").height(nicknameH + 1)
	
	var accountS = new IScroll('.nickname-pushsection', {
		scrollbars: false
	})
	
	//用户中心--个人资料设置--修改昵称弹框  修改用户名返回键与保存键
	$(".personal-data-pushsection .nickname").tap(function(){
		var Aname=$(".personal-data-pushsection .nickname .li-wrapper-info").text()
		$(".nickname-push").css("transform", "translateX(0px)")
		$(".personal-data-shadow").fadeIn(250)
		$(".nickname-pushsection .nickName").val(Aname)
		
		if($(".nickname-pushsection .nickName").val()!==""){
			$(".nickname-pushsection .delete").css("display","block")
		}
		if($(".nickname-pushsection .nickName").val()==""){
			$(".nickname-pushsection .delete").css("display","none")
		}
		
		$(".nickname-pushheader .return").tap(function(){
			$(".nickname-push").css("transform", "translateX("+setw+"px)")
			$(".personal-data-shadow").fadeOut(250)
			$(".nickname-pushsection .nickName").val(Aname)
		})
		
		$(".nickname-pushheader .save").tap(function(){
			var inputtxt=$(".nickname-pushsection .nickName").val()
			if($(".nickname-pushsection .nickName").val()!==""){
				$(".nickname-push").css("transform", "translateX("+setw+"px)")
				$(".personal-data-shadow").fadeOut(250)
				$(".personal-data-pushsection .nickname .li-wrapper-info").text(inputtxt)
			}
		})
	})
	
	//用户中心--个人资料设置--修改昵称弹框  监听input中的val
	$(".nickname-pushsection .nickName").bind('input propertychange', function() {
		if($(".nickname-pushsection .nickName").val()!==""){
			$(".nickname-pushsection .delete").css("display","block")
		}
		if($(".nickname-pushsection .nickName").val()==""){
			$(".nickname-pushsection .delete").css("display","none")
		}
	})
	//用户中心--个人资料设置--修改昵称弹框  清空键
	$(".nickname-pushsection .delete").tap(function(){
		$(".nickname-pushsection .nickName").val("")
		$(".nickname-pushsection .nickName").focus()
		$(".nickname-pushsection .delete").css("display","none")
	})
	
	//用户中心--个人资料设置--填写真实姓名弹框
	var realnameH = $(".real-name-pushsection").height()
	$(".real-name-pushsection .pushsection-wrapper").height(realnameH + 1)
	
	var realS = new IScroll('.real-name-pushsection', {
		scrollbars: false
	})
	
	//用户中心--个人资料设置--填写真实姓名弹框  修改真实姓名返回键与保存键
	$(".personal-data-pushsection .real-name").tap(function(){
		var Aname=$(".personal-data-pushsection .real-name .li-wrapper-info").text()
		$(".real-name-push").css("transform", "translateX(0px)")
		$(".personal-data-shadow").fadeIn(250)
		$(".real-name-pushsection .realName").val(Aname)
		if($(".real-name-pushsection .realName").val()!==""){
			$(".real-name-pushsection .delete").css("display","block")
		}
		if($(".real-name-pushsection .realName").val()==""){
			$(".real-name-pushsection .delete").css("display","none")
		}
		$(".real-name-pushheader .return").tap(function(){
			$(".real-name-push").css("transform", "translateX("+setw+"px)")
			$(".personal-data-shadow").fadeOut(250)
			$(".real-name-pushsection .realName").val(Aname)
		})
		
		$(".real-name-pushheader .save").tap(function(){
			var inputtxt=$(".real-name-pushsection .realName").val()
			if(!inputtxt==""){
				$(".real-name-push").css("transform", "translateX("+setw+"px)")
				$(".personal-data-shadow").fadeOut(250)
				$(".personal-data-pushsection .real-name .li-wrapper-info").text(inputtxt)
			}
		})
	})
	
	//用户中心--个人资料设置--填写真实姓名弹框  监听input中的val
	$(".real-name-pushsection .realName").bind('input propertychange', function() {
		if($(".real-name-pushsection .realName").val()!==""){
			$(".real-name-pushsection .delete").css("display","block")
		}
		if($(".real-name-pushsection .realName").val()==""){
			$(".real-name-pushsection .delete").css("display","none")
		}
	})
	//用户中心--个人资料设置--填写真实姓名弹框  清空键
	$(".real-name-pushsection .delete").tap(function(){
		$(".real-name-pushsection .realName").val("")
		$(".real-name-pushsection .realName").focus()
		$(".real-name-pushsection .delete").css("display","none")
	})
	
	//用户中心--个人资料设置--账户类型弹框
	var accountTypeh=$(".account-type-push .push-wrapper").height()
	$(".personal-data-pushsection .account-type").tap(function(){
		$(".personal-data-Mask").addClass("show")
		$(".account-type-push").height(accountTypeh)
		
		$(".personal-data-Mask").tap(function(){
			$(".personal-data-Mask").removeClass("show")
			$(".account-type-push").height("0")
		})
		
		$(".account-type-push li").tap(function(){
			var litxt=$(this).text()
			var index=$(this).index()
			$(this).addClass("select").siblings().removeClass("select")
			$(".personal-data-pushsection .account-type .li-wrapper-info").text(litxt)
			$(".personal-data-Mask").removeClass("show")
			$(".account-type-push").height("0")
		})
		
	})
	
	//用户中心--个人资料设置--修改密码弹框
	var modifyh = $(".modify-password-pushsection").height()
	$(".modify-password-pushsection .pushsection-wrapper").height(modifyh + 1)
	
	var modifyS = new IScroll('.modify-password-pushsection', {
		scrollbars: false
	})
	
	$(".personal-data-pushsection .account-management .Modify-password").tap(function(){
		$(".modify-password-push").css("transform", "translateX(0px)")
				$(".personal-data-shadow").fadeIn(250)
	})
	$(".modify-password-pushheader .del").tap(function(){
		$(".modify-password-push").css("transform", "translateX("+setw+"px)")
				$(".personal-data-shadow").fadeOut(250)
	})
	
	var modify=0;
	$(".modify-password-pushsection .modify-btn").tap(function(){
		if($(".modify-password-pushsection .old_P").val()!=="" && $(".modify-password-pushsection .new_P").val()!==""){
			if(modify%2==0){
				$(".modify-password-push").css("transform", "translateX("+setw+"px)")
				$(".personal-data-shadow").fadeOut(250)
				setTimeout(function(){
					$(".personal-data-push .modify-failed").show()
					$(".modify-password-pushsection .old_P").val("").blur()
					$(".modify-password-pushsection .new_P").val("").blur()
					setTimeout(function(){
						$(".personal-data-push .modify-failed").fadeOut(300)
					},1700)
				},300)
			}
			else{
				$(".login-page-push").css("transform", "translateX(0px)")
					$(".user-center-shadow").fadeIn(250)
				setTimeout(function(){
					$(".personal-data-push").css("transform", "translateX("+setw+"px)")
					$(".modify-password-push").css("transform", "translateX("+setw+"px)")
					$(".personal-data-shadow").fadeOut(250)
					$(".login-page-push .modify-success").show()
					$(".modify-password-pushsection .old_P").val("").blur()
					$(".modify-password-pushsection .new_P").val("").blur()
					
					$(".user-center-section .Not-logged").addClass("show")
					$(".user-center-section .Logged-in").removeClass("show")
					$(".message-prompt").css("display","none")
					
					setTimeout(function(){
						$(".login-page-push .modify-success").fadeOut(300)
					},1700)
				},300)
			}
			modify++
		}
	})
	
	
	//点击显示新密码
	$(".modify-password-box .new-password a").tap(function(){
		if(!$(this).hasClass("show") && $("#new_P").attr("type") == "password"){
			$(this).addClass("show")
            $("#new_P").attr("type", "text")
		}
		else{
			$(this).removeClass("show")
			$("#new_P").attr("type", "password")
		}
	})
	
	
	
	//用户中心--个人资料设置--性别弹框
	var genderh=$(".gender-push .push-wrapper").height()
	
	$(".personal-data-pushsection .gender").tap(function(){
		$(".personal-data-Mask").addClass("show")
		$(".gender-push").height(genderh)
		
		$(".personal-data-Mask").tap(function(){
			$(".personal-data-Mask").removeClass("show")
			$(".gender-push").height("0")
		})
		
		$(".gender-push li").tap(function(){
			var litxt=$(this).text()
			var index=$(this).index()
			$(this).addClass("select").siblings().removeClass("select")
			
			$(".personal-data-pushsection .gender .li-wrapper-info").text(litxt)
			$(".personal-data-Mask").removeClass("show")
			$(".gender-push").height("0")
		})
		
	})
	
					
	
	//用户中心--个人资料设置--生日弹框
	var birthdayH = $(".birthday-pushsection").height()
	$(".birthday-pushsection .pushsection-wrapper").height(birthdayH + 1)
	
	var birthdayS = new IScroll('.birthday-pushsection', {
		scrollbars: false
	})
	
	$(".personal-data-pushsection .birthday").tap(function(){
		$(".birthday-push").css("transform", "translateX(0px)")
		$(".personal-data-shadow").fadeIn(250)
	})
	$(".birthday-pushheader .return").tap(function(){
		$(".birthday-push").css("transform", "translateX("+setw+"px)")
		$(".personal-data-shadow").fadeOut(250)
	})
	
	//用户中心--个人资料设置--地区弹框
	var regionH = $(".region-pushsection").height()
	$(".region-pushsection .pushsection-wrapper").height(regionH + 1)
	
	var regionS = new IScroll('.region-pushsection', {
		scrollbars: false
	})
	
	$(".personal-data-pushsection .region").tap(function(){
		$(".region-push").css("transform", "translateX(0px)")
		$(".personal-data-shadow").fadeIn(250)
	})
	$(".region-pushheader .return").tap(function(){
		$(".region-push").css("transform", "translateX("+setw+"px)")
		$(".personal-data-shadow").fadeOut(250)
	})




	
	//用户中心--个人资料设置--邮箱绑定弹框
	var mailboxH = $(".modify-mailbox-pushsection").height()
	$(".modify-mailbox-pushsection .pushsection-wrapper").height(mailboxH + 1)
	
	var mailboxS = new IScroll('.modify-mailbox-pushsection', {
		scrollbars: false
	})
	
	//用户中心--个人资料设置--邮箱绑定弹框  邮箱绑定返回键与保存键
	$(".personal-data-pushsection .bind_mailbox .btn").tap(function(){
		var b_m=$(".personal-data-pushsection .bind_mailbox .li-wrapper-info").text()
		$(".modify-mailbox-push").css("transform", "translateX(0px)")
		$(".personal-data-shadow").fadeIn(250)
		$(".modify-mailbox-pushsection .mailbox").val(b_m)
		
		if($(".modify-mailbox-pushsection .mailbox").val()!==""){
			$(".modify-mailbox-pushsection .delete").css("display","block")
		}
		if($(".modify-mailbox-pushsection .mailbox").val()==""){
			$(".modify-mailbox-pushsection .delete").css("display","none")
		}
		
		$(".modify-mailbox-pushheader .return").tap(function(){
			$(".modify-mailbox-push").css("transform", "translateX("+setw+"px)")
			$(".personal-data-shadow").fadeOut(250)
			$(".modify-mailbox-pushsection .mailbox").val(b_m)
		})
		
		$(".modify-mailbox-pushheader .save").tap(function(){
			var inputtxt=$(".modify-mailbox-pushsection .mailbox").val()
			if((/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(inputtxt)) || inputtxt == ""){
//		        var myphone = inputtxt.substr(3, 4);  
//		        var lphone = inputtxt.replace(myphone, "****"); 
				$(".modify-mailbox-push").css("transform", "translateX("+setw+"px)")
				$(".personal-data-shadow").fadeOut(250)
				$(".binding-device .bind_mailbox .li-wrapper-info").text(inputtxt)
				if(!$(".binding-device .bind_mailbox .li-wrapper-info").text() == "") {
					$(".personal-data-pushsection .bind_mailbox .btn").text("换绑")
				}
				else{
					$(".personal-data-pushsection .bind_mailbox .btn").text("绑定")
				}
			}
		})
	})
	
	//用户中心--个人资料设置--邮箱绑定弹框  监听input中的val
	$(".modify-mailbox-pushsection .mailbox").bind('input propertychange', function() {
		if($(".modify-mailbox-pushsection .mailbox").val()!==""){
			$(".modify-mailbox-pushsection .delete").css("display","block")
		}
		if($(".modify-mailbox-pushsection .mailbox").val()==""){
			$(".modify-mailbox-pushsection .delete").css("display","none")
		}
	})
	//用户中心--个人资料设置--邮箱绑定弹框  清空键
	$(".modify-mailbox-pushsection .delete").tap(function(){
		$(".modify-mailbox-pushsection .mailbox").val("")
		$(".modify-mailbox-pushsection .mailbox").focus()
		$(".modify-mailbox-pushsection .delete").css("display","none")
	})





	
	//用户中心--个人资料设置--微信绑定弹框
	var weixinH = $(".weixin-pushsection").height()
	$(".weixin-pushsection .pushsection-wrapper").height(weixinH + 1)
	
	var weixinS = new IScroll('.weixin-pushsection', {
		scrollbars: false
	})
	
	//用户中心--个人资料设置--微信绑定弹框  微信绑定返回键与保存键
	$(".personal-data-pushsection .bind_weixin .btn").tap(function(){
		var b_w=$(".personal-data-pushsection .bind_weixin .li-wrapper-info").text()
		$(".weixin-push").css("transform", "translateX(0px)")
		$(".personal-data-shadow").fadeIn(250)
		$(".weixin-pushsection .weixin").val(b_w)
		
		if($(".weixin-pushsection .weixin").val()!==""){
			$(".weixin-pushsection .delete").css("display","block")
		}
		if($(".weixin-pushsection .weixin").val()==""){
			$(".weixin-pushsection .delete").css("display","none")
		}
		
		$(".weixin-pushheader .return").tap(function(){
			$(".weixin-push").css("transform", "translateX("+setw+"px)")
			$(".personal-data-shadow").fadeOut(250)
			$(".weixin-pushsection .weixin").val(b_w)
		})
		
		$(".weixin-pushheader .save").tap(function(){
			var inputtxt=$(".weixin-pushsection .weixin").val() 
			$(".weixin-push").css("transform", "translateX("+setw+"px)")
			$(".personal-data-shadow").fadeOut(250)
			$(".binding-device .bind_weixin .li-wrapper-info").text(inputtxt)
			if(!$(".binding-device .bind_weixin .li-wrapper-info").text() == "") {
				$(".personal-data-pushsection .bind_weixin .btn").text("换绑")
			}
			else{
				$(".personal-data-pushsection .bind_weixin .btn").text("绑定")
			}
		})
	})
	
	//用户中心--个人资料设置--微信绑定弹框  监听input中的val
	$(".weixin-pushsection .weixin").bind('input propertychange', function() {
		if($(".weixin-pushsection .weixin").val()!==""){
			$(".weixin-pushsection .delete").css("display","block")
		}
		if($(".weixin-pushsection .weixin").val()==""){
			$(".weixin-pushsection .delete").css("display","none")
		}
	})
	//用户中心--个人资料设置--微信绑定弹框  清空键
	$(".weixin-pushsection .delete").tap(function(){
		$(".weixin-pushsection .weixin").val("")
		$(".weixin-pushsection .weixin").focus()
		$(".weixin-pushsection .delete").css("display","none")
	})




	
	//用户中心--个人资料设置--手机绑定弹框
	var pc_phoneH = $(".pc_phone-pushsection").height()
	$(".pc_phone-pushsection .pushsection-wrapper").height(pc_phoneH + 1)
	
	var pc_phoneS = new IScroll('.pc_phone-pushsection', {
		scrollbars: false
	})
	
	//用户中心--个人资料设置--手机绑定弹框  手机绑定返回键与保存键
	$(".personal-data-pushsection .bind_phone .btn").tap(function(){
		var b_p=$(".personal-data-pushsection .bind_phone .li-wrapper-info").attr("data-value")
		$(".pc_phone-push").css("transform", "translateX(0px)")
		$(".personal-data-shadow").fadeIn(250)
		$(".pc_phone-pushsection .mailbox").val(b_p)
		
		if($(".pc_phone-pushsection .pc_phone").val()!==""){
			$(".pc_phone-pushsection .delete").css("display","block")
		}
		if($(".pc_phone-pushsection .pc_phone").val()==""){
			$(".pc_phone-pushsection .delete").css("display","none")
		}
		
		$(".pc_phone-pushheader .return").tap(function(){
			$(".pc_phone-push").css("transform", "translateX("+setw+"px)")
			$(".personal-data-shadow").fadeOut(250)
			$(".pc_phone-pushsection .pc_phone").val(b_p)
		})
		
		$(".pc_phone-pushheader .save").tap(function(){
			var inputtxt=$(".pc_phone-pushsection .pc_phone").val()
			if((/^1[3|4|5|8]\d{9}$/.test(inputtxt)) || inputtxt == ""){
		        var myphone = inputtxt.substr(3, 4);  
		        var lphone = inputtxt.replace(myphone, "****"); 
				$(".pc_phone-push").css("transform", "translateX("+setw+"px)")
				$(".personal-data-shadow").fadeOut(250)
				$(".binding-device .bind_phone .li-wrapper-info").text(lphone)
				$(".personal-data-pushsection .bind_phone .li-wrapper-info").attr("data-value",inputtxt)
				$(".personal-data-pushsection .bind_phone .btn").text("换绑")
			}
			if(inputtxt == ""){
				$(".pc_phone-push").css("transform", "translateX("+setw+"px)")
				$(".personal-data-shadow").fadeOut(250)
				$(".binding-device .bind_phone .li-wrapper-info").text(inputtxt)
				$(".personal-data-pushsection .bind_phone .li-wrapper-info").attr("data-value",inputtxt)
				$(".personal-data-pushsection .bind_phone .btn").text("绑定")
			}
		})
	})
	
	//用户中心--个人资料设置--手机绑定弹框  监听input中的val
	$(".pc_phone-pushsection .pc_phone").bind('input propertychange', function() {
		if($(".pc_phone-pushsection .pc_phone").val()!==""){
			$(".pc_phone-pushsection .delete").css("display","block")
		}
		if($(".pc_phone-pushsection .pc_phone").val()==""){
			$(".pc_phone-pushsection .delete").css("display","none")
		}
	})
	//用户中心--个人资料设置--手机绑定弹框  清空键
	$(".pc_phone-pushsection .delete").tap(function(){
		$(".pc_phone-pushsection .pc_phone").val("")
		$(".pc_phone-pushsection .pc_phone").focus()
		$(".pc_phone-pushsection .delete").css("display","none")
	})










	//用户中心--我的收藏
	var Pcollectionh = $(".personal-collection-pushsection").height()
	var Pwrapperh = $(".personal-collection-pushsection .pushsection-wrapper").height()
	
	if(Pwrapperh<=Pcollectionh){
		$(".personal-collection-pushsection .pushsection-wrapper").height(Pcollectionh+1)
	}
	
	//用户中心--我的收藏 左滑出现删除键
	var deletebtnw=$(".Pcollection-data-li .slide-delete-btn .delete-btn").width()
	$('.personal-collection-pushsection .Pcollection-data-li .dataDetail').live("swipeLeft",function(){//左滑显示隐藏按键
		
        $(this).animate({left:-deletebtnw},200,'linear').siblings('.slide-delete-btn').animate({width:deletebtnw},200,'linear');
        
        $(this).parent('li').siblings('li').find('.dataDetail').animate({left:'0'},200).siblings('.slide-delete-btn').animate({width:'0'},200);
    })
	
    $('.personal-collection-pushsection .Pcollection-data-li .dataDetail').live("swipeRight",function(){//右滑恢复 
     	$(this).animate({left:'0'},200).siblings('.slide-delete-btn').animate({width:'0'},200);
    })
    
   $('.personal-collection-pushsection .Pcollection-data-li .dataDetail').bind("touchstart",function(e){//点击其他的自动收回删除键
    		e.preventDefault();
     	$('.personal-collection-pushsection .Pcollection-data-li .dataDetail').animate({left:'0'},200).siblings('.slide-delete-btn').animate({width:'0'},200);
    })
    var newPwrapperh=0;
    var Dcollectionh=$(".delete-collection-push .push-wrapper").height()
    
    
    $('.personal-collection-pushsection .Pcollection-data-li .slide-delete-btn').live("tap",function(){ //删除
    		var _this=$(this) 
    		$(".personal-collection-Mask").addClass("show")
    		$(".delete-collection-push").height(Dcollectionh)
    		$(".delete-collection-push .determine").tap(function(){
    			$(".personal-collection-Mask").removeClass("show")
    			$(".delete-collection-push").height("0")
    			_this.parent().css("height","0")
    			setTimeout(function(){
    				_this.parent().remove();
	    			PcollectionS.refresh()
	    			newPwrapperh=$(".personal-collection-pushsection .pushsection-wrapper .Pcollection-data").height()
			  	if(newPwrapperh<=Pcollectionh){
					$(".personal-collection-pushsection .pushsection-wrapper").height(Pcollectionh+1)
			  		PcollectionS.refresh()
				}
			  	else if(newPwrapperh>Pcollectionh){
					$(".personal-collection-pushsection .pushsection-wrapper").height(newPwrapperh)
			  		PcollectionS.refresh()
				}
    			},200)
    		})
    		
    		$(".delete-collection-push .cancle").tap(function(){
    			$(".personal-collection-Mask").removeClass("show")
    			$(".delete-collection-push").height("0")
    			$('.personal-collection-pushsection .Pcollection-data-li .dataDetail').animate({left:'0'},200).siblings('.slide-delete-btn').animate({width:'0'},200);
    		})
    		
    		$(".personal-collection-Mask").tap(function(){
    			$(".personal-collection-Mask").removeClass("show")
    			$(".delete-collection-push").height("0")
    			$('.personal-collection-pushsection .Pcollection-data-li .dataDetail').animate({left:'0'},200).siblings('.slide-delete-btn').animate({width:'0'},200);
    		})
    })
    
	var PcollectionS = new IScroll('.personal-collection-pushsection', {
		scrollbars: true,
		fadeScrollbars: true,
		shrinkScrollbars: 'clip'
	})
	
	//用户中心--我的足迹
	var Pfootprinth = $(".personal-footprint-pushsection").height()
	var Fwrapperh = $(".personal-footprint-pushsection .pushsection-wrapper").height()
	
	if(Fwrapperh<=Pfootprinth){
		$(".personal-footprint-pushsection .pushsection-wrapper").height(Pfootprinth+1)
	}
	
	//用户中心--我的足迹  左滑出现删除键
	
	var P_deletebtnw=$(".Pfootprint-data-li .slide-delete-btn .delete-btn").width()
	$('.personal-footprint-pushsection .Pfootprint-data-li .dataDetail').live("swipeLeft",function(){//左滑显示隐藏按键
		
        $(this).animate({left:-P_deletebtnw},200,'linear').siblings('.slide-delete-btn').animate({width:P_deletebtnw},200,'linear');
        
        $(this).parent('li').siblings('li').find('.dataDetail').animate({left:'0'},200).siblings('.slide-delete-btn').animate({width:'0'},200);
    })
	
    $('.personal-footprint-pushsection .Pfootprint-data-li .dataDetail').live("swipeRight",function(){//右滑恢复 
     	$(this).animate({left:'0'},200).siblings('.slide-delete-btn').animate({width:'0'},200);
    })
    
   $('.personal-footprint-pushsection .Pfootprint-data-li .dataDetail').bind("touchstart",function(e){//点击其他的自动收回删除键
    		e.preventDefault();
     	$('.personal-footprint-pushsection .Pfootprint-data-li .dataDetail').animate({left:'0'},200).siblings('.slide-delete-btn').animate({width:'0'},200);
    })
    var newFwrapperh=0;
    var Footprinth=$(".delete-footprint-push .push-wrapper").height()
    $('.personal-footprint-pushsection .Pfootprint-data-li .slide-delete-btn').live("tap",function(){ //删除
    		var _this=$(this) 
    		$(".personal-footprint-Mask").addClass("show")
    		$(".delete-footprint-push").height(Footprinth)
    		$(".delete-footprint-push .determine").tap(function(){
    			$(".personal-footprint-Mask").removeClass("show")
    			$(".delete-footprint-push").height("0")
    			_this.parent().css("height","0")
    			setTimeout(function(){
    				_this.parent().remove();
	    			PfootprintS.refresh()
	    			newFwrapperh=$(".personal-footprint-pushsection .pushsection-wrapper .Pfootprint-data").height()
			  	if(newFwrapperh<=Pfootprinth){
					$(".personal-footprint-pushsection .pushsection-wrapper").height(Pfootprinth+1)
			  		PfootprintS.refresh()
				}
			  	else if(newFwrapperh>Pfootprinth){
					$(".personal-footprint-pushsection .pushsection-wrapper").height(newFwrapperh)
			  		PfootprintS.refresh()
				}
    			},200)
    		})
    		
    		$(".delete-footprint-push .cancle").tap(function(){
    			$(".personal-footprint-Mask").removeClass("show")
    			$(".delete-footprint-push").height("0")
    			$('.personal-footprint-pushsection .Pfootprint-data-li .dataDetail').animate({left:'0'},200).siblings('.slide-delete-btn').animate({width:'0'},200);
    		})
    		
    		$(".personal-footprint-Mask").tap(function(){
    			$(".personal-footprint-Mask").removeClass("show")
    			$(".delete-footprint-push").height("0")
    			$('.personal-footprint-pushsection .Pfootprint-data-li .dataDetail').animate({left:'0'},200).siblings('.slide-delete-btn').animate({width:'0'},200);
    		})
    })
    
    
	var PfootprintS = new IScroll('.personal-footprint-pushsection', {
		scrollbars: true,
		fadeScrollbars: true,
		shrinkScrollbars: 'clip'
	})
	
	

	//用户中心--我的消息

	var Pnewsh = $(".personal-news-pushsection").height()
	var Nwrapperh = $(".personal-news-pushsection .pushsection-wrapper").height()
	
	if(Nwrapperh<=Pnewsh){
		$(".personal-news-pushsection .pushsection-wrapper").height(Pnewsh+1)
	}
	if(Nwrapperh>Pnewsh){
		$(".personal-news-pushsection .pushsection-wrapper").height(Nwrapperh)
	}

	var PnewsS = new IScroll('.personal-news-pushsection', {
		scrollbars: true,
		fadeScrollbars: true,
		shrinkScrollbars: 'clip'
	})

	//用户中心--我的消息--消息详情
	$(".personal-news-data .personal-news-datali .receiveNews-time-li").tap(function(){
		$(".news-detail-push").css("left","0")
		PdetailS.refresh()
	})
	$(".news-detail-pushheader .return").tap(function(){
		$(".news-detail-push").css("left",setw+5)
		PdetailS.refresh()
	})
	
	var PdetailS = new IScroll('.news-detail-pushsection', {
		scrollbars: true,
		fadeScrollbars: true,
		shrinkScrollbars: 'clip'
	})
	
	//用户中心--我的优惠券

	$(".personal-coupon-pushsection .pushsection-wrapper").eq(0).css("left","0").siblings(".pushsection-wrapper").css("left",setw+5)
	$(".personal-coupon-push .coupon-nav-li").tap(function(){
		var index=$(this).index()
		$(this).addClass("select").siblings().removeClass("select")
		$(".personal-coupon-pushsection .pushsection-wrapper").eq(index).css("left","0").siblings(".pushsection-wrapper").css("left",setw+5)
	})

	//用户中心--我的优惠券--全部
	var Cwholeh = $(".personal-coupon-pushsection .coupon-whole").height()
	var Cwhole_ulh = $(".personal-coupon-pushsection .coupon-whole .coupon-whole-ul").height()
	
	if(Cwhole_ulh<=Cwholeh){
		$(".personal-coupon-pushsection .coupon-whole .coupon-whole-ul").height(Cwholeh+1)
	}
	if(Cwhole_ulh>Cwholeh){
		$(".personal-coupon-pushsection .coupon-whole .coupon-whole-ul").height(Cwhole_ulh)
	}
	
	var CwholeS = new IScroll('.personal-coupon-pushsection .coupon-whole', {
		scrollbars: true,
		fadeScrollbars: true,
		shrinkScrollbars: 'clip'
	})
	
	//用户中心--我的优惠券--未使用
	var CnotUsedh = $(".personal-coupon-pushsection .coupon-notUsed").height()
	
	var CnotUsed_ulh = $(".personal-coupon-pushsection .coupon-notUsed .coupon-notUsed-ul").height()
	
	if(CnotUsed_ulh<=CnotUsedh){
		$(".personal-coupon-pushsection .coupon-notUsed .coupon-notUsed-ul").height(CnotUsedh+1)
	}
	if(CnotUsed_ulh>CnotUsedh){
		$(".personal-coupon-pushsection .coupon-notUsed .coupon-notUsed-ul").height(CnotUsed_ulh)
	}
	
	var CnotUsedS = new IScroll('.personal-coupon-pushsection .coupon-notUsed', {
		scrollbars: true,
		fadeScrollbars: true,
		shrinkScrollbars: 'clip'
	})
	
	//用户中心--我的优惠券--已使用
	var CalreadyUsedh = $(".personal-coupon-pushsection .coupon-alreadyUsed").height()
	
	var CalreadyUsed_ulh = $(".personal-coupon-pushsection .coupon-alreadyUsed .coupon-alreadyUsed-ul").height()
	
	if(CalreadyUsed_ulh<=CalreadyUsedh){
		$(".personal-coupon-pushsection .coupon-alreadyUsed .coupon-alreadyUsed-ul").height(CalreadyUsedh+1)
	}
	if(CalreadyUsed_ulh>CalreadyUsedh){
		$(".personal-coupon-pushsection .coupon-alreadyUsed .coupon-alreadyUsed-ul").height(CalreadyUsed_ulh)
	}
	
	var CalreadyUsedS = new IScroll('.personal-coupon-pushsection .coupon-alreadyUsed', {
		scrollbars: true,
		fadeScrollbars: true,
		shrinkScrollbars: 'clip'
	})
	
	//用户中心--我的优惠券--已过期
	var Coverdueh = $(".personal-coupon-pushsection .coupon-overdue").height()
	
	var Coverdue_ulh = $(".personal-coupon-pushsection .coupon-overdue .coupon-overdue-ul").height()
	
	if(Coverdue_ulh<=Coverdueh){
		$(".personal-coupon-pushsection .coupon-overdue .coupon-overdue-ul").height(Coverdueh+1)
	}
	if(Coverdue_ulh>Coverdueh){
		$(".personal-coupon-pushsection .coupon-overdue .coupon-overdue-ul").height(Coverdue_ulh)
	}
	
	var CoverdueS = new IScroll('.personal-coupon-pushsection .coupon-overdue', {
		scrollbars: true,
		fadeScrollbars: true,
		shrinkScrollbars: 'clip'
	})
	
	
	//用户中心--我的优惠券--优惠券使用教程弹框
	$(".personal-coupon-pushfooter").tap(function(){
		$(".using-tutorials-push").css("left","0")
	})
	$(".using-tutorials-pushheader .return").tap(function(){
		$(".using-tutorials-push").css("left",setw+5)
	})
	
	//用户中心--我的优惠券--优惠券使用教程弹框  优惠券使用流程居中
	var Ututorialsh = $(".using-tutorials-pushsection").height()
	var Ututorials_wh = $(".using-tutorials-pushsection .pushsection-wrapper").height()
	var tutorialsh=$(".using-tutorials-pushsection .using-tutorials-wrapper .step-content").height()
	
	$(".using-tutorials-pushsection .using-tutorials-wrapper").css("padding-top",(Ututorialsh-tutorialsh)/2)
	
	if(Ututorials_wh<=Ututorialsh){
		$(".using-tutorials-pushsection .pushsection-wrapper").height(Ututorialsh+1)
	}
	
	var UtutorialsS = new IScroll('.using-tutorials-pushsection', {
		scrollbars: false
	})
	
	
//用户中心--我的优惠券--优惠券详情
	//点击未使用优惠券
	var notUsed_Z=$(".coupon-details-pushsection .coupon-details-notUsed")
	$(".personal-coupon-push .notUsed").tap(function(){
		//获取优惠券数据
		var dataTitle=$(this).find(".hide_data .dataTitle").html()
		var dataDetailed=$(this).find(".hide_data .dataDetailed").html()
		var dataCode=$(this).find(".hide_data .dataCode").html()
		var dataQR_code=$(this).find(".hide_data .dataQR_code").html()
		var dataValidity=$(this).find(".hide_data .dataValidity").html()
		var contentTitle=$(this).find(".rightPart .content-title").html()
		//渲染优惠券数据
		notUsed_Z.find(".header-price").html(dataTitle)
		notUsed_Z.find(".detailed-content").html(dataDetailed)
		notUsed_Z.find(".code-content").html(dataCode)
		notUsed_Z.find(".footer-QR_code").html(dataQR_code)
		notUsed_Z.find(".footer-title").html(contentTitle)
		notUsed_Z.find(".term-content").html(dataValidity)
		
		$(".coupon-details-push").css("left","0")
		$(".coupon-details-pushsection .coupon-details-notUsed").css("display","block").siblings().css("display","none")
	})
	$(".coupon-details-pushheader .return").tap(function(){
		$(".coupon-details-push").css("left",setw+5)
	})
	
	
	//用户中心--我的优惠券--优惠券详情  点击已使用优惠券
	var alreadyUsed_Z=$(".coupon-details-pushsection .coupon-details-alreadyUsed")
	$(".personal-coupon-push .alreadyUsed").tap(function(){
		//获取优惠券数据
		var dataTitle=$(this).find(".hide_data .dataTitle").html()
		var dataDetailed=$(this).find(".hide_data .dataDetailed").html()
		var dataCode=$(this).find(".hide_data .dataCode").html()
		var dataQR_code=$(this).find(".hide_data .dataQR_code").html()
		var dataValidity=$(this).find(".hide_data .dataValidity").html()
		var contentTitle=$(this).find(".rightPart .content-title").html()
		//渲染优惠券数据
		alreadyUsed_Z.find(".header-price").html(dataTitle)
		alreadyUsed_Z.find(".detailed-content").html(dataDetailed)
		alreadyUsed_Z.find(".code-content").html(dataCode)
		alreadyUsed_Z.find(".footer-QR_code").html(dataQR_code)
		alreadyUsed_Z.find(".footer-title").html(contentTitle)
		alreadyUsed_Z.find(".term-content").html(dataValidity)
		
		$(".coupon-details-push").css("left","0")
		$(".coupon-details-pushsection .coupon-details-alreadyUsed").css("display","block").siblings().css("display","none")
	})
	$(".coupon-details-pushheader .return").tap(function(){
		$(".coupon-details-push").css("left",setw+5)
	})
	
	//用户中心--我的优惠券--优惠券详情  点击已过期优惠券
	var overdue_Z=$(".coupon-details-pushsection .coupon-details-overdue")
	$(".personal-coupon-push .overdue").tap(function(){
		//获取优惠券数据
		var dataTitle=$(this).find(".hide_data .dataTitle").html()
		var dataDetailed=$(this).find(".hide_data .dataDetailed").html()
		var dataCode=$(this).find(".hide_data .dataCode").html()
		var dataQR_code=$(this).find(".hide_data .dataQR_code").html()
		var dataValidity=$(this).find(".hide_data .dataValidity").html()
		var contentTitle=$(this).find(".rightPart .content-title").html()
		//渲染优惠券数据
		overdue_Z.find(".header-price").html(dataTitle)
		overdue_Z.find(".detailed-content").html(dataDetailed)
		overdue_Z.find(".code-content").html(dataCode)
		overdue_Z.find(".footer-QR_code").html(dataQR_code)
		overdue_Z.find(".footer-title").html(contentTitle)
		overdue_Z.find(".term-content").html(dataValidity)
		
		$(".coupon-details-push").css("left","0")
		$(".coupon-details-pushsection .coupon-details-overdue").css("display","block").siblings().css("display","none")
	})
	$(".coupon-details-pushheader .return").tap(function(){
		$(".coupon-details-push").css("left",setw+5)
	})
	
	var Cdetailsh = $(".coupon-details-pushsection").height()
	
	var Cdetails_wh = $(".coupon-details-pushsection .pushsection-wrapper").height()
	
	if(Cdetails_wh<=Cdetailsh){
		$(".coupon-details-pushsection .pushsection-wrapper").height(Cdetailsh+1)
	}
	
	var CdetailsS = new IScroll('.coupon-details-pushsection', {
		scrollbars: false
	})
	
	
	//用户中心--我的优惠券--查看优惠券  input号码输入框内容改变监听事件 执行函数 
	
	var _lookupindex=0;
	var lookuph = $(".lookup-coupon-pushsection").height()
	var lookup_wh_b = $(".lookup-coupon-pushsection .pushsection-wrapper .pushsection-wrapper-box").height()
	
	$(".lookup-coupon-pushsection .input-wrapper .lookup_ipt").bind('input propertychange', function() {
		_lookupindex=$(this)
		if($(this).val() !== "") {
			$(".lookup-coupon-pushsection .input-wrapper a").css("display", "block")
		}
		else if($(this).val() == "") {
			$(".lookup-coupon-pushsection .lookup-coupon-results").css("display","none")
			$(".lookup-coupon-pushsection .input-wrapper a").css("display", "none")
			lookuph = $(".lookup-coupon-pushsection").height()
			lookup_wh_b = $(".lookup-coupon-pushsection .pushsection-wrapper .pushsection-wrapper-box").height()
			if(lookup_wh_b<=lookuph){
				$(".lookup-coupon-pushsection .pushsection-wrapper").height(lookuph+1)
				lookupS.refresh()
			}
			else if(lookup_wh_b>lookuph){
				$(".lookup-coupon-pushsection .pushsection-wrapper").height(lookup_wh_b)
				lookupS.refresh()
			}
		}
	})
	
	$(".lookup-coupon-pushsection .lookup-coupon-btn").tap(function(){
		clearTimeout(lookup_time)
		$(".lookup-coupon-push .can_t-find").css("display","none")
		$(".lookup-coupon-push .can_t-find").css("opacity","0")
		
		if(_lookupindex.val() !== "" && _lookupindex.val() == "123456"){
			$(".lookup-coupon-pushsection .results-coupon li").remove()
			$(".lookup-coupon-pushsection .lookup-coupon-results").css("display","block")
			var lookup_notUsed=$(".personal-coupon-pushsection .coupon-whole-ul .notUsed").clone()
			$(".lookup-coupon-pushsection .results-coupon").append(lookup_notUsed)
			lookuph = $(".lookup-coupon-pushsection").height()
			lookup_wh_b = $(".lookup-coupon-pushsection .pushsection-wrapper .pushsection-wrapper-box").height()
			if($(".lookup-coupon-pushsection .results-coupon li").length==0){
				clearTimeout(lookup_time)
				$(".lookup-coupon-pushsection .lookup-coupon-results").css("display","none")
				$(".lookup-coupon-push .can_t-find").show()
				var lookup_time=setTimeout(function(){
					$(".lookup-coupon-push .can_t-find").fadeOut(300)
				},1700)
			}
			if(lookup_wh_b<=lookuph){
				$(".lookup-coupon-pushsection .pushsection-wrapper").height(lookuph+1)
			}
			else if(lookup_wh_b>lookuph){
				$(".lookup-coupon-pushsection .pushsection-wrapper").height(lookup_wh_b)
				lookupS.refresh()
			}
			//点击查找的优惠券弹出优惠券详情
			$(".personal-coupon-push .lookup-coupon-push .lookup-coupon-results .notUsed").tap(function(){
				//获取优惠券数据
				var dataTitle=$(this).find(".hide_data .dataTitle").html()
				var dataDetailed=$(this).find(".hide_data .dataDetailed").html()
				var dataCode=$(this).find(".hide_data .dataCode").html()
				var dataQR_code=$(this).find(".hide_data .dataQR_code").html()
				var dataValidity=$(this).find(".hide_data .dataValidity").html()
				var contentTitle=$(this).find(".rightPart .content-title").html()
				//渲染优惠券数据
				notUsed_Z.find(".header-price").html(dataTitle)
				notUsed_Z.find(".detailed-content").html(dataDetailed)
				notUsed_Z.find(".code-content").html(dataCode)
				notUsed_Z.find(".footer-QR_code").html(dataQR_code)
				notUsed_Z.find(".footer-title").html(contentTitle)
				notUsed_Z.find(".term-content").html(dataValidity)
				
				$(".coupon-details-push").css("left","0")
				$(".coupon-details-pushsection .coupon-details-notUsed").css("display","block").siblings().css("display","none")
			})
			$(".coupon-details-pushheader .return").tap(function(){
				$(".coupon-details-push").css("left",setw+5)
			})
		}
		else if(_lookupindex.val() !== "" && _lookupindex.val() !== "123456"){
			clearTimeout(lookup_time)
			$(".lookup-coupon-pushsection .lookup-coupon-results").css("display","none")
			$(".lookup-coupon-push .can_t-find").show()
			var lookup_time=setTimeout(function(){
				$(".lookup-coupon-push .can_t-find").fadeOut(300)
			},1700)
			lookuph = $(".lookup-coupon-pushsection").height()
			lookup_wh_b = $(".lookup-coupon-pushsection .pushsection-wrapper .pushsection-wrapper-box").height()
			if(lookup_wh_b<=lookuph){
				$(".lookup-coupon-pushsection .pushsection-wrapper").height(lookuph+1)
				lookupS.refresh()
			}
			else if(lookup_wh_b>lookuph){
				$(".lookup-coupon-pushsection .pushsection-wrapper").height(lookup_wh_b)
				lookupS.refresh()
			}
		}
	})
	
	
	
	
	$(".lookup-coupon-pushsection .input-wrapper a").tap(function() {
		$(".lookup-coupon-pushsection .input-wrapper .lookup_ipt").val("").focus()
		$(".lookup-coupon-pushsection .lookup-coupon-results").css("display","none")
		$(".lookup-coupon-pushsection .input-wrapper a").css("display", "none")
		lookuph = $(".lookup-coupon-pushsection").height()
		lookup_wh_b = $(".lookup-coupon-pushsection .pushsection-wrapper .pushsection-wrapper-box").height()
		if(lookup_wh_b<=lookuph){
			$(".lookup-coupon-pushsection .pushsection-wrapper").height(lookuph+1)
			lookupS.refresh()
		}
		else if(lookup_wh_b>lookuph){
			$(".lookup-coupon-pushsection .pushsection-wrapper").height(lookup_wh_b)
			lookupS.refresh()
		}
	})
	
	$(".personal-coupon-pushheader .lookup").tap(function(){
		$(".lookup-coupon-push").css("left","0")
	})
	$(".lookup-coupon-pushheader .return").tap(function(){
		$(".lookup-coupon-push").css("left",setw+5)
	})
	
	$(".lookup-coupon-pushsection .pushsection-wrapper").height(lookuph+1)
	var lookupS = new IScroll('.lookup-coupon-pushsection', {
		scrollbars: false
	})
	
	//有无优惠券两个状态
	var wholelen=$(".personal-coupon-pushsection .coupon-whole .coupon-whole-ul").find(".coupon-whole-li").length
	
	if(wholelen==0){
		$(".personal-coupon-pushsection .pushsection-wrapper").css("display","none")
		$(".personal-coupon-pushheader .coupon-nav").css("display","none")
		$(".personal-coupon-pushheader .lookup").css("display","none")
		$(".personal-coupon-pushfooter").css("display","none")
		$(".personal-coupon-pushsection .none-coupons").css("display","block")
	}
	else if(wholelen!==0){
		$(".personal-coupon-pushsection .pushsection-wrapper").css("display","block")
		$(".personal-coupon-pushheader .coupon-nav").css("display","block")
		$(".personal-coupon-pushheader .lookup").css("display","block")
		$(".personal-coupon-pushfooter").css("display","block")
		$(".personal-coupon-pushsection .none-coupons").css("display","none")
	}
	
	
	
	
	
	
})