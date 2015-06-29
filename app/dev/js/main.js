// Main Scripts
var BarraJS = {} || window.BarraJS;

BarraJS.slideTalkers = function() {
	var talkers = $('#talkers .list-talkers');

	// Add slide(slick) aos palestrantes
	talkers.slick({
		arrows: true,
		dots: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 5000,

		// Responsive
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true,
				arrows: false
			}
		}]
	});
};

// Load Scripts
$(document).ready(function(){
	// Slide com Palestrantes
	BarraJS.slideTalkers();
});
