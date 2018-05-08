function calendarList(calName, calDaysBefore, calDaysAfter) {
	$(document).ready(function() {
		$('#calendar').fullCalendar({
			defaultView: 'listYear',
			themeSystem: 'bootstrap3',
			eventClick: function(event) {
				// alert(event.title + " - " + event.body);
				if (event.title != null) {
					$('#calModal').modal();
					$('#calModal .modal-title').html(event.title);
					$('#calModal .modal-body').html(event.body);
				};
				return false;
			},
			events: 'https://api.latah.id.us/web/GetCalendarEvents?calendarName=' + calName + '&daysBefore=' + calDaysBefore + '&daysAfter=' + calDaysAfter,
			events: 'https://api.latah.id.us/web/GetCalendarEvents?calendarName=' + calName + '&daysBefore=' + calDaysBefore + '&daysAfter=' + calDaysAfter,
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

function calendarMonth(calName, calDaysBefore, calDaysAfter) {
	$(document).ready(function() {
		$('#calendarMonth').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,listMonth'
			},
			defaultView: "month",
			themeSystem: 'bootstrap3',
			eventOrder:'title,start,end',
			eventClick: function(event) {
				if (event.title != null) {
					$('#calModal').modal();
					$('#calModal .modal-title').html(event.title);
					$('#calModal .modal-body').html(event.body);
				};
				return false;
			},
			events: 'https://api.latah.id.us/web/GetCalendarEvents?calendarName=' + calName + '&daysBefore=' + calDaysBefore + '&daysAfter=' + calDaysAfter,
			events: 'https://api.latah.id.us/web/GetCalendarEvents?calendarName=' + calName + '&daysBefore=' + calDaysBefore + '&daysAfter=' + calDaysAfter,
			loading: function(bool) {
				$('#loading').toggle(bool);
			},
			eventRender: function(event, element) {
				element.find('.fc-list-item-title').append(" - " + event.information);
			},
		});
	});
}

function upComing() {
	$(document).ready(function () {
		$("#upcoming").fullCalendar({
			header: {
				left: "false",
				center: "false",
				right: "false"
			},
			defaultView: "list",
			visibleRange: function (currentDate) {
				return {
					start: currentDate.clone().subtract(1, "days"),
					end: currentDate.clone().add(1, "months")
				}
			},
			height: 150,
			eventClick: function (event) {
				window.open(event.url, "gcalevent", "width=700,height=600");
				return false
			},
			googleCalendarApiKey: "AIzaSyDyMoDpMndtgfhh62g_B9Gr5YrXhSBMhmI",
			googleCalendarApiKey: "AIzaSyDyMoDpMndtgfhh62g_B9Gr5YrXhSBMhmI",
			eventSources: [{
				googleCalendarId: "pkr1feh376liutlgs84gd0bjmo@group.calendar.google.com",
				color: "#737373",
				textColor: "#FFFFFF"
			}, {
				googleCalendarId: "la31li46n7q6j2ajoi6ki2p8d0@group.calendar.google.com",
				color: "#3a87ad",
				textColor: "#FFFFFF"
			}, {
				googleCalendarId: "ffn71ed4611udadmfc6bngrdao@group.calendar.google.com",
				color: "#000000",
				textColor: "#FFDF00"
			}, {
				googleCalendarId: "gkrjmuv8ik6dif1p9ct0efpbo0@group.calendar.google.com",
				color: "#f4a742",
				textColor: "#000000"
			}],
			loading: function (bool) {
				$("#loading").toggle(bool);
				$(".fc-toolbar").remove()
			}
		})
	})
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
	      events: 'https://api.latah.id.us/web/GetCalendarEvents?calendarName=ElectionsDemo&days=30',
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
