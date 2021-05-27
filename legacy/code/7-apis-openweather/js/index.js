// Open Weather API key
var key = '0928f3769036fed05a40766fd2e3e618';
// Get current location
$.getJSON('https://ipinfo.io', function(data) {
  var lat = data['loc'].substr(0, data['loc'].indexOf(','));
  var lon = data['loc'].substr(data['loc'].indexOf(',') + 1);
  var location = data.city + ', ' + data.country;

  // Get city and country name
  $('.city').text(function(index, old) {
    return old === '' ? location : old;
  });

  // Get weather information
  $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&APPID=' + key + '&units=metric', function(json) {
    var temp     = Math.round(json.main.temp);
    var forecast = json.weather[0].description;
    var icon     = json.weather[0].icon;
    var iconUrl  = "http://openweathermap.org/img/w/" + icon + ".png";
    // Get current temperature
    $('.temp').text(function(index, old) {
      return old === '0' ? temp : old;
    });
    // Get current forecast
    $('.forecast').text(function(index, old) {
      return old === '' ? forecast : old;
    });
    // Get current weather icon
    $(".icon").html("<img src='" + iconUrl  + "'>");
  });
});
