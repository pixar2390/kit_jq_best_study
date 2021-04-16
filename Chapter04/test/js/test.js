$(function () {
  var duration = 400;

  $('.wrap span')
    .on('mouseover',function () {
      console.log('test');
      $(this).find('.gg').stop(true).animate({
        color: 'red'
      },duration,'easeOutSine');
    })
    .on('mouseout',function () {
      $(this).find('.gg').stop(true).animate({
        color: 'black'
      },duration,'easeOutSine');
    });

});
