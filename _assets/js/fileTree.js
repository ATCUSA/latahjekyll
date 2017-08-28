var globalpath = null;
function setpath(p){
	globalpath = p;
	console.log(globalpath);
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
			    setpath(data.tags);
		    });
      }
    });
  });
}
