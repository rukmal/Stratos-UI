// Variable to store the current mode of input
var isForm = true;

// Finding the height of the rendered form, and setting the JSON
// editor to the same height
var formHeight = $('#textform').height();
$('#jsoneditor').css('height', formHeight);

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

/**
 * Function to handle hiding and showing the JSON form
 */
$('#editortoggle').click(function () {
	if (isForm) {
		changeDisplayMode('#textform', '#jsonform');
		$('#editortoggle').text('Form View');
		isForm = false;
	} else {
		changeDisplayMode('#jsonform', '#textform');
		$('#editortoggle').text('JSON Editor')
		isForm = true;
	}
});

/**
 * Function to change the css display mode of the elements
 * @param  {String} element1 Element identifier #1 (this is the element that is hidden)
 * @param  {String} element2 Element identifier #1 (this is the element that is shown)
 */
function changeDisplayMode (element1, element2) {
	$(element1).css('display', 'none');
	$(element2).css('display', 'inline');
}