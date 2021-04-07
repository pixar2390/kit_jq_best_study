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

});

var added1 = add(1,2);
var added2 = add(6,7);
var added3 = added1 + added2;

function add(num1, num2) {
	return num1 + num2;
}
// console.log(added1);

var num = 10 - 5 * 345/97;
// console.log(num);

// var a=100;
// var b=200;
// var c;

// if (a==200) {
// 	c=a;
// }else if(b==200){
// 	c=b;
// }else{
// 	c=300;
// }

// switch (500) {
// 	case a:
// 		c=a;
// 		break;
// 	case b:
// 		c=b;
// 		break;
// 	default:
// 		c=300;
// 		break;
// }


var a = [1,2,3,4,5,6];
var b = 0;
for (var i = 0, len = a.length; i < len; i++) {
	var num = a[i];
	if (num % 5 === 0) {
		break;
	}else if (num % 2 === 1) {
		continue;
	}
	b += a[i];
}

console.log(b);





// テスト
// marge_test
// githubテスト