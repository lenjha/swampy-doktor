export function weatherApi(weatherReport){
  var apiKey = require('./../../.env').apiKey;

  $.ajax({
  url :       `http://api.wunderground.com/api/${apiKey}/geolookup/conditions/q/OR/Portland.json`,
    type: 'GET',
    data: {
      format: 'json'
    },
    success : function(response) {
      let temperature = response.current_observation.temp_f;
      weatherReport(temperature);
      console.log(response.current_observation.temp_f);
    },
    error : function(){
      console.log("failure to calibrate weather API");
    }
  });
}
