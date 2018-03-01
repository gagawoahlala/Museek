var data = require("../lessons.json");


exports.view = function(req, res){
  var re = /(?:\.([^.]+))?$/;

  var chapterNumber = req.query.chapter; 
  var lessonNumber = req.query.lesson; 
  var LessonObj = data["chapters"][chapterNumber]["lessons"][lessonNumber];
  LessonObj["pages"].forEach(function(page) {
    var ext = re.exec(page["image"])[1];
    if (ext === "svg") {
      page["isSVG"] = true;
    } else {
      page["isSVG"] = false;
    }
  });
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
