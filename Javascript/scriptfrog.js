function playMusic() {
var music = new Audio('../Audio+/GD_AUDIOTRACKS/Mainsong.mp3');
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

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function vidSelect() {
  document.getElementById("vidDrop").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}






//Depreciated command-IGNORE
//document.addEventListener("keydown", function (e) {
//  if([37,38,39,40].indexOf(e.keyCode) > -1){
//    e.preventDefault();
//    // Do whatever else you want with the keydown event (i.e. your navigation).
//  }
//}, false);
