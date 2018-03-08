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
  var chapter = parseInt(myStorage.getItem('currentChapter'));
  var lesson = parseInt(myStorage.getItem('currentLesson'));
  $('#replay').click(goToPage(`/quiz/?chapter=${chapter}&lesson=${lesson}`));
  var currentLength =  parseInt(myStorage.getItem('currentChapterLength'));
  var maxChapter = parseInt(myStorage.getItem('chapter'));
  var maxLesson = parseInt(myStorage.getItem('lesson'));
  if (lesson > maxLesson && chapter === maxChapter) {
    // console.log(lesson);
    maxLesson += 1;
    // console.log(maxLesson);
    if (lesson + 1 >= currentLength) {
      myStorage.setItem('lesson', '-1');
      myStorage.setItem('chapter', `${maxChapter + 1}`);
      chapter = maxChapter + 1;
    } else {
      console.log("enter here");
      myStorage.setItem('lesson', `${maxLesson}`);
    }
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

  $('#goNote').click(goToPage(`/?chapter=${Math.max(chapter,maxChapter)}&lesson=${lesson}`));

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
