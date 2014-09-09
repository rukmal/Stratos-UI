// Variable to store height of the title text
var titleHeight = $('#centered').height() - $('#content').height();

/**
 * Function to change the animate the change in height of the box
 */
function changeBoxHeight () {
	window.setTimeout(function () {
		var newContentHeight = $('#content').height();
		var newHeight = titleHeight + newContentHeight;
		$('#centered').animate({
			'height': newHeight
		}, 400);
	}, 350);
}

// Binding functions to collapsed box opening and closing
$('.subform').on('hidden.bs.collapse', changeBoxHeight);
$('.subform').on('shown.bs.collapse', changeBoxHeight);

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

$('#editortoggle').click(function () {
	console.log("hello world");
});