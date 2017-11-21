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
    var queryString = window.location.href.slice(window.location.href.indexOf("#")+1);
    // console.log('QS: ' + queryString); // Uncomment to debug queryString results

    $.getJSON(restURL, function(data) {
      $('#department').html('<option id="0" disabled selected>Select Department</option>');
      $.each(data, function(i, r) {
        var id = r.Id;
        var dept = r.Department;
        let phone = r.Phone;
        let fax = r.Fax;
        let address = r.AddressLn1 + '<br />' + r.AddressLn2 + '<br />' + r.AddressCSZ;
        let room = r.AddressRoom;
        let hours = r.DeptHours;

        let info = '';
        info += '<li class="list-group-item"><strong>Phone:</strong>' + phone + '</li>';
        info += '<li class="list-group-item"><strong>Fax:</strong>' + fax + '</li>';
        info += '<li class="list-group-item"><strong>Address:</strong><br />' + address + '</li>';
        info += '<li class="list-group-item"><strong>Room:</strong>' + room + '</li>';
        info += '<li class="list-group-item"><strong>Hours:</strong>' + hours + '</li>';

        
        if (id == queryString) {
          // Selects dept in dropdown based on URL #
          $("#department").append('<option id="#' + id + '" value="' + id + '" selected>' + dept + '</option>');
          
        } else {
          $("#department").append('<option id="#' + id + '" value="' + id + '">' + dept + '</option>');
        }
      });
    });
  });
}


function deptBox() {
  $(document).ready(function () {
    var restURL = 'https://www.latah.id.us/api/getcontact';
    var queryString = window.location.href.slice(window.location.href.indexOf("#") + 1);
    // console.log('QS: ' + queryString); // Uncomment to debug queryString results

    $.getJSON(restURL, function (data) {
      $.each(data, function (i, r) {
        var id = r.Id;
        var dept = r.Department;
        let phone = r.Phone;
        let fax = r.Fax;
        let address = r.AddressLn1 + '<br />' + r.AddressLn2 + '<br />' + r.AddressCSZ;
        let room = r.AddressRoom;
        let hours = r.DeptHours;

        let info = '';
        info += '<li class="list-group-item"><strong>Phone:</strong>' + phone + '</li>';
        info += '<li class="list-group-item"><strong>Fax:</strong>' + fax + '</li>';
        info += '<li class="list-group-item"><strong>Address:</strong><br />' + address + '</li>';
        info += '<li class="list-group-item"><strong>Room:</strong>' + room + '</li>';
        info += '<li class="list-group-item"><strong>Hours:</strong>' + hours + '</li>';
        
        
        if (id == queryString) {
          // Set Contact Info Box
          $("#deptName").html(dept);
          $('#currentDept').html(info);
        };
        
        $('#department').change(function() {
          const selID = $('#department option:selected').val();
          if (id == selID) {
            $("#deptName").html(dept);
            $('#currentDept').html(info);
          }
          console.log(selID);
        });
        // console.log('Uh Oh! Your ID is: ' + id + ' and your queryString is ' + queryString )
      });
    });
  });
}