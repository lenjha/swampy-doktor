import { findDoctor } from "./../dev/js/main-logic.js";

$(document).ready(function(){



  // CLICK!
  $("#submit-form").click(function(event){
    event.preventDefault();
    let symptoms = $("#symptoms").val();
    let doctorInput = $("#doctor-name").val();
    findDoctor(symptoms);
    // findDoctor(symptoms, doctorInput);
  });


});
