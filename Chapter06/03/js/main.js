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
		$.getJSON('./data/content.json', initGallery);

		//ギャラリーを初期化する・・・・・・関数A
		function initGallery (data) {

			//取得したJSONデータを格納
			allData = data;

			//最初の状態ではフィルタリングせず、そのまま全データを渡す
			filteredData = allData;

			//最初のアイテム群を表示
			addItems();

			//追加ボタンがクリックされたら追加で表示
			$loadMoreButton.on('click', addItems);

			//フィルターのラジオボタンが変更されたらフィルタリングを実行
			$filter.on('change', 'input[type="radio"]', filterItems);
		}

		//アイテムを生成しドキュメントに挿入する・・・・関数B
		function addItems(filter) {

		}

		//アイテムをフィルタリングする・・・・・関数C
		function filterItems() {

		}
	});
});