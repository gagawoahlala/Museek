$(document).ready(function() {
  // $("body").fadeOut(300);
  $("body").delay(200).fadeIn(200);
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
  $('#button1').click(renderPage("question2"));
  var checkBoxes = $('#question1 .answer input[type="radio"]');
  checkBoxes.change(function () {
    if (checkBoxes.filter(':checked').length < 1) {
      $("#button1").addClass("button-disabled")
    } else {
      $("#button1").removeClass("button-disabled")

    }
    // $('#button1').prop('disabled', checkBoxes.filter(':checked').length < 1);
  });
  checkBoxes.change();

  var checkBoxes1 = $('#question2 .answer input[type="radio"]');
  checkBoxes1.change(function () {
    if (checkBoxes1.filter(':checked').length < 1) {
      $("#button2").addClass("button-disabled")
    } else {
      $("#button2").removeClass("button-disabled")

    }
    // $('#button1').prop('disabled', checkBoxes.filter(':checked').length < 1);
  });
  checkBoxes1.change();
  $('#button2').click(goToSummary);
  // $("#question1 .answer span label").click(enableButton);
}


function goToSummary(e) {
  e.preventDefault();
  $(this).closest('body').fadeOut(200);
  setTimeout(function(){
    window.location = '/summary';
  }, 400);
}


function renderPage(contentToDisplay,callback) {
  console.log(contentToDisplay);
  return function renderElement(e) {
    e.preventDefault();
    if (callback) {
      callback();
    }
    console.log("trigger event");
    $("#" + contentToDisplay).delay(300).fadeIn(300);
    $(this).closest('.row').fadeOut(300);
  };

}
