$(document).ready(function() {
	initializePage();
})

function initializePage() {
	$('#Logout').bind('click', gobackLogin);
}

function gobackLogin(e) {
  $(this).closest('body').fadeOut(200);
  setTimeout(function(){
    window.location = '/auth';
  }, 400);
}
