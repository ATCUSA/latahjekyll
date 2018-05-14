/* Set Dept Window to Scroll for Small Windows */
// Set Scroll Based on Window Size
function setScroll(){
  var dh = $("#deptNav").height();
  var h = $(window).innerHeight() - $('#navFooter').height();  
  if (dh >  h) {
    $("#deptNav").addClass('pre-scrollable');    
  } else {
    $("#deptNav").removeClass('pre-scrollable');
  }
}
//you have to call setScroll for each up/down event, 
//otherwise it remembers the previous size on close and will just altername
$('#dropDown').on('show.bs.dropdown', function() {  
  setScroll();
});

$('#dropDown').on('hide.bs.dropdown', function() {  
  setScroll();
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

function browserCheck() {
  var ua = navigator.userAgent;

  if (ua.indexOf(.NET) > 0 ) {
    alert("This browser is not supported. \n Please use Chrome or Firefox for a better user experience.")
  } else if (ua.indexOf('Edge') > 0) {
    alert("This browser does not fully support all of the features of this site. \n Please use Chrome or Firefox for a better user experience.")
  }
}