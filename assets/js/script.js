
jQuery(document).ready(function ($) {
  $(".loop").owlCarousel({
    center: true,
    items: 2,
    loop: true,
    margin: 50,
    responsive: {
      600: {
        items: 2,
      },
    },
  });
  
  var owl = $('.owl-carousel');
  owl.owlCarousel();
  $('#customNextBtn').click(function() {
      owl.trigger('next.owl.carousel');
  })
  $('#customPrevBtn').click(function() {
      owl.trigger('prev.owl.carousel', [300]);
  })
});
