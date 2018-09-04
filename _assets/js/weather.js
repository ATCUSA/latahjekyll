"use strict";

// jQuery request
(function() {
	var baseUrl = "https://api.weather.gov/stations/";
	var station = "KPUW";
	var forcastType = "/observations/current";

	$.get(baseUrl + station + forcastType).done(function(response) {
	// $.get(url + '&appid=' + apiKey).done(function(response) {
  // console.log(response);
		updateUISuccess(response);
	}).fail(function(error) {
		console.log(error);
		updateUIError();
	});

	// handle XHR success
	function updateUISuccess(response) {
		// var condition = response.properties.temperature.value;
		var degC = response.properties.temperature.value;
		var degCInt = Math.round(degC);
		var degF = degC * 9 / 5 + 32;
		var degFInt = Math.round(degF);
		var windSpeed = response.properties.windSpeed.value / 0.44704;
		var windSpeedInt = Math.round(windSpeed);
		var lastUpdated = response.properties.timestamp;
		var lastUpdatedTime = moment(lastUpdated, "YYYY-MM-DDTHH:mm:ssZ").format("h:mm A");
		var $weatherBox = $('#weather');
		$weatherBox.append("<p>" + degFInt + "&#176; F / " + degCInt + "&#176; C <br />" + windSpeedInt + " MPH <br /><small>As of " + lastUpdatedTime + "</small></p>");
		console.log("Weather provided by NOAA from https://www.weather.gov.");
	}

	// handle XHR error
	function updateUIError() {
		var $weatherBox = $('#weather');
		$weatherBox.addClass('hidden');
	}
})();
