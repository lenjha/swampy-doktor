// import {  } from "./weather-logic.js";

export function findDoctor(location){
  var apiKey = require('./../../.env').apiKey;

  const xhr = $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${symptoms}&skip=0&limit=10&user_key=${apiKey}`)
  // const xhr = $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${symptoms}&user_key=${apiKey}`)

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

}
