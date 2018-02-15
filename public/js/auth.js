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
