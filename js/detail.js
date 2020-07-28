$(document).ready(function() {
	// 轮播
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: true,
		loop: true, // 循环模式选项

		// 如果需要分页器
		pagination: {
			el: '.swiper-pagination',
		},
	})

	// 收藏
	var flag = false;
	$("#star").click(function() {
		if (flag) {
			$(this).children().attr("src", "img/details/star_white.png");
			flag = false;
		} else {
			$(this).children().attr("src", "img/details/star_red.png");
			flag = true;
		}
	})
	
	// 弹出框
	$(".alert_click").click(function(){
		$(".alert").show();
	})
	$(".close,.confirm").click(function(){
		$(".alert").hide();
	})
	
	// 尺寸
	$(".color").click(function(){
		$(this).siblings(".color").removeClass("red");
		$(this).addClass("red");
	})
	
	// 数量
	$(".plus").click(function(){
		var num = parseInt($(".num").text()) + 1;
		$(".num").text(num);
	})
	$(".subtract").click(function(){
		var num = parseInt($(".num").text());
		if(num == 1){
			$(".num").text(1);
		}else{
			$(".num").text(num-1);
		}
	})
})
