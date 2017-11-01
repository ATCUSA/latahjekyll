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

      console.log(result);
    });
  });
}
