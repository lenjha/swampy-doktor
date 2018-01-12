import { weatherApi } from "./weather-logic.js";

export function findLaunch(filterBy, filterValue, render){
  let filters = [];
  for (var i = 0; i < filterBy.length; i++) {
    let by = filterBy[i];
    let val = filterValue[i];
    filters.push(`${by}=${val}`);

  }

  filters = filters.join("&");

  const xhr = $.get(`https://api.spacexdata.com/v2/launches/?${filters}`);

  xhr.done(function(responses) {

    const myIds = [];
    const flightNumbers = [];
    const payloads = [];
    const dates = [];


    responses.forEach(function(response){

      flightNumbers.push(response.flight_number);
      payloads.push(response.payload);
      dates.push(response.launch_date_local);

      var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      var match = response.links.video_link.match(regExp);

      let id;
      if (match && match[2].length == 11) {
        myIds.push(match[2]);

      } else {
        console.log("FAILURE to quantify");
      }
    });

    weatherApi(myIds, flightNumbers, dates, payloads, render)
    // render(myIds, flightNumbers, weather);
  });
  xhr.fail(function() {
    console.log("FAILURE to reprogram the link to lowLetter");
  });
}
