$(document).ready(function() {
  // $("body").fadeOut(300);
  $("body").delay(200).fadeIn(200);
	initializePage();
})

function goToPage(url) {
  return function(e) {
    e.preventDefault();
    $(this).closest('body').fadeOut(200);
    setTimeout(function(){
      window.location = url;
    }, 400);
  }

}

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
  myStorage = window.localStorage;
  myStorage.setItem('score', 0);
  myStorage.setItem('total', 0);
  var chapter = myStorage.getItem('chapter');
  var lesson = myStorage.getItem('lesson');
  $('#exitButton').click(goToPage(`/?chapter=${chapter}&lesson=${lesson}`));
  $('#question0').removeClass("question-hidden");
  $('button[id^="button"]').click(function(e) {
    var id = $(this).closest('.row').next().attr('id');
    renderPage(id)(e);
  });

  var checkBoxes = $('div[id^="question"] .answer input[type="radio"]');
  checkBoxes.change(function () {
    var relatedButton = $(this).closest('.answer').next();
    // console.log(checkBoxes.filter(':checked').attr('data-val'));
    if (checkBoxes.filter(':checked').length < 1) {
      relatedButton.addClass("button-disabled")
    } else {
      relatedButton.removeClass("button-disabled")

    }
  });

  checkBoxes.change();

  $('button[id^="modalPop"]').click(function(e) {
    console.log($(this).attr('data-answer'));
    var correctAns = $(this).attr('data-answer');
    var tempScore = myStorage.getItem("score");
    var tempTotal = myStorage.getItem("total");
    tempTotal++;
    if (correctAns === checkBoxes.filter(':checked').attr('data-val')){
      tempScore++;
    } else {
      var targetId = $(this).attr('data-target');
      $(targetId + " .modal-body h2").text(correctAns + " is the correct Answer. You will do better next time!");
    }
    myStorage.setItem("score", tempScore);
    myStorage.setItem("total", tempTotal);
  });
  $('div[id^="question"]:last-child button[id^="button"]').text("finish quiz");
  $('div[id^="question"]:last-child button[id^="button"]').click(goToSummary);

  var $draggable = $('.draggable').draggabilly({
    // options...
    // axis: 'y',
    handle: '.modal-body',

    containment: '.container'

  })


}




function goToSummary(e) {
  e.preventDefault();
  $(this).closest('body').fadeOut(200);
  setTimeout(function(){
    window.location = `/summary?correct=${myStorage.getItem("score")}&outof=${myStorage.getItem("total")}`;
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
    $("#" + contentToDisplay).prev().fadeOut(300);
  };

}
