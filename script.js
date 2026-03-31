let currentSongIndex = -1;
let songsAudio = [];

// SAMPLE AUDIO FILES
let sampleAudios = [
  "audio/song1.mp3",
  "audio/song2.mp3",
  "audio/song3.mp3",
  "audio/song4.mp3",
  "audio/song5.mp3"
];

// SONG DATA
let songs = {
  trending: [
    {name:"Re Toofan", img:"images/toofan.jpg"},
    {name:"Ye Tune Kya Kiya", img:"images/yetunekyakiya.jpg"},
    {name:"Ghoomar", img:"images/ghoomar.jpg"},
    {name:"Vande Mataram", img:"images/vande.jpg"},
    {name:"Sajni", img:"images/sajni.jpg"},
    {name:"Maay Bhavani", img:"images/maaybhavani.jpg"},
    {name:"Kalank", img:"images/kalank.jpg"},
    {name:"Tauba Tauba", img:"images/taubatauba.jpg"}
  ],

  artists: [
    {name:"Shankar Mahadevan", img:"images/shankar.jpg"},
    {name:"A R Rahman", img:"images/arrahman.jpg"},
    {name:"Arijit Singh", img:"images/arijit.jpg"},
    {name:"Udit Narayan", img:"images/udit.jpg"},
    {name:"Shreya Ghoshal", img:"images/shreyaghoshal.jpg"},
    {name:"Neha Kakkar", img:"images/neha.jpg"},
    {name:"Atif Aslam", img:"images/atif.jpg"},
    {name:"Palak Muchhal", img:"images/palak.jpg"}
  ],

  marathi: [
    {name:"Mitwa", img:"images/mitwa.jpg"},
    {name:"Kakan", img:"images/kakan.jpg"},
    {name:"Zingaat", img:"images/zingat.jpg"},
    {name:"Chandra", img:"images/chandra.jpg"},
    {name:"Devak Kalji Re", img:"images/devak.jpg"},
    {name:"Natrang", img:"images/natrang.jpg"},
    {name:"Gulabi Sadi", img:"images/gulabisadi.jpg"},
    {name:"Shaky", img:"images/shaky.jpg"}
  ],

  motivational: [
    {name:"Bandeya Re Bandeya", img:"images/bandeya.jpg"},
    {name:"Shabashiya", img:"images/shabashiya.jpg"},
    {name:"Arambh Hai Prachand", img:"images/arambh.jpg"},
    {name:"Kar Har Maidan Fateh", img:"images/fateh.jpg"},
    {name:"Lakshya", img:"images/lakshya.jpg"},
    {name:"Kyu Tarasta Hai Tu Bande", img:"images/sikandar.jpg"},
    {name:"Ziddi Dil", img:"images/ziddidil.jpg"},
    {name:"Bhaag Milkha Bhaag", img:"images/bhagmilkha.jpg"}
  ]
};

// CREATE AUDIO OBJECTS
let allSongs = songs.trending.concat(songs.marathi, songs.motivational);

allSongs.forEach((s, i) => {
  songsAudio[i] = new Audio(sampleAudios[i % sampleAudios.length]);
});

// LOAD SECTION
function loadSection(id, data, allowAdd = true, isPlayable = true) {
  let container = document.getElementById(id);
  container.innerHTML = "";

  data.forEach((item, index) => {
    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.src = item.img;

    let title = document.createElement("p");
    title.innerText = item.name;

    card.appendChild(img);
    card.appendChild(title);

    // PLAY SONG
    if (isPlayable) {
      card.onclick = () => {
        let songIndex = index;

        if (id === "marathi") songIndex += songs.trending.length;
        else if (id === "motivational")
          songIndex += songs.trending.length + songs.marathi.length;

        let audio = songsAudio[songIndex];

        if (currentSongIndex === songIndex) {
          if (audio.paused) audio.play();
          else audio.pause();
        } else {
          if (currentSongIndex >= 0)
            songsAudio[currentSongIndex].pause();

          audio.play();
          currentSongIndex = songIndex;
        }

        document.getElementById("nowPlaying").innerText =
          "Now Playing: " + item.name;
      };
    }

    // ADD TO PLAYLIST
    if (allowAdd && isPlayable) {
      let addBtn = document.createElement("button");
      addBtn.innerText = "Add to Playlist";

      addBtn.onclick = (e) => {
        e.stopPropagation();
        addToPlaylist(item.name);
      };

      card.appendChild(addBtn);
    }

    container.appendChild(card);
  });
}

