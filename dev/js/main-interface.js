import { findLaunch } from "./../dev/js/main-logic.js";

$(document).ready(function(){

// FUNCTION DEFINITIONS
  function render(myIds, flightNumbers, dates, payloads, temperatures){
    $("#results").text(''); //clear the section

    for (var i = 0; i < flightNumbers.length; i++) {
      let myId = myIds[i];
      let flightNumber = flightNumbers[i];
      let payload = payloads[i];
      let temperature = temperatures[i];
      let template = `<div class="item">
      <h2>launch ${flightNumber}</h2>
      <div class="meta"><span class="meta-title">Payload: </span>${payload}</div>
      <div class="meta"><span class="meta-title">Temperature: </span>${temperature}</div>
      <iframe width="560" height="315" src="//www.youtube.com/embed/${myId}" frameborder="0" allowfullscreen></iframe>
      </div>`

      $("#results").append(template); //output the section
    }

  }
  // function weatherReport(temperature){
  //   $('#weather-area').text(`The temperature in ${} is ${temperature} degrees`)
  // }
  // weatherApi(weatherReport);

  // CLICK FUNCTION
  $("#submit-form").click(function(event){
    event.preventDefault();
    // let date = Date.now();
    let filterBy = [];
    let filterValue = [];

    $('*[name=filter]').each(function(){
      if ($(this).val()) {
        filterBy.push($(this).attr('id'));
        filterValue.push($(this).val());
      }
    });
    console.log(filterValue);
    if (filterValue.length != 0) {
      findLaunch(filterBy, filterValue, render);
    } else {
      alert("pick a filter yo!");
    }

  });
});
