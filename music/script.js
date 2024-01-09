const title = document.querySelector(".title");
const music = document.querySelector(".music-container");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const play = document.getElementById("play");
const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const progerss = document.getElementById("progress");
const progressContainer = document.getElementById('progress-container');
//song title 
const songs = ['hey', 'daily', 'beautifull', 'goodby', 'shawil'];
// kepp track of song
let songIndex = 1;
//initially load song details into dom

loadSong(songs[songIndex]);
//update song details
function loadSong(song) {
    title.innerText = song;
    audio.src = `songs/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}

// play music
function playM() {
    music.classList.add('play');
    play.querySelector(".fa-solid").classList.remove('fa-play');
    play.querySelector(".fa-solid").classList.add('fa-pause');
    audio.play();
}
//pause music
function pauseM() {
    music.classList.remove('play');
    play.querySelector(".fa-solid").classList.add('fa-play');
    play.querySelector(".fa-solid").classList.remove('fa-pause');
    audio.pause();
}

play.addEventListener("click", () => {
    const isPlaying = music.classList.contains('play');
    if (isPlaying) {
        pauseM();
    } else {
        playM();
    }
})
//next song
function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playM();
}
function presSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playM();
}
// show progress
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progerss.style.width = ` ${progressPercent}%`
}
// set progress 
function setProgress(e) {
    const width = this.clientWidth;
    const clientX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clientX / width) * duration;
}
next.addEventListener('click', nextSong);
prev.addEventListener('click', presSong);
audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);
audio.addEventListener('ended', nextSong)