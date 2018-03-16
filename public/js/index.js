(function(){
  function id(v){return document.getElementById(v); }
  function loadbar() {
    for(var i=0;i<9;i++) {
    var x = $('.animated-notes')[i];
    $(x).css('-webkit-animation','music 1s '+i+'00ms  ease-in-out both infinite');
    }
    var ovrl = id("overlay"),
        // prog = id("progress"),
        // stat = id("progstat"),
        img = document.images,
        c = 0;
        tot = img.length;

    function imgLoaded(){
      c += 1;
      // var perc = ((100/tot*c) << 0) +"%";
      // prog.style.width = perc;
      // stat.innerHTML = "Loading "+ perc;
      if(c===tot) return doneLoading();
    }
    function doneLoading(){
      ovrl.style.opacity = 0;
      setTimeout(function(){
        ovrl.style.display = "none";
      }, 1200);
    }
    for(var i=0; i<tot; i++) {
      var tImg     = new Image();
      tImg.onload  = imgLoaded;
      tImg.onerror = imgLoaded;
      tImg.src     = img[i].src;
    }
  }
  document.addEventListener('DOMContentLoaded', loadbar, false);
}());
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  // $("body").fadeOut(300);
  // $("body").delay(200).fadeIn(200);
	initializePage(tutorial);
  // tutorial();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage(callback) {

  var stat = [
  	{
  		"date": "12-Mar-18",
  		"score": 20
  	},
  	{
  		"date": "13-Mar-18",
  		"score": 10
  	},
    {
      "date": "14-Mar-18",
      "score": 30
    },
    {
      "date": "15-Mar-18",
      "score": 40
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
      if (imgObj) {
        var altImg = imgObj.getAttribute("data-ori");
        imgObj.setAttribute("src", altImg);
      }
    } else {
      var imgObj = $(this).children()[0];
      if (imgObj) {
        var altImg = imgObj.getAttribute("data-alt");
        imgObj.setAttribute("src", altImg);
      }
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
  // $('.dropdown ul').addClass("animated fadeOutUp");
  // $('li[id^="c"]').addClass("animated fadeOutUp");

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

  var currentChapter = undefined || myStorage.getItem('currentChapter');
  var chapterToExpand = myStorage.getItem('chapterToExpand');
  console.log(chapterToExpand);
  if (chapterToExpand != null) {
    $("#chapter" + chapterToExpand).parent().removeClass("closed");
  }
  // console.log(currentChapter);
  if (chapter == 0 && currentChapter === null) {
    callback();
  }


}

function tutorial() {
  // Define the tour!
  var tour = {
    id: "hello-hopscotch",
    showPrevButton: true,
    steps: [
      {
        title: "Welcome to Museek new musician!",
        content: "Museek is a music education app that teaches new musicians like yourself how to read music through interactive lessons and quizzes.",
        target: document.querySelector("#anchor1"),
        placement: "bottom",
        xOffset: 'center',
      },
      {
        title: "",
        content: "Packs contain individual lessons and quizzes that build off of one another. After you complete all the lessons/quizzes in a pack you unlock the next pack!",
        target: document.querySelector("#chapter0"),
        placement: "bottom",
        xOffset: 'center'
      },
      {
        title: "",
        content: "You can click on Statistics to track your progress.",
        target: document.querySelector("#anchorStat"),
        placement: "top",
        xOffset: 5,
        yOffset: -20,
        width: 200,
        fixedElement: true
      },
      {
        title: "",
        content: "Click on the first pack The Language of Music to get started on your musical journey!",
        target: document.querySelector("#chapter0"),
        placement: "bottom",
        xOffset: 'center'
      }
    ]
  };

  // Start the tour!
  hopscotch.startTour(tour);
}
