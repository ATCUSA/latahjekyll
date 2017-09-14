var globalpath = null;
function downloadfile(p){
		if(p != null){
					window.location.href = 'https://www.latah.id.us/api/DownloadFile?filename=' + p;	
				}
}

function deptTree(id, dept) {
  $(document).ready(function(){
    $.ajax({
      url: "https://www.latah.id.us/api/getdirectorystructure?path=\\\\hvh01-store\\common\\ITS\\WebContent\\Departments\\" + dept + "\\",
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
