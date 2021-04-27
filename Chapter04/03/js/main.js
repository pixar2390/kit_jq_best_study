$(function () {
	var duration = 500;
	// button2--------------------------------
	$('#buttons2 button').each(function(index){
		var pos = index * 40-40;
		$(this).css('top', pos);
	})
	.on('mouseover', function () {
		var $btn = $(this).stop(true).animate({
			backgroundColor: '#faee00',
			color: '#000'
		}, duration);
		$btn.find('img:first-child').stop(true).animate({
			opacity: 0
		},duration);
		$btn.find('img:last-child').stop(true).animate({
			opacity: 1
		},duration);
	})
	.on('mouseout' function () {
		var $btn = $(this).stop(true).animate({
			backgroundColor: '#FFFFFF'
			color: '#29333A'
		},duration)
		$btn.find('img:first-child').stop(true).animate({
			opacity: 1
		},duration);
		$btn.find('img:last-child').stop(true).animate({
			opacity:0
		})
	})
})