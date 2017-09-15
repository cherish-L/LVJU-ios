$(function(){
	
	var meta_w=$("html").width()
	var meta_h=$("html").height()
	if(meta_h > meta_w){
		var album_h=$(".album-pushsection-vertical").height()
		var img_box=$(".album-pushsection-vertical .img-box").height()
		$(".album-pushsection-vertical .top-txt").height((album_h-img_box)*0.39)
		$(".album-pushsection-vertical .bottom-nav").height((album_h-img_box)*0.61)
	}
	
	

})
