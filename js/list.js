$(document).ready(function(){
	$(".item").click(function(){
		$(this).siblings().removeClass("red");
		$(this).addClass("red");
		var index = $(this).index();
		$(".content .right>div").addClass("hide");
		$(".content .right>div").eq(index).removeClass("hide");
	})
})