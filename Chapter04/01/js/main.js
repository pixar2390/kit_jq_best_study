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
            },'easeOutSine');
        })
        .on('mouseout',function(){
            $(this).stop(true).animate({
                borderWidth: '0em',
                color: '#ebc000'
            },'easeOutSine');
        });
});


