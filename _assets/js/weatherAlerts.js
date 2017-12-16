function weatherBoxAlerts() {
  $(document).ready(function () {
    var baseUrl = 'https://api.weather.gov/alerts?';
    var params = 'active=1&';
    var zone = 'zone=IDZ003';

    $.getJSON(baseUrl + params + zone, function (data) {
      for (var i in data.features) {
        var r = data.features[i].properties;
        var eventID = r.id;
        var event = r.event;
        var area = r.areaDesc;
        var desc = r.description;
        var start = moment(r.effective).format('MM/DD/YY HH:mm');
        var stop = moment(r.expires).format('MM/DD/YY HH:mm');
        var n = '<strong>' + event + "</strong><br />";
        var nArea = '<p>' + area + "</p>";
        // var nDesc = '<p>' + desc + "</p>";
        var nTime = '<p>' + start + ' - ' + stop + "</p>";
        // $('#weatherBoxAlert').append(n + nArea + nTime).removeClass('hidden');
        //  console.log(r);
        
        var alertTitle = "";
        alertTitle += '<h4>' + event + '</h4>';
        
        var weatherAlert = ''
        weatherAlert += '<div class=" alert alert-danger"><h4 class="panel-title text-center">' + event + '</h4>';
        weatherAlert += '<div class=""><p><strong>Affected Area:</strong><br />' + area + '</p>';
        weatherAlert += '<p><strong>In Affect:</strong><br />' + start + ' - ' + stop + '</p>';
        weatherAlert += '<p id="' + eventID +'-Desc" class="hidden">' + desc + '</p>';
        weatherAlert += '<button class="btn btn-default center-block" id="' + eventID + '">Show More</button>';
        weatherAlert += '</div>';
        weatherAlert += '</div>';

        $('#weatherAlert').append(weatherAlert);
      }

      $("#"+eventID).click(function(){
        $('#'+eventID+'-Desc').toggleClass('hidden');
        $("#" + eventID).text(function(i,text){
          return text === "Show Less" ? "Show More" : "Show Less";
        });
      });

      $('#weatherAlertBox').append('<p class="text-center">For more information click <a href="https://alerts-v2.weather.gov/products/active?zone=IDZ003" target="_blank" rel="noopener">Here</a></p>');


    });
  });
}