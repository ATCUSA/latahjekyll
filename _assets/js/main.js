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


$(function () {
  //this code hides an empty news or notice panel and allows the 
  //adjacent panel to take all of the remaining space
  var n1 = $('#news .list-group').children().children().length;  
  var n2 = $('#notices .list-group').children().children().length;
    
  if(n2 == 0) {
      $('#notices').toggle();      
      $('#news').removeClass().addClass('container col-md-12');      
  }
  if(n1 == 0){
    $('#news').toggle();
    $('#notices').removeClass().addClass('container col-md-12');
  }

  // Makes the panels the same height
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

})

// Changes panel heading from default to darker color
$(
  $('.panel').removeClass('panel-default').css('border', '#000000'),
  $('.panel-heading').css({
    'background-color': '#222222',
    'color': '#FFFFFF'
  })
);