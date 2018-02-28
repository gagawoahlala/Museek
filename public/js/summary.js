$(document).ready(function() {
  // $("body").fadeOut(300);
  $("body").delay(200).fadeIn(200);
	initializePage();
})

function calculateDate() {
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth(); //January is 0!

  var yyyy = today.getFullYear() - 2000;
  if(dd<10){
      dd='0'+dd;
  }
  var today = dd+'-'+monthNames[mm]+'-'+yyyy;
  console.log(today);
  return today;
}
/*
 * Function that is called when the document is ready.
 */
function initializePage() {
  var myStorage = window.localStorage;
  var chapter = myStorage.getItem('currentChapter');
  var lesson = myStorage.getItem('currentLesson');
  if (chapter > myStorage.getItem('chapter') ||
  (lesson > myStorage.getItem('lesson') && chapter === myStorage.getItem('chapter'))) {
      myStorage.setItem('lesson', lesson);
  }
  var data = JSON.parse(myStorage.getItem('stat'));
  if(data[data.length-1]["date"] == calculateDate()){
 //do something
    data[data.length-1]["score"] += 10;
  }else{
   //something else.
   data.push({
     "date": calculateDate(),
     "score": 10
   });
  }
  myStorage.setItem('stat', JSON.stringify(data));


  $('#replay').click(goToPage(`/quiz/?chapter=${chapter}&lesson=${lesson}`));

  $('#goNote').click(goToPage(`/?chapter=${chapter}&lesson=${lesson}`));
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
