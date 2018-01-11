export function findLaunch(filterBy, filterValue, renderCallback){
  let filters = [];
  for (var i = 0; i < filterBy.length; i++) {
    let by = filterBy[i];
    let val = filterValue[i];
    filters.push(`${by}=${val}`);
  }
  filters = filters.join("&");
  const xhr = $.get(`https://api.spacexdata.com/v2/launches?${filters}`);

  xhr.done(function(responses) {

    const ids = [];
    console.log(responses);

    responses.forEach(function(response){
      var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      var match = response.links.video_link.match(regExp);

      let id;
      if (match && match[2].length == 11) {
        ids.push(match[2]);

      } else {
        console.log("FAILURE to quantify");
      }
    });


    renderCallback(ids);
  });
  xhr.fail(function() {
    console.log("FAILURE to reprogram the link to lowLetter");
  });
}
