// Populates department contact info box on deptartment pages
function contactInfo() {
  $(document).ready(function() {
    
    var restURL = 'https://gis.latah.id.us/api/getcontact?dept=';
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

    });
  });
}

// Populates department list
function deptList() {
  $(document).ready(function() {
    var restURL = 'https://gis.latah.id.us/api/getcontact';
    var queryString = window.location.href.slice(window.location.href.indexOf("#")+1);

    $.getJSON(restURL, function(data) {
      $('#department').html('<option id="0" disabled selected>Select Department</option>');
      $.each(data, function(i, r) {
        var id = r.Id;
        var dept = r.Department;

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

// Department Info Box on /contact page.
function deptBox() {
  $(document).ready(function () {
    var restURL = 'https://gis.latah.id.us/api/getcontact';
    var queryString = window.location.href.slice(window.location.href.indexOf("#") + 1);

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
        info += '<li class="list-group-item"><strong>Phone:</strong> ' + phone + '</li>';
        info += '<li class="list-group-item"><strong>Fax:</strong> ' + fax + '</li>';
        info += '<li class="list-group-item"><strong>Address:</strong><br /> ' + address + '</li>';
        info += '<li class="list-group-item"><strong>Room:</strong><br />' + room + '</li>';
        info += '<li class="list-group-item"><strong>Hours:</strong><br />' + hours + '</li>';
        
        // Set Contact Info Box
        if (id == queryString) {
          $("#deptName").html(dept);
          $('#currentDept').html(info);
        };
        
        // Set dept info to dept selected
        $('#department').change(function() {
          const selID = $('#department option:selected').val();
          if (id == selID) {
            $("#deptName").html(dept);
            $('#currentDept').html(info);
          };
        });

      });
    });
  });
}

function deptMap() {
  $(document).ready(function () {
    var restURL = 'https://gis.latah.id.us/api/getcontact';
    var queryString = window.location.href.slice(window.location.href.indexOf("#") + 1);

    $.getJSON(restURL, function (data) {
      $.each(data, function (i, r) {
        var id = r.Id;
        const fullAddress = r.AddressLn1 + ' ' + r.AddressLn2 + ' ' + r.AddressCSZ;
        const address = encodeURIComponent(fullAddress);

        let map = '<iframe width="550" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=' + address + '&key=AIzaSyAkJO7M6I1XZdLAAcCbrGUHXYke4Bu_bd8" allowfullscreen></iframe>';

        // Set Map to dept selected by url
        if (id == queryString) {
          $('#deptMap').html(map);
        };
        
        // Set Map to dept selected
        $('#department').change(function() {
          const selID = $('#department option:selected').val();
          if (id == selID) {
            $('#deptMap').html(map);
          };
        });

      });
    });
  });
}