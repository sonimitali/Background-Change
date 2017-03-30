$(document).ready(function () {

	function randomColor() {
		var num = '0123456789abcdef';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += num[Math.floor(Math.random()*16)];
		}
		return color;
	};

	$(".button").on("click", function () {
		$('body').css('background-color', randomColor());
	});
});
