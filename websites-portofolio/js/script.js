$(document).ready(function(){
    // Initialisatie van de Skills Slider
    $('.skills-slider').slick({
        infinite: true,          // Blijft oneindig doorlopen
        slidesToShow: 3,         // Toont 3 logo's tegelijk
        slidesToScroll: 1,       // Schuift 1 logo per keer op
        autoplay: true,          // Automatisch afspelen
        autoplaySpeed: 2500,     // Snelheid van het afspelen (ms)
        arrows: true,            // Toont de pijltjes
        dots: false,             // Geen stipjes onderaan voor een cleanere look
        pauseOnHover: true,      // Stopt met draaien als je erover hoovert
        responsive: [
            {
                breakpoint: 992, // Tablets
                settings: {
                    slidesToShow: 2,
                    arrows: true
                }
            },
            {
                breakpoint: 576, // Mobiel
                settings: {
                    slidesToShow: 1,
                    arrows: false, // Pijltjes weg op mobiel voor meer ruimte
                    centerMode: true,
                    centerPadding: '40px'
                }
            }
        ]
    });
});