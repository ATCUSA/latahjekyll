/* Set Dept Window to Scroll for Small Windows */
// Set Scroll Based on Window Size
function setScroll(wh){
  var dh = $("#deptNav").height();
  var h = $(window).innerHeight() - $('#navFooter').height();
  if (dh >  h) {
    $("#deptNav").addClass('pre-scrollable');
  } else {
    $("#deptNav").removeClass('pre-scrollable');
  }
}
// Check Window Size on Page Load
setScroll($(window).innerHeight());
// Dynamically Update Window Size
$(window).resize(function() {
  setScroll($(window).innerHeight());
});

/* Keep Footer Year Current */
// instantiate a moment object
var NowMoment = moment().format("YYYY");
// display value of moment object in #displayMoment div
var eDisplayMoment = document.getElementById('currentYear');
eDisplayMoment.innerHTML = NowMoment;
