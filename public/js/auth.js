// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('#signUpLogin').click(renderPage("form-signup"));
  $('#forget-password').click(renderPage("form-forget"));
  $('#have-account').click(renderPage("form-signin"));
  $('#sendLink').click(renderPage("form-signin",popup));
	$('#signInForget').click(renderPage("form-signin"));
	$('#signInLogin').bind('click', checkValid);
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}


function checkValid(e) {
	// $("#result").text("");
	var email = $("#inputEmail").val();
	if (validateEmail(email)) {
		// $("#result").text(email + " is valid :)");
		// $("#result").css("color", "green");
		$(this).closest('body').fadeOut(200);
		setTimeout(function(){
			window.location = '/';
		}, 400);

	} else {
		$('.form-signin .alert-danger').slideDown("slow");
		// $('.form-signin .alert-danger').delay(300).fadeIn(300);

	}
	return false;
}


function popup() {
  // alert("Link sent!!!");
  // $('.modal-backdrop').hide();
  // $('.modal-content').hide();
  // setTimeout(function(){
  //   $('#sendLink').trigger('click');
  // }, 1500);

}

function renderPage(contentToDisplay,callback) {
  console.log(contentToDisplay);
  return function renderElement(e) {
    e.preventDefault();
    if (callback) {
      callback();
    }
    console.log("trigger event");
    $("." + contentToDisplay).delay(300).fadeIn(300);
    $(this).closest('form').fadeOut(300);
  };

}
