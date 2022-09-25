import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = 'videoplayer-current-time';
const onTimeUpdata = function (data) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};
const saveTime = localStorage.getItem(LOCAL_STORAGE_KEY);

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});

player.on('timeupdate', throttle(onTimeUpdata, 1000), function (event) {
  console.log('played the video!');
  localStorage.setItem(LOCAL_STORAGE_KEY, event.seconds);
});

player
  .setCurrentTime(saveTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
