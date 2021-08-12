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

			//アイテムのリンクにホバーエフェクト処理を登録
			$container.on('mouseenter mouseleave', 'gallery-item a', hoverDirection);
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

            //リンクにColorboxを設定
            $container.find('a').colorbox({
               maxWidth:'970px',
               maxHeight:'95%',
               title:function(){
						return $(this).find('.inner').html();
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

		//ホバーエフェクト
		function hoverDirection(event) {
			var $overlay = $(this).find('.caption'),
					side = getMouseDirection(event),
					animateTo,
					positionIn = {
						top: '0%',
						left: '0%'
					},
				//  以下は即時関数
				positionOut = (function () {
					switch(side) {
						//case0:top,case1:right,case2:bottom,default:left
						case 0:  return{top:'-100%', left:'0%'};
									break;
						case 1:  return{top:'0%', left:'100%'};
									break;
						case 2:  return{top:'1000%', left:'0%'};
									break;
						default: return{top:'0%', left:'100%'};
									break;
					}
				})();
			if (event.type === 'mouseenter') {
				animateTo = positionIn;
				$overlay.css(positionOut);
			} else {
				animateTo = positionOut
			}
			$overlay.scrollTop.animateTo(animateTo, 250, 'easeOutExpo');
		};

		//ラジオボタンをカスタマイズ
		$(document).ready(function() {
			$('.filter-form input[type="radio"]').button({
				icons:{
					primary:'icon-radio'
				}
			});
		});

	});

		// スクロール位置によってヘッダーサイズを変更
		$('.page-header').each(function () {
			var $header = $(this),
				headerHeight = $header.outerHeight(),
				headerPaddingTop = parseInt($header.css('paddingTop'), 10),
				headerPaddingBottom = parseInt($header.css('paddingBottom'), 10);
			$(window).on('scroll', $.throttle(1000 / 60, function () {
				var scroll = $(this).scrollTop(),
					styles = {};
				if (scroll > 0) {
					if (scroll < headerHeight) {
						styles = {
							paddingTop: headerPaddingTop - scroll / 2,
							paddingBottom: headerPaddingBottom - scroll / 2
							};
					} else {
							styles = {
								paddingTop: 0,
								paddingBottom: 0
							};
					}
				} else {
					styles = {
						paddingTop: '',
						paddingBottom: ''
					};
				}
				$header.css(styles);
			}));
		});

});

// リンク先設定："C:\Program Files\Google\Chrome\Application\chrome.exe" --allow-file-access-from-files
// https://stackoverflow.com/questions/3627042/jquery-animation-for-a-hover-with-mouse-direction/3647634#3647634