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

  var stat = [
  	{
  		"date": "24-Feb-18",
  		"score": 20
  	},
  	{
  		"date": "25-Feb-18",
  		"score": 30
  	}
  ];
  var myStorage = window.localStorage;
  var chapter = parseInt(myStorage.getItem('chapter'));
  var lesson = parseInt(myStorage.getItem('lesson'));
  var data = myStorage.getItem('stat');
  if (typeof chapter == 'undefined' || isNaN(chapter)) {
    myStorage.setItem('chapter', '0');
    chapter = 0;
  }

  if (typeof lesson == 'undefined' || isNaN(lesson)) {
    myStorage.setItem('lesson', '-1');
    lesson = -1;
  }

  if (typeof data == 'undefined' || ! data) {
    myStorage.setItem('stat', JSON.stringify(stat));
  }

  //The viewAlt handlers
  $(".dropdown .title").click(function () {
    $(this).parent().toggleClass("closed");
    if ($(this).parent().hasClass( "closed" )) {
      var imgObj = $(this).children()[0];
      var altImg = imgObj.getAttribute("data-ori");
      imgObj.setAttribute("src", altImg);
      // imgObj.attr( "src" ) = imgObj.attr( "data-alt" )
      console.log($(this).children()[0]);
    } else {
      var imgObj = $(this).children()[0];
      var altImg = imgObj.getAttribute("data-alt");
      imgObj.setAttribute("src", altImg);
      // imgObj.attr( "src" ) = imgObj.attr( "data-alt" )
      console.log($(this).children()[0]);
    }
  });



  $('.viewAlt-button-group div div').click(function() {
    gtag('event', "click", {
      'event_category': "frequency",
    });

  });

  $('.viewAlt-button-group div ul li').click(function() {
    if (window.performance) {
      console.log("supported");
      // Gets the number of milliseconds since page load
      // (and rounds the result since the value must be an integer).
      var timeSincePageLoad = Math.round(performance.now());

      ga('send', {
        hitType: 'timing',
        timingCategory: 'UserPath',
        timingVar: 'findLesson',
        timingValue: timeSincePageLoad
      });
      // Sends the timing hit to Google Analytics.
      // ga('send', 'timing', 'UserPath', 'findLesson', timeSincePageLoad);
    }
  });

  $('#chapter0').removeClass("button-disabled");

  for (let i = 0; i <= chapter - 1; i++) {
    //nasty code!!!
    for (let j = 0; j < 5; j++) {
      $(`#c${i}l${j}`).removeClass("button-disabled");
    }
  }
  for (let i = 0; i <= lesson + 1; i++) {
    $(`#c${chapter}l${i}`).removeClass("button-disabled");
  }
  for (let i = 0; i <= chapter; i++) {
    $(`#chapter${i}`).removeClass("button-disabled");
  }

}
