import { findLaunch } from "./../dev/js/template-logic.js";

$(document).ready(function(){
  $("#submit-form").click(function(event){
    event.preventDefault();
    // let date = Date.now();
    let filterBy = [];
    let filterValue = [];

    $('*[name=filter]').each(function(){
      if (this) {
        filterBy.push($(this).attr('id'));
        filterValue.push($(this).val());
      } else {
        alert("fill out something dood!");
      }
    });

    findLaunch(filterBy, filterValue, render);

  });
  function render(myIds){
    $("#results").text('')
    myIds.forEach(function(myId){
      $("#results").append(`<iframe width="560" height="315" src="//www.youtube.com/embed/${myId}" frameborder="0" allowfullscreen></iframe>`);
    });
  }
});
