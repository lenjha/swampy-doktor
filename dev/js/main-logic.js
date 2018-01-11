export function findLaunch(filterBy, filterValue, render){
  let filters = [];
  for (var i = 0; i < filterBy.length; i++) {
    let by = filterBy[i];
    let val = filterValue[i];
    filters.push(`${by}=${val}`);
  }
  filters = filters.join("&");
  const xhr = $.get(`https://api.spacexdata.com/v2/launches?${filters}`);

  console.log(filters);

  xhr.done(function(responses) {

    const myIds = [];
    console.log(responses);

    responses.forEach(function(response){
      var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      var match = response.links.video_link.match(regExp);

      let id;
      if (match && match[2].length == 11) {
        myIds.push(match[2]);

      } else {
        console.log("FAILURE to quantify");
      }
    });


    render(myIds);
  });
  xhr.fail(function() {
    console.log("FAILURE to reprogram the link to lowLetter");
  });
}
