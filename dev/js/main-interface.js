import { findDoctor } from "./../dev/js/main-logic.js";

$(document).ready(function(){

  function render(names, addresses, phoneNumbers, websites, availabilities){
    // clear the field
    $("#results").text(`Test.`);
    for (var i = 0; i < doctors.length; i++) {
      let name = names[i];
      let address = addresses[i];
      let phoneNumber = phoneNumbers[i];
      let website = websites[i];
      let availability = availabilities[i];
      let results = `<div class="result-item">
        <h3>${name}</h3>
        <p>${address}</p>
        <p>${phoneNumber}</p>
        <p>${website}</p>
        <p>${availability}</p>
      </div>`

      ${"#results"}
    }

  // CLICK!
  $("#submit-form").click(function(event){
    event.preventDefault();
    let symptoms = $("#symptoms").val();
    let doctorInput = $("#doctor-name").val();
    findDoctor(symptoms);
    // findDoctor(symptoms, doctorInput);
  });


});
