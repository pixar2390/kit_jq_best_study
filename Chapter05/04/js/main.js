$(function(){

    /*
     * sticky header
     */
    $('.page-header').each(function() {
        var $window = $(window), //Windowオブジェクト
            $header = $(this),  //ヘッダー

            // ヘッダーのクローン
            $headerClone = $header.contents().clone(),

            //ヘッダーのクローンのコンテナー
            $headerCloneContainer = $('<div class="page-header-clone"></div>'),

            // HTMLの上辺からヘッダーの底辺までの距離 = ヘッダーのトップ位置 + ヘッダーの高さ
            //threshold(ˈTHreSHˌ(h)ōld_閾値)
            threshold = $header.offset().top + $header.outerHeight();

        //コンテナーにヘッダーのクローンを挿入


    });

});