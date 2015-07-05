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
			breakpoint: 769,
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


// Slide para Organizadores
BarraJS.slideOrganizers = function() {
		var organizers = $('#organizacao .row');
		// Slick para criar slide
		organizers.slick({
			slidesToShow: 4,
			slidesToScroll: 4,
			infinite: true,
			dots: true,
			arrows: true,
			responsive: [{
				breakpoint: 569,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
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

// Mapa de Localizacao
BarraJS.mapLocalization = function() {
	// Mapa
	var mapCanvas = document.getElementById('map-canvas');
	var mapOptions = {
      center: new google.maps.LatLng(-22.9849097, -43.3592086),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
	var map = new google.maps.Map(mapCanvas, mapOptions);

	// Marker - pin
	var marker = new google.maps.Marker({
      position: mapOptions.center,
      map: map
  });

	// Legenda
	var legend = document.getElementById('map-legend');
	map.controls[google.maps.ControlPosition.TOP_LEFT].push(legend);
};

// Load Scripts no domready
$(document).ready(function(){
	BarraJS.slideTalkers(); // Slide com Palestrantes
	BarraJS.anchorPoint.init(); // Modulo para ancoras
	BarraJS.slideOrganizers(); // Slide com Organizadores
});

// Load Scripts no winLoad
$(window).load(function(){
		BarraJS.mapLocalization(); // Mapa de Localizacao
});

// Load Scripts no scroll
$(window).scroll(function(){
	BarraJS.fixedHeader.init(); // Modulo para fixar header
});
