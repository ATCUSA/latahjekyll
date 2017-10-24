"use strict";

// jQuery request
(function() {
	var url = "https://api.weather.gov/stations/KPUW/observations/current";

	$.get(url).done(function(response) {
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
		var $weatherBox = $('#weather');
		$weatherBox.append("<p>" + degFInt + "&#176; F / " + degCInt + "&#176; C </p><p>" + windSpeedInt + " MPH</p>");
		console.log(degCInt);
	}

	// handle XHR error
	function updateUIError() {
		var $weatherBox = $('#weather');
		$weatherBox.addClass('hidden');
	}
})();
