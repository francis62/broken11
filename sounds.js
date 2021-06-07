function playSoundOfBlock() {
    var sound = document.getElementById("audio")
    sound.autoplay = "true"
    sound.volume = 0.1
    sound.load()
}

function playSoundOfMiss() {
    var sound = document.getElementById("audio-miss")
    sound.autoplay = "true"
    sound.volume = 0.2
    sound.load()
}

function playSoundOfBreak() {
    var sound = document.getElementById("audio-break")
    sound.autoplay = "true"
    sound.volume = 0.1
    sound.load()
}

function playSoundOfCancel() {
    var sound = document.getElementById("audio-cancel")
    sound.autoplay = "true"
    sound.volume = 0.1
    sound.load()
}

function playSoundOfGameOver() {
    var sound = document.getElementById("audio-game-over")
    sound.autoplay = "true"
    sound.volume = 0.1
    sound.load()
}

function playSoundOfLoad() {
    var sound = document.getElementById("audio-game-load")
    sound.autoplay = "true"
    sound.volume = 0.3
    sound.load()
}

function playSoundOfWin() {
    var sound = document.getElementById("audio-victory")
    sound.autoplay = "true"
    sound.volume = 0.3
    sound.load()
}