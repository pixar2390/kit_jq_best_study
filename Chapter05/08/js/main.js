$(function(){
    //Back-toTop button
    $('.back-to-top').on('click',function(){
        //Smooth Scroll プラグインを実行
        $.smoothScroll({
            easing: 'easeOutExpo', //イージングの種類
            speed: 1000             //所要時間
        });
    });
});