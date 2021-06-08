function playSoundOfBlock() {
    let sound = document.getElementById("audio");
    sound.autoplay = "true";
    sound.volume = 0.1;
    sound.load();
}

function playSoundOfMiss() {
    let sound = document.getElementById("audio-miss");
    sound.autoplay = "true";
    sound.volume = 0.2;
    sound.load();
}

function playSoundOfBreak() {
    let sound = document.getElementById("audio-break");
    sound
        .autoplay = "true";
    sound.volume = 0.1;
    sound.load();
}

function playSoundOfCancel() {
    let sound = document.getElementById("audio-cancel");
    sound.autoplay = "true";
    sound.volume = 0.1;
    sound.load();
}

function playSoundOfGameOver() {
    let sound = document.getElementById("audio-game-over");
    sound.autoplay = "true";
    sound.volume = 0.1;
    sound.load();
}

function playSoundOfLoad() {
    let sound = document.getElementById("audio-game-load");
    sound.autoplay = "true";
    sound.volume = 0.3;
    sound.load();
}

function playSoundOfWin() {
    let sound = document.getElementById("audio-victory");
    sound.autoplay = "true";
    sound.volume = 0.3;
    sound.load();
}