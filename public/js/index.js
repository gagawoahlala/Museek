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
  var currentChapter = parseInt(myStorage.getItem('currentChapter'));
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

  for (let i = 0; i <= chapter; i++) {
    $('#chapters a').eq(i).removeClass("button-disabled");
  }
  if (currentChapter < chapter) {
    $('button[id^=c]').removeClass("button-disabled");
  } else {
    for (let i = 0; i <= chapter; i++) {
      // console.log(1 + parseInt(lesson));
      for (let j =0; j <= parseInt(lesson) + 1; j++) {
        console.log('#c'+i+'l'+j);
        $('#c'+i+'l'+j).removeClass("button-disabled");
      }
    }
  }

}
