import { findLaunch } from "./../dev/js/template-logic.js";

$(document).ready(function(){
  $("#submit-form").click(function(event){
    event.preventDefault();
    // let date = Date.now();
    let filterBy = [];
    let filterValue = [];

    $('*[name=filter]').each(function(){
        filterBy.push($(this).attr('id'));
        if ($(this).val()) {
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
  function render(myIds){
    $("#results").text('');
    myIds.forEach(function(myId){
      $("#results").append(`<iframe width="560" height="315" src="//www.youtube.com/embed/${myId}" frameborder="0" allowfullscreen></iframe>`);
    });
  }
});
