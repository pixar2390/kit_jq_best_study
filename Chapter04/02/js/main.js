$(function(){
    var duration = 500;
    // images-------------------------------------------------------
    var $images = $('#images p');

    // images 1つ目の画像
    $images.filter(':nth-child(1)')
        .on('mouseover', function(){
            $(this).find('strong, span').stop(true).animate({
                opacity:1
            },duration);
        })
        .on('mouseout',function () {
           $(this).find('strong, span').stop(true).animate({
            opacity:0
           },duration);
        });
    // images 2つ目の画像
    $images.filter(':nth-child(2)')
        .on('mouseover', function () {
            $(this).find('strong').stop(true).animate({
                left:'0%',
                opacity:1
            },duration);
            $(this).find('span').stop(true).animate({
                opacity:1
            },duration);
        })
        .on('mouseout', function () {
            $(this).find('strong').stop(true).animate({
                left: '-200%',
                opacity:0
            },duration);
            $(this).find('span').stop(true).animate({
                opacity:0
            },duration);
        });
    // images 3つ目の画像
    $images.filter(':nth-child(3)')
        .on('mouseover', function () {
            $(this).find('strong').stop(true).animate({
                bottom: '0px',
            },duration);
            $(this).find('img').stop(true).animate({
                top: '-20px'
            },duration);
            $(this).find('span').stop(true).animate({
                opacity:1
            }, duration * 1.3);
        })
        .on('mouseout', function() {
            $(this).find('strong').stop(true).animate({
                bottom: '-80px'
            },duration);
            $(this).find('img').stop(true).animate({
                top: '0px'
            },duration);
            $(this).find('span').stop(true).animate({
                opacity:0
            }, duration * 1.3);
        });


});