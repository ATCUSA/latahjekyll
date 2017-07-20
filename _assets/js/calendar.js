function calendarList(eventPath, futrAmt, futrIncr) {
	$(document).ready(function() {
		$('#calendar').fullCalendar({
			header: {
				left: 'false',
				center: 'false',
				right: 'false'
			},
			defaultView: 'list',
			visibleRange: function(currentDate) {
				return {
					start: currentDate.clone(),
					end: currentDate.clone().add(futrAmt, futrIncr)
				};
			},
			eventClick: function(event) {
				alert(event.title + " - " + event.information)
				return false;
			},
			events: eventPath,
			loading: function(bool) {
				$('#loading').toggle(bool);
				$('.fc-toolbar').remove();
			},
			eventRender: function(event, element) {
				element.find('.fc-list-item-title').append(" - " + event.information);
			},
		});
	});
}

function calendarMonth(eventPath) {
$(document).ready(function() {
  $('#calendar').fullCalendar({
    header: {
				left: 'prev today next',
				center: 'title',
				right: 'month year listYear'
			},
			eventOrder:'title,start,end',
      eventClick: function(event) {
				alert(event.title + " - " + event.information)
        return false;
  		},
      events: eventPath,
      loading: function(bool) {
  			$('#loading').toggle(bool);
  		},
			eventRender: function(event, element) {
				element.find('.fc-list-item-title').append(" - " + event.information);
			},
  });
});
}

function listThreeMonths() {
	$(document).ready(function() {

	  $('#calendar').fullCalendar({
	    header: {
					left: 'false',
					center: 'false',
					right: 'false'
				},
				defaultView: 'listThreeMonths',
				views: {
					listThreeMonths: {
						type: 'list',
						duration: {
							month: 3
						},
						listDayAltFormat: 'dddd'
					},
					eventOrder: 'title,start,end',
				},
	      eventClick: function(event) {
					alert(event.title + " - " + event.information)
	        // window.open(event.url);
	        return false;
	  		// 	// opens events in a popup window
	  		// 	window.open(event.url, 'gcalevent', 'width=700,height=600');
	  		// 	return false;
	  		},
	      events: '/api/electionCalendar.json',
	      loading: function(bool) {
	  			$('#loading').toggle(bool);
					$('.fc-toolbar').remove();
	  		},
				eventRender: function(event, element) {
					element.find('.fc-list-item-title').append(" - " + event.information);
				},
	  });
	});
}

// Snippets

/*
views: {
	listThreeMonths: {
		type: 'list',
		duration: {
			month: 3
		},
		listDayAltFormat: 'dddd'
	},
	eventOrder: 'title,start,end',
},
*/
