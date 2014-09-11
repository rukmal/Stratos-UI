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
		updateJsonView();
		changeDisplayMode('#textform', '#jsonform');
		$('#editortoggle').text('Form View');
		isForm = false;
	} else {
		changeDisplayMode('#jsonform', '#textform');
		$('#editortoggle').text('JSON Editor')
		isForm = true;
	}
	changeBoxHeight();
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

/**
 * Handling editor view switching
 */
var jsonSkeleton;
var currentJson;

/**
 * Function to get the JSON skeleton from the server
 * and assign it to the jsonSkeleton variable
 */
function getJsonSkeleton () {
	var currentUrl = document.URL;
	var reversedUrlPath = currentUrl.split('/').reverse();
	// Note: The following is assuming that the path is of the format
	// https://[stratos_ui_url]/{currentCategory}/{currentPage}
	var currentPage = reversedUrlPath[1];
	var currentCategory = reversedUrlPath[2];
	var requestData = {
		category: currentCategory,
		name: currentPage
	}

	/**
	 * Function to assign data from the request to the
	 * corresponding variables
	 * @param  {String} data       Data from the request
	 * @param  {String} textStatus Description of the status of the request
	 * @param  {jqXHR} jqXHR       jQuery request object
	 */
	function assignData (data, textStatus, jqXHR) {
		jsonSkeleton = data;
		// Setting the current json to the skeleton if it is also undefined
		if (currentJson === undefined) {
			currentJson = jsonSkeleton;
		}
	}

	$.ajax({
		type: 'POST',
		url: '/Stratos-UI/rawjson',
		data: JSON.stringify(requestData),
		dataType: 'json',
		success: assignData,
		async: false
	});
}

/**
 * Function to update the current JSON
 * view from the text form
 */
function updateJsonView () {

	/**
	 * Function to update a field in the
	 * JSON version of the form
	 * @param  {String} current   Current key to be updated
	 * @param  {Array}  remaining Hieracial path to the final value to be updated
	 */
	function updateJsonField (name, value, type, current, remaining) {
		console.log('current: ' + JSON.stringify(current) + ' - remaining: ' + JSON.stringify(remaining));
		if (remaining.length === 1) {
			if (typeof(current) != 'Array') {
				current[name] = value;
			}
		} else {
			updateJsonField(name, value, type, current[remaining.pop()], remaining);
		}
	}

	if (jsonSkeleton === undefined) {
		getJsonSkeleton();
	}
	$('#textform :input').each(function () {
		var currentInputField = $(this);
		var currentInput = currentInputField.val();
		if (currentInput != '') {
			var currentId = currentInputField.attr('id');
			var name = currentId.split('/').pop();
			var jsonPath = currentId.split('/').reverse();
			var current;
			if (jsonPath.length > 1) {
				current = currentJson[jsonPath.pop()];
			} else {
				current = currentJson;
			}
			updateJsonField(name, currentInput, 'blah', current, jsonPath);
		}
	});
	// Stringifying and prettifying json, then placing it in the editor
	$('#jsoneditor').text(JSON.stringify(currentJson, null, '\t'));
}