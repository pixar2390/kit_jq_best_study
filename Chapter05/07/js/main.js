$(function(){
    /*
     * Back-toTop button(smooth scroll)
     */
    $('.back-to-top').each(function(){
        //htmlかbodyのいずれがスクロール可能な要素か検出
        var el = scrollableElement('html','body');

        //ボタンにクリックイベントを設定
        $(this).on('click', function(event){
            event.preventDefault();
            $(el).animate({scrollTop: 0}, 250);
        });
    });

    //scrollTopが利用できる要素を検出する関数
    function scrollableElement(){
        // console.log(arguments.length); →argumentsは引数で渡されたオブジェクトを配列形式で格納している。
        var i, len, el, $el, scrollable;
        for(i = 0, len = arguments.length; i < len; i++) {
            el = arguments[i],
            $el = $(el);
            if ($el.scrollTop() > 0) {
                return el;
            } else {
                $el.scrollTop(1);
                scrollable = $el.scrollTop() > 0;
                $el.scrollTop(0);
                if (scrollable) {
                    return el;
                }
            }
        }
        return[];
    }


});