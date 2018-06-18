
  
$(document).ready(function(){
    $('.first-slider').slick({
        dots: true,
        arrows:false,
        infinite: true,
        speed: 1000,
        // autoplay:true,
        slidesToShow: 1
    });

    $('.second-slider').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 5,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
});