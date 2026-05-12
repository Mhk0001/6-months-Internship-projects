// const audio = document.getElementById("audio-player");
// const playBtns = document.querySelectorAll(".play-btn");

// let currentBtn = null;

// playBtns.forEach(btn => {
//   btn.addEventListener("click", (e) => {
//     e.stopPropagation();

//     // Reset previous button if different
//     if (currentBtn && currentBtn !== btn) {
//       currentBtn.classList.replace("fa-circle-pause", "fa-circle-play");
//       audio.pause();
//       audio.currentTime = 0;
//     }

//     // Ensure correct path to song
//     audio.src = "./assets/song.mp3";
//     audio.load();

//     // Play or pause
//     audio.play().then(() => {
//       btn.classList.replace("fa-circle-play", "fa-circle-pause");
//       currentBtn = btn;
//     }).catch(err => {
//       console.error("Audio play failed:", err);
//       alert("Click on the page first to allow audio playback.");
//     });
//   });
// });

// // Reset button when audio ends
// audio.addEventListener("ended", () => {
//   if (currentBtn) {
//     currentBtn.classList.replace("fa-circle-pause", "fa-circle-play");
//     currentBtn = null;
//   }
// });
// const audio = document.getElementById("audio-player");
// const playBtns = document.querySelectorAll(".play-btn");

// let currentBtn = null;
// let isPlaying = false; // track play state

// playBtns.forEach(btn => {
//   btn.addEventListener("click", (e) => {
//     e.stopPropagation();

//     // Reset previous button if different
//     if (currentBtn && currentBtn !== btn) {
//       currentBtn.classList.replace("fa-circle-pause", "fa-circle-play");
//       audio.pause();
//       audio.currentTime = 0;
//       isPlaying = false;
//     }

//     // Only set src/load if not already playing this song
//     if (!isPlaying) {
//       audio.src = "./assets/song.mp3";
//       audio.load();
//       audio.play().then(() => {
//         btn.classList.replace("fa-circle-play", "fa-circle-pause");
//         currentBtn = btn;
//         isPlaying = true;
//       }).catch(err => console.error(err));
//     } else {
//       // Pause the song
//       audio.pause();
//       btn.classList.replace("fa-circle-pause", "fa-circle-play");
//       isPlaying = false;
//       currentBtn = null;
//     }
//   });
// });

// audio.addEventListener("ended", () => {
//   if (currentBtn) {
//     currentBtn.classList.replace("fa-circle-pause", "fa-circle-play");
//     currentBtn = null;
//     isPlaying = false;
//   }
// });
const audio = document.getElementById("audio-player");
const playBtns = document.querySelectorAll(".play-btn");

// Bottom player elements
const playPauseBtn = document.querySelector(".player-ctrl-icon[alt='Play/Pause']");
const progressBar = document.querySelector(".progress-bar");
const currTimeEl = document.querySelector(".curr-time");
const totalTimeEl = document.querySelector(".total-time");

let currentBtn = null;
let isPlaying = false; // track play state

// Format time in mm:ss
function formatTime(sec) {
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60);
  return `${minutes < 10 ? '0'+minutes : minutes}:${seconds < 10 ? '0'+seconds : seconds}`;
}

// Update progress bar and times
audio.addEventListener("timeupdate", () => {
  if (audio.duration) {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progressPercent;
    currTimeEl.textContent = formatTime(audio.currentTime);
    totalTimeEl.textContent = formatTime(audio.duration);
  }
});

// Clicking any song card
playBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // If clicking a different button, pause previous
    if (currentBtn && currentBtn !== btn) {
      currentBtn.classList.replace("fa-circle-pause", "fa-circle-play");
      audio.pause();
      isPlaying = false;
    }

    // Toggle play/pause for this button
    if (!isPlaying || currentBtn !== btn) {
      audio.src = "./assets/song.mp3"; // update with correct path if needed
      audio.play().then(() => {
        btn.classList.replace("fa-circle-play", "fa-circle-pause");
        currentBtn = btn;
        isPlaying = true;
        playPauseBtn.src = "assets/player_icon6.png"; // change to pause icon
      }).catch(err => console.error(err));
    } else {
      // Pause
      audio.pause();
      btn.classList.replace("fa-circle-pause", "fa-circle-play");
      isPlaying = false;
      playPauseBtn.src = "assets/player_icon3.png"; // change to play icon
    }
  });
});

