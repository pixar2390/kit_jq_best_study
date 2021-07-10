$(function () {
	$('#gallery').each(function(){
		//#gallery要素がギャラリーのコンテナーになる
		var $container = $(this);

		//オプションを指定しMasonryを準備
		$container.masonry({
			columnWidth:230,
			gutter:10,
			itemSelector:'.gllery-item'
		});

		//JSONファイルをリクエストし、成功したら関数を実行
		$.getJSON('./data/content.json', function(data){

			//ループで生成したDOM要素を一時的に保存する配列
			var elements = [];

			//JSONの配列(data)の要素(item)ごとにループ処理
			$.each(data, function(i, item) {
				//配列の要素からHTML文字列を生成

			});

		});

	});
});