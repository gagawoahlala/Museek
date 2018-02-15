// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  // $("body").fadeOut(300);
  $("body").delay(200).fadeIn(200);
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
  $(function() {
      // Since there's no list-group/tab integration in Bootstrap
      $('.list-group-item').on('click',function(e){
       	  var previous = $(this).closest(".list-group").children(".active");
       	  previous.removeClass('active'); // previous list-item
       	  $(e.target).addClass('active'); // activated list-item
     	});
      // $('.panel a').removeClass("collapse");
  });
}
