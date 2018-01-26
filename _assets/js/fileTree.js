var globalpath = null;
function downloadfile(p){
		if(p != null){
				var url = 'https://www.latah.id.us/api/DownloadFile?filename=' + p;
				window.open(url);
			}
}

function deptTree(id, dept) {
  $(document).ready(function(){
    $.ajax({
      url: "https://www.latah.id.us/api/getdirectorystructure?dept=" + dept,
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
