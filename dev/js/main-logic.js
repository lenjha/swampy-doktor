// import {  } from "./weather-logic.js";

export function findDoctor(symptoms){
  var apiKey = require('./../../.env').apiKey;

const xhr = $.get(`https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&skip=0&limit=10&user_key=${apiKey}`)
}



// export function findDoctor(symptoms){
//   var apiKey = require('./../../.env').apiKey;
//
//   const promises = [];
//   const names = [];
//   const addresses = [];
//   const phoneNumbers = [];
//   const websites = [];
//   const availabilities = [];

  // alternate xhr
    // const xhr = $.get(`https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&skip=0&limit=10&user_key=${apiKey}`)
    // const xhr = $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${symptoms}&user_key=${apiKey}`)

    // responses.forEach(function(response){
    //
    //   const xhr = $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${symptoms}&skip=0&limit=10&user_key=${apiKey}`);
    //
    //   promises.push(xhr);
    //
    //   xhr.done(function(response){
    //
    //     console.log(names);
    //     console.log(addresses);
    //     console.log(phoneNumbers);
    //     console.log(websites);
    //     console.log(availabilities);
    //   });
    //
    //   xhr.fail(function(){
    //     console.log("FAILURE FAILURE")
    //   });
    //
    //   names.push(response.data.practices.name)
    //   addresses.push(response.data.practices.visit_address.state)
    //   // different way of doing address
    //   // addresses.push(response.data.practices.visit_address.street + " " + response.data.practices.visit_address.street2 + " " + response.data.practices.visit_address.city + " " + response.data.practices.visit_address.state + " " + response.data.practices.visit_address.zip)
    //   phoneNumbers.push(response.data.practices.phones.number)
    //   websites.push(response.data.practices.website)
    //   availabilities.push(response.data.practices.accepts_new_patients)
    //   console.log(response.data.practices.name);
    // });


  // return with doc info:
      // VAR(response?).data.practices.name
      // VAR(response?).data.practices.visit_address.street
      // VAR(response?).data.practices.visit_address.street2
      // VAR(response?).data.practices.visit_address.city
      // VAR(response?).data.practices.visit_address.state
      // VAR(response?).data.practices.visit_address.zip
      // VAR(response?).data.practices.website
      // VAR(response?).data.practices.phones.number
      // VAR(response?).data.practices.accepts_new_patients

      // if doctors=[""], return notification saying "NO DOCTORS FOUND"

    // render(names, addresses, phoneNumbers, websites, availabilities)
// }
