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


// What is going to be displayed in div, todays weather, tomorrows weather and the weather in seven days.
    todayWeatherString = "The weather is " + data.list[0].weather[0].main + "<br/>" +"Average temperature is: " + data.list[0].temp.day + "°C" + "<br/>" + "Pressure: " + data.list[0].pressure + " hpa"  + "<br/>" + "Cloudiness: " + data.list[0].weather[0].description;
    tomorrowWeatherString = "The weather is " + data.list[1].weather[0].main + "<br/>" + "Average temperature is: " + data.list[1].temp.day + "°C" + "<br/>" + "Pressure: " + data.list[1].pressure + " hpa" +  "<br/>" + "Cloudiness: " + data.list[1].weather[0].description;
    inSevenDaysWeather = "The weather is " + data.list[6].weather[0].main + "<br/>" + "Average temperature is: " + data.list[6].temp.day + "°C" + "<br/>" + "Pressure: " + data.list[6].pressure + " hpa" + "<br/>" +"Cloudiness: " + data.list[6].weather[0].description;


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
    xhr.open("GET", "index.html");
    xhr.send();
