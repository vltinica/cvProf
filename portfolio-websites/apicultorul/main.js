//Initiate WOW JS
	new WOW().init();


/*$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});*/

/* Hide navbar on clicking on the menu */
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});