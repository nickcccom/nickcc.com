$(window).load(function(){
	//menu Action
	$('#head_index .menu li').hover(function(){
		$(this).css('opacity',1);
		$(this).stop().fadeTo(300,0.5);
	}, function () {
		$(this).stop().fadeTo(300,1);
	});
	
	//menu png for IE6
	$('.menu li a').addClass('png');

	//quickmenu panl
	var Hhead_index = $("#head_index").height();
	$(window).scroll(function(){
		if($(this).scrollTop() > Hhead_index + 20){
			$("#index #head").addClass("fixed");
			$("#index #head").slideDown("fast");
		}else{
			$("#index #head").removeClass("fixed");
			$("#index #head").slideUp("fast");
		}
	});
	
	// 隔行换色
	$(".Toplist2 ul li:even").addClass("space");
	
	//首页换位图
	$('#index #slides').slides({
		preload:true,
		preloadImage:'/assets/2013/images/icon_load.gif',
		autoHeight:true,
		play:4000,
		pause:2500,
		effect:'fade,slide',
		crossfade:true,
		fadeSpeed:400,
		hoverPause:true
	});

	
	//频道图库
	$('.channel #slides').slides({
		preload:true,
		preloadImage:'/assets/2013/images/icon_load.gif',
		autoHeight:true,
		play:3000,
		pause:3000,
		autoHeight:true,
		effect:'fade,fade',
		crossfade:true,
		fadeSpeed:200,
		hoverPause:true,
		generateNextPrev: false,
		generatePagination: false
	});
	
})

	
	
