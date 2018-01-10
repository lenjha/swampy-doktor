import { findLaunch } from "./../dev/js/template-logic.js"

$(document).ready(function(){
  $("#submit-form").click(function(event){
    event.preventDefault();
    // let date = Date.now();
    const filterBy = $("#filter-by").val();
    const filterValue = $("#filter-value").val();
    let myId = findLaunch(filterBy, filterValue);

    $("#results").html(`<iframe width="560" height="315" src="//www.youtube.com/embed/${myId}" frameborder="0" allowfullscreen></iframe>`);
  });
});
