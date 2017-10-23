"use strict";

// jQuery request
(function() {
	var url = "https://api.openweathermap.org/data/2.5/weather?q=Moscow,ID";
	var apiKey = "cc4e7370ecf22d9912261553507519a5"; // Replace "APIKEY" with your own API key; otherwise, your HTTP request will not work

	$.get(url + '&appid=' + apiKey).done(function(response) {
//		console.log(response);
		updateUISuccess(response);
	}).fail(function(error) {
		console.log(error);
		updateUIError();
	});

	// handle XHR success
	function updateUISuccess(response) {
		var condition = response.weather[0].main;
		var degC = response.main.temp - 273.15;
		var degCInt = Math.floor(degC);
		var degF = degC * 1.8 + 32;
		var degFInt = Math.floor(degF);
//		var weatherBox = document.getElementById("weather");
//		weatherBox.innerHTML = "<p>" + degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>";
		var $weatherBox = $('#weather');
		$weatherBox.append("<p>" + degFInt + "&#176; F / " + degCInt + "&#176; C </p><p>" + condition + "</p>");
	}

	// handle XHR error
	function updateUIError() {
//		var weatherBox = document.getElementById("weather");
//		weatherBox.className = "hidden";
		var $weatherBox = $('#weather');
		$weatherBox.addClass('hidden');
	}
})();
