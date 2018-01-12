// import {  } from "./weather-logic.js";

export function findDoctor(location){
  var apiKey = require('./../../.env').apiKey;

  const xhr = $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${symptoms}&skip=0&limit=10&user_key=${apiKey}`)
  // const xhr = $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${symptoms}&user_key=${apiKey}`)

}
