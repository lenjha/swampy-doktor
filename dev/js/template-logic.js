export function findLaunch(filterBy, filterValue){
  const xhr = $.get(`https://api.spacexdata.com/v2/launches?${filterBy}=${filterValue}`
);
  xhr.done(function(response) {
    console.log("We got the data!", response);

    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = response[0].links.video_link.match(regExp);

    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return 'error';
    }

  });
}
