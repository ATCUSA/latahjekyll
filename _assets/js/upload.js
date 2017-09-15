// Dept List - Populates Dropdown with Current Directory Structure.
function deptList(dirSub) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if(xhr.status === 200) {
      responseObject = JSON.parse(xhr.responseText);

      var newContent = '';
      newContent += '<option selected disabled>Select a Department</option>';
      for (var i = 0; i <  responseObject.length; i++) {
        var dept = responseObject[i];
        var deptStrip = dept.replace("\\\\hvh01-store\\common\\ITS\\WebContent\\Departments\\", '');
        newContent += '<option value="' + deptStrip + '">' + deptStrip + '</option>';
      }
      document.getElementById('department').innerHTML = newContent;
    }
  };
  var url = 'https://www.latah.id.us/api/getdirectorystructure?path=';
  var path = '\\\\hvh01-store\\common\\ITS\\WebContent\\Departments';
  var dirSub = '\\';
  var deptPath = url + path + dirSub;
  xhr.open('GET', deptPath, true);
  xhr.send('null');
}

// setDestPath - Sets the path to upload to based on the chosen department.
function setDestPath(){
  document.getElementById('department').onchange = function(){
    // document.querySelector("#upload").setAttribute("onclick", 'UploadFile(' + this.value + ')');
    document.getElementById('upload').setAttribute("onclick", "uploadFile('" + this.value + "')");
  };
}

// Upload File - Uploads the file to the directory chosen above.
function uploadFile(dept) {
  // replace this form element with a variable that is passed in which contains the filename,
  //also for any variable that is used below...
  fileData = document.getElementById("fileUpload").files[0];
  console.log(fileData);
  var data = new FormData();
  //change this variable based on the context or control
  var destPath = '\\\\hvh01-store\\common\\ITS\\WebContent\\Departments\\' + dept + '\\';

  $.ajax({
    url: 'https://www.latah.id.us/api/UploadFile?fileName=' + fileData.name + '&destinationPath=' + destPath,
    type: 'POST',
    data: fileData,
    cache: false,
    dataType: 'json',
    processData: false, // Don't process the files
    contentType: "application/octet-stream", // Set content type to false as jQuery will tell the server its a query string request
    success: function (data) {
      alert(data);
    },
    error: function (data) {
      alert(data);
    }
  });
}


// if value for select is not null
// then read the value append it to the path and change dropdown

function DownloadFile() {
  window.location.href =
  'https://www.latah.id.us/api/DownloadFile?fileName=\\\\hvh01-store\\Common\\ITS\\WebContent\\Departments\\Commissioners\\Agendas\\2017\\01-02-17 Agenda.pdf';
}
