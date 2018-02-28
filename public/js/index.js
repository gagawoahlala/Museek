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
  var chapter = myStorage.getItem('chapter');
  var lesson = myStorage.getItem('lesson');
  var data = myStorage.getItem('stat');
  if (!chapter) {
    myStorage.setItem('chapter', 0);
    chapter = 0;
  }
  if (!lesson) {
    myStorage.setItem('lesson', -1);
    lesson = -1;
  }

  if (!data) {
    myStorage.setItem('stat', JSON.stringify(stat));
  }

  for (let i = 0; i <= chapter; i++) {
    for (let j =0; j <= lesson + 1; j++) {
      $('#c'+i+'l'+j).removeClass("button-disabled");
    }
  }

}
