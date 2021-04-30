$(function () {
	var duration = 500;
	// $('.test').find('p:nth-child(2)').css('color','#FF851B');
	// $('.test').find('p:last-child').css('color','#FF851B');
	// $('.test :nth-child(2)').css('color','#FF851B');
	// $('.test :last-child').css('color','#FF851B');
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

		// セレクタの検証
		// console.log($(this).prop("tagName"));
		// console.log($(this).find('img:first-child').prop("tagName"));
		// console.log($(this).find('img:last-child').prop("tagName"));

		// filterの":first-child"はコロンの前に要素名を入れても意味がない。全ての子要素の中から最初の要素が選ばれる
		$btn.find('img:first-child').stop(true).animate({
			opacity: 0
		},duration);
		// filterの":last-child"はコロンの前に要素名を入れても意味がない。全ての子要素の中から最後の要素が選ばれる
		$btn.find('img:nth-child(2)').stop(true).animate({
			opacity: 1
		},duration);
	})
	.on('mouseout', function () {
		var $btn = $(this).stop(true).animate({
			backgroundColor: '#FFFFFF',
			color: '#01b169'
		},duration)
		$btn.find('img:first-child').stop(true).animate({
			opacity: 1
		},duration);
		$btn.find('img:nth-child(2)').stop(true).animate({
			opacity:0
		});
	});
});