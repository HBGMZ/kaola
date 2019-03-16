//调用$('#box').gdsdrag()
jQuery.prototype.gdsdrag = function(opt){
	opt = opt || {};//opt={},opt.container = undefined

	// this在这个位置表示“实例”$('#box')
	var self = this;

	var $container = $(opt.container);
	
	self.each(function(){
		var that = $(this);
		that.css('position','absolute').on('mousedown',function(e){
			var pos = {x:e.offsetX,y:e.offsetY};

			// 事件绑定加上命名空间
			$(document).on('mousemove.gdsdrag',function(evt){

				var _top = evt.clientY - pos.y;
				var _left = evt.clientX - pos.x;

				if($container.length){
					if(_top <= 0 + $container.offset().top){
						_top = 0 + $container.offset().top;
					}else if(_top>=$container.height()-that.outerHeight() + $container.offset().top){
						_top = $container.height()-that.outerHeight() + $container.offset().top;
					}

					if(_left <=0 + $container.offset().left){
						_left = 0 + $container.offset().left;
					}else if(_left>=$container.width()-that.outerWidth() + $container.offset().left){
						_left = $container.width()-that.outerWidth() + $container.offset().left;
					}
				}
				


				that.css({
					top:_top,
					left:_left
				});
				evt.preventDefault();
			});
			e.preventDefault();
		}).on('mouseup',function(){
			$(document).off('mousemove.gdsdrag');
		});
	});

	// 为了实现链式调用
	return self;
}