import { findLaunch } from "./../dev/js/template-logic.js";
import { weatherApi } from "./../dev/js/weather-logic.js";

$(document).ready(function(){

// FUNCTION DEFINITIONS
  function render(myIds){
    $("#results").text('');
    myIds.forEach(function(myId){
      $("#results").append(`<iframe width="560" height="315" src="//www.youtube.com/embed/${myId}" frameborder="0" allowfullscreen></iframe>`);
    });
  }
  function weatherReport(temperature){
    $('#weather-area').text(`The temperature in Portland, Oregon is ${temperature} degrees`)
  }
  weatherApi(weatherReport);

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
