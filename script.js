

const songs = [
    {
        name: "Ve Kamleya",
        singer: "Arijit Singh",
        src: "songs/song-1.mp3",
        img: "images/image1.jpg"
    },
    {
        name: "jeena jeena",
        singer: "Atif Aslam",
        src: "songs/song-5.mp3",
        img: "images/image3.jpg"
    },
    {
        name: "dekha Tenu Pheli Pheli bar",
        singer: "Faiz",
        src: "songs/song-3.mp3",
        img: "images/image4.jpg"
    },
    {
        name: "Pehle Bhi Me",
        singer: "Vishal Mishra",
        src: "songs/Pehle-Bhi-Main-Tumse-Mila-Hoon(PagalWorld).mp3",
        img: "images/img-2.jpg",
    },
];

let currentSongIndex = 0;
const audio = new Audio();
const playPauseButton = document.getElementById('play-pause');
const prevButton = document.getElementById('prev-img');
const nextButton = document.getElementById('next-img');
const songName = document.getElementById('song-name');
const songSinger = document.getElementById('song-singer');
const songImage = document.querySelector('.song-img');
const songDuration = document.getElementById('song-dur');
const volumeControl = document.getElementById('volumn-range');
const musicanim = document.getElementById('musicanim');
const playlistImg = document.getElementById('playlist-img');
const playlist = document.querySelector('.playlist');
const playlistSong = document.querySelectorAll('.playlistSong');


// Load the current song
function loadSong(song) {
    audio.src = song.src;
    songName.textContent = song.name;
    songSinger.textContent = song.singer;
    songImage.style.backgroundImage = `url('${song.img}')`;
    
}

// Play or Pause the song
function playPause() {
    if (audio.paused) {
        audio.play();
        playPauseButton.src = "pause.svg"; // Change play button to pause button
        musicanim.style.display="block"
    } else {
        audio.pause();
        playPauseButton.src = "play.svg"; // Change pause button to play button
        musicanim.style.display="none"
    }
}

// Play the previous song
function previousSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    playPause(); // Automatically play the new song
}

// Play the next song
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    playPause(); // Automatically play the new song
}

// Adjust the volume
volumeControl.addEventListener('input', function() {
    audio.volume = volumeControl.value / 100;
});

// Update the duration slider as the song plays
audio.addEventListener('timeupdate', function() {
    const progress = (audio.currentTime / audio.duration) * 100;
    songDuration.value = progress || 0;
});

// Seek to a position in the song
songDuration.addEventListener('input', function() {
    const seekTime = (songDuration.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

// Initialize the first song
loadSong(songs[currentSongIndex]);


playPauseButton.addEventListener('click', playPause);
prevButton.addEventListener('click', previousSong);
nextButton.addEventListener('click', nextSong);
const audios = new Audio();  
const volume = document.getElementById('volumn-range');
const volumeIcon = document.getElementById('volume-icon');

volumeControl.addEventListener('input', function() {
    
    audio.volume = volumeControl.value / 100;

    if (audio.volume === 0) {
        volumeIcon.src = 'mute.svg';
    } else {
        volumeIcon.src = 'volumn.svg'; 
    }
});


if (audio.volume === 0) {
    volumeIcon.src = 'mute.svg';
} else {
    volumeIcon.src = 'volumn.svg';
}
playlistImg.addEventListener("click",()=>{
playlist.classList.toggle("playlist-active")
if(playlist.classList.contains("playlist-active")){
    playlistImg.src="cross.svg"
}
else{
    playlistImg.src="playlist.svg"
}
})
playlistSong.forEach((song,index) => {
    song.addEventListener('click', () => {
        loadSong(index);
        playSong();
    });
});


