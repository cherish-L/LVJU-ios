$(function(){
	
	var section_h=$(".report-details-section").height()
	var box_h=$(".report-details-section .section-wrapper .section-wrapper-box").height()
	
	if(box_h <= section_h){
		$(".report-details-section .section-wrapper").height(section_h+1)
	}
	else if(box_h > section_h){
		$(".report-details-section .section-wrapper").height(box_h)
	}
	
	
	
	var property_detailsS = new IScroll('.report-details-section', {
		scrollbars: false
	})
})
