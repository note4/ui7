$(document).ready(function(){
	$(".header .topbar .openmenu").click(function(){
		if($(".header").hasClass("on")){
			$(".header").removeClass("on");
			$(".container").removeClass("fb5");
		}else{
			$(".header").addClass("on");
			$(".container").addClass("fb5");
		}
	});

	$(".header .bgnav").click(function(){
		$(".header").removeClass("on");
		$(".container").removeClass("fb5");
	});

//chuanbo
//cb0 文章标题之上
	$('.container').prepend('文章之上广告位');
//cb1 文章底部
	$('.content').append('文章底部广告位');

	$(".xy").after("Some text after");

	$(".xy").before("Some text before");

});