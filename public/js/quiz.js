$(document).ready(function() {
  // $("body").fadeOut(300);
  $("body").delay(200).fadeIn(200);
	initializePage();
})


function initializePage() {
  var myStorage = window.localStorage;
  var chapter = myStorage.getItem('chapter');
  var lesson = myStorage.getItem('lesson');
  $('#page0').removeClass("lesson-hidden");

  buttonActions(chapter, lesson);
  clickableSVG();
  // $("#question1 .answer span label").click(enableButton);
}

function buttonActions(chapter, lesson) {
  $('#prev-button0').addClass("button-disabled");
  var lastButton = $('button[id^="next-button"]').last();
  lastButton.text("Ready for quiz");
  lastButton.click(goToPage(`/question?chapter=${chapter}&lesson=${lesson}`));
  $('button[id^="next-button"]').click(function(e) {
    var targetId = $(this).closest('.row').next().attr('id');
    var thisId = $(this).closest('.row').attr('id');
    renderPage(targetId, thisId)(e);
  });
  $('button[id^="prev-button"]').click(function(e) {
    var targetId = $(this).closest('.row').prev().attr('id');
    var thisId = $(this).closest('.row').attr('id');
    renderPage(targetId, thisId)(e);
  });
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

function renderPage(contentToDisplay,thisId) {
  console.log(contentToDisplay);
  return function renderElement(e) {
    e.preventDefault();
    console.log("trigger event");
    var time = 300;

    if (thisId < contentToDisplay) {
      $("#" + thisId).animateCss('zoomOutRight', function() {
        $("#" + thisId).addClass('lesson-hidden');
        $("#" + contentToDisplay).animateCss('zoomInLeft');
        $("#" + contentToDisplay).removeClass('lesson-hidden');

      });
    } else {
      $("#" + thisId).animateCss('zoomOutLeft', function() {
        $("#" + thisId).addClass('lesson-hidden');
        $("#" + contentToDisplay).removeClass('lesson-hidden');
        $("#" + contentToDisplay).animateCss('zoomInRight');
      });
    }

    // $("#" + thisId).fadeOut(300);
  };
}

$.fn.extend({
  animateCss: function(animationName, callback) {
    var animationEnd = (function(el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    })(document.createElement('div'));

    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);

      if (typeof callback === 'function') callback();
    });

    return this;
  },
});
