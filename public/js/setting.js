$(document).ready(function() {
  // $("body").fadeOut(300);
  // $("body").delay(200).fadeIn(200);
	initializePage();
  // tutorial();
})

function initializePage() {
  if (/Mobi/.test(navigator.userAgent)) {
    // if mobile device, use native pickers

    $("#timepicker input").attr("type", "time");
  } else {
    // if desktop device, use DateTimePicker
    $("#timepicker").datetimepicker({
      format: "LT",
      icons: {
        up: "fa fa-chevron-up",
        down: "fa fa-chevron-down"
      }
    });
  }
 var button = $("#reminder label input");
 button.click(function() {
   if ($(this).is(':checked')) {
     $(".item.item-1").removeClass("button-disabled");
   } else {
     $(".item.item-1").addClass("button-disabled");
   }
   // console.log($(this).is(':checked'));
 });
}
