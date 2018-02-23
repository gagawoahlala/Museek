$(document).ready(function() {
  // $("body").fadeOut(300);
  $("body").delay(200).fadeIn(200);
	initializePage();
})


function initializePage() {
  var myStorage = window.localStorage;
  var chapter = myStorage.getItem('chapter');
  var lesson = myStorage.getItem('lesson');
  $('#Button').click(goToPage(`/question?chapter=${chapter}&lesson=${lesson}`));
  // $("#question1 .answer span label").click(enableButton);
}


function goToPage(url) {
  return function(e) {
    e.preventDefault();
    $(this).closest('body').fadeOut(200);
    setTimeout(function(){
      window.location = url;
    }, 400);
  }

}
