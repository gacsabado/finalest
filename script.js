let moon = document.getElementById("moon");
let me = document.getElementById("me");
let train = document.getElementById("train");

let desert_moon = document.getElementById("desert-moon");
let man = document.getElementById("man");

window.addEventListener("scroll",()=>{
    let value = window.scrollY;
    
    if (value < 1500) { // Change 478 to your desired scroll position
      moon.style.top = value * 0.9 + "px";
    } else {
      moon.style.top = 478 * 0.9 + "px"; // Set a specific value when the scroll position is beyond the limit
    }

    if (value < 478) { // Change 500 to your desired scroll position
        me.style.top = 80 + value * -0.08 + '%';
    }
    train.style.left = value * 1.5 + "px";

    desert_moon.style.top = value * .3 + "px";
    man.style.left = value * .6 + "px";
})

let calcScrollValue = ()=>{
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;

    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos*100)/calcHeight);

    if(pos>100){
        scrollProgress.style.display = "grid";
    }else{
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click",()=>{
        document.documentElement.scrollTop = 0;
    })
    scrollProgress.style.background= `conic-gradient(#194eb9 ${scrollValue}%,#67ccff ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


// paralax a
window.onload = function() {
    window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let parallaxItem = document.querySelector('.p-item3');

    // Adjust the zoom level based on the scroll position
    let scale = 1+ (scrollPosition * 0.03);

    // Apply the zoom transformation to the p-item3 element
    parallaxItem.style.transform = `scale(${scale})`;

    let parallaxItem2 = document.querySelector('.p-item2');

    // Adjust the position of p-item2 based on the scroll position
    parallaxItem2.style.left = `${scrollPosition * -0.5}px`;

  });
};

// scroll-fade.js

const welcomeMessage = document.getElementById('welcome-message');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 1) {
    welcomeMessage.classList.add('hide');
  } else {
    welcomeMessage.classList.remove('hide');
  }
});

// scroll down

document.addEventListener("DOMContentLoaded", function () {
  var scrollDown = document.getElementById("scrollDown");

  window.addEventListener("scroll", function () {
      if (window.scrollY > 0) {
          scrollDown.classList.add("hide-scroll-down");
      } else {
          scrollDown.classList.remove("hide-scroll-down");
      }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".header");
  var lastScrollTop = 0;
  
  window.addEventListener("scroll", function () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      if (scrollTop > lastScrollTop) {
          // Scrolling down
          header.classList.add("fade-in");
      } else {
          // Scrolling up
          header.classList.remove("fade-in");
      }
  
      lastScrollTop = scrollTop;
  });
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
    } else {
    document.getElementById("header").style.top = "-150px";
    }
  prevScrollpos = currentScrollPos;
}
  
//music player
const songData = [
  {
    name: "Hooked on a Feeling",
    artist: "Blue Swede",
    src: "song4",
  },
  {
    name: "Come and Get Your Love",
    artist: "Redbone",
    src: "song5",
  },
  {
    name: "One Of The Girls",
    artist: "The Weeknd, JENNIE & Lily Rose Depp",
    src: "song6",
  },
  {
    name: "Nothing Else Matters",
    artist: "Metallica",
    src: "song1",
  },
  {
    name: "Knockin' on Heaven's Door",
    artist: "Bob Dylan",
    src: "song2",
  },
  {
    name: "Guns N' Roses",
    artist: "Don't Cry",
    src: "song3",
  },
];

const container = document.querySelector(".container");
const songName = document.querySelector(".song-name");
const songArtist = document.querySelector(".song-artist");
const cover = document.querySelector(".cover");
const playPauseBtn = document.querySelector(".play-pause");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const audio = document.querySelector(".audio");
const songTime = document.querySelector(".song-time");
const songProgress = document.querySelector(".song-progress");
const coverArtist = document.querySelector(".cover span:nth-child(1)");
const coverName = document.querySelector(".cover span:nth-child(2)");

let songIndex = 0;

window.addEventListener("load", () => {
  loadSong(songIndex);
});

const loadSong = (index) => {
  coverName.textContent = songData[index].name;
  coverArtist.textContent = songData[index].artist;
  songName.textContent = songData[index].name;
  songArtist.textContent = songData[index].artist;
  audio.src = `music/${songData[index].src}.mp3`;
};

const playSong = () => {
  container.classList.add("pause");
  cover.classList.add("rotate");
  playPauseBtn.firstElementChild.className = "fa-solid fa-pause";
  audio.play();
};

const pauseSong = () => {
  container.classList.remove("pause");
  cover.classList.remove("rotate");
  playPauseBtn.firstElementChild.className = "fa-solid fa-play";
  audio.pause();
};

playPauseBtn.addEventListener("click", () => {
  if (container.classList.contains("pause")) {
    pauseSong();
  } else {
    playSong();
  }
});

const prevSongPlay = () => {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songData.length - 1;
  }

  loadSong(songIndex);
  playSong();
};

const nextSongPlay = () => {
  songIndex++;
  if (songIndex > songData.length - 1) {
    songIndex = 0;
  }

  loadSong(songIndex);
  playSong();
};

prevBtn.addEventListener("click", prevSongPlay);
nextBtn.addEventListener("click", nextSongPlay);

audio.addEventListener("timeupdate", (e) => {
  const currentTime = e.target.currentTime;
  const duration = e.target.duration;
  let currentTimeWidth = (currentTime / duration) * 100;
  songProgress.style.width = `${currentTimeWidth}%`;

  let songCurrentTime = document.querySelector(".time span:nth-child(1)");
  let songDuration = document.querySelector(".time span:nth-child(2)");

  audio.addEventListener("loadeddata", () => {
    let audioDuration = audio.duration;
    let totalMinutes = Math.floor(audioDuration / 60);
    let totalSeconds = Math.floor(audioDuration % 60);

    if (totalSeconds < 10) {
      totalSeconds = `0${totalSeconds}`;
    }

    songDuration.textContent = `${totalMinutes}:${totalSeconds}`;
  });

  let currentMinutes = Math.floor(currentTime / 60);
  let currentSeconds = Math.floor(currentTime % 60);

  if (currentSeconds < 10) {
    currentSeconds = `0${currentSeconds}`;
  }

  songCurrentTime.textContent = `${currentMinutes}:${currentSeconds}`;
});

songTime.addEventListener("click", (e) => {
  let progressWidth = songTime.clientWidth;
  let clickedOffsetX = e.offsetX;
  let songDuration = audio.duration;
  audio.currentTime = (clickedOffsetX / progressWidth) * songDuration;

  playSong();
});

audio.addEventListener("ended", nextSongPlay);
