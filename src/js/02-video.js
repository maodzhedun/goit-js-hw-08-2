import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);


player.on('timeupdate', function () {
  console.log('played the video!',);

  // let currentTime = getCurrentTime();
  console.log(currentTime.seconds)
});



// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
