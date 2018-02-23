/*********************************************************************************
Api-Openweather - This is the function for the openweathermap api. using JSON
**********************************************************************************/
var mykey = config.MY_KEY;
var secretkey = config.SECRET_KEY;

setInterval(function weatherAsk(event) {
    var apiUrl = "http://api.openweathermap.org/data/2.5/weather?";
    var apiKey = mykey;
    var city = "3137966";

    parameters = {
        id: city,
        APPID: apiKey
    };

    $.getJSON(apiUrl, parameters, function(data) {
        //Div for the weather today - Openweathermap
        var todayWeatherString = Math.floor(data.wind.speed)

        $('h1').text(todayWeatherString)

        function changeBackground() {
            if (todayWeatherString <= 15) {
                $('#brua').text("BRUA ER ÅPEN");
                $("html").css("background", '#7CFC00');
                $("body").css("background", '#7CFC00');
            } else if (todayWeatherString <= 30) {
                $('#brua').text("BRUA ER ÅPEN");
                $("html").css('background', 'yellow');
                $("body").css("background", 'yellow');
            } else {
                $('#brua').text("BRUA ER STENGT");
                $('html').css('background', 'red');
                $("body").css("background", 'red');
            }
        }
        changeBackground();

    });
}, 1000);
