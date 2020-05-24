
$('a').click(function(e){
  $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 1000);
  e.preventDefault();
});