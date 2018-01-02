/* Set Dept Window to Scroll for Small Windows */
// Set Scroll Based on Window Size
$(window).on
function setScroll(){
  var dh = $("#deptNav").height();
  var h = $(window).innerHeight() - $('#navFooter').height();
  if (dh >  (h - 75)) {
    $("#deptNav").addClass('pre-scrollable');
  }
}
// Check Window Size on Page Load
setScroll();
// Dynamically Update Window Size
$(window).resize(function() {
  setScroll();
});

/* Keep Footer Year Current */
// instantiate a moment object
var NowMoment = moment().format("YYYY");
// display value of moment object in #displayMoment div
var eDisplayMoment = document.getElementById('currentYear');
eDisplayMoment.innerHTML = NowMoment;
