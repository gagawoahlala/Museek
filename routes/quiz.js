var data = require("../chapters.json");


exports.view = function(req, res){
//  var chapterNumber = req.query.chapter; 
//  var id = req.query.id; 
//  // var description = req.query.description; 
//  // console.log(description);
//  chapterObj
//  var chapterObj = data[0]["lessons"][id];
// console.log(chapterObj);
//  console.log(data);
 res.render('quiz', data);
 // res.render('index');
};
