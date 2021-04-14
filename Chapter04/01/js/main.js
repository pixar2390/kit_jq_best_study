$(function () {
    var duration = 300;
    // buttons1---------------------------------------------------------
    // buttons1 1行目
    $('#buttons1 button:nth-child(-n+4)')
        .on('mouseover', function(){
            $(this).stop(true).animate({
                backgroundColor: '#ae5e9b',
                color: '#fff'
            },duration);
        })
        .on('mouseout', function(){
            $(this).stop(true).animate({
                backgroundColor: '#fff',
                color: '#ebc000'
            },duration);
        });
     // buttons1 2行目
    $('#buttons1 button:nth-child(n+5):nth-child(-n+8)')
        .on('mouseover',function(){
            $(this).stop(true).animate({
                borderWidth: '1em',
                color: '#ae5e9b'
            },duration,'easeOutSine');
        })
        .on('mouseout',function(){
            $(this).stop(true).animate({
                borderWidth: '0em',
                color: '#ebc000'
            },duration,'easeOutSine');
        });
    // span要素でイベントを発火させようとしても幅が0なのでmouseoverに反応しない。
    // よってボタン要素でイベントが発火するようにプログラムを書く
    $('#buttons1 button:nth-child(n+9)')
        .on('mouseover',function(){
            // findメソッドを使って該当するボタンの子要素単体にCSSを適用する（クラスだけ指定してしまうと全部のクラス名が割り当てられた要素が藩王してしまう）
            $(this).find('> span').stop(true).animate({
                width: '100%'
            },duration,'linear');
        })
        .on('mouseout',function(){
            $(this).find('> span').stop(true).animate({
                width: '0'
            },duration,'linear');
        });

});


