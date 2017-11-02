function contactInfo() {
  $(document).ready(function() {
    
    var restURL = 'https://www.latah.id.us/api/getcontact?dept=';
    var dept = encodeURIComponent($("#deptHeader").text());

    $.getJSON(restURL + dept, function(data){
      var result = data[0];
      $('#contactDept').append(result.Department);
      $('#contactPhone').append(result.Phone);
      $('#contactFax').append(result.Fax);
      $('#contactAddress').append(result.AddressLn1 + '<br />');
      $('#contactAddress').append(result.AddressLn2 + '<br />');
      $('#contactAddress').append(result.AddressCSZ);
      $('#contactRoom').append(result.AddressRoom);
      $("#contactHours").append(result.DeptHours);
      
      // Append ID to  email button href
      $("#emailButton").attr('href', '/contact/#' + result.Id );

      //console.log(result); // Uncomment for debug
    });
  });
}

function deptList() {
  $(document).ready(function() {
    var restURL = 'https://www.latah.id.us/api/getcontact';
    var queryString = window.location.href.slice(window.location.href.indexOf("#"));
    // console.log('QS: ' + queryString); // Uncomment to debug queryString results

    $.getJSON(restURL, function(data) {
      $('#department').html('<option id="0" disabled selected>Select Department</option>');
      $.each(data, function(index, result) {
        var dept = result.Department;
        var id = '#' + result.Id;
        //console.log(id + ': ' + dept); // Uncomment to debug
        
        if (id == queryString) {
          $("#department").append('<option id="' + id + '" value="' + dept + '" selected>' + dept + '</option>');
        } else {
          $("#department").append('<option id="' + id + '" value="' + dept + '">' + dept + '</option>');
        }
      });
    });

  });
}
