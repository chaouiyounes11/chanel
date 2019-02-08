//effet menu burger
$(document).ready(function(){
	$('#nav-icon2').click(function(){
		$(this).toggleClass('open');
	});
});

//ouerture menu full page
$("#nav-icon2").click(function(){
  $("#menu-mobile-white").slideToggle(500);
	$('#nav-icon2').css('display', 'flex').css('z-index', '400');
	$('#nav-icon2 span').toggleClass('span-black');
	$('body').toggleClass('no-scroll');

});

$(window).scroll(function() {
  if ($(this).scrollTop() > 0) {
    $('#section-camelia figure').css('opacity', '1').css('transition', '1s');
  }
  else {
    $('#section-camelia figure').css('opacity', '0');
  }
});

$(window).scroll(function() {
	if ($(window).width() < 992) {
  if ($(this).scrollTop() > 900) {
		$('#filtre-fifteen').css('display', 'flex');
	} else {
		$('#filtre-fifteen').css('display', 'none');

	}
}
});


$(window).scroll(function() {
	if ($(window).width() >= 992) {
  if ($(this).scrollTop() > 350) {
		$('#logo-chanel').css('transition', '1s');
		$('#logo-chanel').css('display', 'none');
		$('header nav').css('flex-direction', 'row-reverse');
		$('header nav').css('padding', '20px 0px');
	} else {
		$('#logo-chanel').css('display', 'flex');
		$('#logo-chanel').css('transition', '1s');
		$('header nav').css('flex-direction', 'row');
		$('header nav').css('padding', '0px 0px');
	}
}
});
