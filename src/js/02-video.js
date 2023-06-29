import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640
});

const saveToLocalStorage = throttle((seconds) => {
  localStorage.setItem("videoplayer-current-time", seconds);
}, 1000);

player.on('timeupdate', function (data) {
  saveToLocalStorage(data.seconds)
});

const storagePlayerTime = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime(storagePlayerTime)
  .then(function (seconds) {
    console.log(seconds)
  })
  .catch(function (error) {
    console.log(error)
  });
