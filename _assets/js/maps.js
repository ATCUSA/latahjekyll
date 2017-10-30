function address2Maps() {
  $(document).ready(function(){
    $("address").each(function(){
      var embed ="<iframe width='100%' height='400' frameborder='0' scrolling='no'  marginheight='0' marginwidth='0' src='https://maps.google.com/maps?&amp;q="+ encodeURIComponent( $(this).text() ) +"&amp;output=embed'></iframe>";
      var address =$(this).text();
      $("#maps").append(
        '<p><h4>' + address + '</h4>' + embed + '</p>'
      );
    });
  });
}
