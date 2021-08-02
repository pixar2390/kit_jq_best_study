$(function () {

	/*
	 * ギャラリー
	 */
	$('#gallery').each(function () {

		var $container = $(this),
			$loadMoreButton = $('#load-more'), //追加ボタン
			$filter = $('#gallery-filter'), //フィルタリングのフォーム
			addItemCount = 16, //一度に表示するアイテム数
			added = 0, //表示済みのアイテム数
			allData = [], //すべてのJSONデータ
			filteredData = []; // フィルタリングされたJSONデータ

		$container.masonry({
			columnWidth: 230,
			gutter: 10,
			itemSelector: '.gallery-item'
		});

		//JSONを取得し、initGallery関数を実行
		$.getJSON('./data/content.json', initGallery);

		//ギャラリーを初期化する・・・・・・関数A
		function initGallery(data) {

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
			var elements = [],
				//追加するデータの配列
				slicedData = filteredData.slice(added, added + addItemCount);

			//sliceDataの要素ごとにDOM要素を生成
			$.each(slicedData, function (i, item) {
				var itemHTML =
						'<li class="gallery-item is-loading">' +
							'<a href="' + item.images.large + '">' +
								'<img src="' + item.images.thumb + '" alt="">' +
								'<span class="caption">' +
									'<span class="inner">' +
										'<b class="title">' + item.title + '</b>' +
											'<time class="date" datatime="' + item.date + '">' +
												item.date.replace(/-0?/g, '/') +
											'</time>' +
									'</span>' +
								'</span>' +
							'</a>' +
						'</li>';
					elements.push($(itemHTML).get(0));
			});

			//DOM要素の配列をコンテナーに挿入し、Masonryレイアウトを実行
			$container
				.append(elements)
				.imagesLoaded(function () {
					$(elements).removeClass('is-loading');
					$container.masonry('appended', elements);
					//フィルタリング時は再配置
					if (filter) {
						$container.masonry();
					}
				});

			//追加済みのアイテム数を更新
			added += slicedData.length;

			//JSONデータがすべて追加し終わっていたら追加ボタンを消す。
			// console.log(added);
			// console.log(filteredData.length);
			if (added < filteredData.length) {
				$loadMoreButton.show();
			} else {
				$loadMoreButton.hide();
			}
		}

		//アイテムをフィルタリングする・・・・・関数C
		function filterItems() {

			var key = $(this).val(), //チェックされたラジオボタンのvalue
				masonryItems = $container.masonry('getItemElements'); //追加済みのMasonryアイテム

			//Masonryアイテムを削除
			$container.masonry('remove', masonryItems);

			//フィルタリング済みアイテムのデータリセットと追加済みアイテム数をリセット
			filteredData = [];
			added = 0;

			if (key === 'all') {
				//allがチェックされた場合、全てのJSONデータを格納
				filteredData = allData;
			} else {
				//all以外の場合、キーと一致するデータを抽出
				filteredData = $.grep(allData, function (item) {
					return item.category === key;
				});
			}

			//アイテムを追加
			addItems(true);
		}

		//ラジオボタンをカスタマイズ
		$(document).ready(function() {
			$('.filter-form input[type="radio"]').button({
				icons:{
					primary:'icon-radio'
				}
			});


		});

	});
});

// リンク先設定："C:\Program Files\Google\Chrome\Application\chrome.exe" --allow-file-access-from-files