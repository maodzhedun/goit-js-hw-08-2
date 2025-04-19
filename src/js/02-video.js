import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(currentTime) {
  localStorage.setItem(TIME_KEY, currentTime.seconds);
}

const playerTime = localStorage.getItem(TIME_KEY);
player.setCurrentTime(playerTime);
