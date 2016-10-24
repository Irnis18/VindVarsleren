/*********************************************************************************
Api-Openweather - This is the function for the openweathermap api. using JSON
**********************************************************************************/

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

//The icon for Todays weather, Tomorrows weather, and the weahter in seven days
    owmTodayDataWeatherIcon = $("#owm-today-weather > .weather-icon-data").attr("src", 'http://openweathermap.org/img/w/' + data.list[0].weather[0].icon + ".png");
    owmTomorrowDataWeatherIcon = $("#owm-tomorrow-weather > .weather-icon-data").attr("src", 'http://openweathermap.org/img/w/' + data.list[1].weather[0].icon + ".png");
    owmInSevenDaysDataWeatherIcon = $("#owm-seven-days-weather > .weather-icon-data").attr("src", 'http://openweathermap.org/img/w/' + data.list[6].weather[0].icon + ".png");

//Div for the weather today - Openweathermap

    todayWeatherString = "The weather is " ;
    todayWeatherString += data.list[0].weather[0].main;
    todayWeatherString += "<br/>";
    todayWeatherString += "Average temperature is: ";
    todayWeatherString += data.list[0].temp.day;
    todayWeatherString += "°C";
    todayWeatherString += "<br/>" ;
    todayWeatherString += "Pressure: ";
    todayWeatherString += data.list[0].pressure;
    todayWeatherString += " hpa";
    todayWeatherString += "<br/>";
    todayWeatherString += "Cloudiness: ";
    todayWeatherString += data.list[0].weather[0].description;

    // Div for the weather tomorrow  - Openweathermap


    tomorrowWeatherString = "The weather is ";
    tomorrowWeatherString += data.list[1].weather[0].main;
    tomorrowWeatherString += "<br/>" ;
    tomorrowWeatherString += "Average temperature is: ";
    tomorrowWeatherString += data.list[1].temp.day;
    tomorrowWeatherString += "°C" ;
    tomorrowWeatherString += "<br/>" ;
    tomorrowWeatherString += "Pressure: " ;
    tomorrowWeatherString += data.list[1].pressure;
    tomorrowWeatherString += " hpa" ;
    tomorrowWeatherString +=  "<br/>";
    tomorrowWeatherString += "Cloudiness: ";
    tomorrowWeatherString += data.list[1].weather[0].description;

// Div for the weather in 7 days - Openweathermap

    inSevenDaysWeather = "The weather is ";
    inSevenDaysWeather += data.list[6].weather[0].main;
    inSevenDaysWeather += "<br/>";
    inSevenDaysWeather += "Average temperature is: ";
    inSevenDaysWeather += data.list[6].temp.day;
    inSevenDaysWeather += "°C";
    inSevenDaysWeather += "<br/>";
    inSevenDaysWeather += "Pressure: " ;
    inSevenDaysWeather += data.list[6].pressure;
    inSevenDaysWeather += " hpa" ;
    inSevenDaysWeather += "<br/>" ;
    inSevenDaysWeather += "Cloudiness: ";
    inSevenDaysWeather += data.list[6].weather[0].description;


//Displaying the icon and the text using jquerry
    $("#owm-today-weather > .text").html(todayWeatherString);
    $("#owm-tomorrow-weather > .text").html(tomorrowWeatherString);
    $("#owm-seven-days-weather > .text").html(inSevenDaysWeather);


  });
}
// Running the function that we made when the document is fully lodaded.
$(document).ready(function(){
  $(".typahead").submit(weatherAsk);

});



/*********************************************************************************
This is the function for the autocomplete typahead.
**********************************************************************************/

//making a fucntion for the typahead, autocomplete.
$(function ()
 {
     $("#city").autocomplete({
        source: function (request, response) {
         $.getJSON(
            "http://gd.geobytes.com/AutoCompleteCity?callback=?&q="+request.term,
            function (data) {
              small_data = data.slice(0, 3);
             response(small_data);
            }
         );
        },
        minLength: 3,
        select: function (event, ui) {
         var selectedObj = ui.item;
         $("#city").val(selectedObj.value);
         return false;
        }
     });
     $("#city").autocomplete("option", "delay", 100);
    });
    // xhr.open("GET", "index.html");
    // xhr.send();
