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
  clickableSVG();
  // $("#question1 .answer span label").click(enableButton);
}

function clickableSVG() {
  // var a = $("#stuff");
  var arm = document.getElementById("stuff");
  arm.addEventListener('load', function(){
    var svgDoc = arm.contentDocument;
    // console.log(svgDoc);
    var first = "A", last = "G";
    for (let i = first.charCodeAt(0); i <= last.charCodeAt(0); i++) {
      var index = i - first.charCodeAt(0) + 1;
      $( "html" ).append( `<audio id="play${index}" src="/image/sound/piano-ff-0${37 + index - 1}.wav"></audio>` );
    	// var curr = String.fromCharCode(i);
      // console.log(index);
      var svgItem = svgDoc.getElementById("Bitmap-Copy-" + index);
      // Set the colour to something else
      svgItem.addEventListener('click', function() {
        let text = svgDoc.getElementById(String.fromCharCode(i)).children[0];
        // console.log(text);
        console.log(`<audio id="play${index}" src="/image/sound/piano-ff-0${37 + i - first.charCodeAt(0)}.wav"></audio>`);
        playSound(i, first.charCodeAt(0));
        text.setAttribute("style", "text-shadow: 3px 2px 20px #5cb85c; animation: all 0.5s;");
        setTimeout(function(){
          text.setAttribute("style", "text-shadow: none;");
        },500);
        // text.classList.add("shakey");
        // alert("happy!!!");
      });
    }


  });
  var a = document.getElementById("stuff").contentDocument;
  // console.log(a);
  // // Get the SVG document inside the Object tag
  // var svgDoc = a.contentDocument;
  // console.log(svgDoc);
  // Get one of the SVG items by ID;

}


function playSound(curr, offset) {
  var number = curr - offset + 1;
  var sound = document.getElementById('play' + number)
  console.log('play' + number);
  sound.play();
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
