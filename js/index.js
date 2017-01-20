// tooltip

$('i.fa').tooltip();

$('.page-scroll a').on('click', function(event) {
  var $anchor = $(this);
  $('html, body').stop().animate({
    scrollTop: $($anchor.attr('href')).offset().top - 70
  }, 1500, 'easeInOutExpo');
  event.preventDefault();
});