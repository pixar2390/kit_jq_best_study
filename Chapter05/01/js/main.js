$(function () {
	/*
	 * Slideshow
	 */
	// slideshow クラスを持った要素ごとに処理を実行
	$('.slideshow').each(function(){

		var $slides = $(this).find('img'), //全てのスライド
			 slideCount = $slides.length,  //スライドの点数
			 currentIndex = 0;  //現在のスライドを示すインデックス

		//一つ目のスライドをフェードイン
		$slides.eq(currentIndex).fadeIn();

		//setInterval関数を用いて、7.5秒間隔でshowNextSlide関数を呼び出す
		setInterval(showNextSlide,7500);

		//スライドを変更するための関数showNextSlideを定義
		function showNextSlide() {
			//次のスライド番号を定義
			//もし現在のスライド番号が最後のスライドならば,nextIndexは0になり最初のスライドに戻る
			var nextIndex = (currentIndex + 1) % slideCount

			//現在表示しているスライドを非表示にする
			$slides.eq(currentIndex).fadeOut();

			//次のインデックス番号のスライドを表示させる
			$slides.eq(nextIndex).fadeIn();

			//スライドが変更されたので現在のスライド番号を更新
			currentIndex = nextIndex;
		};
	});

});