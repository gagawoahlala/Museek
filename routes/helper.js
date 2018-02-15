exports.view = function(req, res) { 
  res.render('helper', {
	'questions': [
		{ 	'title': 'What is MuSeek?',
		    'answer': 'MuSeek is a music education application that allows users to learn music notation at their own pace!',
		    'id': 'project1'
		},
		{ 	'title': 'How can I check how I’m doing?',
			'answer': 'Check out our Statistics page! You can access it through the bar graph icon on most pages!',
			'id': 'project2'
		},
    { 	'title': 'Why are some levels locked?',
      'answer': 'Some levels are locked because they require prerequisites from previous lessons!',
      'id': 'project3'
    },
	]
  });
};
