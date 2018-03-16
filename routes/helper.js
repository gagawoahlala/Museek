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
    { 	'title': 'What are other music educational resources where I can learn more about music?',
      'answer': 'Here are some helpful resources to continue and expand on your musical journey!<br><ul><li><b>Online music education exercises</b><br><a href="https://www.musictheory.net/" target="_blank">www.musictheory.net</a></li><li><b>Online courses</b><br><a href="https://www.berkleeshares.com/" target="_blank">www.berkleeshares.com</a></li><li><b>Advanced music education</b><br><a href="https://en.wikiversity.org/wiki/Portal:Music" target="_blank">Wikipedia</a><br><a href="https://method-behind-the-music.com/theory/notation" target="_blank">method-behind-the-music.com</a></li></ul>',
      'id': 'project4'
    },
	]
  });
};
