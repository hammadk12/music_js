
const songs = [
    { title: "Furthest Thing", artist: "Drake"},
    { title: "Hell N Back", artist: "Bakar"},
    { title: "ruthless", artist: "Rich Amiri"},
    { title: "Act Different", artist: "RTB MB"},
    { title: "Small Town Girl", artist: "Bakar"},
    { title: "Opp Pacc", artist: "BIG30"},
    { title: "overseas", artist: "Ken Carson"},
    { title: "1000 Blunts", artist: "$uicideboy$"},
    { title: "Like a Tattoo", artist: "Sade"},
    { title: "WHERE I BE", artist: "LUCKI, F1LTHY"},
    { title: "Like That", artist: "Future, Metro Boomin"},
    { title: "Too Much", artist: "Drake"},
    { title: "My Mind", artist: "NAV"},
    { title: "CRYSTLCSTLES", artist: "Destroy Lonely"},
    { title: "MADE MY DAY", artist: "LUCKI"}
]
let currentIndex = 0

// Display all songs
const songsList = document.getElementById("songList")
songs.forEach(song => {
    let songElement = document.createElement("p")
    songElement.textContent = `${song.title} - ${song.artist}`
    songsList.appendChild(songElement)
})

// Display current song
const currentSong = document.getElementById("currentSong")
const updateSong = () => {
    currentSong.textContent= `${songs[currentIndex].title} By: ${songs[currentIndex].artist}`
}
updateSong()

// Next song
const nextSong = () => {
    if (currentIndex === songs.length - 1) {
        currentIndex = 0
        updateSong()
    } else {
        currentIndex++
        
    }
    updateSong()
}

// Previous song
const previousSong = () => {
    if (currentIndex === 0) {
        currentIndex = songs.length - 1
    } else {
        currentIndex--
    }
    updateSong()
}