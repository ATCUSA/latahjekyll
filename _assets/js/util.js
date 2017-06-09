$(document).ready(function(){
	$.getJSON("http://pinky/utilrestsvc/utilsvc.svc/getfiles?path=/pzc/planning_application", null, function (jsonResult) {
		$('#myselect').attr('enabled', 'true');
	
	  $.each(jsonResult, function() {
			$('#myselect').append(
			  $("<option></option>").text(this.filename).val(this.path)
			);
	  });
	  $("#myselect").change(function() {
			alert($(this).val());
	  });
	});
});
