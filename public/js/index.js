// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  // $("body").fadeOut(300);
  $("body").delay(200).fadeIn(200);
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
  $('#cl0').removeClass("button-disabled");
}
