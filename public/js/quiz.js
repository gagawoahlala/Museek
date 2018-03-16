$(document).ready(function() {
  // $("body").fadeOut(300);
  $("body").delay(200).fadeIn(200);
	initializePage();
  // $("[data-balloon]:after").css('opacity' , "0");
  setTimeout(function() {
    $("#temp-hover").addClass("hoverOnload");

  }, 2500);
  // setTimeout(5000, function() {
    // $("#temp-hover").delay(13200).removeClass('hoverOnload');
  // });
})


function initializePage() {
  var myStorage = window.localStorage;
  var chapter = myStorage.getItem('currentChapter');
  var lesson = myStorage.getItem('currentLesson');
  var haveQuiz = $("main").attr('data-haveQuiz');
  // console.log(haveQuiz);
  $('#page0').removeClass("lesson-hidden");
  // var texts = document.querySelector('div[id^="text"]');
  // console.log(texts);
  // texts.forEach(function(text) {
  //   text.innerHTML = text.textContent;
  // });
  // $('div[id^="text"]').html($(this).text());
  buttonActions(chapter, lesson, haveQuiz);
  var first = "A", last = "G";
  for (let i = first.charCodeAt(0); i <= last.charCodeAt(0); i++) {
    var index = i - first.charCodeAt(0) + 1;
    $( "html" ).append( `<audio id="play${index}" src="/image/sound/piano-ff-0${37 + index - 1}.wav"></audio>` );
  }
  var arm = document.getElementById("stuff");
  if (arm != null) {
    clickableSVG(arm);

    // prePlaySound(arm);
  }
  var overflowitems = document.querySelector(".scrollmenu");
  if (overflowitems) {
    $("#temp-hover").addClass("showTooltip");
  }
  // console.log(isOverflown(overflowitems));
  // $("#question1 .answer span label").click(enableButton);
}

function isOverflown(element) {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

function buttonActions(chapter, lesson, haveQuiz) {
  $('#prev-button0').addClass("button-disabled");
  var firstButton = $('button[id^="prev-button"]').first();
  firstButton.css("display", "none");
  var lastButton = $('button[id^="next-button"]').last();
  lastButton.css("width", "200px");
  lastButton.css("color", "white");
  lastButton.css("background-color", "#228e22");
  if (haveQuiz === "true") {
    lastButton.click(goToPage(`/question?chapter=${chapter}&lesson=${lesson}`));
    lastButton.text("Ready for Quiz");
  } else {
    lastButton.click(goToPage(`/summary`));
    lastButton.text("Finish");
  }
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

function clickableSVG(arm) {
  // var a = $("#stuff");
  // var arm = document.getElementById("stuff");
  arm.addEventListener('load', function(){
    var svgDoc = arm.contentDocument;
    // console.log(svgDoc);
    if (svgDoc.getElementById("Bitmap-Copy-3")) {
      $("#temp-hover").addClass("showTooltip");
    }
    var first = "A", last = "G";
    for (let i = first.charCodeAt(0); i <= last.charCodeAt(0); i++) {
      var index = i - first.charCodeAt(0) + 1;
      // $( "html" ).append( `<audio id="play${index}" src="/image/sound/piano-ff-0${37 + index - 1}.wav"></audio>` );
    	// var curr = String.fromCharCode(i);
      // console.log(index);
      var svgItem = svgDoc.getElementById("Bitmap-Copy-" + index);
      // Set the colour to something else
      if (svgItem) {
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
    }


  });
  var a = document.getElementById("stuff").contentDocument;
  // prePlaySound(arm);
}

// function prePlaySound(arm) {
//   arm.addEventListener('load', function(){
//     var svgDoc = arm.contentDocument;
//     // console.log(svgDoc);
//     var first = "A", last = "G";
//     for (let i = first.charCodeAt(0); i <= last.charCodeAt(0); i++) {
//       var index = i - first.charCodeAt(0) + 1;
//       // $( "html" ).append( `<audio id="play${index}" src="/image/sound/piano-ff-0${37 + index - 1}.wav"></audio>` );
//       // var curr = String.fromCharCode(i);
//       // console.log(index);
//       var svgItem = svgDoc.getElementById("Bitmap-Copy-" + index);
//       console.log(svgItem);
//       svgItem.click();
//     }
//   });
// }

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
    $("#" + contentToDisplay).delay(300).fadeIn(300);
    $("#" + thisId).fadeOut(300);
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
