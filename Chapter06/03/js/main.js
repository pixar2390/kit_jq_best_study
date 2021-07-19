$(function() {
	/*
	 * ギャラリー
	 */
	$('#gallery').each(function(){
		var $container = $(this),
			 $loadMoreButton = $('#load-more'),   //追加ボタン
			 $filter = $('#gallery-filter'),      //フィルタリングのフォーム
			 addItemCount =16,                    //一度に表示するアイテム数
			 added = 0,                           //表示済みのアイテム数
			 allData =[],                         //すべてのJSONデータ
			 filteredData = [];						  // フィルタリングされたJSONデータ

		$container.masonry({
			columnWidth: 230,
			gutter:10,
			itemSelector: '.gallery-item'
		});

		//JSONを取得し、initGallery関数を実行
		$.getJSON('./data/content.jason', initGallery);

	});


});