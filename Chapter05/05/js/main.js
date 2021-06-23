$(function() {
	/*
	 * Tabs
	 */
	$('#work').each(function(){

		//タブの各要素をjQueryオブジェクト化
		var $tabList   = $(this).find('.tabs-nav'),  		//タブのリスト
			 $tabAnchors = $tabList.find('a'),       		//タブ（リンク）
			 $tabPanels = $(this).find('.tabs-panel');	// パネル

		// タブがクックされたときの処理
		// 引数としてイベントオブジェクトを受け取る
		$tabList.on('click', 'a', function(event){

			// リンクのクリックに対するデフォルトの動作をキャンセルする
				event.preventDefault();
			//クリックされたタブをjQueryオブジェクト化
				var $this = $(this);
			// もし既に選択されたタブならなにもせずに処理を中止
				if ($this.hasClass('active')) {
					return;
				}
				//すべてのタブの選択状態を一旦解除し、クリックされたタブを選択状態にする
				$tabAnchors.removeClass('active');
				$this.addClass('active')

				//全てのパネルを一旦非表示にし、クリックされたタブに対応するパネルを表示
				$tabPanels.hide();
				$($this.attr('href')).show();
		});

		//最初のタブを選択状態に
		$tabAnchors.eq(0).trigger('click');
	});

});