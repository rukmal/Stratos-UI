// menu variables
var menuIsShown = false;

/**
 * Function to handle bringing the side menu out
 */
$('.menutoggle').click(function () {
	if (menuIsShown) {
		// take menu in
		$('.menucontent').animate({
			'left': '-10em'
		}, 500);
		$('.menutoggle').animate({
			'left': '-=7.3em'
		}, 500);
		menuIsShown = false;
	} else {
		// bring menu out
		$('.menucontent').animate({
			'left': '0em'
		}, 500);
		$('.menutoggle').animate({
			'left': '+=7.3em'
		}, 500);
		menuIsShown = true;
	}
});