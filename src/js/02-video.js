import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(playTime, 1000));

function playTime({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}

const storage = localStorage.getItem('videoplayer-current-time');

if (storage) {
  player.setCurrentTime(storage);
}
