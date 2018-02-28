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
	$('#signInLogin').bind('click', validLogin);
	$('#signUpRegist').bind('click', validSignUp);
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validSignUp(e) {
	var email = $("#signUpEmail").val();
	if (validateEmail(email)) {
		// $("#result").text(email + " is valid :)");
		// $("#result").css("color", "green");
		$(this).closest('body').fadeOut(200);
		setTimeout(function(){
			window.location = '/?chapter=0&lesson=0';
		}, 400);

	} else {
		if ($(".alert-box").css("display") === "none") {
			$(".alert-box").slideDown(500);
			// setTimeout(function() {
			// 	$("#alerting").css("display", "block");
			// },500);

		} else {
			// $('.form-signin .alert-danger').effect( "bounce", "slow");
			// $(".alert-box").effect( "shake", "slow");

		}
	}
	return false;
}

function validLogin(e) {
	// $("#result").text("");
	e.preventDefault();
	var email = $("#inputEmail").val();
	if (validateEmail(email)) {
		// $("#result").text(email + " is valid :)");
		// $("#result").css("color", "green");
		$(this).closest('body').fadeOut(200);
		setTimeout(function(){
			window.location = '/?chapter=0';
		}, 400);

	} else {
		if ($(".alert-box").css("display") === "none") {
			$(".alert-box").slideDown(500);
			// setTimeout(function() {
			// 	$("#alerting").css("display", "block");
			// },500);

		} else {
			$('.form-signin .alert-danger').addClass("shakey");
			setTimeout(function() {
				$('.form-signin .alert-danger').removeClass("shakey");
			},820);
			// $('.form-signin .alert-danger').effect( "bounce", "slow");
			// $(".alert-box").effect( "shake", "slow");

		}


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
		$('.logo').fadeOut(300);
		$('.logo').fadeIn(300);
		$(".alert-box").delay(300).css("display", "none");

  };

}
