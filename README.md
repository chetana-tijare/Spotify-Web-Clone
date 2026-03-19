# Spotify Clone Web Application

## Overview
This project is a **Spotify Clone** built using **HTML, CSS, and JavaScript**.  
It simulates a simplified version of Spotify, allowing users to:  

- Browse songs across multiple sections:
  - Trending Songs  
  - Popular Artists  
  - Marathi Songs  
  - Motivational Songs  
- Play, pause, and stop songs.  
- Create multiple playlists and add songs to them.  
- Search for songs, artists, or sections dynamically.  

The interface closely resembles Spotify with a **playlist sidebar**, **scrollable sections**, and **song cards with images**.  

---

## Features

### User Interface
- Dark theme similar to Spotify.  
- Sections for Trending, Artists, Marathi, and Motivational songs.  
- Playlist sidebar with **Create Playlist** and **Your Playlists** options.  
- Scrollable song sections without overlapping content.  

### Audio Features
- Play songs by clicking on the song card.  
- Pause or toggle playback by clicking the same song again.  
- Loop through sample tracks.  
- Displays currently playing song with a **Now Playing** label.  

### Playlist Management
- Create multiple playlists with custom names.  
- Add songs to chosen playlists.  
- Remove songs from playlists.  
- Playlists dynamically update in the sidebar.  

### Search Functionality
- Search by song name → shows matching songs in their section.  
- Search by artist name → shows matching artists in Popular Artists section.  
- Search by section name → displays the entire section.  
- Section headers always remain visible while filtering.  

---

## Operations

Here is a list of **interactive operations** supported in the Spotify Clone:

1. **Play Song** – Click on any song card to play it.  
2. **Pause/Resume Song** – Click the same song again to pause or resume playback.  
3. **Stop Song** – Automatically stops the previously playing song when a new song is selected.  
4. **Create Playlist** – Click **Create Playlist** in the sidebar to make a new playlist.  
5. **Add to Playlist** – Click **Add to Playlist** under a song to add it to a chosen playlist.  
6. **Remove from Playlist** – Click on a song inside a playlist to remove it.  
7. **Search Functionality** – Type in the search bar to filter:
   - Songs by name  
   - Artists by name  
   - Entire sections by section name (e.g., “Marathi”)  

---

## Folder Structure
Spotify-Clone/ │ ├─ audio/                 # MP3 files (song1.mp3 ... song5.mp3) ├─ images/                # Song and artist images │    ├─ toofan.jpg │    ├─ yetunekyakiya.jpg │    ├─ ghoomar.jpg │    └─ ... (other images) ├─ index.html             # Main HTML file ├─ style.css              # CSS file for styling ├─ script.js              # JavaScript file for functionality └─ README.md              # This file