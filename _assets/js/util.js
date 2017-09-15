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

// Commissioners
	$('#agendasCtrl').on('click', function() {
		control = '#agendas';
		path = 'Departments\\Commissioners\\Agendas\\2017';
		getJsonResult(path, control);
	});

	$('#proceedingsCtrl').on('click', function() {
		control = '#proceedings';
		path = 'Departments\\Commissioners\\Proceedings\\2017';
		getJsonResult(path, control);
	});
	$('#proclamationsCtrl').on('click', function() {
		control = '#proclamations';
		path = 'Departments\\Commissioners\\Proclamations';
		getJsonResult(path, control);
	});
// End Commissioners

// Function to call the REST Service
	function getJsonResult(path, control){
		$.getJSON("https://latah.id.us/api/GetFilesInDirectory?path=\\\\hvh01-store\\Common\\ITS\\WebContent\\" + path, null, function (jsonResult) {

			$(control).attr('enabled', 'true');

		  $.each(jsonResult, function() {
				$(control).append(
				  $("<a href='https://latah.id.us" + path + "/" + this.filename + this.ext + "' target='_blank' class='list-group-item'></a>").text(this.filename).val(this.path)
				);
		  });
		  $(control).change(function() {
				alert($(this).val());
		  });
		});
	};
});
// Full Endpoint
// https://www.latah.id.us/api/GetFilesInDirectory?path=\\hvh01-store\Common\ITS\WebContent\Departments\Commissioners\Agendas\2017
