var weather;
var api = "http://api.openweathermap.org/data/2.5/weather?q=";
var apiKey="&APPID=569cb5c54488af8f488e82b8dd9ca105";
var units= "&units=metric";
var input;
$(document).ready(function(){

});


// $(document).ready(function(){
//
// var weather;
// var api = "http://api.openweathermap.org/data/2.5/weather?q=";
// var apiKey="&APPID=569cb5c54488af8f488e82b8dd9ca105";
// var units="&units=metric";
// var input;
//
//  input = $("#city");
//
//  function weatherAsk(event){
//  event.preventDefault();
//  var url = api + input.value() + apiKey + units;
//  }
//
// function gotData(data) {
//   weather = data;
//   $.getJSON(url, gotData);
// }
//
// $('owmTodayWeather').first().html(weather.main.temp);
// $(".typahead").submit(weatherAsk);
// });
