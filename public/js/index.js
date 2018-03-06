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
  });

  $('.viewAlt-button-group div div').click(function() {
    console.log("click the chapters viewAlt");
    gtag('event', "click", {
      'event_category': "frequency",
    });

  });

  $('#chapters a').click(function() {
    console.log("click the chapters");
    gtag('event', "click", {
      'event_category': "frequency"
     });
  });

  $('.viewAlt-button-group div ul li').click(function() {
    console.log("time recorded alt!");
    if (window.performance) {
      console.log("supported");
      // Gets the number of milliseconds since page load
      // (and rounds the result since the value must be an integer).
      var timeSincePageLoad = Math.round(performance.now());

      // Sends the timing hit to Google Analytics.
      ga('send', 'timing', 'UserPath', 'findLesson', timeSincePageLoad);
    }
  });

  $('.btn-group-vertical button').click(function() {
    console.log("time recored!!");
    if (window.performance) {
      // Gets the number of milliseconds since page load
      // (and rounds the result since the value must be an integer).
      var timeSincePageLoad = Math.round(performance.now());

      // Sends the timing hit to Google Analytics.
      ga('send', 'timing', 'UserPath', 'findLesson', timeSincePageLoad);
    }
  });



  // $(".dropdown li").click(function () {
  //   $(this).parent().parent().toggleClass("closed").find(".title").text($(this).text());
  // });

  //The viewAlt handlers


  if (myStorage.getItem('viewAlt') == "true") {
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
  } else {
    for (let i = 0; i <= chapter; i++) {
      $('#chapters a').eq(i).removeClass("button-disabled");
    }

    for (let i = 0; i <= chapter - 1; i++) {
      //nasty code!!!
      for (let j = 0; j < 5; j++) {
        $(`#c${i}l${j}`).removeClass("button-disabled");
      }
    }
    for (let i = 0; i <= lesson + 1; i++) {
      $(`#c${chapter}l${i}`).removeClass("button-disabled");
    }

  }
}
