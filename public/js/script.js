// Setting the height of the centered div, and adding the centering class
var actualHeight = $('#centered').height();

console.log(actualHeight);

$('#centered').css('height', actualHeight);
$('#centered').addClass('vertical-center');