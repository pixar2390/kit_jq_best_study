$(function() {
	/*
	 * Tabs
	 */
	$('.work-section').each(function(){
		// タブの各要素をオブジェクト化
		var $container = $(this),												//タブとパネルを含む全体のコンテナー
			 $navItems = $container.find('.tab-nav li'),				//タブのリスト
			 $highlight = $container.find('.tabs-highlight');		//選択中のタブをハイライト


		//jQuery UI Tabsを実行
		$container.tabs({
			//非表示にする際のアニメーション
			hide:{duration:250},
			//表示する際のアニメーション
			show:{duration:125},
			//読み込み時とタブ選択時にハイライトの位置を調整
			create: moveHighlight,
			activate: moveHighlight
		});

		// ハイライトの位置を調整する関数
		function moveHighlight(event,ui){
			// あたらしく選択されたタブのjQueryオブジェクト
			var $newTab = ui.newTab||ui.tab,
				 // 新しく選択されたタブの左位置
				 left =$newTab.position().left;
				 console.log($newTab.prop("tagName"));
				 //ハイライトの位置をアニメーション
				 $highlight.animate({left:left},500, 'easeOutExpo');
		};

	});
});