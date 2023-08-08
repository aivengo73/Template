$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: false,
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		easing: 'ease',
		infinite: true,
		autoplay: true,
		autoplaySpeed: 1500,
		draggable: true,
		swipe: true,
		touchThreshold: 5,
		touchMove: true,
		waitForAnimate: true
	});
});