/*Banner*/
//��ȡÿ��ͼƬ�Ŀ��
var Banner = {
	 len:6, //�õ���ʼ�����ͼƬ����4+2
	 imgWidth:370,
	 imgIndex:1,//һ��ʼ�±���ȡ1������0
	 
	 //�����Զ�����bannerͼ
	 BannerTime:null,
	 nowTime:0,

	//��ʼ��Bannerͼ,��β�������
	visorhide:function(){
		var ul = $(".c_canBanner").find("ul");
		var first = ul.children().first().clone(); //��¡��һ��ͼƬ
		var last = ul.children().last().clone(); //��¡���һ��ͼƬ
		$(".c_canBanner ul").prepend(last);
		$(".c_canBanner ul").append(first);
		$(".c_canBanner").css({"marginLeft":-Banner.imgWidth}); //һ��ʼ���ǵڶ���ͼƬ
		
		//����bannerͼ����������ĳ��ֺ�����
		$(".c_last").hover(function(){
			$(this).css({backgroundPosition:"0 0"});
		},function(){
			$(this).css({backgroundPosition:"-84px 50%"});
		});
		$(".c_next").hover(function(){
			$(this).css({backgroundPosition:"-208px 0"});
		},function(){
			$(this).css({backgroundPosition:"-125px 50%"});
		});
		//��ʼ����������
		$(".c_canBanner li").eq(1).find(".recomtextover").addClass("uptextover");
	},
	
	btnclick:function(){
		$(".c_bta").hover(function(){
			Banner.imgIndex = $(this).parents(".b_cir").index() + 1;
			//�������ֵ�����
			$(".c_canBanner li").eq(Banner.imgIndex).find(".recomtextover").addClass("uptextover").parents("li").siblings().find(".recomtextover").removeClass("uptextover");

			$(this).addClass("btnSelect").parents(".b_cir").siblings().find(".c_bta").removeClass("btnSelect");//��Ϊc_btaû���ֵܽ��ã�ֻ�����ĸ�ĸ���ֵܽ��ã�ͨ������ĸ���ֵܽ����ҵ�c_bta��һ���Ƴ������ֵܽ��õ���ʽ
			$(".c_canBanner").stop().animate({"marginLeft":-Banner.imgIndex*Banner.imgWidth});
		});
	},
	
	autoPlay:function(){
		Banner.BannerTime = setInterval(function(){
			$(".c_next").trigger("click");
		},3000);
	},
	
	moseoverwhen:function(){
		$(".c_canBanner").mouseover(function(){
			clearInterval(Banner.BannerTime);
		}).mouseout(function(){
			Banner.autoPlay();
		});
		//��������������ʱ�������ʱ��
		$(".btnBan").hover(function(){
			clearInterval(Banner.BannerTime);
		},function(){ //�뿪�����ʱ��
			Banner.autoPlay();
		});
	},
	
	earwhen:function(flag){
		//����������ʱ��
		if(new Date() - Banner.nowTime > 500){
			Banner.nowTime = new Date();
			if(flag){ //true���������
				var tindex = (Banner.imgIndex == 0) ? 0 : --Banner.imgIndex;
			}else{ //�Ҷ���
				var tindex = (Banner.imgIndex == Banner.len) ? Banner.len : ++Banner.imgIndex;
			}
			Banner.changeBanner(tindex);
		}
	},

	//������Ҷ���ķ���
	changeBanner:function($index){
		$(".c_bta").eq($index-1).addClass("btnSelect").parents(".b_cir").siblings().find(".c_bta").removeClass("btnSelect");
		$(".c_canBanner").stop(true,true).animate({"marginLeft":-Banner.imgWidth*$index},function(){
			if($index == 0){ //�жϻص����һ��ͼƬ
				$(".c_canBanner").css({"marginLeft":-Banner.imgWidth*(Banner.len - 2)});//����ͼƬ�ص�����״̬
				$(".c_bta").eq(Banner.imgIndex-1).addClass("btnSelect").parents(".b_cir").siblings().find(".c_bta").removeClass("btnSelect");
				Banner.imgIndex = Banner.len - 2;
			}else if($index >= Banner.len - 1){ //�жϻص���һ��ͼƬ
				$(".c_canBanner").css({"marginLeft":-Banner.imgWidth});//����ͼƬ�ص����״̬
				$(".c_bta").eq(0).addClass("btnSelect").parents(".b_cir").siblings().find(".c_bta").removeClass("btnSelect");
				Banner.imgIndex = 1;
			}
		});
		//�������ֵ�����
		var flagindex = $index;
		$(".c_canBanner li").eq(flagindex).find(".recomtextover").addClass("uptextover").parents("li").siblings().find(".recomtextover").removeClass("uptextover");
		//�жϻص����һ��ͼƬ
		if(flagindex==0){
			$(".c_canBanner li").eq(4).find(".recomtextover").addClass("uptextover");
		}
		//�жϻص���һ��ͼƬ
		else if(flagindex == 5){
			$(".c_canBanner li").eq(1).find(".recomtextover").addClass("uptextover");
		}
	}
};

Banner.moseoverwhen();
Banner.btnclick(); //����±�
Banner.visorhide();//��껬�������ʱ��
Banner.autoPlay();//һ��ʼ�����Զ������ֲ�ͼ
//����������
$(".c_last").click(function(){
	Banner.earwhen(true);
});
//������Ҷ���
$(".c_next").click(function(){
	Banner.earwhen(false);
});