// PLAYLIST STORAGE
let playlists = {};

// CREATE PLAYLIST
function createPlaylist() {
  let name = prompt("Enter playlist name:");
  if (!name) return;

  if (playlists[name]) {
    alert("Playlist already exists");
    return;
  }

  playlists[name] = [];
  renderPlaylists();
}

// ADD SONG
function addToPlaylist(song) {
  let names = Object.keys(playlists);

  if (names.length === 0) {
    alert("Create playlist first");
    return;
  }

  let selected = prompt("Which playlist?\n" + names.join(", "));

  if (!selected || !playlists[selected]) {
    alert("Invalid playlist");
    return;
  }

  playlists[selected].push(song);
  renderPlaylists();
}

// FIND SONG INDEX
function getSongIndex(songName) {
  let all = songs.trending.concat(songs.marathi, songs.motivational);

  for (let i = 0; i < all.length; i++) {
    if (all[i].name === songName) return i;
  }
  return -1;
}

// PLAY FROM PLAYLIST
function playFromPlaylist(songName) {
  let index = getSongIndex(songName);

  if (index === -1) {
    alert("Song not found");
    return;
  }

  if (currentSongIndex >= 0) {
    songsAudio[currentSongIndex].pause();
  }

  let audio = songsAudio[index];
  audio.play();
  currentSongIndex = index;

  document.getElementById("nowPlaying").innerText =
    "Now Playing: " + songName;
}

// RENDER PLAYLIST
function renderPlaylists() {
  let container = document.getElementById("playlist");
  container.innerHTML = "";

  let btn = document.createElement("button");
  btn.innerText = "Create Playlist";
  btn.onclick = createPlaylist;
  container.appendChild(btn);

  let title = document.createElement("h3");
  title.innerText = "Your Playlists";
  container.appendChild(title);

  for (let pl in playlists) {
    let plTitle = document.createElement("h4");
    plTitle.innerText = pl;
    container.appendChild(plTitle);

    let ul = document.createElement("ul");

    playlists[pl].forEach((song, index) => {
      let li = document.createElement("li");

      li.innerHTML = `
        <span class="songName">${song}</span>
        <button style="margin-left:10px;background:red;color:white;border:none;border-radius:50%">❌</button>
      `;

      // PLAY
      li.querySelector(".songName").onclick = () => {
        playFromPlaylist(song);
      };

      // DELETE
      li.querySelector("button").onclick = (e) => {
        e.stopPropagation();

        if (confirm("Remove this song?")) {
          playlists[pl].splice(index, 1);
          renderPlaylists();
        }
      };

      ul.appendChild(li);
    });

    container.appendChild(ul);
  }
}

// SEARCH
document.querySelector(".navbar input").addEventListener("input", function () {
  let query = this.value.toLowerCase();

  function filterSection(id, data, allowAdd = true, isPlayable = true) {
    let container = document.getElementById(id);

    let filtered = data.filter(item =>
      item.name.toLowerCase().includes(query)
    );

    if (query === "" || filtered.length > 0) {
      loadSection(id, filtered.length ? filtered : data, allowAdd, isPlayable);
      container.style.display = "flex";
    } else {
      container.style.display = "none";
    }
  }

  filterSection("trending", songs.trending);
  filterSection("artists", songs.artists, false, false);
  filterSection("marathi", songs.marathi);
  filterSection("motivational", songs.motivational);
});

// INITIAL LOAD
loadSection("trending", songs.trending);
loadSection("artists", songs.artists, false, false);
loadSection("marathi", songs.marathi);
loadSection("motivational", songs.motivational);
renderPlaylists();
