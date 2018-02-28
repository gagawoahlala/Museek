var data = require("../lessons.json");


exports.view = function(req, res){
  var chapterNumber = req.query.chapter; 
  var lessonNumber = req.query.lesson; 
  var LessonObj = data["chapters"][chapterNumber]["lessons"][lessonNumber];

//  var chapterNumber = req.query.chapter; 
//  var id = req.query.id; 
//  // var description = req.query.description; 
//  // console.log(description);
//  chapterObj
//  var chapterObj = data[0]["lessons"][id];
// console.log(chapterObj);
//  console.log(data);
  LessonObj.chapterNumber = chapterNumber;
  LessonObj.lessonNumber = lessonNumber;
  res.render('quiz', LessonObj);
 // res.render('index');
};
