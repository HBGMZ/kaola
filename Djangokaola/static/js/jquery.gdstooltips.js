(function($){
	// 保证$的安全性
	$.fn.gdstooltips = function(){
		this.each(function(idx,ele){
			$(ele).on('mouseenter',function(e){
				// 先获取原来的title属性
				var title = $(this).attr('title');

				// 保存title属性值到元素对象
				$(this).data('gdstitle',title);

				// 移除title属性
				$(this).removeAttr('title');

				var $arrow = $('<span/>').addClass('arrow');
				var $arrowInner = $('<span/>').addClass('arrow inner');
				var $tooltip = $('<div/>');
				$tooltip.css({
					left:e.clientX - 30,
					top:e.clientY + 30
				});
				$tooltip.addClass('tips').html(title).append([$arrow,$arrowInner]).appendTo('body');
				e.preventDefault();
			}).on('mouseleave',function(){
				$('.tips').remove();
				$(this).attr('title',$(this).data('gdstitle'));
			});
		});
	}
})(jQuery);

// $('[title]').gdstooltips();
