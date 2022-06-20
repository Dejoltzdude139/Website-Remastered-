function playMusic() {
var music = new Audio('../Audio+/GD_AMBIENCE.mp3');
music.loop = true;
music.play();
}

function playMusic2() {
var music = new Audio('../Audio+/hover/LEGENDARY.ogg');
music.play();
}

function on() {
document.getElementById("overlay").style.display = "block";
}

function off() {
document.getElementById("overlay").style.display = "none";
}


document.addEventListener("keydown", function (e) {
  if([37,38,39,40].indexOf(e.keyCode) > -1){
    e.preventDefault();
    // Do whatever else you want with the keydown event (i.e. your navigation).
  }
}, false);
