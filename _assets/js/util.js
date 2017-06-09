$(document).ready(function(){

	var control;
	var path;

// Planning and Building Docs
	$('#buildingHandoutsCtrl').on('click', function() {
		control = '#buildingHandouts';
		path = '/pzc/Building_Handouts';
		getJsonResult(path, control);
	});

	$('#buildingApplicationsCtrl').on('click', function() {
		control = '#buildingApplications';
		path = '/pzc/building_application';
		getJsonResult(path, control);
	});

	$('#planningApplicationsCtrl').on('click', function() {
		control = '#planningApplications';
		path = '/pzc/planning_application';
		getJsonResult(path, control);
	});

	$('#ordinancesCtrl').on('click', function() {
		control = '#ordinances';
		path = '/pzc/Ordinances';
		getJsonResult(path, control);
	});
// End Planning and Building Docs

// Function to call the REST Service
	function getJsonResult(path, control){
		$.getJSON("http://pinky/utilrestsvc/utilsvc.svc/getfiles?path=" + path, null, function (jsonResult) {

			$(control).attr('enabled', 'true');

		  $.each(jsonResult, function() {
				$(control).append(
				  $("<a href='https://www.latah.id.us" + path + "/" + this.fileWithExt + "' target='_blank' class='list-group-item'></a>").text(this.filename).val(this.path)
				);
		  });
		  $(control).change(function() {
				alert($(this).val());
		  });
		});
	};
});
