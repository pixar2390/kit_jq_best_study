$(function () {

  /*
	* Slideshow
	*/
	$('.slideshow').each(function(){

	// 変数の準備
	// -------------------------------------------------------------------------------
		var $container = $(this),
			 $slideGroup = $container.find('.slideshow-slides'),
			 $slides = $slideGroup.find('.slide'),
			 $nav = $container.find('.slideshow-nav'),
			 $indicator = $container.find('.slideshow-indicator'),

			slideCount = $slides.length,
			indicatorHTML = '',
			currentIndex = 0,
			duration = 500,
			easing = 'easeInOutExpo'
			interval = 7500,
			timer = 3000;

	// HTML要素の配置、生成、挿入
	// -------------------------------------------------------------------------------
		// 各すりアドの位置を決定し、対応するインジケーターのアンカーを生成
		$slides.each(function (i) {
			$(this).css({left: 100 * i + '%'})
			indicatorHTML += '<a href="#">' + (i + 1) + '</a>'
		});

		// インジケーターにコンテンツを挿入
		$indicator.html(indicatorHTML);

	// 関数の定義
	// -------------------------------------------------------------------------------








	});


});