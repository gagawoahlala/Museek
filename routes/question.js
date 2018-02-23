var data = require("../problems.json");

exports.view = function(req, res) { 
  // controller code goes here 
  var chapterNumber = req.query.chapter; 
  var lessonNumber = req.query.lesson; 
  // console.log("this chapterobj is:" + data["chapters"][chapterNumber]);
  var QuizObj = data["chapters"][chapterNumber]["lessons"][lessonNumber];
  QuizObj["questions"].forEach(function(question) {
    question["options"].forEach(function(option) {
      option.id = guid();
    });
  });
  console.log("this quizobj is:" + QuizObj);
  res.render('question', QuizObj);
};

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
