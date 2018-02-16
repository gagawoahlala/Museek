
/*
 * GET home page.
 */
 var data = require("../chapters.json");


exports.view = function(req, res){
  var chapterNumber = req.query.chapter; 
  // var description = req.query.description; 
  // console.log(description);
  var chapterObj = data["chapters"][chapterNumber];
  chapterObj["currentChapterId"] = chapterNumber;
  console.log(chapterObj);
  res.render('index', chapterObj);
  // res.render('index');
};
