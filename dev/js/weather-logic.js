const moment = require('moment');

export function weatherApi(myIds, flightNumbers, dates, payloads, render){
  var apiKey = require('./../../.env').apiKey;

  const promises = [];
  let temperatures = [];
  dates.forEach(function(date){
    let dateString = moment(date).format("YYYYMMDD");

    const xhr = $.get(`http://api.wunderground.com/api/${apiKey}/history_${dateString}/q/OR/Portland.json`);
    promises.push(xhr);
    // xhr.done(function(response){
    //   console.log(response.history.dailysummary[0].meantempi);
    //   temperatures.push(response.history.dailysummary[0].meantempi);
    //
    //   // push date into dates array
    // });
  });
  console.log("this is fucking " + temperatures);
  $q.all(promises).then(function(response) {
    console.log(response);
  });
  render(myIds, flightNumbers, dates, payloads, temperatures)
}
