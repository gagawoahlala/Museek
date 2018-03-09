
exports.view = function(req, res) { 
  // controller code goes here 
  var star = [];
  var numberOfStar = 3;
  var correct = req.query.correct; 
  var outof = req.query.outof; 
  var scoreObj = {};

  var accuracy = Math.floor(correct * 1.0 / outof * 100);
  var starNumber = Math.round(numberOfStar * correct * 1.0 / outof);
  console.log("star number is:" + starNumber);
  for (let i = 1; i <= numberOfStar; i++) {
    if (i <= starNumber) {
      star.push({
        isLighted: true
      });
    } else {
      star.push({
        isLighted: false
      });
    }
  }
  scoreObj["star"] = star.reverse();
  scoreObj["correct"] = correct;
  scoreObj["outOf"] = outof;
  scoreObj["accuracy"] = accuracy;
  console.log(star);
  if (typeof accuracy !== 'undefined' && !isNaN(accuracy)) {
    scoreObj["showScore"] = true;
  } else {
    scoreObj["showScore"] = false;
  }
  res.render('summary', scoreObj);
};
