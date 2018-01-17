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
// 
// $("#deptDropDown").click(function(){
//     //console.log('nav on click event fired');
//     setScroll($(window).innerHeight());
// });

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

// Makes the panels the same height
$(function () {
  if ($('#newsNotices').length == 0) {
    $('.panel').matchHeight(
      {
        property: 'min-height'
      }
    );
  } else if ($('#newsNotices').length != 0) {
    $('#newsNotices .panel').matchHeight(
      {
        property: 'min-height'
      }
    );
  }
});

// Changes panel heading from default to darker color
$(
  $('.panel').removeClass('panel-default').css('border', '#000000'),
  $('.panel-heading').css({
    'background-color': '#222222',
    'color': '#FFFFFF'
  })
);
