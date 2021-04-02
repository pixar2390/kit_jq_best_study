$(function () {
	$('header, #typo, footer')
		.on('mouseover', function () {
			$(this).stop(true).animate({
					backgroundColor: '#ae5e9b'
				},
				500
			);
		})
		.on('mouseout', function () {
			$(this).stop(true).animate({
					backgroundColor: '#3498db'
				},
				500
			);
		});

	$('.page-main .inner').on('click', function () {
		$('.page-main .inner').css('transform', 'rotate(0deg)');
		$('.page-footer').css('background-color', '#CEE777')
	});

	$('.page-main > div:nth-child(1) .inner').css('opacity', 0.5);

	$('#typo').on('click', function () {
		$('#typo .inner').animate({
				top: '200px'
				// color: '#007BFF'
				// opacity: 0,
				// fontSize: '0px'
			},
			1500,
			'easeInBounce',
			function() {
				$('#typo .inner').animate({top: '0px'},500);
			}
		);
	});


	var added1 = add(1,2);
	var added2 = add(6,7);
	var added3 = added1 + added2;

	function add(num1, num2) {
		return num1 + num2;
	}


});
// テスト
// marge_test
// githubテスト