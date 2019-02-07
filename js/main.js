$(document).ready(function(){
	$('#nav-icon2').click(function(){
		$(this).toggleClass('open');
	});
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 3) {
    $('#section-camelia figure').css('opacity', '1').css('transition', '1s');
  }
  else {
    $('#section-camelia figure').css('opacity', '0');
  }
});
