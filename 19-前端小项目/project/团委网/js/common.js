/*���Ƶ������е��ӵ����ĳ�������ʧ*/
$(".nav_inner").hover(function(){
	$(this).find(".nav_list").stop().slideDown(200);
},function(){
	$(this).find(".nav_list").stop().slideUp(200);
});


//���ö��������������
$(".container .c_h_right li").each(function(){
	var descc = $(this).find("p").text();
	$(this).find("p").text(subdesc(descc));
});

function subdesc(desc){
	if(desc.length>24)desc = desc.substring(0,23)+"...";
	return desc;
}

/*���ƺ�����վ��У�ڵ���ѡ����л�*/
$("#seaInternet").hover(function(){
	$(this).addClass("active").siblings().removeClass("active");
	$(".f_f_sea").show();
	$(".f_f_inner").hide();
});
$("#schoolInner").hover(function(){
	$(this).addClass("active").siblings().removeClass("active");
	$(".f_f_inner").show();
	$(".f_f_sea").hide();
});

/*�ص�����*/
$(window).scroll(function(){
	if($(window).scrollTop() >= 200){
		$(".backTop").fadeIn(500);
	}else{
		$(".backTop").stop(true,true).fadeOut(500);
	}
});
$(".backTop").click(function(){
	$("html,body").animate({
		scrollTop:0
	},300);
});