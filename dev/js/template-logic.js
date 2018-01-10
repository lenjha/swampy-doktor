export function findLaunch(filterBy, filterValue, renderCallback){
  const xhr = $.get(`https://api.spacexdata.com/v2/launches?${filterBy}=${filterValue}`
);
  xhr.done(function(response) {
    // console.log("We got the data!", response);

    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = response[0].links.video_link.match(regExp);
    console.log(match);
    let id;
    if (match && match[2].length == 11) {
        id = match[2];
    } else {
        id = 'error';
    }

    renderCallback(id);
  });
  xhr.fail(function() {
    console.log("FAILURE");
  })
}
