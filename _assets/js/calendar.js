function calendarList(calName, calDays) {
	$(document).ready(function() {
		$('#calendar').fullCalendar({
			header: {
				left: 'false',
				center: 'false',
				right: 'false'
			},
			defaultView: 'listYear',
			themeSystem: 'bootstrap3',
			eventClick: function(event) {
				// alert(event.title + " - " + event.body);
				if (event.title != null) {
					$('#myModal').modal();
					$('.modal-title').html(event.title);
					$('.modal-body').html(event.body);
				};
				return false;
			},
			events: 'https://www.latah.id.us/api/GetCalendarEvents?calendarName=' + calName + '&days=' + calDays,
			loading: function(bool) {
				$('#loading').toggle(bool);
				$('.fc-toolbar').remove();
			},
			eventRender: function(event, element) {
				const title = element.find('.fc-list-item-title')
				
			},
		});
	});
}

function calendarMonth(calName,calDays) {
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
      events: 'https://www.latah.id.us/api/GetCalendarEvents?calendarName=' + calName + '&days=' + calDays,
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
					alert(event.title + " - " + event.body)
	        // window.open(event.url);
	        return false;
	  		// 	// opens events in a popup window
	  		// 	window.open(event.url, 'gcalevent', 'width=700,height=600');
	  		// 	return false;
	  		},
	      events: 'https://www.latah.id.us/api/GetCalendarEvents?calendarName=ElectionsDemo&days=30',
	      loading: function(bool) {
	  			$('#loading').toggle(bool);
					$('.fc-toolbar').remove();
	  		},
				eventRender: function(event, element) {
					element.find('.fc-list-item-title').append(" - " + event.body);
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
