
/*
 * GET home page.
 */
 var data = require("../chapters.json");

function parseData(data) {
  for (let i = 0; i < data.length; i++) {
    let temp = data[i]["lessons"];
    for (let j = 0; j < temp.length; j++) {
      temp[j]["chapterIndex"] = i;
    }
    console.log(temp);
  }
  return data;
}
function getChapterObj(data, chapterNumber) {
  if (chapterNumber != undefined) {
    var chapterObj = data["chapters"][chapterNumber];
    chapterObj["lessons"].forEach(function(lesson) {
      lesson["currentChapter"] = chapterNumber;
    });
    chapterObj["number"] = chapterNumber;
    chapterObj["chapters"] = parseData(data["chapters"]);

  }
  return chapterObj;
}

exports.view = function(req, res){
  var chapterNumber = req.query.chapter; 
  var chapterObj = undefined || getChapterObj(data, chapterNumber);
  console.log(chapterObj);
  if (chapterObj != undefined) {
    res.render('index', chapterObj);
  } else {
    res.render('auth');
  }
};
