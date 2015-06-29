// Main Scripts
var BarraJS = {} || window.BarraJS;

// Slide para palestrantes
BarraJS.slideTalkers = function() {
	var talkers = $('#talkers .list-talkers');

	// Slick para criar slide
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

// Modulo para ancoras na pagina
BarraJS.anchorPoint = {

	// Principal - Scroll da pagina
	main : function(el) {
		$('html, body').animate({
			scrollTop: $($(el).data('target')).offset().top -80
		}, 800);
		return false;
	},

	// Atribuindo eventos
	bindEvents : function() {
		$('.anchor').on('click', function(e){
			e.preventDefault();
			BarraJS.anchorPoint.main(this);
		});
	},

	// Init dos metodos
	init : function() {
		BarraJS.anchorPoint.bindEvents();
	}
};

// Header Fixo
BarraJS.fixedHeader = {

	// Adicionar classe para fixar header
	main : function(){
		var header = $('#header'),
			headerOffset = $('#sobre').offset().top;

		if($(document).scrollTop() > $('.intro-meetup').height()) {
			header.addClass('header-fixed');
		}else {
			header.removeClass('header-fixed');
		}
	},

	// Init do modulo
	init: function() {
		BarraJS.fixedHeader.main();
	}
};


// Load Scripts no domready
$(document).ready(function(){
	BarraJS.slideTalkers(); // Slide com Palestrantes
	BarraJS.anchorPoint.init(); // Modulo para ancoras
});

// Load Scripts no scroll
$(window).scroll(function(){
	BarraJS.fixedHeader.init(); // Modulo para fixar header
});
