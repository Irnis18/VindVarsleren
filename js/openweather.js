function weatherAsk(event){
  var apiUrl = "http://api.openweathermap.org/data/2.5/forecast/daily";
  var apiKey="569cb5c54488af8f488e82b8dd9ca105";
  var units= "metric";
  var cnt = 7;
  event.preventDefault();

  parameters = {
    q: $("#city").val(),
    APPID: apiKey,
    units: units,
    cnt: 7
  };

  $.getJSON(apiUrl, parameters, function(data){

    owmTodayDataWeatherIcon = $("#owm-today-weather > .weather-icon-data").attr("src", 'http://openweathermap.org/img/w/' + data.list[0].weather[0].icon + ".png");

    owmTomorrowDataWeatherIcon = $("#owm-tomorrow-weather > .weather-icon-data").attr("src", 'http://openweathermap.org/img/w/' + data.list[1].weather[0].icon + ".png");

    owmInSevenDaysDataWeatherIcon = $("#owm-seven-days-weather > .weather-icon-data").attr("src", 'http://openweathermap.org/img/w/' + data.list[6].weather[0].icon + ".png");


    todayWeatherString = "The weather is " + data.list[0].weather[0].main + "<br/>" +"Average temperature is: " + data.list[0].temp.day + "°C" + "<br/>" + "Pressure: " + data.list[0].pressure + " hpa"  + "<br/>" + "Cloudiness: " + data.list[0].weather[0].description;

    tomorrowWeatherString = "The weather is " + data.list[1].weather[0].main + "<br/>" + "Average temperature is: " + data.list[1].temp.day + "°C" + "<br/>" + "Pressure: " + data.list[1].pressure + " hpa" +  "<br/>" + "Cloudiness: " + data.list[1].weather[0].description;

    inSevenDaysWeather = "The weather is " + data.list[6].weather[0].main + "<br/>" + "Average temperature is: " + data.list[6].temp.day + "°C" + "<br/>" + "Pressure: " + data.list[6].pressure + " hpa" + "<br/>" +"Cloudiness: " + data.list[6].weather[0].description;

    $("#owm-today-weather > .text").html(todayWeatherString);
    $("#owm-tomorrow-weather > .text").html(tomorrowWeatherString);
    $("#owm-seven-days-weather > .text").html(inSevenDaysWeather);
  });
}



$(document).ready(function(){
  $(".typahead").submit(weatherAsk);
});



//
// $('owmTodayWeather').first().html(weather.main.temp);
// $(".typahead").submit(weatherAsk);
// });
