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
$('#requests, #memory, #loadaverage').on('hidden.bs.collapse', changeBoxHeight);
$('#requests, #memory, #loadaverage').on('shown.bs.collapse', changeBoxHeight);