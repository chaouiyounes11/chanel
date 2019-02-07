$(document).ready(function(){
	$('#nav-icon2').click(function(){
		$(this).toggleClass('open');
	});
});

$('body').scroll(function() {
$('#section-camelia figure').slideUp().css('display', 'flex');
})
