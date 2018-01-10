function weatherBoxAlerts() {
  $(document).ready(function () {
    var baseUrl = 'https://api.weather.gov/alerts?';
    var params = 'active=1&';
    // var zone = 'zone=IDZ003';
    var zone = 'zone=MTZ003'; // Use to test active alerts.

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
        var nTime = '<p>' + start + ' - ' + stop + "</p>";
        // var nDesc = '<p>' + desc + "</p>";
        //  console.log(r);
        
        // $('#weatherBoxAlert').append(n + nArea + nTime).removeClass('hidden');
        
        var weatherAlert = ''
        weatherAlert += '<div class="panel"><br />'
        weatherAlert += '<h4 class="panel-title text-center">' + event + '</h4><br />';
        weatherAlert += '<div class=""><p><strong>Affected Area:</strong><br />' + area + '</p>';
        weatherAlert += '<p><strong>In Affect:</strong><br />' + start + ' - ' + stop + '</p>';
        weatherAlert += '<p id="' + eventID +'-Desc" class="hidden">' + desc + '</p>';
        weatherAlert += '<button class="btn btn-default center-block" id="' + eventID + '">Show More</button><br />';
        weatherAlert += '</div>';
        weatherAlert += '</div>';

        $('#weatherAlert').append(weatherAlert);
      }

      if (event != null) {
        $('#weatherAlertBox').removeClass('hidden');
      };

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

function dsWeatherBox() {
  $(document).ready(function () {
    var baseUrl = "https://api.weather.gov/stations/";
    var station = "FTHID";
    var forcastType = "/observations/current";

    $.getJSON(baseUrl + station + forcastType, function (data) {
      var r = data.properties;
      var degC = r.temperature.value;
      var degCInt = Math.round(degC);
      var degF = degC * 9 / 5 + 32;
      var degFInt = Math.round(degF);
      var windSpeed = r.windSpeed.value / 0.44704;
      var windSpeedInt = Math.round(windSpeed);
      var icon = r.icon;
      var lastUpdated = r.timestamp;
      var lastUpdatedTime = moment(lastUpdated, "YYYY-MM-DDTHH:mm:ssZ").format("h:mm A");
      $('#dsWeatherBox').append('<div class="col-md-4"><img src="' + icon + '" class="img img-responsive"></div>');
      $('#dsWeatherBox').append('<div class="col-md-8">' + degFInt + '&#176; F / ' + degCInt + '&#176; C <br />' + windSpeedInt + ' MPH <br /><small>As of ' + lastUpdatedTime + '</small></div>');

      console.log("Weather provided by NOAA from https://www.weather.gov.");
      // console.log(r);
      // $('#weatherBoxAlert').append(n + nArea + nTime).removeClass('hidden');
        
    });
  });
}