var globalpath = null;
function downloadfile(p){
		if(p != null){
					window.location.href = 'http://pinky/utilrestsvc/UtilSvc.svc/DownloadFile?filename=' + p;	
				}
}

function deptTree(id, dept) {
  $(document).ready(function(){
    $.ajax({
      url: "http://pinky/utilrestsvc/UtilSvc.svc/getdirectorystructure?path=\\\\hvh01-store\\common\\ITS\\WebContent\\Departments\\" + dept + "\\",
      type: "GET",
      async: false, // set to false so order of operations is correct
      success: function(treedata){
		    $('#' + id).treeview( {data: treedata });
		    $('#' + id).on('nodeSelected', function(event, data) {
			    downloadfile(data.tags);
		    });
      }
    });
  });
}
