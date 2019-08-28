(function($){
	
	//javascript�����ģʽ---ģ��ģʽ


	//�����ʼ��
	$.keLoading = function(options){
		//javascript�Ļ���.mix ���������е���ͬ���Ը��ǣ���ͬ�ĺϲ�
		var opts = $.extend({},$.keLoading.method,$.keLoading.defaults,options);
		//ģ���ʼ��
		var $loading = opts.template(opts);
		//loading����
		opts.center($loading);
		//������Ӧ����
		opts.resize($loading);
		//����ʽ
		$loading.css("background",opts.bgcolor);
		//��ʼ���¼�
		opts.events($loading);
		//�Զ��ر�
		opts.timeout($loading,opts);
	};	
	
	//����ķ���
	$.keLoading.method = {
		template:function(opts){
			$("#ke_loading").remove();
			var html = "";
			if(opts.overlay)html="<div class='overlay'></div>";
			$("body").append("<div id='ke_loading' class='animated bounceIn'>"+
			"	<span class='ke_img'><img src='images/loading.gif'/>"+
			"	<span class='ke_text'>"+opts.text+"</span>"+
			"	</div>"+html);
			
			return $("#ke_loading");
		},
		center:function($loading){
			var left = ($(window).width() - $loading.width())/2;
			var top = ($(window).height() - $loading.height())/2;
			$loading.css({
				left:left,
				top:top
			});
		},
		resize:function($loading){
			var $this = this;
			$(window).resize(function(){
				$this.center($loading);
			});
		},
		events:function($loading){
			//���loading�ر�
			$loading.on("click",function(){
				$(this).fadeOut("slow",function(){
					//�ص����ֲ�ͬʱ�ر��Լ�
					$(this).next().remove().end().remove();
				});
			});

			$loading.next().on("click",function(){
				$(this).fadeOut("slow",function(){							
					$(this).prev().remove().end().remove();
				});
			});
		},
		timeout:function($loading,opts){
			if(opts.time==0 || opts.time==""){
				return;
			}
			clearTimeout($loading.timer);
			$loading.timer = setTimeout(function(){
				$loading.trigger("click");
				if($loading.timer)clearTimeout($loading.timer);
			},opts.time*1000);
		}
	};
	
	//Ĭ�ϲ���
	$.keLoading.defaults = {
		text:"����������",
		bgcolor:"#111",
		overlay:false,
		time:0
	};

})(jQuery);

function loading(text,timeout){
	$.keLoading({text:text,time:timeout});
};