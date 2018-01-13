// import { findDoctor } from "./../dev/js/main-logic.js";
var apiKey = require('./../../.env').apiKey;

$(document).ready(function(){
  // function render(names, addresses, phoneNumbers, websites, availabilities){
    //   // clear the field
    //   $("#results").text(`Test.`);
    //   for (var i = 0; i < doctors.length; i++) {
    //     let name = names[i];
    //     let address = addresses[i];
    //     let phoneNumber = phoneNumbers[i];
    //     let website = websites[i];
    //     let availability = availabilities[i];
    //     let results = `<div class="result-item">
    //       <h3>${name}</h3>
    //       <p>${address}</p>
    //       <p>${phoneNumber}</p>
    //       <p>${website}</p>
    //       <p>${availability}</p>
    //     </div>`
    //   }

  $("#submit-form").click(function(event){
    event.preventDefault();
    let symptomsInput = $("#symptoms").val();
    let nameInput = $("#doctor-name").val();
  }
  
    // let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptoms}&location=or-portland&skip=0&limit=100&user_key=${apiKey}`

    // request.onreadystatechange = function(){
    //   if (this.readyState === 4 && this.status === 200){
    //     let response=JSON.parse;
    //     getElements(response);
    //   }
    // }

    // request.open("GET", url, true);
    // request.send();
    //
    // getElements = function(response){
    //   $("#results").text(`${response.data.practices.name}`);
    // }


  // $.ajax({
  //   url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptoms}&location=or-portland&skip=0&limit=100&user_key=${apiKey}`,
  //   type: 'GET',
  //   data: {
  //     format: 'json'
  //   },
  //   success: function(response){
  //     console.log(`${response.data.practices.name}`)
  //   },
  //   error: function(){
  //     $("#errors").text("There was an error...")
  //   }
  // });

    // let filterBy = [];
    // let filterValue = [];

    // $("*[name=filter]").each(function(){
    //   if ($(this).val()){
    //     filterBy.push($(this).attr('id'));
    //     filterValue.push($(this).val());
    //   }
    // });

    // findDoctor(symptoms);
    // findDoctor(symptoms, doctorInput);
  // });


});
