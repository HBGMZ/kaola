;(function($){
	/*编写一个弹窗插件
        要求如下：
        1）默认居中显示，弹窗有标题，有关闭按钮，有遮罩层，可拖动，按ESC键关闭弹窗（40）
        2）可随意定制弹窗宽高（5）
        3）可设定是否显示遮罩层（5）
        4）可设定是否显示标题（5）
        5）可自定弹窗内容（10）
        6）可设定是否允许拖动（10）
        7）可设定遮罩层透明度（10）
        8）可设定回调函数，弹窗弹出后，能对弹窗做其他操作（15）
    */

    // $.fn.extend()
	$.fn.nicePopover = function(options){
		// 默认值
		var defaults = {
			width:300,
			height:'auto',
			overlay:0.5,
			drag:true,
			title:'弹窗标题',
			content:'弹窗内容',
			callback:function(){}
		}
		var opt = $.extend({},defaults,options);
		this.each(function(){
			$(this).on('click',function(e){
				// 生成弹窗外框
				var $popover = $('<div/>').addClass('popover').css({
					width:opt.width,
					height:opt.height
				});

				if(opt.title){
					// 生成标题
					var $title = $('<div/>').addClass('title').html(opt.title);
					$popover.append($title);
				}
				

				// 生成内容
				var $content = $('<div/>').addClass('content').html(opt.content);

				// 生成关闭按钮
				var $btnClose = $('<span/>').addClass('btn-close').html('&times;');

				if(opt.overlay){
					// 生成遮罩层
					var $overlay = $('<div/>').addClass('overlay').css('background-color','rgba(0,0,0,'+opt.overlay+')');
					$overlay.appendTo('body');
				}
				

				$popover.append([$title,$content,$btnClose]);

				
				$popover.appendTo('body');


				// 居中
				position($popover);

				if(opt.drag){
					// 拖拽效果
					$popover.on('mousedown',function(e){
						if(e.offsetY >= 40) return;
						var pos = {x:e.offsetX,y:e.offsetY};

						// 改鼠标形状
						$popover.css('cursor','move');

						$(document).on('mousemove.nicepop',function(evt){
							/*
								pageX = clientX + scrollLeft;
								pageY = clientY + scrollTop;
							 */
							$popover.css({
								top:evt.pageY - pos.y,
								left:evt.pageX - pos.x
							});

							// 阻止选中文字
							evt.preventDefault();
						});

						// 阻止选中文字
						e.preventDefault();
					}).on('mouseup',function(){
						$(document).off('mousemove.nicepop');

						// 还原鼠标形状
						$popover.css('cursor','');
					});
				}
				


				// 关闭按钮绑定点击事件
				$popover.on('click','.btn-close',function(){
					close();
				});

				$(window).on('scroll resize',function(){
					position($popover);
				});

				// Esc关闭弹窗
				$(document).on('keyup',function(e){
					if(e.keyCode == 27){
						close();
					}
				});

				// 关闭弹出函数
				function close(){
					$popover.remove();
					$overlay.remove();
				}

				// 定位窗口位置
				function position($pop){
					$pop.stop().animate({
						top:($(window).height() - $pop.outerHeight())/2 + $(window).scrollTop(),
						left:($(window).width() - $pop.outerWidth())/2 + $(window).scrollLeft()
					});
				}


				// 弹窗弹出后，执行回调函数
				// a = true && 12; ==> a=12;
				// b = false && 12; ==> b=false;
				$.type(opt.callback) === 'function' && opt.callback($popover);

				e.preventDefault();
			});
		});
		return this;
	}
	/*$.fn.niceShow = function(){

	}
	$.fn.niceClose = function(){
		
	}

	$.fn.extend({
		nicePopover:function(){},
		niceShow:function(){},
		niceClose:function(){}
	});*/
})(jQuery);

// 测试驱动开发
// $('a').nicePopover({width:800,height:300});