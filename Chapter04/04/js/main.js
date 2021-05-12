$(function() {
	var duration = 300;

	//aside--------------------------------------------------------
	var $aside = $('.page-main > aside');
	var $asideButton = $aside.find('button');
	$asideButton.on('click', function(){
		$aside.css('left', '0px')
	});


});