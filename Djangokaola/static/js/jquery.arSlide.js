;(function($){
	$.fn.arSlide = function(options){
		// 预设默认值
		var defaults = {
			autoPlay:true,
			showSmall:true,
			showButton:true,
			type:'fade'
		}
		var opt = $.extend(defaults,options);
		this.each(function(){
			var $focus = $(this);
			var $bigWrap = $(".big-wrap");
			var $big = $( $bigWrap).find("ul");
			//显示图片索引
			var index = 0;
			// 获取图片数量
			var len = $big.children('li').length;
			// 图片宽高
			var imgWidth;
			var imgHeight;
			// 给大图设置高度
			// **获取图片的高度必须等待图片加载完成
			$big.children('li').find('img').eq(0).load(function(){
				imgWidth = $(this).outerWidth();
				imgHeight = $(this).outerHeight();
				$bigWrap.css({
					height:imgHeight,
					width:imgWidth
				});
				$focus.width(imgWidth);
				$big.width(imgWidth*len);
			});
			$big.addClass(opt.type);
			// 初始化：
			// 显示小图
			if(opt.showSmall){
				var $small = $(".small-wrap").find("ul");
				$small.on('click','li',function(){
					index = $(this).index();
					show();
				});
			}
			if(opt.showButton){
				// 添加左右按钮
				$('<span/>').addClass('prev').html('&lt;').appendTo($focus);
				$('<span/>').addClass('next').html('&gt;').appendTo($focus);

				// 上一张
				$focus.on('click','.prev',function(){
					index--;
					show();
				})
					// 下一张
					.on('click','.next',animation);
			}
			// 页面加载时显示第一张图
			show();
			if(opt.autoPlay){
				var timer;
				// 鼠标移入停止，移除继续
				$focus.on('mouseenter',function(){
					clearInterval(timer);
				}).on('mouseleave',function(){
					timer = setInterval(animation,2000);
				}).trigger('mouseleave');
			}

			// 图片切换
			function animation(){
				index++;
				show();
			}
			function show(){
				if(index==len){
					index=0;
				}else if(index < 0){
					index = len - 1;
				}
				if(opt.type == 'fade'){
					$big.children('li').eq(index).stop().animate({opacity:1}).siblings().stop().animate({opacity:0});
				}
				if(opt.showSmall){
					$small.children('li').eq(index).css({"background":"red"})
						.siblings().css({"background":"white"});
				}

			}
		});

		return this;
	}
})(jQuery);