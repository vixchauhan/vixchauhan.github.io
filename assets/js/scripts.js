
/* ======= Fix nav menu when scroll ======= */
$(window).on('scroll', function () {
      if ($(window).scrollTop() > 100) {
        $('header').addClass('fixed');
      } else {
       $('header').removeClass('fixed');
      }
    });

   
/* ======= ScrollTo ======= */
$('body').scrollspy({ target: '#scrollnav', offset: 150});
$('.scrollto').on('click', function(e){
    var target = this.hash;                
    e.preventDefault();        
	$('body').scrollTo(target, 600, {offset: 0, 'axis':'y'});		
});

/* ======= Testimonial Carousel ======= */
$('.owl-testi').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    dots:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});