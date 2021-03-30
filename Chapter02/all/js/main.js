$(function(){
	$('#typo')
		.on('mouseover', function(){
			$('#typo').css('color','#ebc000');
		})
		.on('mouseout', function(){
			$('#typo').css('color','#FFFFF');
		});


	$('.page-main .inner').on('click', function(){
		$('.page-main .inner').css('transform','rotate(0deg)');
		$('.page-footer').css('background-color','#CEE777')
	});

	$('#typo .inner').css('transform', 'rotate(20deg)');
	$('.page-main > div:nth-child(1) .inner').css('opacity', 0.5);
	$('#typo').css({
		fontSize: '90px',
		backgroundColor: '#ae5e9b',
		// color: '#ebc012'
	});
});
// テスト
// marge_test
// githubテスト