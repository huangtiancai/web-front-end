


//�ٲ���Ч��
//������һ���ӣ��Ѿ��޸�����
//��Ϊ�Ƕ�̬����Զ��ͼƬ����δ������ȫ�޷���ȡͼƬ���
//δ������ȫ���޷��趨ÿһ��item(����ͼƬ)��top��

//item��topֵ����һ�У�topΪ0
//			   �����У��������ͼƬ�����item��ȵ���С���������ȡ��ͼƬ�߶���ˣ��Ӷ����item�ĸ߶�
//				       �Ϳ�������ÿ��ͼƬ���ٲ�����ÿ��item��topֵ��ÿһ������С��item�߶ȣ�������ң�
//item��leftֵ����һ�У�����ÿ��item�Ŀ��ֵ*������
//		 	      �����У�����������һ���leftֵ���

//��Ϊ�޷���ȡδ���ص�ͼƬ��ߣ������ҵķ����ǣ�
//��ȡ��ͼƬ�߶ȷ������ڼ���ͼƬʱ�����Ѿ����ÿ�ߵ�����pxarr���������ȡ��ͬ�ĳߴ���չʾ
//�����ȡ�Ŀ�Ⱥ͸߶���СͼƬչʾ�Ŀ�ߣ�
//Ȼ���ȡ�ַ��������ͼƬ��Ⱥ͸߶ȣ��Ž�item��ǩ��data�����У�
//�����ٲ�����item��ǩѭ���еõ����data�����еĿ��
function waterFall() {
    // 1- ȷ��ͼƬ�Ŀ�� - ���������
    var pageWidth = getClient().width-8;
    var columns = 3; //3��
    var itemWidth = parseInt(pageWidth/columns); //�õ�item�Ŀ��
    $(".item").width(itemWidth); //���õ�item�Ŀ��
    
    var arr = [];

    $(".masonry .item").each(function(i){
		var height = $(this).find("img").height();
		
    	var width = $(this).find("img").width();
		console.log(width)
    	var bi = itemWidth/width; //��ȡ��С�ı�ֵ
    	var boxheight = parseInt(height*bi); //ͼƬ�ĸ߶�*��ֵ = item�ĸ߶�

    	if (i < columns) {
            // 2- ȷ����һ��
        	$(this).css({
        		top:0,
        		left:(itemWidth) * i
        	});
            arr.push(boxheight);

        } else {
            // ������
            // 3- �ҵ���������С�߶�  �� ��������
            var minHeight = arr[0];
            var index = 0;
            for (var j = 0; j < arr.length; j++) {
                if (minHeight > arr[j]) {
                    minHeight = arr[j];
                    index = j;
                }
            }
            // 4- ������һ�еĵ�һ������λ��
            // topֵ������С�еĸ߶� 
            $(this).css({
        		top:arr[index],
        		left:$(".masonry .item").eq(index).css("left")
        	});

            // 5- �޸���С�еĸ߶� 
            // ��С�еĸ߶� = ��ǰ�Լ��ĸ߶� + ƴ�ӹ����ĸ߶�
            arr[index] = arr[index] + boxheight;
        }
    });
}


//clientWidth ���������
function getClient() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
}



 // ҳ��ߴ�ı�ʱʵʱ����
window.onresize = function() {
	//���¶����ٲ���
	waterFall();
};



//��ʼ��
window.onload = function(){
	
	//ʵ���ٲ���
	waterFall();

}