// Bottom player play/pause button
playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.src = "assets/player_icon6.png";
    if (currentBtn) currentBtn.classList.replace("fa-circle-play", "fa-circle-pause");
    isPlaying = true;
  } else {
    audio.pause();
    playPauseBtn.src = "assets/player_icon3.png";
    if (currentBtn) currentBtn.classList.replace("fa-circle-pause", "fa-circle-play");
    isPlaying = false;
  }
});

// Progress bar seeking
progressBar.addEventListener("input", () => {
  audio.currentTime = (progressBar.value / 100) * audio.duration;
});

// When song ends
audio.addEventListener("ended", () => {
  if (currentBtn) currentBtn.classList.replace("fa-circle-pause", "fa-circle-play");
  playPauseBtn.src = "assets/player_icon3.png";
  currentBtn = null;
  isPlaying = false;
  progressBar.value = 0;
  currTimeEl.textContent = "00:00";
});
// // Playlist functionality
// const createPlaylistBtn = document.getElementById("create-playlist-btn");
// const playlistsContainer = document.getElementById("playlists-container");

// let playlists = []; // store playlist names

// createPlaylistBtn.addEventListener("click", () => {
//   const name = prompt("Enter playlist name:");
//   if (!name) return; // cancel or empty input
//   playlists.push(name);
//   renderPlaylists();
// });

// function renderPlaylists() {
//   playlistsContainer.innerHTML = ""; // clear previous
//   playlists.forEach((pl, index) => {
//     const plDiv = document.createElement("div");
//     plDiv.classList.add("playlist-item");
//     plDiv.textContent = pl;
//     plDiv.addEventListener("click", () => {
//       alert(`Clicked on playlist: ${pl}`);
//       // You can later add code to show songs in this playlist
//     });
//     playlistsContainer.appendChild(plDiv);
//   });
// }
const createPlaylistBtn = document.getElementById("create-playlist-btn");
const playlistsContainer = document.getElementById("playlists-container");
const addToPlaylistBtns = document.querySelectorAll(".add-to-playlist");

let playlists = {};   // { playlistName: [songName] }
let activePlaylist = null;

// Create playlist
createPlaylistBtn.addEventListener("click", () => {
  const name = prompt("Enter playlist name");
  if (!name || playlists[name]) return;

  playlists[name] = [];
  activePlaylist = name;
  renderPlaylists();
});

// Add song to selected playlist
addToPlaylistBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    if (!activePlaylist) {
      alert("Select a playlist first");
      return;
    }

    const songName = btn.closest(".card").querySelector(".card-title").innerText;

    if (!playlists[activePlaylist].includes(songName)) {
      playlists[activePlaylist].push(songName);
      renderPlaylists();
    }
  });
});

// Render playlists & songs
function renderPlaylists() {
  playlistsContainer.innerHTML = "";

  Object.keys(playlists).forEach(name => {
    const playlistDiv = document.createElement("div");
    playlistDiv.className = "playlist";

    const title = document.createElement("div");
    title.className = "playlist-name";
    title.textContent = name;

    title.onclick = () => {
      activePlaylist = name;
      renderPlaylists();
    };

    playlistDiv.appendChild(title);

    // Show songs if playlist selected
    if (activePlaylist === name) {
      playlists[name].forEach((song, index) => {
        const songDiv = document.createElement("div");
        songDiv.className = "playlist-song";

        const removeBtn = document.createElement("span");
        removeBtn.className = "remove-song";
        removeBtn.innerHTML = "&minus;";
        removeBtn.onclick = () => {
          playlists[name].splice(index, 1);
          renderPlaylists();
        };

        const songText = document.createElement("span");
        songText.textContent = song;

        songDiv.appendChild(removeBtn);
        songDiv.appendChild(songText);
        playlistDiv.appendChild(songDiv);
      });
    }

    playlistsContainer.appendChild(playlistDiv);
  });
}
