
/*
 * GET home page.
 */
 var data = require("../chapters.json");



exports.view = function(req, res){
  // var myStorage = window.localStorage;
  // var chapter = myStorage.getItem('chapter');
  // var lesson = myStorage.getItem('lesson');

  var chapterNumber = req.query.chapter; 
  // console.log(description);
  var chapterObj = undefined;
  if (chapterNumber != undefined) {
    chapterObj = data["chapters"][chapterNumber];
    chapterObj["lessons"].forEach(function(lesson) {
      lesson["currentChapter"] = chapterNumber;
    });
  }


  console.log(chapterObj);
  if (chapterObj != undefined) {
    res.render('index', chapterObj);
  } else {
    res.render('auth');
  }
  // res.render('index');
};
