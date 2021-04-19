$(function(){
    var duration = 300;
    // images-------------------------------------------------------
    var $images = $('#images p');

    // images 1つめの画像
    $images.filter(':nth-child(1)')
        .on('mouseocer', function(){
            $(this).find('strong, span').stop(true).animate({
                opacity:1
            },duration)
        })
        .on()

});