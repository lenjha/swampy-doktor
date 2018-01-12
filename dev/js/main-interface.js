import { findDoctor } from "./../dev/js/main-logic.js";

$(document).ready(function(){

  function render(names, addresses, phoneNumbers, websites, availabilities){
    // clear the field
    $(#results).text('');

    for (var i = 0; i < doctors.length; i++) {
      let name = names[i];
      let address = addresses[i];
      let phoneNumber = phoneNumbers[i];
      let website = websites[i];
      let availability = availabilities[i];
    }
  }

  // CLICK!
  $("#submit-form").click(function(event){
    event.preventDefault();

  });
});
